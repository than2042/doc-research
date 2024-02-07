"use client";

import Image from "next/image";
import dancer1 from "@/../public/move1.png";
import dancer2 from "@/../public/move2.png";
import AnimateIn from "../component/animation";

import { useState, useEffect } from "react";
export default function page() {
  const [boolean, setBoolean] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setBoolean((currentBoolean) => !currentBoolean);
    }, 200);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="animate">
      <AnimateIn>
        <Image src={boolean ? dancer1 : dancer2} />
      </AnimateIn>
    </div>
  );
}
