
import { Links } from "../Links/Links"
const NavLinkMobile = () => {
  return (

      <div className="md:hidden  bg-white   w-full ">
        <ul className="w-full h-0 fiex p-0    flex flex-col mt-3  z-50  border-1 top-[90px] left-0 right-0 transition-all duration-300">
        {Links.map((Link,index)=>(
          <li className="hover:text-accent-hover font-normal text-lg" key={index}>{Link.namePath}</li>
        ))}
      </ul>
      </div>
   
  )
}

export default  NavLinkMobile