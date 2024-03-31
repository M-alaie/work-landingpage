import { works } from "./img"
import { RiArrowRightLine } from '@remixicon/react'
import { Fade } from 'react-awesome-reveal'
const Work = () => {
    return (
        <div className="mt[70px] xl:mt-[200px]">
            <div className="container mx-auto">
                <div className="text-center mb-8">
                    <h2 className="mb-4">Follow Your Project</h2>
                    <p className="max-w-3xl mx-auto">It is a long established fact that a reader will be distracted by the of readable content of page lookings at its layouts points.
                    </p>
                </div>
                <div className="flex xl:flex-row flex-wrap  gap-10 mt-4 flex-col">
                    {works.map((work, index) => (
                        <div key={index} className=" xl:base-2/4 mx-auto xl:text-start   space-y-2">
                            <Fade direction="down" delay={index + 200} cascade>

                                <img src={work.img} alt="" />
                                <div className="flex flex-col  xl:items-start  items-center gap-2">
                                    <h4 className="font-semibold">{work.name}</h4>
                                    <p className="text-gray-800/20 text-base">{work.Subtitle}</p>
                                    <div className="w-[50px] h-[50px] flex justify-center items-center bg-accent-secondary hover:bg-accent-hover/30 rounded-full">
                                        <RiArrowRightLine />
                                    </div>
                                </div>
                            </Fade>

                        </div>

                    ))}
                </div>
            </div>
        </div>
    )
}

export default Work