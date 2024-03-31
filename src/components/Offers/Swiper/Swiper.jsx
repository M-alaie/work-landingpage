import { Swiper, SwiperSlide, } from 'swiper/react'
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';



const SwiperComponent = () => {
    return (
        <Swiper

            spaceBetween={20}
            loop
            modules={[Pagination]}
            pagination={{ clickable: true }}
            className='py-14'

            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            breakpoints={{
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween:30
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween:30
                },
            }}
        >
            <SwiperSlide className="bg-white rounded-xl shadow h-[15rem] w-[22rem] p-8">
                <div className="flex justify-start space-x-4 my-4   items-cnter" >
                    <img src="/assets/testimonial/01.png" className="rounded-full w-16 h-16" alt="" />
                    <div>
                        <h5 className="font-semibold">Nattasha Mith</h5>
                        <p className="text-gray-600 text-base">Greenville, USA</p>
                    </div>

                </div>
                <p className="font-semibold text-base">Lorem Ipsum is simply dummy
                    text of the typesetting industry.
                    Ipsum has been.</p>
            </SwiperSlide>
            <SwiperSlide className="bg-white rounded-xl shadow h-[15rem] w-[22rem] p-8">
                <div className="flex justify-start space-x-4 my-4   items-cnter" >
                    <img src="/assets/testimonial/02.png" className="rounded-full w-16 h-16" alt="" />
                    <div>
                        <h5 className="font-semibold">Jessica White</h5>
                        <p className="text-gray-600 text-base">Oak Ridge, USA</p>
                    </div>

                </div>
                <p className="font-semibold text-base" >Lorem Ipsum is simply dummy
                    text of the typesetting industry.
                    Ipsum has been.</p>
            </SwiperSlide>
            <SwiperSlide className="bg-white rounded-xl shadow h-[15rem] w-[22rem] p-8">
                <div className="flex justify-start space-x-4 my-4   items-cnter" >
                    <img src="/assets/testimonial/03.png" className="rounded-full w-16 h-16" alt="" />
                    <div>
                        <h5 className="font-semibold">Mike Davis</h5>
                        <p className="text-gray-600 text-base">Berlin, Germany</p>
                    </div>

                </div>
                <p className="font-semibold text-base">Lorem Ipsum is simply dummy
                    text of the typesetting industry.
                    Ipsum has been.</p>
            </SwiperSlide>
            <SwiperSlide className="bg-white rounded-xl shadow h-[15rem] w-[22rem] p-8">
                <div className="flex justify-start space-x-4 my-4   items-cnter" >
                    <img src="/assets/testimonial/04.png" className="rounded-full w-16 h-16" alt="" />
                    <div>
                        <h5 className="font-semibold">Mike Davis</h5>
                        <p className="text-gray-600 text-base">Berlin, Germany</p>
                    </div>

                </div>
                <p className="font-semibold text-base">Lorem Ipsum is simply dummy
                    text of the typesetting industry.
                    Ipsum has been.</p>
            </SwiperSlide>

        </Swiper>
    )
}

export default SwiperComponent




