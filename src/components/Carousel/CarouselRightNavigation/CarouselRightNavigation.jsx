import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react"; // Correct import
import styles from "./CarouselRightNavigation.module.css";
import RightArrow from "../../../assets/RightArrow.svg?react";

export default function CarouselRightNavigation() {
  const swiper = useSwiper();
  const [isEnd, setIsEnd] = useState(true); // Initialize to true

  useEffect(() => {
    if (swiper) {
      setIsEnd(swiper.isEnd);

      const updateEnd = () => {
        setIsEnd(swiper.isEnd);
      };

      swiper.on("slideChange", updateEnd);

      return () => {
        swiper.off("slideChange", updateEnd); // Clean up event listener
      };
    }
  }, [swiper]);

  return (
    <div className={styles.rightNavigation}>
      {!isEnd && swiper && <RightArrow onClick={() => swiper.slideNext()} />}
    </div>
  );
}