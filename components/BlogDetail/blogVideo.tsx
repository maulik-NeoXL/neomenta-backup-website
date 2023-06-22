import styles from "../../styles/components/blogdetail/blogVideo.module.css";

export default function BlogVideo(props: any)
{
  const {blogVideo} = props;

  return (
    <>
      <div className={styles.blog_video_wrapper}>
        <iframe
          className={styles.iframe_wrapper}
          width="560"
          height="315"
          src={blogVideo}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}
