
import { Links } from './Links/Links'
import { HeroSection } from '../HeroSection/HeroSection'
import { useState } from 'react'
import { RiMenu3Line } from '@remixicon/react'
import NavLinkMobile from './mobile/NavLinkMobile'

const NavBar = () => {
    const [open, setOpen] = useState(false)
    return (

        <>
             <nav className={` ${open===true ? "h-[220px] shadow-lg shadow-gray-400" : "md:h-[90px] h-[50px]"}   sticky  top-0 z-30 `}>
                <div className='flex justify-around items-center  shadow-sm md:h-full w-full '>
                <div className="logo">
                        <img src="/assets/logo.svg" className='w-36' alt="" />
                    </div>
                    <div className=' md:flex hidden gap-8  '>
                        {Links.map((link, index) => (
                            <a href="#" key={index} >{link.namePath}</a>
                        ))}
                    </div>
                    <div className='block md:hidden' onClick={() => setOpen(!open)}>
                        <RiMenu3Line className='hover:text-accent cursor-pointer ' />


                    </div>
                </div>

                {open && (
                    <NavLinkMobile />
                )}
               
         

                </nav>
               <HeroSection /></>
           
           

                



    
    )
}

export default NavBar