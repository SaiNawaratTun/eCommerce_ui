import React, { useEffect } from "react"
import search from '../assets/search.svg'
import cart from '../assets/cart.svg'
import list from '../assets/list.svg'
import Glide from "@glidejs/glide"

export default function Header() {
    useEffect(() => {
        const slider = new Glide(".glide-06", {
            type: "slider",
            focusAt: "center",
            perView: 1,
            autoplay: 3000,
            animationDuration: 700,
            gap: 0,
            classes: {
                nav: {
                    active: "[&>*]:bg-black",
                },
            },
        }).mount()

        return () => {
            slider.destroy()
        }
    }, [])

    return (

        <div className="relative w-full overflow-hidden bg-white rounded  glide-06 shadow-slate-200">
            {/*    <!-- Slides --> */}
            <div className="overflow-hidden w-full" data-glide-el="track">
                <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex md:h-[400px] overflow-hidden p-0">
                    <li className="relative">
                        <img
                            src="https://s42695.pcdn.co/wp-content/uploads/2023/04/electronic-cogarette-vape-on-a-dark-background-with-steam.jpeg"
                            className="w-full max-w-full max-h-full m-auto"
                        />
                        <div className="absolute inset-0 grid grid-rows-4   ">

                            <div className="flex flex-col items-center justify-end md:space-y-4 pb-2 md:pb-10 row-span-3">
                                <p className="text-white md:text-xl">The Best Look</p>
                                <h2 className="text-white md:text-6xl font-bold ">Anytime Anywhere</h2>
                                <p className="text-white md:text-xl">Starts from 10,000 MMK</p>
                                <button className="py-2 px-4 opacity-50 bg-black rounded-full  text-white"> View</button>
                            </div>
                        </div>
                    </li>
                    <li className="relative">
                        <img
                            src="https://img.freepik.com/premium-photo/colorful-disposable-electronic-cigarettes-with-shadows-black-background-concept-modern-smoking-vaping-nicotine_126267-4215.jpg"
                            className="w-full max-w-full max-h-full m-auto"
                        />
                        <div className="absolute inset-0 grid grid-rows-4   ">
                            <div className="flex flex-col items-center justify-end md:space-y-4 pb-2 md:pb-10 row-span-3">
                                <p className="text-white md:text-xl">The Best Look</p>
                                <h2 className="text-white md:text-6xl font-bold ">Anytime Anywhere</h2>
                                <p className="text-white md:text-xl">Starts from 10,000 MMK</p>
                                <button className="py-2 px-4 opacity-50 bg-black rounded-full  text-white"> View</button>
                            </div>
                        </div>
                    </li>
                    <li className="relative">
                        <img
                            src="https://img.pikbest.com/ai/illus_our/20230529/6abc1479a404bec21f678539736231f9.jpg!w700wp"
                            className="w-full max-w-full max-h-full m-auto"
                        />
                        <div className="absolute inset-0 grid grid-rows-4   ">
                            <div className="flex flex-col items-center justify-end md:space-y-4 pb-2 md:pb-10 row-span-3">
                                <p className="text-white md:text-xl">The Best Look</p>
                                <h2 className="text-white md:text-6xl font-bold ">Anytime Anywhere</h2>
                                <p className="text-white md:text-xl">Starts from 10,000 MMK</p>
                                <button className="py-2 px-4 opacity-50 bg-black rounded-full  text-white"> View</button>
                            </div>
                        </div>
                    </li>
                    <li className="relative">
                        <img
                            src="https://png.pngtree.com/background/20230524/original/pngtree-many-different-colored-smoke-pens-arranged-on-a-black-floor-picture-image_2712086.jpg"
                            className="w-full max-w-full max-h-full m-auto"
                        />
                        <div className="absolute inset-0 grid grid-rows-4   ">
                            <div className="flex flex-col items-center justify-end md:space-y-4 pb-2 md:pb-10 row-span-3">
                                <p className="text-white md:text-xl">The Best Look</p>
                                <h2 className="text-white md:text-6xl font-bold ">Anytime Anywhere</h2>
                                <p className="text-white md:text-xl">Starts from 10,000 MMK</p>
                                <button className="py-2 px-4 opacity-50 bg-black rounded-full  text-white"> View</button>
                            </div>
                        </div>
                    </li>
                    <li className="relative">
                        <img
                            src="https://Tailwindmix.b-cdn.net/image-04.jpg"
                            className="w-full max-w-full max-h-full m-auto"
                        />
                        <div className="absolute inset-0 grid grid-rows-4   ">
                            <div className="flex flex-col items-center justify-end md:space-y-4 pb-2 md:pb-10 row-span-3">
                                <p className="text-white md:text-xl">The Best Look</p>
                                <h2 className="text-white md:text-6xl font-bold ">Anytime Anywhere</h2>
                                <p className="text-white md:text-xl">Starts from 10,000 MMK</p>
                                <button className="py-2 px-4 opacity-50 bg-black rounded-full  text-white"> View</button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            {/*    <!-- Controls --> */}
            <div
                className="absolute left-0 flex items-center justify-between w-full h-0 px-4 top-1/2 "
                data-glide-el="controls"
            >
                <button
                    className="inline-flex items-center justify-center w-8 h-16 md:h-40 transition duration-300 border rounded-lg border-slate-700 bg-black opacity-50 text-white hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-30 lg:w-12"
                    data-glide-dir="<"
                    aria-label="prev slide"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="white"
                        viewBox="0 0 24 24"
                        strokeWidth="2.5"
                        stroke="currentColor"
                        className="w-5 h-7"
                    >
                        <title>prev slide</title>
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                        />
                    </svg>
                </button>
                <button
                    className="inline-flex items-center justify-center w-8 h-16 md:h-40 transition duration-300 border rounded-lg border-slate-700 bg-black opacity-50 text-white hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-30 lg:w-12"
                    data-glide-dir=">"
                    aria-label="next slide"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2.5"
                        stroke="currentColor"
                        className="w-5 h-7"
                    >
                        <title>next slide</title>
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                    </svg>
                </button>
            </div>
            <div className=" absolute inset-0 row-span-1 flex justify-between mx-4 my-2 md:mx-16 md:my-8 ">
                <div>
                    <p className="text-white text-xl">PI</p>
                </div>
                <div className="flex md:space-x-4 h-4 md:h-10">
                    <img src={search} alt="" />
                    <img src={cart} alt="" />
                    <img src={list} alt="" />
                </div>
            </div>
            {/*    <!-- Indicators --> */}
            <div
                className=" bottom-0 flex items-center justify-center w-full gap-2"
                data-glide-el="controls[nav]"
            >
                <button
                    className="p-4 group"
                    data-glide-dir="=0"
                    aria-label="goto slide 1"
                >
                    <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
                </button>
                <button
                    className="p-4 group"
                    data-glide-dir="=1"
                    aria-label="goto slide 2"
                >
                    <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
                </button>
                <button
                    className="p-4 group"
                    data-glide-dir="=2"
                    aria-label="goto slide 3"
                >
                    <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
                </button>
                <button
                    className="p-4 group"
                    data-glide-dir="=3"
                    aria-label="goto slide 4"
                >
                    <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
                </button>
                <button
                    className="p-4 group"
                    data-glide-dir="=3"
                    aria-label="goto slide 5"
                >
                    <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
                </button>
            </div>
        </div>

    )
}
