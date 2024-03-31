import {RiArrowRightLine } from '@remixicon/react'

const Contact = () => {
  return (
    <div className="mt-22 xl:mt-200">
    <div className="container mx-auto">
        <div className="bg-primary  flex justify-center items-center flex-col  text-white rounded-xl py-12 p-8">
            <h2 className="leading-tight text-white">Do you want to join interview </h2>
            <p className="text-white text-base "> It is a long established fact will be distracted.</p>
            <button className="btn btn-accent flex mt-4 items-center justify-center" >
                Contact with us <RiArrowRightLine className='text-primary'></RiArrowRightLine>
            </button>
        </div>
    </div>
    </div>
  )
}

export default Contact