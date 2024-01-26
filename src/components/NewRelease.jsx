import React from 'react'

export default function NewRelease() {
    return (
        <div className=' max-w-full px-2 md:px-24 space-y-3'>
            <div className='flex flex-col justify-center items-center'>
                <div className='text-2xl md:text-5xl flex gap-2 font-bold'>
                    <p className='text-red-400'>New</p>
                    <p className=' text-black'>Released</p>
                </div>
                <p className=' text-black'>Try Our Latest Flavors Here</p>
            </div>
            <div className='grid  md:grid-cols-4 w-full gap-3'>
                <div className='relative'>
                    <img className='border rounded-lg' src="https://cdn11.bigcommerce.com/s-gxizxbuqss/images/stencil/1280x1280/products/1258/5969/c2caddext__54585.1704208352.jpg?c=1" alt="" />
                    <div className='absolute inset-0 m-5 flex flex-col justify-end'>
                        <p className='text-white text-xl font-bold'>Strawberry <br /> Yogurt with <br /> Refreshing Flavor <br />Nic 3 Percent</p>
                        <p className='text-white text-xl'>30,000 MMK</p>
                    </div>
                </div>
                <div className='relative'>
                    <img className='border rounded-lg' src="https://cdn11.bigcommerce.com/s-gxizxbuqss/images/stencil/1280x1280/products/1258/5960/c2caddext__49274.1704208352.jpg?c=1" alt="" />
                    <div className='absolute inset-0 m-5 flex flex-col justify-end'>
                        <p className='text-white text-xl font-bold'>Strawberry <br /> Yogurt with <br /> Refreshing Flavor <br />Nic 3 Percent</p>
                        <p className='text-white text-xl'>30,000 MMK</p>
                    </div>
                </div>
                <div className='relative'>
                    <img className='border rounded-lg' src="https://cdn11.bigcommerce.com/s-gxizxbuqss/images/stencil/1280x1280/products/1258/5972/c2caddext__65641.1704208352.jpg?c=1" alt="" />
                    <div className='absolute inset-0 m-5 flex flex-col justify-end'>
                        <p className='text-white text-xl font-bold'>Strawberry <br /> Yogurt with <br /> Refreshing Flavor <br />Nic 3 Percent</p>
                        <p className='text-white text-xl'>30,000 MMK</p>
                    </div>
                </div>
                <div className='relative'>
                    <img className='border rounded-lg' src="https://cdn11.bigcommerce.com/s-gxizxbuqss/images/stencil/1280x1280/products/1258/5961/c2caddext__32149.1704208352.jpg?c=1" alt="" />
                    <div className='absolute inset-0 m-5 flex flex-col justify-end'>
                        <p className='text-white text-xl font-bold'>Strawberry <br /> Yogurt with <br /> Refreshing Flavor <br />Nic 3 Percent</p>
                        <p className='text-white text-xl'>30,000 MMK</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
