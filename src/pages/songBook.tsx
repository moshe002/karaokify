import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Error from '../components/error';
import Header from "../components/header";
import Loading from '../components/loading';

interface SongBookProps {
  setSong: React.Dispatch<React.SetStateAction<string>>; 
}

function songBook({ setSong } : SongBookProps) {

  const API_KEY:string = import.meta.env.VITE_YOUTUBE_API_KEY;
  const YOUTUBE_CHANNEL_ID:string = import.meta.env.VITE_YOUTUBE_CHANNEL_ID;

  const SONGBOOK_LETTERS:string = 'abcdefghijklmnopqrstuvwxyz';

  const nav = useNavigate();

  const [letter, setLetter] = useState<string>('');
  const [result, setResult] = useState<{ snippet: { title:string }}[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    if(letter != ''){
      fetchSongs();
    }
  }, [letter]);

  const fetchSongs = async () => {
    setLoading(true)
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

        //console.log(selectedVideos[0].snippet.title)
        setResult(selectedVideos);
      })
    } catch(error:any) {
      setIsError(true);
      setErrorMessage(error.message);
      console.error(error)
    }
    setLoading(false)
  };

  const chooseSongs = (letter:string) => {
    setLetter(letter)
  };

  return (
    <div className="flex flex-col items-center text-white h-screen bg-slate-900">
      <Header text="Song Book" />
      <div className="flex flex-wrap justify-evenly w-full p-5 mt-10 text-xl text-center text-slate-500">
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
      <div className='text-slate-500 p-3 font-semibold text-xl'>
        {
          letter != '' 
          ?
            <h1>Songs that start will the letter: 
              <span className='text-white'> {letter} </span>
            </h1> 
          : 
            <h1>Choose a letter</h1> 
        }
      </div>
      <div className='flex flex-col justify-evenly p-3 mt-3'>
        <ol className='list-disc'>
        {
          loading ? <Loading />
          :
            result.map((data, index) => {
              const songs = data.snippet.title
              return(
                <li key={index}>
                  <button onClick={() => {
                    setSong(songs)
                    nav('/sing')
                  }} type='button'>{songs}
                  </button>
                </li>
              )
            })
          }
        </ol>
      </div>
      { isError && <Error errorMessage={errorMessage} /> }
    </div>
  )
}

export default songBook