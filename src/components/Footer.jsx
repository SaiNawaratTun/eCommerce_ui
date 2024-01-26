import React from 'react'
import key from '../assets/key.svg'
import r from '../assets/return.svg'
import address from '../assets/address.svg'
import phone from '../assets/phone.svg'
import kpay from '../assets/kpay.png'
import wave from '../assets/wave.png'
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import twitter from '../assets/twitter.svg'
import telegram from '../assets/telegram.svg'
import viber from '../assets/viber.svg'

export default function Footer() {
    return (
        <div className='container max-w-full px-2 md:px-24 py-5'>
            <div className='grid md:grid-cols-4 gap-5'>
                <div className='space-y-2'>
                    <h1 className='text-black text-xl'>Customer Service</h1>
                    <div className='flex'>
                        <img src={key} alt="" />
                        <span className='text-black'>Teams & Privacy Policy</span>
                    </div>
                    <div className='flex'>
                        <img src={r} alt="" />
                        <span className='text-black'>Return Policy</span>
                    </div>
                </div>
                <div className='space-y-2'>
                    <h1 className='text-black text-xl'>Languages</h1>
                    <div className='space-x-2'>
                        <input type="radio" id='mu' name='mm' className="radio radio-primary w-4 h-4" />
                        <label htmlFor="mu" className='text-black'>Myanmar (Unicode)</label>
                    </div>
                    <div className='space-x-2'>
                        <input type="radio" id='mz' name='mm' className="radio radio-primary w-4 h-4" />
                        <label htmlFor="mz" className='text-black'>Myanmar (Zawgyi)</label>
                    </div>
                    <div className='space-x-2'>
                        <input type="radio" id='eng' name='mm' className="radio radio-primary w-4 h-4" />
                        <label htmlFor="eng" className='text-black'>English</label>
                    </div>
                </div>
                <div className='space-y-2'>
                    <h1 className='text-black text-xl'>Contact Us</h1>
                    <div className='flex items-start space-x-1'>
                        <img src={address} alt="" />
                        <span className='text-black'>Lay Daunt Kan Main Road, Chashmere Stop, Near Zawanna, Thingangyun Tsp, Yangon</span>
                    </div>
                    <div className='flex space-x-1'>
                        <img src={phone} alt="" />
                        <span className='text-black'>09458489458</span>
                    </div>
                </div>
                <div className='space-y-2'>
                    <h1 className='text-black text-xl'>Download Our App</h1>
                    <div className='w-40'>
                        <img className='w-full' src="https://cdn.britannica.com/17/155017-050-9AC96FC8/Example-QR-code.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div className='md:flex md:space-x-44 space-y-2'>
                <div className='space-y-2'>
                    <h1 className='text-black text-xl'>Payment</h1>
                    <div className='flex h-12 gap-2'>
                        <img src={kpay} alt="" className='' />
                        <img src={wave} alt="" />
                    </div>
                </div>
                <div className='space-y-2'>
                    <h1 className='text-black text-xl'>Follow Us</h1>
                    <div className='flex h-12 gap-2'>
                        <img src={facebook} alt="" className='' />
                        <img src={instagram} alt="" />
                        <img src={viber} alt="" />
                        <img src={telegram} alt="" />
                        <img src={twitter} alt="" />
                    </div>
                </div>
            </div>
            <div className='flex justify-center mt-8'>
                <p className='text-black'>© Copyright 2024 by Sai Nawarat Tun</p>
            </div>
        </div>
    )
}
