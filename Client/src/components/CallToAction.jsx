import { Button } from 'flowbite-react'
import React from 'react'

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
        <div className='flex-1 justify-center flex flex-col' >
            <h2 className='text-2xl'>
                Want to learn more about Machine Learning?
            </h2>
            <p className='text-gray-500 my-2'>
                Checkout these resources with Machine Learning Projects
            </p>
            <Button className=' rounded-tl-xl rounded-bl-none'gradientDuoTone='tealToLime'>
                <a href="https://www.sarvajit.com.np" target='_blank'
                rel='noopener noreferrer'>
                    Machine Learning Projects
                </a>
                </Button>
                </div>
            <div className="p-7 flex-1">
                <img src="https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2023/11/07002655/Machine-Learning-Services-banner.png" />
            </div>
    </div>
  )
}
