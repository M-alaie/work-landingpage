import { RiArrowRightLine } from "@remixicon/react"


const News = () => {
    return (
        <div className='mt-[200px] relative z-50'>
            <div className="container mx-auto space-y-8">
                <div className="my-4 text-center space-y-4 gap-2">
                    <h2  > Articals & News</h2>
                    <p className="mx-auto max-w-3xl">It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using.</p>
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
                    <div className="border p-4 border-solid border-gray-400/30 space-y-2 rounded-xl">
                        <img src="/assets/news/01.png" className="w-full" alt="" />
                        <h4>Let’s Get Solution For Building Construction Work</h4>
                        <div className="flex justify-between items-center">
                            <p className="text-gray-400 text-sm">  22 June,2024 </p>
                            <button className="bg-gray-300/30 w-[50px] h-[50px] flex justify-center items-center rounded-full hover:bg-gray-300/50">
                                <RiArrowRightLine className="text-black" />
                            </button>

                        </div>
                    </div>
                    <div className="border p-4 border-solid border-gray-400/30 space-y-2 rounded-xl">
                        <img src="/assets/news/02.png" className="w-full" alt="" />
                        <h4>Low Cost Latest Invented Interior Designing</h4>
                        <div className="flex justify-between items-center">
                            <p className="text-gray-400 text-sm">  24 June,2024</p>
                            <button className="bg-gray-300/30 w-[50px] h-[50px] flex justify-center items-center rounded-full hover:bg-gray-300/50">
                                <RiArrowRightLine className="text-black" />
                            </button>

                        </div>
                    </div>
                    <div className="border p-4 border-solid border-gray-400/30 space-y-2 rounded-xl">
                        <img src="/assets/news/03.png" className="w-full" alt="" />
                        <h4>Best For Any Office & Business Interior</h4>
                        <div className="flex justify-between items-center">
                            <p className="text-gray-400 text-sm">  28 June,2024 </p>
                            <button className="bg-gray-300/30 w-[50px] h-[50px] flex justify-center items-center rounded-full hover:bg-gray-300/50">
                                <RiArrowRightLine className="text-black" />
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News