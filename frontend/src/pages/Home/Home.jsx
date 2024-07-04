import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
const Home = () => {

    const [catagory , setCatagory] = useState("All");

  return (
    <div>
      <Header/>
      <ExploreMenu catagory={catagory} setCatagory={setCatagory} />
    </div>
  )
}

export default Home
 