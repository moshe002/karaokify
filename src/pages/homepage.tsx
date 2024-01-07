import Title from "../components/homepageTitle";
import Input from "../components/input";
import SongBookButton from "../components/songBookButton";
import AudioVolume from '../components/controlAudio';
import { AudioStart } from '../AudioStart';

interface HomeProps {
  song: string;
  setSong: React.Dispatch<React.SetStateAction<string>>; 
}

function homepage({ song, setSong }: HomeProps) {

  AudioStart();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-900">
      <Title />     
      <Input song={song} setSong={setSong} />
      <SongBookButton />
      <AudioVolume />
    </div>
  )
}

export default homepage