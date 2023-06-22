import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import {Tab} from "@mui/material";
import Box from "@mui/material/Box";
import {useState} from "react";
import Container from "react-bootstrap/Container";

import styles from "../../styles/components/pricing/comparePackage.module.css";

export default function ComparePackage()
{

  const [value, setValue] = useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) =>
  {
    setValue(newValue);
  };

  return (
    <>
      <div className={styles.pricing_package_main}>
        <Container className={"Container"}>
          <p className={styles.pricing_package_section_title}>Compare the packages in detail</p>
          <div className={styles.pricing_package_compare_tab_section}>
            <Box sx={{width: "100%", typography: "body1"}}>
              <TabContext value={value}>
                <Box>
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                    TabIndicatorProps={{
                      style: {display: "none"}
                    }}
                    variant={"scrollable"}
                    scrollButtons="auto"
                    allowScrollButtonsMobile
                    className={"pricing_muiTab"}
                  >
                    <Tab
                      label="Administration"
                      value="1"
                    />
                    <Tab
                      label="Channels"
                      value="2"
                    />
                    <Tab
                      label="neoXL Chat"
                      value="3"
                    />
                    <Tab
                      label="Enterprise"
                      value="4"
                    />
                    <Tab
                      label="Automation"
                      value="5"
                    />
                    <Tab
                      label="Reports & Insights"
                      value="6"
                    />
                    <Tab
                      label="Support"
                      value="7"
                    />
                  </TabList>
                </Box>
                <div className={`${styles.pricing_package_tabpanel_card_section} "tabpanel-table-main" `}>
                  <TabPanel value="1">
                    <div className={styles.pricing_package_tabpanel_card}>
                      <table className={styles.pricing_package_tabpanel_table}>
                        <tbody>
                          <tr className={styles.pricing_package_tabpanel_table_head_raw}>
                            <th></th>
                            <th><p> Standard </p></th>
                            <th><p> neoXL </p></th>
                            <th><p> Enterprise </p></th>
                          </tr>
                          <tr className={styles.pricing_package_tabpanel_table_content_raw}>
                            <td>Included users</td>
                            <td>10</td>
                            <td>25</td>
                            <td>Custom</td>
                          </tr>
                          <tr className={styles.pricing_package_tabpanel_table_content_raw}>
                            <td>Teams</td>
                            <td><CheckCircleIcon color="success" /></td>
                            <td><CheckCircleIcon color="success" /></td>
                            <td><CheckCircleIcon color="success" /></td>
                          </tr>
                          <tr className={styles.pricing_package_tabpanel_table_content_raw}>
                            <td>User Roles</td>
                            <td></td>
                            <td><CheckCircleIcon color="success" /></td>
                            <td><CheckCircleIcon color="success" /></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </TabPanel>
                  <TabPanel value="2">
                    <div className={styles.pricing_package_tabpanel_card}>
                      <table className={styles.pricing_package_tabpanel_table}>
                        <tbody>
                          <tr className={styles.pricing_package_tabpanel_table_head_raw}>
                            <th></th>
                            <th><p> Standard </p></th>
                            <th><p> neoXL </p></th>
                            <th><p> Enterprise </p></th>
                          </tr>
                          <tr className={styles.pricing_package_tabpanel_table_content_raw}>
                            <td>Included users</td>
                            <td>10</td>
                            <td>25</td>
                            <td>Custom</td>
                          </tr>
                          <tr className={styles.pricing_package_tabpanel_table_content_raw}>
                            <td>Teams</td>
                            <td><CheckCircleIcon color="success" /></td>
                            <td><CheckCircleIcon color="success" /></td>
                            <td><CheckCircleIcon color="success" /></td>
                          </tr>
                          <tr className={styles.pricing_package_tabpanel_table_content_raw}>
                            <td>User Roles</td>
                            <td></td>
                            <td><CheckCircleIcon color="success" /></td>
                            <td><CheckCircleIcon color="success" /></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </TabPanel>
                  <TabPanel value="3">
                    <div className={styles.pricing_package_tabpanel_card}>
                      <table className={styles.pricing_package_tabpanel_table}>
                        <tbody>
                          <tr className={styles.pricing_package_tabpanel_table_head_raw}>
                            <th></th>
                            <th><p> Standard </p></th>
                            <th><p> neoXL </p></th>
                            <th><p> Enterprise </p></th>
                          </tr>
                          <tr className={styles.pricing_package_tabpanel_table_content_raw}>
                            <td>Included users</td>
                            <td>10</td>
                            <td>25</td>
                            <td>Custom</td>
                          </tr>
                          <tr className={styles.pricing_package_tabpanel_table_content_raw}>
                            <td>Teams</td>
                            <td><CheckCircleIcon color="success" /></td>
                            <td><CheckCircleIcon color="success" /></td>
                            <td><CheckCircleIcon color="success" /></td>
                          </tr>
                          <tr className={styles.pricing_package_tabpanel_table_content_raw}>
                            <td>User Roles</td>
                            <td></td>
                            <td><CheckCircleIcon color="success" /></td>
                            <td><CheckCircleIcon color="success" /></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </TabPanel>
                  <TabPanel value="4">
                    <div className={styles.pricing_package_tabpanel_card}>
                      <table className={styles.pricing_package_tabpanel_table}>
                        <tbody>
                          <tr className={styles.pricing_package_tabpanel_table_head_raw}>
                            <th></th>
                            <th><p> Standard </p></th>
                            <th><p> neoXL </p></th>
                            <th><p> Enterprise </p></th>
                          </tr>
                          <tr className={styles.pricing_package_tabpanel_table_content_raw}>
                            <td>Included users</td>
                            <td>10</td>
                            <td>25</td>
                            <td>Custom</td>
                          </tr>
                          <tr className={styles.pricing_package_tabpanel_table_content_raw}>
                            <td>Teams</td>
                            <td><CheckCircleIcon color="success" /></td>
                            <td><CheckCircleIcon color="success" /></td>
                            <td><CheckCircleIcon color="success" /></td>
                          </tr>
                          <tr className={styles.pricing_package_tabpanel_table_content_raw}>
                            <td>User Roles</td>
                            <td></td>
                            <td><CheckCircleIcon color="success" /></td>
                            <td><CheckCircleIcon color="success" /></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </TabPanel>
                  <TabPanel value="5">
                    <div className={styles.pricing_package_tabpanel_card}>
                      <table className={styles.pricing_package_tabpanel_table}>
                        <tbody>
                          <tr className={styles.pricing_package_tabpanel_table_head_raw}>
                            <th></th>
                            <th><p> Standard </p></th>
                            <th><p> neoXL </p></th>
                            <th><p> Enterprise </p></th>
                          </tr>
                          <tr className={styles.pricing_package_tabpanel_table_content_raw}>
                            <td>Included users</td>
                            <td>10</td>
                            <td>25</td>
                            <td>Custom</td>
                          </tr>
                          <tr className={styles.pricing_package_tabpanel_table_content_raw}>
                            <td>Teams</td>
                            <td><CheckCircleIcon color="success" /></td>
                            <td><CheckCircleIcon color="success" /></td>
                            <td><CheckCircleIcon color="success" /></td>
                          </tr>
                          <tr className={styles.pricing_package_tabpanel_table_content_raw}>
                            <td>User Roles</td>
                            <td></td>
                            <td><CheckCircleIcon color="success" /></td>
                            <td><CheckCircleIcon color="success" /></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </TabPanel>
                  <TabPanel value="6">
                    <div className={styles.pricing_package_tabpanel_card}>
                      <table className={styles.pricing_package_tabpanel_table}>
                        <tbody>
                          <tr className={styles.pricing_package_tabpanel_table_head_raw}>
                            <th></th>
                            <th><p> Standard </p></th>
                            <th><p> neoXL </p></th>
                            <th><p> Enterprise </p></th>
                          </tr>
                          <tr className={styles.pricing_package_tabpanel_table_content_raw}>
                            <td>Included users</td>
                            <td>10</td>
                            <td>25</td>
                            <td>Custom</td>
                          </tr>
                          <tr className={styles.pricing_package_tabpanel_table_content_raw}>
                            <td>Teams</td>
                            <td><CheckCircleIcon color="success" /></td>
                            <td><CheckCircleIcon color="success" /></td>
                            <td><CheckCircleIcon color="success" /></td>
                          </tr>
                          <tr className={styles.pricing_package_tabpanel_table_content_raw}>
                            <td>User Roles</td>
                            <td></td>
                            <td><CheckCircleIcon color="success" /></td>
                            <td><CheckCircleIcon color="success" /></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </TabPanel>
                  <TabPanel value="7">
                    <div className={styles.pricing_package_tabpanel_card}>
                      <table className={styles.pricing_package_tabpanel_table}>
                        <tbody>
                          <tr className={styles.pricing_package_tabpanel_table_head_raw}>
                            <th></th>
                            <th><p> Standard </p></th>
                            <th><p> neoXL </p></th>
                            <th><p> Enterprise </p></th>
                          </tr>
                          <tr className={styles.pricing_package_tabpanel_table_content_raw}>
                            <td>Included users</td>
                            <td>10</td>
                            <td>25</td>
                            <td>Custom</td>
                          </tr>
                          <tr className={styles.pricing_package_tabpanel_table_content_raw}>
                            <td>Teams</td>
                            <td><CheckCircleIcon color="success" /></td>
                            <td><CheckCircleIcon color="success" /></td>
                            <td><CheckCircleIcon color="success" /></td>
                          </tr>
                          <tr className={styles.pricing_package_tabpanel_table_content_raw}>
                            <td>User Roles</td>
                            <td></td>
                            <td><CheckCircleIcon color="success" /></td>
                            <td><CheckCircleIcon color="success" /></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </TabPanel>
                </div>
              </TabContext>
            </Box>
          </div>
        </Container>
      </div>
    </>
  );
}
