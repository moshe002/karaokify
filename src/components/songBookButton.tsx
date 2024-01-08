import { useNavigate } from "react-router-dom";

function songBookButton() {
  
  const nav = useNavigate();

    return (
    <div className="flex flex-col items-center gap-3 mt-5 mb-10">
        <h1 className="text-green-800 font-medium">Search for songs here:</h1>
        <button type="button" onClick={() => {
          nav("/songbook") 
        }} className="p-2 rounded-md text-sm text-white bg-green-800 hover:bg-green-600 duration-150">Song Book</button>
    </div>
  )
}

export default songBookButton