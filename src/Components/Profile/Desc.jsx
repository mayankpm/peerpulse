import React from 'react'
import Image from './Image'
import img from '../../assets/faizur-rehman.jpg'

export default function Desc(props) {

  const {name} = props;
  const {desc} = props;
  return (
<div class="container mx-auto px-4">
    <div class="flex flex-col md:flex-row-reverse bg-black rounded-lg shadow-lg md:items-stretch my-8">
        <div class="md:w-3/3 p-8 flex flex-col items-center m-24 text-center">
            <h2 class="text-4xl font-bold mb-4 leading-normal">{name}</h2>
            <p class="text-gray-700">{desc}</p>
            <div class="mt-6">
                <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                    Contact 
                </button>
            </div>
        </div>
    </div>
</div>





  )
}
