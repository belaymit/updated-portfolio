import { content } from "../common/Content"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

const Projects = () => {
  const { Projects } = content

  return (
    <section className="bg-bg_light_primary" id="projects">
    <div className="md:container px-5 pt-14 min-h-screen flex flex-col justify-between">
      <div>
        <h2 className="title md:text-center" data-aos="fade-down">
          {Projects.title}
        </h2>
        <h4 className="subtitle md:text-center py-4" data-aos="fade-down">
          {Projects.subtitle}
        </h4>
        <br />
      </div>
      <div className="flex items-center lg:flex-row flex-col-reverse gap-0">
        <img
          src={Projects.image}
          alt="..."
          data-aos="fade-right"
          className="max-w-[30vw] min-w-[22rem] rounded-full"
        />
        <Swiper
          pagination={{
            clickable: true,
          }}
          data-aos="fade-left"
          spaceBetween={20}
          modules={[Pagination]}
          className="rounded-3xl pb-16 max-w-xs md:max-w-[36rem] drop-shadow-primary self-start"
        >
          {Projects.project_content.map((content, i) => (
            <SwiperSlide
              key={i}
              className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit"
            >
              <img src={content.image} alt="..." className="w-full" />
              <div className="flex flex-col gap-1 mt-2">
                <h5 className="font-bold font-Poppins">{content.title}</h5>
                <button className="font-sm text-white self-end bg-slate-400 py-1 px-4 rounded-lg transition ease-in-out delay-150 hover:bg-slate-500">
                  <a href={content.link}>View Demo</a>
                </button>
                <button className="font-sm text-white self-end bg-blue-500 py-1 px-3 rounded-lg transition ease-in-out delay-150 hover:bg-blue-600">
                  <a href={content.link}>View Source</a>
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  </section>
  )
}

export default Projects