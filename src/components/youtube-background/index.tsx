import dynamic from "next/dynamic";

const DynamicYoutubeBackground = dynamic(
  () => import("react-youtube-background"),
  {
    loading: (props) => {
      return (
        <div>...</div>
      )
    },
    ssr: false,
  }
)

export default DynamicYoutubeBackground as any;
