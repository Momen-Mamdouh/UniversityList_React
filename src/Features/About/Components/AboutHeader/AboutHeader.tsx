
import headrProfImg from '@/src/assets/Professors/Professors1.jpg'
import { fallbackImg } from "@/src/Utilities/environment";

export default function AboutHeader() {

  return (
    <>
        <div className="grid md:grid-cols-12  grid-cols-6 h-full ">

            <div className="col-span-6 items-center flex flex-col md:py-56 z-5  justify-center">
                <h1 className=" text-5xl px-10 md:w-2/3  md:text-start text-center"> About Universites</h1>
            </div>

            <div className="profImage col-span-6 items-center md:justify-center justify-start  flex flex-col  z-5 ">
                    <img className=" rounded-md w-2/3 bg-transparent text-center" src={headrProfImg ?? fallbackImg} alt="" />
            </div>
                                
        </div>
    </>
  )
}
