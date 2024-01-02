import { useContext, useEffect } from "react"
import { SongContext } from "../context/songContext"
import { useNavigate } from "react-router-dom";

import Header from "../components/header";

function singpage() {

    const song = useContext(SongContext);

    const nav = useNavigate();

    useEffect(() => {
        if(song === ""){
            nav('/');
        }
    }, []);

  return (
    <div className="flex flex-col items-center text-white h-screen bg-slate-900">
        <Header text={`Chosen song: ${song}`} />
    </div>
  )
}

export default singpage