import React from 'react'
import { PiCirclesFourFill } from "react-icons/pi";
import { BsViewList } from "react-icons/bs";

const Shopproductfilter = () => {
  return (
    <section id='shopproduct-filter'>
        <div className='container'>
            <div className='shopproduct-filter-contant-wrapper-flex'>
                <div className='shopproduct-filter-contant-box-flex'>
                    <div className='shopproduct-filter-contant-flex'>

                    </div>
                    <div className='shopproduct-filter-contant-flex'>
                        <PiCirclesFourFill  className='shopproduct-filter-icon'/>
                        <BsViewList className='shopproduct-filter-icon'/>
                    </div>
                </div>
                <div className='shopproduct-filter-box'>
                    <div className=''></div>
                    <div className=''></div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Shopproductfilter