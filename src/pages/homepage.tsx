import { useNavigate } from "react-router-dom"
import Title from "../components/homepageTitle"
import Input from "../components/input"

interface HomeProps {
  song: string;
  setSong: React.Dispatch<React.SetStateAction<string>>; 
}

function homepage({ song, setSong }: HomeProps) {

  const nav = useNavigate()

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-900">
      <Title />     
      <Input song={song} setSong={setSong} />
      <div className="flex flex-col items-center gap-3 mt-5">
        <h1 className="text-green-800 font-medium">Search for songs here:</h1>
        <button type="button" onClick={() => {
          nav("/songbook") 
        }} className="p-2 rounded-md text-sm text-white bg-green-800 hover:bg-green-600 duration-150">Song Book</button>
      </div>
    </div>
  )
}

export default homepage