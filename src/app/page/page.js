"use client";

import Image from "next/image";
import dancer1 from "@/../public/move1.png";
import dancer2 from "@/../public/move2.png";
import dancer3 from "@/../public/turn1.png";
import dancer4 from "@/../public/turn2.png";
import dancer5 from "@/../public/jump.png";
import AnimateIn from "../component/animation";
import { useState, useEffect } from "react";

let i = 1;

export default function page() {
  const listOfImages = [dancer1, dancer2, dancer3, dancer4, dancer5];
  const [boolean, setBoolean] = useState(false);
  const [spin, setSpin] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      i++;
      console.log(i);
      if (i === 10 || i === 11) {
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

  function spinDancer() {
    if (i === 10 || i === 11) {
      return listOfImages[3];
    }
  }

  return (
    <div className="animate">
      <AnimateIn>
        <Image src={spin ? spinDancer() : dancer()} alt="dancer" priority />
      </AnimateIn>
    </div>
  );
}
