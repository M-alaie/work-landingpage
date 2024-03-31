import { RiPhoneFill, RiArrowRightSLine } from '@remixicon/react'

import { Slide } from 'react-awesome-reveal'
const AboutSection = () => {
    return (
        <div className="mt-[88px] relative">
            <div className="container mx-auto">


                <div className="flex items-center md:items-start flex-col-reverse xl:flex-row justify-around space-x-5  space-y-8 xl:space-y-0  ">
                    <div className=" gap-8 my-0    xl:my-10 " >
                        <Slide>
                            <h2 className="xl:w-3/4 font-semibold indent-4 ">We Create The Art Of Stylish Living Stylishly</h2>
                            <p className='my-5 tracking-wide font-normal indent-4'>it is a long established fact that a render will be distracted by the of readable content of a page when looking at its layout the points of usung that it has a more-or-less normal</p>
                            <div className="flex gap-2 justify-center xl:justify-start  mb-4">
                                <div className='text-center bg-accent-secondary mr-4 relative flex justify-center items-center w-[50px] h-[50px]  rounded-full'>
                                    <RiPhoneFill className=' text-accent' />
                                </div>
                                <div className='flex flex-col'>
                                    <h5 className='font-bold'>0987 654 321</h5>
                                    <p className='text-sm text-gray-300'> Call Us Anytime</p>
                                </div>
                            </div>
                            <div className='flex justify-center xl:justify-start '>
                                <button type="submit" className="btn btn-primary flex items-center justify-center xl:justify-start">Get Free Estimation<RiArrowRightSLine className=" text-accent " /></button>
                            </div>
                        </Slide>




                    </div>
                    <Slide direction='right' delay={800}>
                        <img src="/assets/about/img.png" className="rounded-tr-lg bg-cover flex-1 " alt="" />

                    </Slide>
                </div>


            </div>
        </div>
    )
}

export default AboutSection