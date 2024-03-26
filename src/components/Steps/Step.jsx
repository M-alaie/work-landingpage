import { RiCompass2Line } from '@remixicon/react'

import {RiArrowRightLine} from '@remixicon/react'

const Step = () => {
    return (
        <div className="mt-22 md:mt-44 relative z-20">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 text-center md:grid-cols-3 gap-10">
                    <div className='flex flex-col gap-3'>

                        <RiCompass2Line className='text-4xl w-full  text-accent ' />
                        <h3 className='text-lg font-semibold'>Project Plannig</h3>
                        <p>There are many variations of the passenger of learn ipsum from avalible, majority</p>
                        <div className='flex justify-center  gap-4'>
                       <a href="#" className='font-semi bold'>Read More
                        </a>
                        <RiArrowRightLine/>
                       </div>

                    </div>
                    <div className='flex flex-col gap-3'>

                        <RiCompass2Line className='text-4xl w-full text-accent ' />
                        <h3 className='text-lg font-semibold'>Project Plannig</h3>
                        <p>There are many variations of the passenger of learn ipsum from avalible, majority</p>
                        <div className='flex justify-center gap-4'>
                       <a href="#" className='font-semi bold'>Read More
                        </a>
                        <RiArrowRightLine/>
                       </div>

                    </div>
                    <div className='flex flex-col gap-3'>

                        <RiCompass2Line className='text-4xl w-full text-accent ' />
                        <h3 className='text-lg font-semibold'>Project Plannig</h3>
                        <p>There are many variations of the passenger of learn ipsum from avalible, majority</p>
                        <div className='flex justify-center  gap-4'>
                       <a href="#" className='font-semi bold'>Read More
                        </a>
                        <RiArrowRightLine/>
                       </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Step