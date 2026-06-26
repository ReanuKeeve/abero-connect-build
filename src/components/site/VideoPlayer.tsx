import { useRef, useState } from "react";
import { Play } from "lucide-react";

interface VideoPlayerProps {
  src: string;
  poster: string;
  label?: string;
  title?: string;
}

export function VideoPlayer({ src, poster, label, title }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const play = () => {
    const v = videoRef.current;
    if (!v) return;
    v.play();
    setPlaying(true);
  };

  return (
    <div className="relative overflow-hidden rounded-3xl shadow-elevated bg-navy-deep">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        controls={playing}
        playsInline
        preload="metadata"
        className="aspect-video w-full object-cover"
      />
      {!playing && (
        <button
          type="button"
          onClick={play}
          className="absolute inset-0 grid place-items-center text-white"
          aria-label="Play factory tour video"
        >
          <span className="absolute inset-0 bg-navy-deep/55" />
          <span className="relative grid size-20 place-items-center rounded-full bg-white text-navy-deep shadow-2xl transition hover:scale-105 sm:size-24">
            <Play className="ml-1 size-9 fill-current sm:size-10" />
          </span>
          {(label || title) && (
            <span className="absolute bottom-6 left-6 right-6 text-left sm:bottom-8 sm:left-8">
              {label && (
                <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-cyan">
                  {label}
                </span>
              )}
              {title && (
                <span className="mt-1 block text-lg font-semibold sm:text-xl">{title}</span>
              )}
            </span>
          )}
        </button>
      )}
    </div>
  );
}
