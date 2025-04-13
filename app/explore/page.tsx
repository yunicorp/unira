"use client";

import Image from "next/image";
import UNIRA_LOGO from "@/../public/UNIRA_LOGO.png";
import anonymous from "@/../public/anonymous.png";
import FAST_LOGO from "@/../public/FAST_LOGO.png";
import FreeUnira from "@/../public/FreeUnira.png";
import secure from "@/../public/secure.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import styles from "./page.module.css";
import "./splide.css";

export default function Explore() {
  return (
    <div className={styles.app}>
      <Splide>
        <SplideSlide>
          <Image src={UNIRA_LOGO} alt="Unira logo" />
          <h2>Unira</h2>
          <p>It is messaging app for students.</p>
        </SplideSlide>
        <SplideSlide>
          <Image src={anonymous} alt="Anonymous logo" />
          <h2>Anonymous</h2>
          <p>Unira provides anonymous messaging service</p>
        </SplideSlide>
        <SplideSlide>
          <Image src={FAST_LOGO} alt="Fast logo" />
          <h2>Fast</h2>
          <p>Unira delivers messages faster</p>
        </SplideSlide>
        <SplideSlide>
          <Image src={FreeUnira} alt="Free logo" />
          <h2>Free</h2>
          <p>Unira provides free unlimited cloud storage for chats and media</p>
        </SplideSlide>
        <SplideSlide>
          <Image src={secure} alt="Secure logo" />
          <h2>Secure</h2>
          <p>Unira keeps your message safe from hacker attacks.</p>
        </SplideSlide>
      </Splide>
    </div>
  );
}
