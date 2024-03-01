import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className=" body-font mt-20 mb-20 bg-slate-100 rounded-lg ">
                <div className="  py-4 mx-6 flex items-center sm:flex-row flex-col">
                    <div className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                      
                            <Link href="/" className=" hover:text-gray-700 font-bold  text-2xl">NewsLand</Link>

                     
                    </div>
                    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                        Copyright © 2023 Muazam Mughal

                    </p>

                </div>
            </footer>

        </div>
    )
}

export default Footer