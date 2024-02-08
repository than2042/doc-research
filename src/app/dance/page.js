"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import dancer1 from "@/../public/move1.png";
import dancer2 from "@/../public/move2.png";
import dancer3 from "@/../public/turn2.png";
import AnimateIn from "../components/animation";

let i = 1;

export default function Dance() {
  const listOfImages = [dancer1, dancer2, dancer3];
  const [boolean, setBoolean] = useState(false);
  const [spin, setSpin] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      i++;
      if (i === 10 || i === 11 || i === -5 || i === -6) {
        setSpin(true);
      } else if (i === 12) {
        i = -13;
        setSpin(false);
      } else {
        setSpin(false);
      }
      setBoolean((currentBoolean) => !currentBoolean);
    }, 200);

    return () => {
      clearInterval(interval);
    };
  }, []);

  function dancer() {
    if (boolean) {
      return listOfImages[0];
    }
    return listOfImages[1];
  }

  return (
    <div className="animate">
      <Image
        width={0}
        height={0}
        sizes="100vw"
        src="/dance_floor_background.jpg"
        alt=""
        className="image"
      />
      <div className="position">
        <AnimateIn>
          <Image
            src={spin ? listOfImages[2] : dancer()}
            alt="dancer"
            priority
          />
        </AnimateIn>
      </div>
      <div className="music">
        <audio controls src="dance.mp3"></audio>
      </div>
    </div>
  );
}
