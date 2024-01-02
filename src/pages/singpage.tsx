import { useContext, useEffect } from "react"
import { SongContext } from "../context/songContext"
import { useNavigate } from "react-router-dom";

function singpage() {

    const song = useContext(SongContext);

    const nav = useNavigate();

    useEffect(() => {
        if(song === ""){
            nav('/');
        }
    }, []);

  return (
    <>
        <h1>singpage</h1>
        <h1>chosen song is: {song}</h1>
    </>
  )
}

export default singpage