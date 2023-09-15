import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import img from '../../assets/faizur-rehman.jpg'
import Image from '../Profile/Image'

export default function Description() {
  return (
    <>
        <Navbar/>
            <div class="flex flex-col md:flex-row bg-black rounded-lg shadow-lg items-center md:items-stretch my-8">
                <div class="md:w-1/3">
                    <Image dp={img}/>
                </div>
                <div class="md:w-2/3 p-6">
                    <h2 class="text-2xl font-bold mb-4">Product Name</h2>
                    <p class="text-gray-700">Product description goes here...</p>
                    <div class="mt-6">
                    <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                        Add to Cart
                    </button>
                    </div>
                </div>
            </div>

        <Footer/>
    </>
  )
}
