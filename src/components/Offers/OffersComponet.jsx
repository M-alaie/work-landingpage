import SwiperComponent from "./Swiper/Swiper"


const OffersComponet = () => {
    return (

        <div className="container mx-auto mt-[88px] xl:mt-[120px]">
            <div className=" rounded-2xl bg-accent-secondary shadow h-[30rem] ">
                <div className="mx-6">

                    <h3 className="text-center font-semibold text-3xl pt-10 pb-4"> What Client Say</h3>
                
                <SwiperComponent/>


                  
                </div>

            </div>
        </div>

    )
}

export default OffersComponet