import Title from "../components/homepageTitle"
import Input from "../components/input"
import SongBookButton from "../components/songBookButton"

interface HomeProps {
  song: string;
  setSong: React.Dispatch<React.SetStateAction<string>>; 
}

function homepage({ song, setSong }: HomeProps) {

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-900">
      <Title />     
      <Input song={song} setSong={setSong} />
      <SongBookButton />
    </div>
  )
}

export default homepage