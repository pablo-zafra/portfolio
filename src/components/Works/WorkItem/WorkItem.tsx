"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import mainImg from "../../../../public/img/work/custom-brand-days/main.jpg";

gsap.registerPlugin(ScrollTrigger);

const WorkItem = () => {
  const imgWrapperRef = useRef(null);
  const txtWrapperRef = useRef(null);

  useEffect(() => {
    const imgWrapper = imgWrapperRef.current;

    // Crear un timeline para controlar los tamaños en los puntos específicos
    const workItemImgAnim = gsap.timeline({
      scrollTrigger: {
        trigger: imgWrapper,
        start: "bottom 85%",
        end: "top 5%",
        scrub: true,
      },
    });

    workItemImgAnim
      .to(imgWrapper, { width: "100%", duration: 1, ease: "power1.inOut" })
      .to(imgWrapper, { width: "50%", duration: 1, ease: "power1.inOut" });

    const workItemImgAnimTrigger = workItemImgAnim.scrollTrigger;

    return () => {
      if (workItemImgAnimTrigger) {
        workItemImgAnimTrigger.kill();
      }
    };
  }, []);

  useEffect(() => {
    const txtWrapper = txtWrapperRef.current;

    // Crear un timeline para controlar los tamaños en los puntos específicos
    const workItemTxtAnim = gsap.timeline({
      scrollTrigger: {
        trigger: txtWrapper,
        start: "bottom 75%",
        end: "top 10%",
        scrub: true,
      },
    });

    workItemTxtAnim
      .to(txtWrapper, { opacity: "0", duration: 1, ease: "power1.inOut" })
      .to(txtWrapper, { opacity: "1", duration: 1, ease: "power1.inOut" })
      .to(txtWrapper, { opacity: "1", duration: 1, ease: "power1.inOut" })
      .to(txtWrapper, { opacity: "0", duration: 1, ease: "power1.inOut" });

    const workItemTxtAnimTrigger = workItemTxtAnim.scrollTrigger;

    return () => {
      if (workItemTxtAnimTrigger) {
        workItemTxtAnimTrigger.kill();
      }
    };
  }, []);

  return (
    <div className="work-item w-full flex flex-row gap-11">
      <div className="flex justify-center items-end flex-col flex-1">
        <div
          ref={txtWrapperRef}
          className="sticky top-1/2 bottom-1/2 h-0 opacity-0"
        >
          <h3 className="text-4xl font-semibold">Custom Brand Days</h3>
          <p className="text-lg text-gray mt-2.5">Rich Media, Visual Design</p>
        </div>
      </div>
      <div className="flex-1 flex-col flex items-end">
        <div
          ref={imgWrapperRef}
          className="flex items-center w-1/2 aspect-4/3 overflow-hidden bg-white rounded-lg"
        >
          <Image
            width={1920}
            height={1080}
            src={mainImg.src}
            alt="Custom Brand Days"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default WorkItem;
