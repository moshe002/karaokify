import { useState, useEffect } from 'react';
import Header from "../components/header";

function songBook() {

  const API_KEY:string = import.meta.env.VITE_YOUTUBE_API_KEY;
  const YOUTUBE_CHANNEL_ID:string = import.meta.env.VITE_YOUTUBE_CHANNEL_ID;

  const SONGBOOK_LETTERS:string = 'abcdefghijklmnopqrstuvwxyz';

  const [letter, setLetter] = useState<string>('');
  const [result, setResult] = useState<[]>([]);

  useEffect(() => {
    if(letter != ''){
      fetchSongs();
    }
  }, [letter]);

  const fetchSongs = async () => {
    try {
      //https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${YOUTUBE_CHANNEL_ID}&type=video&maxResults=5&q=${letter}&key=${API_KEY}
      //https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet&type=video&maxResults=50
      await fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${YOUTUBE_CHANNEL_ID}&part=snippet&type=video&maxResults=100`)
      .then(response => response.json())
      .then(data => {
        const filteredVideos = data.items.filter(
          (video:any) => video.snippet.title.startsWith(letter)
        );

        const selectedVideos = filteredVideos.slice(0, 5);

        console.log(selectedVideos);
      })
    } catch(error) {
      console.error(error)
    }
  };

  const chooseSongs = (letter:string) => {
    setLetter(letter)
  };

  return (
    <div className="flex flex-col items-center text-white h-screen bg-slate-900">
      <Header text="Song Book" />
      <div className="flex flex-wrap justify-evenly w-full p-5 mt-10 text-xl text-center text-slate-500">
        {
          /* 
            <h1>It's empty in here...</h1>
            <h1>Feature not yet implemented. Stay tuned.</h1>
          */
        }
        {
          SONGBOOK_LETTERS.toUpperCase().split('').map((letter, key) => {
            return (
              <button 
                onClick={() => chooseSongs(letter)} 
                className={`${''} p-3 underline underline-offset-2 hover:text-white duration-150 font-semibold`}
                key={key} 
                value={letter}
                type="button">
                  {letter}
              </button>
            )
          })
        }
      </div>
      <div>
        {
          letter != '' ? <h1>Songs that start will the letter: {letter}</h1> : <></> 
        }
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default songBook