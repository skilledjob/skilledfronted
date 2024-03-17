import { Media, Video } from "@vidstack/player-react";

export function VideoPlayer({ src, thumbnail, className }) {
  return (
    <Media className={className}>
      <Video
        loading="visible"
        poster={thumbnail}
        controls
        preload="auto"
        className={className}
      >
        <video
          loading="visible"
          poster={thumbnail}
          src={src}
          preload="auto"
          data-video="0"
          controls
          className={className}
        />
      </Video>
    </Media>
  );
}
