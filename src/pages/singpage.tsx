import { useContext, useEffect, useState } from "react";
import { SongContext } from "../context/songContext";
import { useNavigate } from "react-router-dom";

import Header from "../components/header";
import Error from "../components/error";

function singpage() {

    const API_KEY:string = import.meta.env.VITE_YOUTUBE_API_KEY;
    const YOUTUBE_CHANNEL_ID:string = import.meta.env.VITE_YOUTUBE_CHANNEL_ID;

    const [videoId, setVideoId] = useState<string>('');
    const [isError, setIsError] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');

    const song = useContext(SongContext);

    const nav = useNavigate();

    useEffect(() => {
      fetchVideoToSing();
    }, []);

    useEffect(() => {
        if(song === ""){
            nav('/');
        }
    }, []);

    const fetchVideoToSing = async () => {
      try{
        await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${YOUTUBE_CHANNEL_ID}&channelType=any&q=${song.toLowerCase()}&key=${API_KEY}`)
        .then(response => response.json())
        .then(data => setVideoId(data.items[0].id.videoId))
      } catch(error:any) {
        setIsError(true);
        setErrorMessage(error.message);
        console.error(error.message);
      }
    }

    //console.log(videoId.items);
    // PLAYLIST: https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UCNbFgUCJj2Ls6LVzBbL8fqA&maxResults=500&key=[YOUR_API_KEY]'
    // SEARCH: https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCNbFgUCJj2Ls6LVzBbL8fqA&channelType=any&q=shape%20of%20you%20karaoke&key=[YOUR_API_KEY] HTTP/1.1
  
    return (
    <>
      { isError && <Error errorMessage={errorMessage} /> }
      <div className="flex flex-col items-center text-white h-screen bg-slate-900">
          <Header text={`Chosen song: ${song}`} />
          <div className="flex flex-col items-center w-screen h-screen p-3">
            <div className="h-[70%] w-[60%] mt-10">
              <iframe className="rounded-md w-full h-full" src={`https://www.youtube.com/embed/${videoId}`} title="karaoke_song" data-allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
          </div>
      </div>
    </>
  )
}

export default singpage