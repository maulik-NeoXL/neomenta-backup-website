import {Instagram} from "@mui/icons-material";
import {Twitter} from "@mui/icons-material";
import {LinkedIn} from "@mui/icons-material";
import {Facebook} from "@mui/icons-material";
import styles from "../../styles/components/help/helpDetails.module.css";

export default function HelpDetails()
{
  return (
    <>
      <div className={styles.details_container}>
        <div className={styles.details_wrapper}>
          <div className={styles.content}>
            <div className={styles.details_heading}> How to setup neoXL for a Tea franchise?</div>
            <div className={styles.details_image_wrapper}>
              <img className={styles.details_image}
                src={"/assets/images/blog/blog-detail/automation-for-every-one/automation-2.png"}
                alt={"blog_content_image"}
              />
            </div>

            <div className={styles.details_content}>
              Imagine if you own a tea stall, would you be able to tell how profitable your business was in FY
              2021-2022? For an SME to answer these questions, it requires spreadsheets. However due to lack of
              understanding of spreadsheets, there is no sustainable and easy way of interacting with them. This is
              where neoXL is a game changer. <br /><br />

              neoXL can help a tea stall maintain spreadsheets for orders, customers and generate corrosponding reports
              depending on the parameters given. Follow the steps to understand how:
              <div className={styles.content_heading}> Step 1: Navigate to Studio</div>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
              of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum. <br /> <br />

              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              like Aldus PageMaker including versions of Lorem Ipsum. <br /> <br />

              <div className={styles.content_heading}> Step 2: Lorem Ipsum</div>
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
              rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
              consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
              dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
              incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
              exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui
              dolorem eum fugiat quo voluptas nulla pariatur?" <br /> <br />

              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
              of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum. <br /> <br />

              <div className={styles.content_heading}> Step 3: Lorem Ipsum</div>
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
              rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
              consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
              dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
              incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
              exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui
              dolorem eum fugiat quo voluptas nulla pariatur?" <br /> <br />

              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
              of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum. <br /> <br />

              <div className={styles.content_heading}> Step 4: Lorem Ipsum</div>
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
              rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
              consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
              dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
              incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
              exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui
              dolorem eum fugiat quo voluptas nulla pariatur?" <br /> <br />

            </div>

            <div className={styles.share_links}>
              <div className={styles.facebook_share}><Facebook sx={{fontSize: "36px"}} /></div>
              <div className={styles.facebook_share}><Twitter sx={{fontSize: "36px"}} /></div>
              <div className={styles.facebook_share}><LinkedIn sx={{fontSize: "36px"}} /></div>
              <div className={styles.facebook_share}><Instagram sx={{fontSize: "36px"}} /></div>

            </div>
          </div>
        </div>
      </div>

    </>
  );
}
