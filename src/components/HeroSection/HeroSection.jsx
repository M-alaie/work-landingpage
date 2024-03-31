import { RiArrowRightSLine }
  from '@remixicon/react';


export const HeroSection = () => {
  return (
    <>
      <section className="bg-hero h-[640px] lg:h-[840px] bg-center md:bg-cover z-50 bg-no-repeat bg-fixed rounded-bl-[290px]">


        <div className=' h-full lg:text-start text-center container flex items-center justify-center  flex-col gap-3'  >
       
            <h1>Let Your Home <br />Be Unique</h1>
            <p className=" my-4 indent-2 text-xl">There are many variations of the passages of lorem ipsum <br /> from avalible, variations of the passages</p>

            <button type="submit" className="btn btn-primary">Get Free Estimation<RiArrowRightSLine className=" text-accent " /></button>

         
        </div>


      </section>
    </>
  )
}
