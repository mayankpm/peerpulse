import React from 'react'

export default function Image(props) {
  const {dp} = props;
  return (
    <>  
    <div className='container flex m-5 p-5'>
        <img className="max-w-sm rounded border bg-black p-1 dark:border-neutral-700 dark:bg-neutral-800" src={dp} alt="Profile Pic"></img>
    </div>  
    </>
  )
}
