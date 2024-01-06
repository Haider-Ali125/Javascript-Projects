// import React from 'react'
import './body.css'
import Shoes from '../../assets/shoes.svg'

const Main = () => {
  return (
    <div className="main_body">
        <div className="main-1">
        <h1 className="main-head">Your feet deserves the best</h1>
        </div>
    <div className="main-2">
<img src={Shoes}/>
    </div>
    </div>
  )
}

export default Main