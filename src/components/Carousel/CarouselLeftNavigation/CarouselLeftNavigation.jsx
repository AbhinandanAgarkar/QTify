import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react"; // Correct import
import styles from "./CarouselLeftNavigation.module.css";
import LeftArrow from '../../../assets/LeftArrow.svg?react';

export default function CarouselLeftNavigation() {
  const swiper = useSwiper();
  const [isBeginning, setIsBeginning] = useState(true); // Initialize to true

  useEffect(() => {
    if (swiper) {
      setIsBeginning(swiper.isBeginning);

      const updateBeginning = () => {
        setIsBeginning(swiper.isBeginning);
      };

      swiper.on("slideChange", updateBeginning);

      return () => {
        swiper.off("slideChange", updateBeginning); // Clean up event listener
      };
    }
  }, [swiper]);

  return (
    <div className={styles.leftNavigation}>
      {!isBeginning && swiper && <LeftArrow onClick={() => swiper.slidePrev()} />}
    </div>
  );
}