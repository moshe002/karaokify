import { useState, useEffect } from 'react';

//let nodeAudio:any;

function AudioStart() {
    const [audioContext, setAudioContext] = useState<any>(null);
    const [microphoneStream, setMicrophoneStream] = useState<any>(null);
    //const [gainNode, setGainNode] = useState<any>(null);

    useEffect(() => {
        startAudio();

        return () => {
            if (audioContext) {
                audioContext.close();
            }
        };
    }, []);

    const startAudio = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            const context = new (window.AudioContext)();
            const microphone = context.createMediaStreamSource(stream);
            //const gain = context.createGain();

            setAudioContext(context);
            setMicrophoneStream(microphone);
            //setGainNode(gain);

            //microphone.connect(gain);
            //gain.connect(context.destination);
            microphone.connect(context.destination);

            //await context.resume();

            //console.log('Audio started.');
            //console.log(gainNode)
        } catch (error) {
            console.error('Error starting audio:', error);
        }
    };

    if(microphoneStream) return
    //console.log(microphoneStream);

    //nodeAudio = gainNode
}

export { AudioStart }; 