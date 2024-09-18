import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-black py-12 px-[50px] lg:px-[100px] 2xl:px-[150px] rounded-t-[55px]  ">
      <div className="flex  flex-col sm:flex-row   items-center sm:justify-between max-w-[1920px] m-auto">
        <div className="flex justify-center gap-8">
          <Link
            className="text-[16px] font-regular text-white/70 "
            href="https://www.linkedin.com/in/gabriela-aguilar01/"
            target="_blank"
          >
            Linkedin
          </Link>
          <Link
            className="text-[16px] font-regular text-white/70 "
            href="mailto:contacto.gabriela.aguilar@gmail.com"
            target="_blank"
          >
            Email
          </Link>
        </div>
        <h3 className="text-[18px] font-regular text-white/80 mt-2">
          Gabriela Aguilar © 2024
        </h3>
      </div>
    </div>
  );
};

export default Footer;
