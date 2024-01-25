import React from 'react'
import arrow from '../assets/arrow1.svg'

export default function Member() {
    return (
        <div className='conatiner max-w-full mx-auto'>
            <div className="grid md:grid-cols-5 md:grid-rows-2 w-full px-2 md:px-24 gap-3">
                <div className='relative md:col-span-3 md:row-span-2 w-full h-full'>
                    <img className='w-full border rounded-lg h-full' src="https://img.freepik.com/premium-photo/ecigarette-vape-black-background-3d-rendering_638202-54.jpg" alt="" />
                    <div className='absolute inset-0 ml-10 flex flex-col justify-end mb-3 md:mb-10 space-y-3'>
                        <h1 className='text-white text-sm md:text-4xl font-bold'>Membership Program</h1>
                        <p className='text-white text-sm'>Be a Vape Pi member and get our <br /> special exclusive offers</p>
                        <button className='border rounded-full py-1 px-2 bg-black/70 text-white w-20'>View</button>
                    </div>
                </div>
                <div className='relative md:col-span-1 md:row-span-2 h-full w-full'>
                    <img className='w-full h-full border rounded-lg' src="https://media.istockphoto.com/id/1366038801/photo/abstract-smoke-from-incense-on-black-background-white-smokey.jpg?s=612x612&w=0&k=20&c=QHtEVtQMZjlAct5hNcyTb_5zz8tJTYgFlga6m30jxWg=" alt="" />
                    <div className='absolute inset-0 ml-10 flex flex-col justify-end mb-6 md:mb-10 space-y-3 '>
                        <div className='grid grid-cols-2' >
                            <div>
                                <h1 className='text-white text-sm md:text-2xl font-bold'>Devices</h1>
                                <p className='text-white text-sm'>find the best for <br />you here!</p>
                            </div>
                            <div className='flex justify-end h-5 mr-5 mt-3'>
                                <img src={arrow} alt="" className='h-full' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='md:col-span-1 md:row-span-2 grid md:grid-rows-2 h-full gap-3 w-full'>
                    <div className='relative h-full w-full'>
                        <img className='h-full w-full border rounded-lg' src="https://img.freepik.com/premium-photo/different-types-vaping-devices-black-background_256506-64.jpg" alt="" />
                        <div className='absolute inset-0 ml-10 flex flex-col justify-end mb-6 md:mb-10 space-y-3 '>
                            <div className='grid grid-cols-2' >
                                <div>
                                    <h1 className='text-white text-sm md:text-2xl font-bold'>Pods</h1>
                                    <p className='text-white text-sm'>Variety of choices <br />available</p>
                                </div>
                                <div className='flex justify-end h-5 mr-5 mt-3'>
                                    <img src={arrow} alt="" className='h-full' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='relative h-full w-full'>
                        <img className='h-full w-full border rounded-lg' src="https://img.freepik.com/premium-photo/different-types-vaping-devices-black-background_256506-64.jpg" alt="" />
                        <div className='absolute inset-0 ml-10 flex flex-col justify-end mb-6 md:mb-10 space-y-3 bg-opacity-50 '>
                            <div className='grid grid-cols-2' >
                                <div>
                                    <h1 className='text-white text-sm md:text-2xl font-bold'>Disposable</h1>
                                    <p className='text-white text-sm'>Easy, clean & <br />superb flavor</p>
                                </div>
                                <div className='flex justify-end h-5 mr-5 mt-3'>
                                    <img src={arrow} alt="" className='h-full' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
