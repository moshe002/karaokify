import { useNavigate } from "react-router-dom";

interface InputProps {
  song: string;
  setSong: React.Dispatch<React.SetStateAction<string>>; 
}

function input({song, setSong}: InputProps) {
   
  const nav = useNavigate();

  const inputtedSong = (e:React.SyntheticEvent) => {
    e.preventDefault();
    //console.log(song); // prints the inputted song in the console
    nav('/sing');
    //setSong('');
  };

  return (
    <form onSubmit={inputtedSong} className="flex gap-5 p-5 mt-5">
        <input className="text-white p-2 bg-transparent border-b-2 text-center 
            tracking-wide outline-none focus:border-b-green-500 duration-150" 
            required
            type="text"
            value={song}
            onChange={e => setSong(e.target.value)} 
            placeholder="Enter song name here..." />
        <input
            className="font-medium text-lg bg-green-800 rounded-md p-3 text-white hover:bg-green-600 duration-150 cursor-pointer" 
            type="submit" />
    </form>
  )
}

export default input