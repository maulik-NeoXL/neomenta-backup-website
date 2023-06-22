import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {useState} from "react";
import styles from "../../styles/components/pricing/pricingTable.module.css";

export default function PricingTable()
{

  const [subType, setSubType] = useState("monthly");

  const standard = 10000;
  const neoxl = 25000;

  return (
    <div className={styles.pricing_table_main}>
      {/*pricing-table-month-year-toggler-section*/}
      <div className={styles.pricing_table_switch_section}>
        <Box sx={{display: "flex", alignItems: "center"}}>
          <Box className={styles.mask_box}>
            <Box
              className={styles.mask}
              style={{
                transform: `translateX(${subType === "monthly" ? 0 : "85px"})`
              }}
            />
            <Button
              disableRipple
              variant="text"
              sx={{color: subType === "monthly" ? "#1976d2" : "#0a3450", background: "transparent"}}
              onClick={() => setSubType("monthly")}
              className={styles.pricing_btn}
            >
              Monthly
            </Button>
            <Button
              disableRipple
              variant="text"
              sx={{color: subType === "yearly" ? "#1976d2" : "#0a3450", background: "transparent"}}
              onClick={() => setSubType("yearly")}
              className={styles.pricing_btn}
            >
              Annually
            </Button>
          </Box>
        </Box>
      </div>
      {/*pricing-table-month-year-toggler-section*/}
      {/*pricing-table-price-card-section*/}
      <div className={styles.pricing_table_pricing_card_section_main}>
        <div className={styles.pricing_table_card}>
          <div className={styles.pricing_upper_deck}>
            <p className={styles.pricing_card_title}>Free</p>
            <p className={styles.pricing_card_feature_detail}> 1 admin & 5 users </p>
            <p className={styles.pricing_card_actual_price_detail}> ₹ 0
              <span className={styles.pricing_price_detail_span}>/{subType === "monthly" ? "mth" : "mth"}</span>
            </p>
            <p className={styles.pricing_card_modal_for_enterprise}>For small sized businesses</p>
            <p className={styles.pricing_card_modal_for_enterprise_offer}>{subType === "monthly" ? "" :
              "Billed ₹ 0/year (10% off)"}</p>
          </div>
          <div className={styles.pricing_lower_deck}>
            <div className={styles.pricing_more_detail_box}>
              <p className={styles.pricing_detail_box_tile}>What is includes:</p>
              <ul className={styles.pricing_detail_list}>
                <li className={styles.pricing_detail_list_item}>
                  <span className={styles.right_icon}> <CheckCircleIcon color={"success"} /> </span> Familiar messaging
                  system with text, media, polls, search, and message receipts accessed through multiple devices,
                  browsers, and tablets.
                </li>
                <li className={styles.pricing_detail_list_item}>
                  <span className={styles.right_icon}> <CheckCircleIcon color={"success"} /> </span> Threaded messaging
                  for remembering conversations
                </li>
                <li className={styles.pricing_detail_list_item}>
                  <span className={styles.right_icon}> <CheckCircleIcon color={"success"} /> </span> Native form-based
                  structured messaging with 40+ field types,
                </li>
                <li className={styles.pricing_detail_list_item}>
                  <span className={styles.right_icon}> <CheckCircleIcon color={"success"} /> </span> Native spreadsheet
                  integration with per-user-drive to access data in bulk
                </li>
                <li className={styles.pricing_detail_list_item}>
                  <span className={styles.right_icon}> <CheckCircleIcon color={"success"} /> </span> Cross-sheet data
                  references and spreadsheet formulas to simplify complex workflows
                </li>
              </ul>

            </div>
          </div>
          <button
            className={styles.pricing_card_btn_outline}
          > Create account
          </button>
        </div>

        <div className={styles.pricing_table_card}>
          <div className={styles.pricing_upper_deck}>
            <p className={styles.pricing_card_title}>Standard</p>
            <p className={styles.pricing_card_feature_detail}> 1 admin & 5 - 25 users </p>
            <p className={styles.pricing_card_actual_price_detail}> ₹{subType === "monthly" ? standard :
              ((standard * 12) - (standard * 1.2)) / 12}
              <span className={styles.pricing_price_detail_span}>/ {subType === "monthly" ? "mth" : "mth"} </span>
            </p>
            <p className={styles.pricing_card_modal_for_enterprise}>For small to mid sized businesses</p>
            <p className={styles.pricing_card_modal_for_enterprise_offer}>{subType === "monthly" ? "" :
              "Billed ₹ 108k/year (10% off)"}</p>
          </div>
          <div className={styles.pricing_lower_deck}>
            <div className={styles.pricing_more_detail_box}>
              <p className={styles.pricing_detail_box_tile}>All the benefits of Free, and:</p>
              <ul className={styles.pricing_detail_list}>
                <li className={styles.pricing_detail_list_item}>
                  <span className={styles.right_icon}> <CheckCircleIcon color={"success"} /> </span> Familiar messaging
                  system with text, media, polls, search, and message receipts accessed through multiple devices,
                  browsers, and tablets.
                </li>
                <li className={styles.pricing_detail_list_item}>
                  <span className={styles.right_icon}> <CheckCircleIcon color={"success"} /> </span> Threaded messaging
                  for remembering conversations
                </li>
                <li className={styles.pricing_detail_list_item}>
                  <span className={styles.right_icon}> <CheckCircleIcon color={"success"} /> </span> Native form-based
                  structured messaging with 40+ field types,
                </li>
                <li className={styles.pricing_detail_list_item}>
                  <span className={styles.right_icon}> <CheckCircleIcon color={"success"} /> </span> Native spreadsheet
                  integration with per-user-drive to access data in bulk
                </li>
                <li className={styles.pricing_detail_list_item}>
                  <span className={styles.right_icon}> <CheckCircleIcon color={"success"} /> </span> Cross-sheet data
                  references and spreadsheet formulas to simplify complex workflows
                </li>
                <li className={styles.pricing_detail_list_item}>
                  <span className={styles.right_icon}> <CheckCircleIcon color={"success"} /> </span> Inbuilt support for
                  reports, dashboards, and custom queries
                </li>
                <li className={styles.pricing_detail_list_item}>
                  <span className={styles.right_icon}> <CheckCircleIcon color={"success"} /> </span> Role-based access
                  control across the whole enterprise
                </li>
                <li className={styles.pricing_detail_list_item}>
                  <span className={styles.right_icon}> <CheckCircleIcon color={"success"} /> </span> Dedicated
                  enterprise address book
                </li>
                <li className={styles.pricing_detail_list_item}>
                  <span className={styles.right_icon}> <CheckCircleIcon color={"success"} /> </span> Deeplinks and web
                  shortcuts for sharing with out-of-band users and apps
                </li>
                <li className={styles.pricing_detail_list_item}>
                  <span className={styles.right_icon}> <CheckCircleIcon color={"success"} /> </span> Prebuilt
                  integration with SMS, Email, WhatsApp, Google Maps, Pdf documents, and Payment systems
                </li>
                <li className={styles.pricing_detail_list_item}>
                  <span className={styles.right_icon}> <CheckCircleIcon color={"success"} /> </span> Easy-to-use Studio
                  to change and add to your enterprise automation
                </li>
                <li className={styles.pricing_detail_list_item}>
                  <span className={styles.right_icon}> <CheckCircleIcon color={"success"} /> </span> Open API, community
                  support, and store of prebuilt enterprise apps
                </li>
              </ul>
            </div>
          </div>
          <button
            className={styles.pricing_card_btn_outline}
          > Create account
          </button>
        </div>

        <div className={styles.pricing_table_card}>
          <div className={styles.pricing_upper_deck}>
            <p className={styles.pricing_card_title}>Advanced</p>
            <p className={styles.pricing_card_feature_detail}> 2 admin & 25 - 50 users </p>
            <p className={styles.pricing_card_actual_price_detail}> ₹{subType === "monthly" ? neoxl :
              ((neoxl * 12) - (neoxl * 1.2)) / 12}
              <span className={styles.pricing_price_detail_span}> {subType === "monthly" ? "/mth" : "/mth"} </span>
            </p>
            <p className={styles.pricing_card_modal_for_enterprise}>For mid to large sized businesses</p>
            <p className={styles.pricing_card_modal_for_enterprise_offer}>{subType === "monthly" ? "" :
              "Billed ₹ 270k/year (10% off)"}</p>
          </div>
          <div className={styles.pricing_lower_deck}>
            <div className={styles.pricing_more_detail_box}>
              <p className={styles.pricing_detail_box_tile}>All the benefits of Standard, and:</p>
              <ul className={styles.pricing_detail_list}>
                <li className={styles.pricing_detail_list_item}>
                  <span className={styles.right_icon}> <CheckCircleIcon color={"success"} /> </span> Support for active
                  directory
                </li>
                <li className={styles.pricing_detail_list_item}>
                  <span className={styles.right_icon}> <CheckCircleIcon color={"success"} /> </span> Prebuilt drivers
                  for SalesForce.com, ServiceNow, Workday, Hubspot, and Slack
                </li>
                <li className={styles.pricing_detail_list_item}>
                  <span className={styles.right_icon}> <CheckCircleIcon color={"success"} /> </span> Extend the base
                  system with in-house custom drivers through your IT or community
                </li>
                <li className={styles.pricing_detail_list_item}>
                  <span className={styles.right_icon}> <CheckCircleIcon color={"success"} /> </span> Audit trail across
                  all touchpoints
                </li>
              </ul>
            </div>
          </div>
          <button
            className={styles.pricing_card_btn_outline}
          > Create account
          </button>
        </div>

        <div className={styles.pricing_table_card}>
          <div className={styles.pricing_upper_deck}>
            <p className={styles.pricing_card_title}>Enterprise</p>
            <p className={styles.pricing_card_feature_detail}>Customised solutions</p>
            <p className={styles.pricing_card_actual_price_detail}> Custom
              <span className={styles.pricing_price_detail_span}></span>
            </p>
            <p className={styles.pricing_card_modal_for_enterprise}>For on premise experiences</p>
            <p className={styles.pricing_card_modal_for_enterprise_offer}>{subType === "monthly" ? "" :
              "Billed anually"}</p>
          </div>

          <div className={styles.pricing_lower_deck}>
            <div className={styles.pricing_more_detail_box}>
              <p className={styles.pricing_detail_box_tile}>All the benefits of Advanced, and:</p>
              <ul className={styles.pricing_detail_list}>
                <li className={styles.pricing_detail_list_item}>
                  <span className={styles.right_icon}> <CheckCircleIcon color={"success"} /> </span> On-premise
                  deployment with automated upgrades
                </li>
                <li className={styles.pricing_detail_list_item}>
                  <span className={styles.right_icon}> <CheckCircleIcon color={"success"} /> </span> Platinum support
                  with single-day issue resolution
                </li>
                <li className={styles.pricing_detail_list_item}>
                  <span className={styles.right_icon}> <CheckCircleIcon color={"success"} /> </span> Highly available
                  sharded cluster with horizontal scaling
                </li>
                <li className={styles.pricing_detail_list_item}>
                  <span className={styles.right_icon}> <CheckCircleIcon color={"success"} /> </span> Enterprise-grade
                  security to help protect your data and meet your compliance requirements
                </li>
              </ul>
            </div>
          </div>
          <button
            className={styles.pricing_card_btn_outline}
          > Create account
          </button>
        </div>
      </div>
      {/*pricing-table-price-card-section*/}
    </div>
  );
}
