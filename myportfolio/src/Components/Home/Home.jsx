import React from 'react'
import './Home.css'
import work1 from '../../assets/askust.jpg'
import work2 from '../../assets/nutrilife.jpg'

function Home() {
  return (
   <div className='home'>
    <div className='title'>
   
   <h1>KARLOS LAZARO <br/> WEBSITE DEVELOPER</h1>


    <h2>Committed to continuous learning, professional growth, 
        and delivering exceptional results in a collaborative manner.</h2>
        </div>
    <div className='work'>
    <div className='work_item'>
      <img src={work1}></img>
      </div>
      <div className='work_item'>
      <img src={work2}></img>
      </div>
    </div>
    </div>
  )
}

export default Home