import * as React from 'react';

import dynamic from "next/dynamic";

import { YoutubeBackgroundProps } from 'react-youtube-background';

const YoutubeBackground = (props: React.PropsWithChildren<YoutubeBackgroundProps>) => dynamic<YoutubeBackgroundProps>(
  () => import('react-youtube-background'),
  {
    loading: () => {
      return (
        <div>
          {(props as any).children}
        </div>
      );
    },
    ssr: false,
  }
);

const DynamicYoutubeBackground: React.FC<YoutubeBackgroundProps> = (props: YoutubeBackgroundProps) => {
  const Background = YoutubeBackground(props);
  return (
    <Background {...props} />
  );
};

export default DynamicYoutubeBackground;
