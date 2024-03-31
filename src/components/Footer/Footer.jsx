import { RiFacebookFill, RiTwitchFill, RiTwitterFill, RiYoutubeFill } from '@remixicon/react'

const Footer = () => {
    return (
        <footer className="mt-22 xl:mt-200 relative z-20 ">
            <div className="container mx-auto">
                <div className="grid xl:grid-cols-12 place-items-center text-center xl:text-start grid-cols-1 gap-8">
                    <div className='xl:col-span-5 col-span-1  space-y-4  '>
                        <img src="/assets/logo.svg" alt="" />
                        <p className="max-w-2xl  ">It is a long established fact that a reader will be distracted lookings.</p>
                        <div className='flex flex-row gap-8'>
                            <a href="#"><RiFacebookFill /></a>
                            <a href="#"><RiTwitterFill /></a>
                            <a href="#"><RiTwitchFill /></a>
                            <a href="#"><RiYoutubeFill /></a>
                        </div>
                    </div>
                    <div className='xl:col-span-2 col-span-1 flex flex-col  '>
                        <h4 className='font-semibold mb-4'> Pages</h4>
                        <div className='flex flex-col text-accent/80 gap-2'>
                            <a href="">About Us</a>
                            <a href=""> Our Work</a>
                            <a href=""> News</a>
                            <a href="">Contact</a>
                            <a href="">Testimonials</a>
                        </div>

                    </div>

                    <div className='xl:col-span-2 col-span-1  flex flex-col  '>
                        <h4 className='font-semibold mb-4'> Services</h4>
                        <div className='flex flex-col text-accent/80 gap-2'>

                            <a href="#">Kitchen</a>
                            <a href="#">Living Area</a>
                            <a href="#">Bathroom</a>
                            <a href="#">Bedroom</a>

                        </div>
                    </div>
                    <div className='xl:col-span-3 col-span-1  flex flex-col  '>
                        <h4 className='font-semibold mb-4'> Contact</h4>
                        <div className='flex flex-col text-accent/80 gap-2'>

                            <a href="" className='my-1'>55 East Birchwood Ave. Brooklyn, New York 11201</a>
                            <a href="">contact@interno.com</a>
                            <a href="">(123) 456 - 7890</a>

                        </div>
                    </div>



                </div>

                <div className='mt-8 text-center'>
                    <p className='text-base   leading-relaxed text-gray-400'>Copyright © Interno 2024. All rights reserved.</p>
                </div>           
                 </div>
        </footer>
    )
}

export default Footer