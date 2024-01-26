import React from 'react'
import star from '../assets/star.svg'
import arrow from '../assets/arrow.svg'

export default function BestDeals() {
    return (
        <div className='conatiner max-w-full px-2 md:px-24 flex flex-col justify-center items-center text-center space-y-5'>
            <div className='w-full'>
                <h1 className='text-2xl md:text-5xl font-bold text-black'>Best Deals</h1>
                <p className='text-black'>Just For You</p>
            </div>
            <div className='container w-full  grid md:grid-cols-6 justify-center gap-8'>
                <div className='space-y-3 w-full'>
                    <div className='bg-slate-200 border rounded-lg px-10 space-y-10'>
                        <p className='bg-red-700 text-white'>25% OFF</p>
                        <img src="https://vape.com/cdn/shop/products/ONT036271_1200x.png?v=1691592342" alt="" />
                    </div>
                    <div>
                        <p className='text-xl text-black'>Refreshing Mint</p>
                        <p className='text-base text-black'>30,000 MMk</p>
                        <p className='line-through text-sm text-black'>30,000 MMk</p>
                        <div className='flex justify-center'>
                            <img src={star} alt="" />
                            <span className='text-yellow-300'>600 points</span>
                        </div>
                    </div>
                </div>
                <div className='space-y-3 w-full'>
                    <div className='bg-slate-200 border rounded-lg px-10 space-y-10'>
                        <p className='bg-red-700 text-white'>25% OFF</p>
                        <img src="https://cdn.shopify.com/s/files/1/0054/3965/1958/products/LuxeQSPodKitbyVaporessoBlack.jpg?v=1684839172" alt="" />
                    </div>
                    <div>
                        <p className='text-xl text-black'>Refreshing Mint</p>
                        <p className='text-base text-black'>30,000 MMk</p>
                        <p className='line-through text-sm text-black'>30,000 MMk</p>
                        <div className='flex justify-center'>
                            <img src={star} alt="" />
                            <span className='text-yellow-300'>600 points</span>
                        </div>
                    </div>
                </div>
                <div className='space-y-3 w-full'>
                    <div className='bg-slate-200 border rounded-lg px-10 space-y-10'>
                        <p className='bg-red-700 text-white'>25% OFF</p>
                        <img src="https://vape.com/cdn/shop/products/vaporesso-zero-s-kit-blue_97599001-de53-4fb2-a7b6-b75408bc871a_600x.jpg?v=1663081163" alt="" />
                    </div>
                    <div>
                        <p className='text-xl text-black'>Refreshing Mint</p>
                        <p className='text-base text-black'>30,000 MMk</p>
                        <p className='line-through text-sm text-black'>30,000 MMk</p>
                        <div className='flex justify-center'>
                            <img src={star} alt="" />
                            <span className='text-yellow-300'>600 points</span>
                        </div>
                    </div>
                </div>
                <div className='space-y-3 w-full'>
                    <div className='bg-slate-200 border rounded-lg px-10 space-y-10'>
                        <p className='bg-red-700 text-white'>25% OFF</p>
                        <img src="https://vapeworldaustralia.com.au/cdn/shop/products/VaporessoGenAir40PodKit-DarkBlack.jpg?v=1650498387&width=500" alt="" />
                    </div>
                    <div>
                        <p className='text-xl text-black'>Refreshing Mint</p>
                        <p className='text-base text-black'>30,000 MMk</p>
                        <p className='line-through text-sm text-black'>30,000 MMk</p>
                        <div className='flex justify-center'>
                            <img src={star} alt="" />
                            <span className='text-yellow-300'>600 points</span>
                        </div>
                    </div>
                </div>
                <div className='space-y-3 w-full'>
                    <div className='bg-slate-200 border rounded-lg px-10 space-y-10'>
                        <p className='bg-red-700 text-white'>25% OFF</p>
                        <img src="https://www.royalflushvape.co.uk/cdn/shop/files/vaporesso-coss-stick-space-grey_800x.jpg?v=1696415799" alt="" />
                    </div>
                    <div>
                        <p className='text-xl text-black'>Refreshing Mint</p>
                        <p className='text-base text-black'>30,000 MMk</p>
                        <p className='line-through text-sm text-black'>30,000 MMk</p>
                        <div className='flex justify-center'>
                            <img src={star} alt="" />
                            <span className='text-yellow-300'>600 points</span>
                        </div>
                    </div>
                </div>
                <div className='space-y-3 w-full'>
                    <div className='bg-slate-200 border rounded-lg px-10 space-y-10'>
                        <p className='bg-red-700 text-white'>25% OFF</p>
                        <img src="https://i.ebayimg.com/images/g/i9UAAOSwwfBi4CLK/s-l1200.webp" alt="" />
                    </div>
                    <div>
                        <p className='text-xl text-black'>Refreshing Mint</p>
                        <p className='text-base text-black'>30,000 MMk</p>
                        <p className='line-through text-sm text-black'>30,000 MMk</p>
                        <div className='flex justify-center'>
                            <img src={star} alt="" />
                            <span className='text-yellow-300'>600 points</span>
                        </div>
                    </div>
                </div>

            </div>
            <div className=''>
                <button className='bg-slate-200 flex justify-center items-center gap-1 px-20 py-1 border rounded-full'>
                    <p className='text-black'>View More</p>
                    <img src={arrow} alt="" className='mt-1' />
                </button>
            </div>
        </div>
    )
}
