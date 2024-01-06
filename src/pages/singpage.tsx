import { useContext, useEffect, useState } from "react";
import { SongContext } from "../context/songContext";
import { useNavigate } from "react-router-dom";

import Header from "../components/header";

function singpage() {

    const API_KEY:string = import.meta.env.VITE_YOUTUBE_API_KEY;
    const YOUTUBE_CHANNEL_ID:string = import.meta.env.VITE_YOUTUBE_CHANNEL_ID;

    const [videoId, setVideoId] = useState<string>('');

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
        .then(data => console.log(data.items[0].id.videoId))
      } catch(e) {
        console.error(e);
      }
    }

    //console.log(videoId.items);
    // PLAYLIST: https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UCNbFgUCJj2Ls6LVzBbL8fqA&maxResults=500&key=[YOUR_API_KEY]'
    // SEARCH: https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCNbFgUCJj2Ls6LVzBbL8fqA&channelType=any&q=shape%20of%20you%20karaoke&key=[YOUR_API_KEY] HTTP/1.1
    // youtube channel: https://www.youtube.com/@singkingkaraoke/videos
    // example yt vid link to render: https://www.youtube.com/watch?v=StjwNBlbsVs (aesthetic spanish songs)
  
    return (
    <div className="flex flex-col items-center text-white h-screen bg-slate-900">
        <Header text={`Chosen song: ${song}`} />
        <div className="flex flex-col items-center w-screen h-screen p-3">
          <div className="h-[60%] w-[60%] border-2">
            <p>video</p>
            {
            // <video className="h-[60%] w-[60%]" title="karaoke_song">
            //   <source src={`https://www.youtube.com/watch?v=${videoId}`} type="video/mp4" />
            //   Your browser does not support the video tag.
            // </video>
            }
          </div>
        </div>
    </div>
  )
}

export default singpage