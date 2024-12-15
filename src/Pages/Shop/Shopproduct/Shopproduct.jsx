import './Shopproduct.css'
import Psbutton from '../../../Components/Psbutton/Psbutton';
import Heading from '../../../Utils/Heading/Heading';
import { useEffect } from 'react';
import { useProductsQuery } from '../../../Redux/apiSlice';
import { Link } from 'react-router-dom';


 
  
 
const Shopproduct = () => {
  const {data,isLoading} = useProductsQuery()
useEffect(()=>{
    console.log(data)
},[data,isLoading])
   
   
  return (
    <section id='shopproduct'>
        <div className='container'>
            <div className='shopproduct-contant-wrapper'>
                <  div className='shopproduct-images-container-flex'>
                    {
                        !isLoading&&
                        data.map((items)=> (
                           <Link  key={items._id} to={`/singleproduct/${items.slug}`} >
                                <div className='shopproduct-img-container'>
                                    <div className='shopproduct-img-box'>
                                        <img src={items.thumbnail.imagePath} alt='not found' />
                                    </div>
                                    <div className='shopproduct-image-contant-box'>
                                        <Heading level='h4' text={items.title} className='shopproduct-name'/>
                                        <Heading level='h5' text={items.pera} className='shopproduct-pera'/>
                                        <div className='shopproduct-price-box-flex'>
                                            <Heading level='h5' text={items.inventory[0]?.discountPrice.typeofDiscount === 
                                                "amount"
                                                ? items.inventory[0]?.discountPrice.price
                                                : 200
                                            } className='shopproduct-newprice'/>
                                            <Heading level='h5'
                                             text={items.inventory[0]?.sellingPrice} className='shopproduct-oldprice'/>
                                        </div>
                                    </div>    
                                </div>
                           </Link>
                        ))
                   }
                </div> 
            </div>
            <div className='shopproduct-ps-box-flex'>
                <Psbutton text='1'/>
                <Psbutton text='2'/>
                <Psbutton text='3'/>
                <Psbutton text='next'/>
            </div>
        </div>
    </section>
  )
}

export default Shopproduct