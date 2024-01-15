import { AiOutlineLoading3Quarters } from "react-icons/ai";

function loading() {
  return (
    <div className="p-5">
        <h1 className="text-white text-4xl animate-spin">
            <AiOutlineLoading3Quarters />
        </h1>
    </div>
  )
}

export default loading