import { AudioVisualizer } from 'ts-audio-visualizer';

interface VisualizerProps {
  bgColor: string;
}

function audioVisualizer({ bgColor }: VisualizerProps) {

  return (
    <div className='flex items-center w-[20%] border-b-2 border-x-2 rounded-md border-green-800'>
      <AudioVisualizer
        mode="wave" // grid, bars, wave
        height="50px"
        width="100%"
        bgColor={bgColor}
        barColor="#efefef"
      />
    </div>
  )
}

export default audioVisualizer