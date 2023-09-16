import React from 'react'
import Image from "./Image"
import Desc from './Desc'
import img from "../../assets/faizur-rehman.jpg"
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Price from './Price'

export default function Profile(props) {
  const { name,img } = props;
  return (
    <>
      <Navbar/>
        <div className='flex justify-center align-center'>
            <Desc name={name} desc={"I have special experience in Graph Theory, can help you understand any algorithm and ensure your success."}/>
            <Image dp={img}/>
        </div>
      <Price/>
        <Footer/>
    </>
  )
}
