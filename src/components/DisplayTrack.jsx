import { BsMusicNoteBeamed } from 'react-icons/bs';

const DisplayTrack = ({
  currentTrack,
  audioRef,
  setDuration,
  progressBarRef,
  handleNext,
}) => {
  const onLoadedMetadata = () => {
    const seconds = audioRef.current.duration;
    setDuration(seconds);
    progressBarRef.current.max = seconds;
  };

  return (
    <div className='flex flex-row items-center'>
  <audio
    src={currentTrack.src}
    ref={audioRef}
    onLoadedMetadata={onLoadedMetadata}
    onEnded={handleNext}
  />
  <div className="flex items-center ml-2">
    <img src={currentTrack.thumbnail} height={50} width={50} alt="audio image" className="mr-2" />
    <div>
      <p className="text-sm text-gray-700">{currentTrack.title}</p>
    </div>
  </div>
</div>

  );
};
export default DisplayTrack;