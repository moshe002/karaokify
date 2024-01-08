import { useNavigate } from "react-router-dom";
import { BiArrowFromRight } from "react-icons/bi";

interface ErrorProps {
    errorMessage: string;
}

function error({ errorMessage }:ErrorProps) {
  
    const nav = useNavigate();
  
    return (
    <div className='fixed top-0 left-0 p-5 w-full h-screen flex justify-center items-center bg-gray-600 bg-opacity-50 z-50'>
        <div className='flex flex-col bg-slate-800 items-center gap-3 p-5 shadow-2xl rounded-md max-h-full'>
            <h1 className="text-slate-500 text-2xl text-center font-bold">Oh no! An Error.</h1>
            <h1 className="text-white text-center">{errorMessage}</h1>
            <button onClick={() => {
                    nav('/');
                }} 
                className="flex items-center gap-2 bg-green-800 p-3 rounded-md hover:bg-green-600 duration-150" 
                type="button">
                <p className="text-white text-2xl font-semibold">
                    <BiArrowFromRight />
                </p>
                <p className="text-white text-lg font-semibold">Go back</p>
            </button>
        </div>
    </div>
  )
}

export default error