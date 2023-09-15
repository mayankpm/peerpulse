import React from 'react'
import Image from "./Image"
import Desc from './Desc'
export default function Profile() {
  return (
    <>
        <div className='flex justify-center align-center'>
            {/* <Image dp={img}/> */}
            <Desc/>
        </div>
    </>
  )
}
