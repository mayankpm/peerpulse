import React from 'react'
import Card from '../Homepage/Card'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import backendData from './Backend.jsx'

export default function CardsList() {
  return (
    <>
      <Navbar />
      <div className='grid grid-cols-4 gap-10 mb-12 p-8 '>
        {backendData.map((data) => (
          <Card name={data.name} title={data.title} dp={data.dp} />
        ))}
      </div>
      <Footer />
    </>
  )
}

