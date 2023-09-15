import React from 'react'
import Image from "./Image"
import Desc from './Desc'
import img from "../../assets/faizur-rehman.jpg"
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
export default function Profile() {
  return (
    <>
      <Navbar/>
        <div className='flex justify-center align-center'>
            <Desc name={"Nikhil John"} desc={"I have special experience in Graph Theory, can help you understand any algorithm and ensure your success."}/>
            <Image dp={img}/>
        </div>
        <Footer/>
    </>
  )
}
