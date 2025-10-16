import { projects } from "@/data/data";
import { PinContainer } from "./ui/Pin";
import { FaLocationArrow } from "react-icons/fa6";

export const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        Alguns <span className="text-purple">Projetos recentes</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map((item) => (
          <div
            key={item.id}
            className="lg:min-h-[32.5rem] sm:h-[41rem] sm:w-[570px] h-[32rem] flex items-center justify-center  w-[80-vw]"
          >
            <PinContainer title={item.linkReducer} href={item.link}>
              <div className="relative flex items-center justify-center sm:w-[570px] sm:h-[40vh] w-[80-vw] overflow-hidden h-[30vh]  mb-10">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                  <img src="/bg.png" alt="bg-img" />
                </div>
                <img
                  src={item.img}
                  alt={item.title}
                  className="z-10 absolute bottom-0"
                />
              </div>
              <h1 className="font bold lg:text-2xl md:text-xl text base line-clamp-1">
                {item.title}
              </h1>
              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                {item.des}
              </p>
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt={icon} className="p-2" />
                    </div>
                  ))}
                </div>
                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Acessar projeto
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};
