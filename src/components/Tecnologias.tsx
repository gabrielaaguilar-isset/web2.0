import react from "../assets/icons/react.svg";
import wordpress from "../assets/icons/wordpress.svg";
import nextJs from "../assets/icons/nextjs.svg";
import typeScript from "../assets/icons/typescript.svg";
import tailwind from "../assets/icons/tailwind.svg";
import mongoDb from "../assets/icons/mongodb.svg";
import photoshop from "../assets/icons/photshop.svg";

import figma from "../assets/icons/figma.svg";
import Image from "next/image";

const logos = [
  { alt: "logo wordpress", url: wordpress },
  { alt: "logo react", url: react },
  { alt: "logo next js", url: nextJs },
  { alt: "logo typescript", url: typeScript },
  { alt: "logo tailwind", url: tailwind },
  { alt: "logo figma", url: figma },
  { alt: "logo mongo db", url: mongoDb },
  { alt: "logo photoshop", url: photoshop },
];

const Tecnologias = () => {
  return (
    <div className="flex px-[20px] lg:px-[100px] 2xl:px-[150px] gap-5 flex-wrap mt-4 sm:gap-5 justify-center lg:gap-8 2xl:gap-16 pb-[100px]">
      {logos.map(({ alt, url }) => (
        <Image src={url} key={alt} alt={alt} className="w-24 h-auto sm:w-28 lg:w-32" />
      ))}
    </div>
  );
};

export default Tecnologias;
