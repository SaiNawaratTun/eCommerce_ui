import React from 'react'

export default function NewRelease() {

    return (
        <div className='w-full h-[200px] md:h-[400px] px-2 md:px-24'>
            <div className="carousel h-full w-full px-8 md:px-16 gap-3 ">
                <div id="slide1" className="carousel-item relative w-full border rounded-lg">
                    <img src="https://s42695.pcdn.co/wp-content/uploads/2023/04/electronic-cogarette-vape-on-a-dark-background-with-steam.jpeg" className="w-full border rounded-lg " />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 ">
                        <a href="#slide4" className="btn btn-circle w-8 h-16 md:h-40 transition duration-300 border rounded-lg border-slate-700" >❮</a>
                        <a href="#slide2" className="btn btn-circle w-8 h-16 md:h-40 transition duration-300 border rounded-lg border-slate-700">❯</a>
                    </div>
                    <div className='absolute inset-0 ml-10 flex items-center justify-end mr-24 md:mr-40 space-y-3'>
                        <div className='flex flex-col items-center space-y-3'>
                            <h1 className='text-white text-sm md:text-4xl font-bold'>Try New Flavor</h1>
                            <p className='text-white text-sm'>Citrus Monster</p>
                            <button className='border rounded-full py-1 px-2 bg-black/70 text-white w-20'>View</button>
                        </div>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://img.freepik.com/premium-photo/colorful-disposable-electronic-cigarettes-with-shadows-black-background-concept-modern-smoking-vaping-nicotine_126267-4215.jpg" className="w-full border rounded-lg" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 ">
                        <a href="#slide1" className="btn btn-circle w-8 h-16 md:h-40 transition duration-300 border rounded-lg border-slate-700">❮</a>
                        <a href="#slide3" className="btn btn-circle w-8 h-16 md:h-40 transition duration-300 border rounded-lg border-slate-700">❯</a>
                    </div>
                    <div className='absolute inset-0 ml-10 flex items-center justify-end mr-24 md:mr-40 space-y-3'>
                        <div className='flex flex-col items-center space-y-3'>
                            <h1 className='text-white text-sm md:text-4xl font-bold'>Try New Flavor</h1>
                            <p className='text-white text-sm'>Citrus Monster</p>
                            <button className='border rounded-full py-1 px-2 bg-black/70 text-white w-20'>View</button>
                        </div>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://img.pikbest.com/ai/illus_our/20230529/6abc1479a404bec21f678539736231f9.jpg!w700wp" className="w-full border rounded-lg" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle w-8 h-16 md:h-40 transition duration-300 border rounded-lg border-slate-700">❮</a>
                        <a href="#slide4" className="btn btn-circle w-8 h-16 md:h-40 transition duration-300 border rounded-lg border-slate-700">❯</a>
                    </div>
                    <div className='absolute inset-0 ml-10 flex items-center justify-end mr-24 md:mr-40 space-y-3'>
                        <div className='flex flex-col items-center space-y-3'>
                            <h1 className='text-white text-sm md:text-4xl font-bold'>Try New Flavor</h1>
                            <p className='text-white text-sm'>Citrus Monster</p>
                            <button className='border rounded-full py-1 px-2 bg-black/70 text-white w-20'>View</button>
                        </div>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://png.pngtree.com/background/20230524/original/pngtree-many-different-colored-smoke-pens-arranged-on-a-black-floor-picture-image_2712086.jpg" className="w-full border rounded-lg" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle w-8 h-16 md:h-40 transition duration-300 border rounded-lg border-slate-700">❮</a>
                        <a href="#slide1" className="btn btn-circle w-8 h-16 md:h-40 transition duration-300 border rounded-lg border-slate-700">❯</a>
                    </div>
                    <div className='absolute inset-0 ml-10 flex items-center justify-end mr-24 md:mr-40 space-y-3'>
                        <div className='flex flex-col items-center space-y-3'>
                            <h1 className='text-white text-sm md:text-4xl font-bold'>Try New Flavor</h1>
                            <p className='text-white text-sm'>Citrus Monster</p>
                            <button className='border rounded-full py-1 px-2 bg-black/70 text-white w-20'>View</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
