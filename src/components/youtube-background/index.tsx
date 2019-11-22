import * as React from 'react';

import dynamic from "next/dynamic";

const DynamicYoutubeBackground = dynamic<any>(
  () => import("react-youtube-background"),
  {
    loading: () => {
      return (
        <div>...</div>
      );
    },
    ssr: false,
  }
);

export default DynamicYoutubeBackground;
