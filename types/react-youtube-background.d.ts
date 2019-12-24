declare module 'react-youtube-background' {
  export type YoutubeBackgroundProps = {
    videoId?: string;
    overlay?: string;
    className?: string;
    aspectRatio?: string;
  };

  const YoutubeBackground: React.FC<YoutubeBackgroundProps> = (props: YoutubeBackgroundProps) => React.Component;
  export default YoutubeBackground;
};
