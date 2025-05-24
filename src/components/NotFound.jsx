import React from 'react'

export default function NotFound() {
  return (
    <div className='min-h-[60vh] flex flex-col items-center justify-center text-center '>
      <h1 className='text-3xl font-bold  text-red-500'>404-Page Not Found</h1>
      <p className='mt-4  text-lg text-grey-700'>Sorry, the page you're looking for doesn't exits.</p>
    </div>
  )
}
