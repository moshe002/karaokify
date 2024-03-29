import { useNavigate } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";

import AudioVisualize from '../components/audioVisualizer';

interface HeaderProps {
    text: string;
}

function header({ text }: HeaderProps) {

  const nav = useNavigate();

  return (
    <div className="flex relative justify-evenly items-center p-5 w-screen bg-slate-800">
        <button 
          onClick={() => {
            nav('/');
          }}
          className="text-2xl absolute left-5 hover:text-green-400 duration-150" 
          type="button" 
          title="back_button">
            <FaChevronLeft />
        </button>
        <h1 className="text-xl font-medium">{text}</h1>
        <AudioVisualize bgColor="#1e293b" />
    </div>
  )
}

export default header