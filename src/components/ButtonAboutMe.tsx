"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
const ButtonAboutMe = () => {
  const pathname = usePathname();
  return (
    <div>
      {pathname !== "/sobre-mi" && (
        <button className="bg-black text-white py-[16px] px-[42px] rounded-[35px] mt-8 ">
          <Link href="/sobre-mi" >
          Sobre mi

          </Link>
        </button>
      )}
    </div>
  );
};

export default ButtonAboutMe;
