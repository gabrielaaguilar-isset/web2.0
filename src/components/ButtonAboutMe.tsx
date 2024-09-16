"use client";

import { usePathname } from "next/navigation";
const ButtonAboutMe = () => {
  const pathname = usePathname();
  return (
    <div>
      {pathname !== "/sobre-mi" && (
        <button className="bg-black text-white py-[16px] px-[42px] rounded-[35px] mt-8 ">
          Sobre mi
        </button>
      )}
    </div>
  );
};

export default ButtonAboutMe;
