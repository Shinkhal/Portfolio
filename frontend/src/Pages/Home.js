import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { personalDetails } from "../Details";


function Home() {
  const { name, img } = personalDetails;
  const [roles, setRoles] = useState([
    "Web Developer",
    "Mobile Developer",
    "UI/UX Designer",
    "Coder",
    "Graphic Designer"
  ]);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  const h11 = useRef();
  const h12 = useRef();
  const myimageref = useRef();
  const buttonRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline();
    const animateFromLeft = (ref, delay) => {
      tl.from(
        ref.current,
        {
          x: "-100%",
          delay,
          opacity: 0,
          duration: 1.5, // Faster animation
          ease: "Power3.easeOut",
        },
        "<"
      );
    };

    animateFromLeft(h11, 0.8);
    animateFromLeft(h12, 0.5);

    tl.from(
      myimageref.current,
      {
        x: "200%",
        delay: 0.5,
        opacity: 0,
        duration: 2,
        ease: "Power3.easeOut",
      },
      "<"
    );

    tl.from(
      buttonRef.current,
      {
        y: "100%",
        opacity: 0,
        duration: 1.5,
        ease: "Power3.easeOut",
      },
      "<"
    );

    // Role changing animation
    const roleChangeInterval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) =>
        prevIndex === roles.length - 1 ? 0 : prevIndex + 1
      );
    }, 1000);

    return () => clearInterval(roleChangeInterval);
  }, []);

  return (
    <main className="container mx-auto max-w-screen-xl section md:flex justify-between items-center px-4 md:px-0  bg-white dark:bg-dark-mode" >
      <div>
        <h1
          ref={h11}
          className="text-3xl md:text-4xl lg:text-5xl text-dark-heading dark:text-light-heading xl:text-6xl xl:leading-tight font-bold"
        >
          Hello,<br />I am <br />
        </h1>
        <h1
          ref={h12}
          className="text-3xl md:text-4xl lg:text-5xl bg-clip-text bg-gradient text-transparent xl:text-6xl xl:leading-tight font-bold"
        >
          {name}
        </h1>
        <h2
          ref={buttonRef}
          className="text-3xl md:text-4xl lg:text-5xl text-dark-heading dark:text-light-heading xl:text-6xl xl:leading-tight font-bold"
        >
          {roles[currentRoleIndex]}
        </h2>
        <div className="mt-5">
          <a
            href="/shinkhal_sinha_cv.pdf" 
            download="shinkhal_sinha_cv.pdf" 
            className="inline-block bg-blue-500 text-white font-bold py-3 px-6 rounded hover:bg-blue-700 transition duration-300"
          >
            Download CV
          </a>
        </div>
      </div>
      <div className="mt-5 md:mt-0">
        <img
          ref={myimageref}
          className="w-full md:w-2/3 xl:w-1/2 md:ml-auto"
          src={img}
          alt="shinkhal sinha"
          onError={(e) => (e.target.src = "path/to/fallback/image.jpg")}
        />
      </div>
    </main>
  );
}

export default Home;
