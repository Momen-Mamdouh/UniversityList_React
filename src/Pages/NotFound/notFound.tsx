import { Link } from "react-router-dom";


function NotFound(){
    return (
        <div className="flex items-center flex-col relative">
     

                <div className="flex flex-col justify-center items-center h-screen bg-[#0a0a1f] relative overflow-hidden w-full">
    
                    <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400 rotate-45"></div>
                    <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-blue-500 rotate-45"></div>
                    <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-yellow-400 rotate-45"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-blue-500 rotate-45"></div>
                    <div className="absolute bottom-1/2 left-1/2 w-2 h-2 bg-red-500 rotate-45"></div>

                    <div className="flex items-center text-[150px] font-bold">
                        <span className="bg-gradient-to-tr from-orange-400 to-yellow-400 text-transparent bg-clip-text rotate-[-20deg]">4</span>
                        <span className="mx-8 bg-gradient-to-tr from-yellow-400 to-yellow-500 text-transparent bg-clip-text">0</span>
                        <span className="bg-gradient-to-tr from-orange-400 to-yellow-400 text-transparent bg-clip-text rotate-[20deg]">4</span>
                    </div>

                    <h1 className="mb-[14px] mt-5 text-xl dark:text-white font-semibold">404 Not Found</h1>
                    <p className="mb-8 text-lg w-1/2 text-center dark:text-white!">
                        Oops! The page you’re looking for doesn’t exist.
                    </p>
                    <Link to="/home" className={'bg-primary rounded-md p-2.5'}>
                        Go to home
                    </Link>
                </div>
         
         
         
        </div>
      )
}

export default NotFound