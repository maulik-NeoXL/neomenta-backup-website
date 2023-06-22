import styles from "../../styles/components/blogdetail/blogParagraph.module.css";
import BlogImage from "./blogImage";
import BlogVideo from "./blogVideo";

export default function BlogParagraph(props: any)
{
  const {blogParagraph} = props;
  const paragraphData = blogParagraph?.description;
  return (
    <>
      {
        paragraphData?.map((para: any, index: any) =>
        {
          return (
            <>
              <div className={styles.blog_paragraph_main}>
                <p className={styles.blog_paragraph_title}> {para.title} </p>
                <p
                  className={styles.blog_paragraph_desc}
                  dangerouslySetInnerHTML={{__html: para.desc}}
                ></p>
              </div>
              {
                para?.paragraphImage && (<BlogImage blogImage={para.paragraphImage} />)
              }
              {
                para?.videoLink && (<BlogVideo blogVideo={para.videoLink} />)
              }
            </>
          );
        })
      }

    </>
  );
}
