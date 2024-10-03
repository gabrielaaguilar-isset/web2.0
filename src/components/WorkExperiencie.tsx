import Titles from "./Titles";
import { Subtitles } from "./Subtitles";
import ButtonAboutMe from "./ButtonAboutMe";



 

const works = [
  {
    date: "Enero 2021 - Actualidad",
    worktitle: "Desarrollo web independiente",
      backgroundPelotita: "bg-purple",
    description:
      "Creación de sitios web y aplicaciones web personalizadas utilizando Wordpress, Elementor, Figma y Photoshop",
  },
  {
    date: "Diciembre 2023 - Marzo 2024",
    worktitle: "Webmaster - Dilo Club",
    backgroundPelotita: "bg-yellow",
    description:
      "Trabajo tiempo parcial donde se creó la página web de la academia, además de la creación de la imagen de la marca Tubachi con su página web",
  },
  {
    date: "Agosto 2023 - Marzo 2024",
    worktitle: "Webmaster | Community Manager - The Pole Garage",
    backgroundPelotita: "bg-yellow",
    description:
      "Creación de página web, creación de imágenes y contenido para redes sociales, encargada de atención al cliente.",
  },
];

const WorkExperiencie = () => {

  return (
    <div className="mb-[100px] mx-[20px] lg:px-[100px] 2xl:px-[150px] max-w-[1920px] 2xl:mx-auto">
      <div className=" flex flex-col lg:flex-row    lg:gap-44 lg:justify-between ">
        <div className="max-w-[207px] lg:max-w-[277px]">
          <Titles text="Experiencia laboral" customClass="text-left" />
        </div>
        <div className=" ">
          <Subtitles
            text="Para conocer más sobre las habilidades y la experiencia que hacen posible estos resultados, te invito a explorar la página Sobre mí. Allí podrás descubrir en detalle mi trayectoria profesional, las tecnologías que domino y cómo cada proyecto refleja mi compromiso con la excelencia."
            customClass="leading-[171%] text-black mt-2 lg:max-w-[838px]"
          />
          <ButtonAboutMe />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 2xl:gap-12 mt-24  ">
        {works.map(({ date, worktitle, description,backgroundPelotita }) => (
          <div className="bg-black rounded-[35px] p-[32px] h-full flex flex-col">
            <div className="flex justify-between items-center">
              <div className={` ${backgroundPelotita} w-[14px] h-[14px] rounded-full mr-4`}></div>
              <p className="font-medium text-[13px] text-[#929292]">{date}</p>
            </div>
            <h2 className="font-semibold text-[19px] md:text-[24px] leading-[150%] text-white mt-[24px]">
              {worktitle}
            </h2>
            <h3 className="font-light text-white/60 text-[16px] mt-[36px] lg:text-[18px] ">
              {description}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperiencie;
