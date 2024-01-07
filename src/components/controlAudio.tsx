import { nodeAudio } from "../AudioStart"

function controlAudio() {

    const adjustVolume = (value:React.SyntheticEvent | string) => {
        if (nodeAudio) {
            nodeAudio.gain.value = value;
        }
    }

    return (
        <div>
            <input
                title="control_audio_volume"
                type="range"
                min="0"
                max="10"
                step="0.1"
                defaultValue="1"
                onChange={e => adjustVolume(e.target.value)}
            />
        </div>
  )
}

export default controlAudio