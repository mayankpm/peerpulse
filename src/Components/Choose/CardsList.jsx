import React from 'react'
import Card from '../Homepage/Card'
import Image1 from '../../assets/andrew-neel.jpg'
import Image2 from '../../assets/olli-potapenko.jpg'
import Image3 from '../../assets/faizur-rehman.jpg'
import Image4 from '../../assets/rubaitul-azad.jpg'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'


export default function CardsList() {

  return (
    <>
    <Navbar/>
            <div className='grid grid-cols-4 gap-10 '>
                <Card name="Pavvan Pradeep" title="System Design" dp={Image1}/>
                <Card name="Keerthan G" title="Web Backend" dp={Image2}/>
                <Card name="Mayank P M" title="AI/ML Expert" dp={Image3}/>
                <Card name="Nikhil John Shaji" title="Graph Theory" dp={Image4}/>
            </div>
    {/* <Footer/> */}
    </>
  )
}
