import React, { useEffect } from 'react'
import Homebaner from './Homebaner/Homebaner'
import Homebed from './Homebedsection/Homebed'
import Homeproduct from './Homeproduct/Homeproduct'
import Homeroom from './Homeroom/Homeroom'

const Home = () => {
  return (
    <>
      <Homebaner/>
      <Homebed/>
      <Homeproduct/>
      <Homeroom/>
    </>
  )
}

export default Home