import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface Props {
    title: string;
    url: string;
    type: string;
    description: string;
    open: boolean;
    onClose: () => void;
  }
  
const ModalPortfolio = ({title, url,  type, description, open, onClose}: Props) => {

  
  return (
    <div
    aria-hidden={!open}
    className={`fixed inset-0 z-50 flex justify-center items-center w-full flex-col h-full ${
      open
        ? "visible bg-black   bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-90"
        : "invisible"
    }`}
    onClick={onClose}
  >
           <button
          type="button"
          className="text-white bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center lg:mr-24 mr-3 "
          onClick={onClose}
        >
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
            
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Cerrar Modal </span>
        </button>
    <div
      className={`relative bg-black rounded-[35px] shadow-lg max-w-[95%] sm:max-w-[85%] 2xl:max-w-[55%] w-full transform transition-transform overflow-y-auto lg:max-h-[850px] max-h-[650px] ${
        open ? "scale-100 opacity-100" : "scale-110 opacity-0"
      }`}
      onClick={(e) => e.stopPropagation()} // Prevenir el cierre al hacer clic dentro del modal
    >
     
      <div className="flex items-center justify-between p-4 md:p-5 rounded-[35px] ">
        <div className="flex items-center py-4 lg:px-8 px-6 bg-[#f7f7fa] rounded-[35px] w-full  ">
          <hr className="w-[54px] my-4 bg-black border mr-3 z-20" />
          <div className="flex justify-between w-full">
            <h3 className="font-semibold text-black text-[17px] z-20">
              {title}
            </h3>
            <h4 className="font-regular text-black text-[17px] ">{type}</h4>
          </div>
        </div>

    
      </div>
      <div className="lg:p-4 md:p-5 space-y-4 bg-purple lg:mx-9 mx-5 py-6 px-3 rounded-[35px] ">
        <p className="text-[17px] lg:text-[19px] leading-relaxed text-white font-regular">
          {description}{" "}
  
        </p>
        <div className="flex gap-4">
          <Link href={url} target="_blank" className="py-2.5 px-6 border text-black bg-white border-white  rounded-[35px] text-[15px] lg:text-[17px] ">Ver pagina</Link>
          <button className="py-2.5 px-6 border text-black bg-white border-white  rounded-[35px] text-[15px] lg:text-[17px] ">Ver Mockup</button>

        </div>

      </div>
      <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
        <button
          onClick={onClose}
          type="button"
          className="py-2.5 px-8 ms-3 text-sm font-medium text-white focus:outline-none  rounded-[35px] border border-gray-200 hover:bg-gray-100 "
        >
          Cerrar
        </button>
      </div>
  
    </div>
  </div>
  )
}

export default ModalPortfolio