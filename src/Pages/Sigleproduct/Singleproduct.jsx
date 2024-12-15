import React from 'react'
import Singleproductnav from './Signleproductnav/Singleproductnav'
import Singleproductcontainer from './Singleproductcontainer/Singleproductcontainer'
import Singleproductdescription from './Singleproductdescription/Singleproductdescription'
import Singlerelatedproduct from './Singlerelatedproduct/Singlerelatedproduct'
import { useParams } from 'react-router-dom'
import { useSingleproductQuery } from '../../Redux/apiSlice'

const Singleproduct = () => {
  const {slug} = useParams()
  const {data, isLoading} =useSingleproductQuery(slug)
  return (
    <>
        <Singleproductnav/>
        {
          !isLoading ?
          <>
<Singleproductcontainer data={data}/>   <Singleproductdescription/> <Singlerelatedproduct/>
          </>
       : "loading..."

        }
    </>
  )
}

export default Singleproduct