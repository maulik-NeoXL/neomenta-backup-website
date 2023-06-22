import styles from "../../styles/components/blogdetail/blogImage.module.css";

export default function BlogImage(props: any)
{
  const {blogImage} = props;
  return (
    <>
      <div className={styles.blog_image_wrapper}>
        <img
          className={styles.blog_content_image}
          src={blogImage}
          alt={"blog_content_image"}
        />
      </div>
    </>
  );
}
