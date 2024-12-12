import ProfilePhoto from "../../assets/temp/profile-photo/1.png";
import AdProduct1 from "../../assets/temp/ad-image/ad-1.png";
import TrendingLogo from "../../assets/icons/trending.png";
import { BsThreeDotsVertical } from "react-icons/bs";
import {
  setAdDropdownVisibility,
  useUIController,
} from "../../context/context";
import ThreeDotDropdown from "../uiElements/threeDotDropdown";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  CLICK_ZOOM_IN,
  FADE_UP_ANIMATION_VARIANT,
} from "../uiElements/animations/framerMotionVaraints";
import AdCardLoading from "./adCardLoading";

export default function AdCard({ adsData }) {
  const AdCardsData = [
    {
      owner: "Myntra",
      adLabelText:
        "This latest Facebook ad by crisis has 450 likes and 120 comments till now. This latest Facebook ad by crisis has 450 likes and 120 comments till now.This latest Facebook ad by crisis has 450 likes and 120 comments till now.",
    },
    {
      owner: "Myntra",
      adLabelText:
        "This latest Facebook ad by crisis has 450 likes and 120 comments till now. This latest Facebook ad by crisis has 450 likes and 120 comments till now.This latest Facebook ad by crisis has 450 likes and 120 comments till now.",
    },
    {
      owner: "Myntra",
      adLabelText:
        "This latest Facebook ad by crisis has 450 likes and 120 comments till now. This latest Facebook ad by crisis has 450 likes and 120 comments till now.This latest Facebook ad by crisis has 450 likes and 120 comments till now.",
    },
    {
      owner: "Myntra",
      adLabelText:
        "This latest Facebook ad by crisis has 450 likes and 120 comments till now. This latest Facebook ad by crisis has 450 likes and 120 comments till now.This latest Facebook ad by crisis has 450 likes and 120 comments till now.",
    },
    {
      owner: "Myntra",
      adLabelText:
        "This latest Facebook ad by crisis has 450 likes and 120 comments till now. This latest Facebook ad by crisis has 450 likes and 120 comments till now.This latest Facebook ad by crisis has 450 likes and 120 comments till now.",
    },
    {
      owner: "Myntra",
      adLabelText:
        "This latest Facebook ad by crisis has 450 likes and 120 comments till now. This latest Facebook ad by crisis has 450 likes and 120 comments till now.This latest Facebook ad by crisis has 450 likes and 120 comments till now.",
    },
    {
      owner: "Myntra",
      adLabelText:
        "This latest Facebook ad by crisis has 450 likes and 120 comments till now. This latest Facebook ad by crisis has 450 likes and 120 comments till now.This latest Facebook ad by crisis has 450 likes and 120 comments till now.",
    },
    {
      owner: "Myntra",
      adLabelText:
        "This latest Facebook ad by crisis has 450 likes and 120 comments till now. This latest Facebook ad by crisis has 450 likes and 120 comments till now.This latest Facebook ad by crisis has 450 likes and 120 comments till now.",
    },
    {
      owner: "Myntra",
      adLabelText:
        "This latest Facebook ad by crisis has 450 likes and 120 comments till now. This latest Facebook ad by crisis has 450 likes and 120 comments till now.This latest Facebook ad by crisis has 450 likes and 120 comments till now.",
    },
    {
      owner: "Myntra",
      adLabelText:
        "This latest Facebook ad by crisis has 450 likes and 120 comments till now. This latest Facebook ad by crisis has 450 likes and 120 comments till now.This latest Facebook ad by crisis has 450 likes and 120 comments till now.",
    },
    {
      owner: "Myntra",
      adLabelText:
        "This latest Facebook ad by crisis has 450 likes and 120 comments till now. This latest Facebook ad by crisis has 450 likes and 120 comments till now.This latest Facebook ad by crisis has 450 likes and 120 comments till now.",
    },
    {
      owner: "Myntra",
      adLabelText:
        "This latest Facebook ad by crisis has 450 likes and 120 comments till now. This latest Facebook ad by crisis has 450 likes and 120 comments till now.This latest Facebook ad by crisis has 450 likes and 120 comments till now.",
    },
    {
      owner: "Myntra",
      adLabelText:
        "This latest Facebook ad by crisis has 450 likes and 120 comments till now. This latest Facebook ad by crisis has 450 likes and 120 comments till now.This latest Facebook ad by crisis has 450 likes and 120 comments till now.",
    },
    {
      owner: "Myntra",
      adLabelText:
        "This latest Facebook ad by crisis has 450 likes and 120 comments till now. This latest Facebook ad by crisis has 450 likes and 120 comments till now.This latest Facebook ad by crisis has 450 likes and 120 comments till now.",
    },
    {
      owner: "Myntra",
      adLabelText:
        "This latest Facebook ad by crisis has 450 likes and 120 comments till now. This latest Facebook ad by crisis has 450 likes and 120 comments till now.This latest Facebook ad by crisis has 450 likes and 120 comments till now.",
    },
    {
      owner: "Myntra",
      adLabelText:
        "This latest Facebook ad by crisis has 450 likes and 120 comments till now. This latest Facebook ad by crisis has 450 likes and 120 comments till now.This latest Facebook ad by crisis has 450 likes and 120 comments till now.",
    },
    {
      owner: "Myntra",
      adLabelText:
        "This latest Facebook ad by crisis has 450 likes and 120 comments till now. This latest Facebook ad by crisis has 450 likes and 120 comments till now.This latest Facebook ad by crisis has 450 likes and 120 comments till now.",
    },
    {
      owner: "Myntra",
      adLabelText:
        "This latest Facebook ad by crisis has 450 likes and 120 comments till now. This latest Facebook ad by crisis has 450 likes and 120 comments till now.This latest Facebook ad by crisis has 450 likes and 120 comments till now.",
    },
    {
      owner: "Myntra",
      adLabelText:
        "This latest Facebook ad by crisis has 450 likes and 120 comments till now. This latest Facebook ad by crisis has 450 likes and 120 comments till now.This latest Facebook ad by crisis has 450 likes and 120 comments till now.",
    },
    {
      owner: "Myntra",
      adLabelText:
        "This latest Facebook ad by crisis has 450 likes and 120 comments till now. This latest Facebook ad by crisis has 450 likes and 120 comments till now.This latest Facebook ad by crisis has 450 likes and 120 comments till now.",
    },
    {
      owner: "Myntra",
      adLabelText:
        "This latest Facebook ad by crisis has 450 likes and 120 comments till now. This latest Facebook ad by crisis has 450 likes and 120 comments till now.This latest Facebook ad by crisis has 450 likes and 120 comments till now.",
    },
    {
      owner: "Myntra",
      adLabelText:
        "This latest Facebook ad by crisis has 450 likes and 120 comments till now. This latest Facebook ad by crisis has 450 likes and 120 comments till now.This latest Facebook ad by crisis has 450 likes and 120 comments till now.",
    },
  ];
  const [isDataPresent] = useState(true);
  const [controller, dispatch] = useUIController();
  const { adDropdownVisibility } = controller;
  return (
    <>
      {isDataPresent ? (
        <>
          {AdCardsData.map((item, index) => (
            <motion.div
              key={index}
              className={`card ad-card-gradient ad-card lg:w-[calc(100%-24px)] inline-block`}
              variants={FADE_UP_ANIMATION_VARIANT}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              <div className="ad-card-header gap-3 p-3 w-full">
                <div className="ad-card-profile-img">
                  {/* <img src={ProfilePhoto} alt='pp' /> */}
                  <img src={ProfilePhoto} alt="pp" />
                </div>

                <div className="flex flex-wrap justify-between items-center w-10/12">
                  <span className="text-start text-sm w-1/2 line-clamp-2">
                    {item?.owner}
                  </span>
                  <div className="flex justify-end items-center gap-1 w-1/2">
                    <img src={TrendingLogo} alt="logo" />
                    <span className="text-[#55FFFC] text-xs">
                      {item?.network}
                    </span>
                  </div>
                </div>

                <motion.button
                  className="w-1/12"
                  variants={CLICK_ZOOM_IN}
                  whileTap="whileTap"
                  whileHover="whileHover"
                  onClick={(e) => {
                    setAdDropdownVisibility(
                      dispatch,
                      `adDropdown${index + 1}`,
                      !adDropdownVisibility[`adDropdown${index + 1}`]
                    );
                    e.stopPropagation();
                  }}
                >
                  <BsThreeDotsVertical className="mx-auto" />
                </motion.button>
                <AnimatePresence>
                  {adDropdownVisibility[`adDropdown${index + 1}`] && (
                    <ThreeDotDropdown />
                  )}
                </AnimatePresence>
              </div>
              <img className="product-img" src={AdProduct1} alt="product-img" />
              <span className="gradient-text flex justify-start items-start w-full m-3 info-text">
                {item?.adLabelText}
              </span>
            </motion.div>
          ))}
        </>
      ) : (
        <>
          <AdCardLoading />
          <AdCardLoading />
          <AdCardLoading />
          <AdCardLoading />
          <AdCardLoading />
          <AdCardLoading />
          <AdCardLoading />
          <AdCardLoading />
          <AdCardLoading />
          <AdCardLoading />
          <AdCardLoading />
          <AdCardLoading />
        </>
      )}
    </>
  );
}
