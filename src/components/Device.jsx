import React, { useState } from 'react'
import star from '../assets/star.svg'
import vape from '../assets/vape1.png'


export default function () {

    return (
        <div className='container max-w-full px-2 md:px-24 '>
            <div className=' w-full  md:flex items-center p-5  bg-zinc-800 border rounded-lg space-y-5 md:space-x-20'>
                <div className='flex items-center '>
                    <img className='max-w-60' src={vape} alt="" />
                    <div>
                        <h1 className='text-white text-sm md:text-5xl font-bold'>Devices</h1>
                        <p className='text-white text-sm md:text-2xl'>find the best for <br />you here!</p>
                    </div>
                </div>
                <div className="container carousel carousel-center max-w-full space-x-4 rounded-box relative">
                    <div className="carousel-item w-60 grid grid-rows-3">
                        <div className=' row-span-2'>
                            <img src="https://vape.com/cdn/shop/products/ONT036271_1200x.png?v=1691592342" alt="" className="rounded-box" />
                        </div>
                        <div className='flex flex-col items-center'>
                            <p className='text-xl text-white'>Refreshing Mint</p>
                            <p className='text-base text-white'>30,000 MMk</p>
                            <p className='line-through text-sm text-white'>30,000 MMk</p>
                            <div className='flex justify-center'>
                                <img src={star} alt="" />
                                <span className='text-yellow-300'>600 points</span>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item w-60 grid grid-rows-3">
                        <div className=' row-span-2'>
                            <img src="https://cdn.shopify.com/s/files/1/0054/3965/1958/products/LuxeQSPodKitbyVaporessoBlack.jpg?v=1684839172" alt="" className="rounded-box" />
                        </div>
                        <div className='flex flex-col items-center'>
                            <p className='text-xl text-white'>Refreshing Mint</p>
                            <p className='text-base text-white'>30,000 MMk</p>
                            <p className='line-through text-sm text-white'>30,000 MMk</p>
                            <div className='flex justify-center'>
                                <img src={star} alt="" />
                                <span className='text-yellow-300'>600 points</span>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item w-60 grid grid-rows-3">
                        <div className=' row-span-2'>
                            <img src="https://vape.com/cdn/shop/products/vaporesso-zero-s-kit-blue_97599001-de53-4fb2-a7b6-b75408bc871a_600x.jpg?v=1663081163" alt="" className="rounded-box" />
                        </div>
                        <div className='flex flex-col items-center'>
                            <p className='text-xl text-white'>Refreshing Mint</p>
                            <p className='text-base text-white'>30,000 MMk</p>
                            <p className='line-through text-sm text-white'>30,000 MMk</p>
                            <div className='flex justify-center'>
                                <img src={star} alt="" />
                                <span className='text-yellow-300'>600 points</span>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item w-60 grid grid-rows-3">
                        <div className=' row-span-2'>
                            <img src="https://vapeworldaustralia.com.au/cdn/shop/products/VaporessoGenAir40PodKit-DarkBlack.jpg?v=1650498387&width=500" alt="" className="rounded-box" />
                        </div>
                        <div className='flex flex-col items-center'>
                            <p className='text-xl text-white'>Refreshing Mint</p>
                            <p className='text-base text-white'>30,000 MMk</p>
                            <p className='line-through text-sm text-white'>30,000 MMk</p>
                            <div className='flex justify-center'>
                                <img src={star} alt="" />
                                <span className='text-yellow-300'>600 points</span>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item w-60 grid grid-rows-3">
                        <div className=' row-span-2'>
                            <img src="https://www.royalflushvape.co.uk/cdn/shop/files/vaporesso-coss-stick-space-grey_800x.jpg?v=1696415799" alt="" className="rounded-box" />
                        </div>
                        <div className='flex flex-col items-center'>
                            <p className='text-xl text-white'>Refreshing Mint</p>
                            <p className='text-base text-white'>30,000 MMk</p>
                            <p className='line-through text-sm text-white'>30,000 MMk</p>
                            <div className='flex justify-center'>
                                <img src={star} alt="" />
                                <span className='text-yellow-300'>600 points</span>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item w-60 grid grid-rows-3">
                        <div className=' row-span-2'>
                            <img src="https://i.ebayimg.com/images/g/i9UAAOSwwfBi4CLK/s-l1200.webp" alt="" className="rounded-box" />
                        </div>
                        <div className='flex flex-col items-center'>
                            <p className='text-xl text-white'>Refreshing Mint</p>
                            <p className='text-base text-white'>30,000 MMk</p>
                            <p className='line-through text-sm text-white'>30,000 MMk</p>
                            <div className='flex justify-center'>
                                <img src={star} alt="" />
                                <span className='text-yellow-300'>600 points</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
