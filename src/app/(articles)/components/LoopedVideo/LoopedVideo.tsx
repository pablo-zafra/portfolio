interface LoopedVideoProps {
  src: string;
  className?: string;
  poster?: string;
  type?: string;
}

export const LoopedVideo: React.FC<LoopedVideoProps> = ({
  src,
  poster = "",
  type = "video/webm",
  className = "",
}) => {
  return (
    <video
      className={`w-full h-auto rounded-xl ${className}`}
      autoPlay
      loop
      muted
      playsInline
      poster={poster}
    >
      <source src={src} type={type} />
      Your browser does not support the video tag.
    </video>
  );
};
