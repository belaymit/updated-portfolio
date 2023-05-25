import { content } from "../common/Content"

const MyPage = () => {
  const {Hireme} = content
  return (
    <section className="bg-bg_light_primary">
      <div className="md:container px-5 pt-14">
        <h2 className="title sm:text-center" data-aos="fade-down">
          {Hireme.title}
        </h2>
        <h4 className="subtitle sm:text-center py-4" data-aos="fade-down">
          {Hireme.subtitle}
        </h4>
        <br />
        <div className="flex items-center md:flex-row flex-col-reverse ">
          <img
            src={Hireme.image1}
            alt="..."
            data-aos="fade-right"
            className="max-w-sm md:block hidden"
          />
          <img
            src={Hireme.image2}
            data-aos="fade-up"
            alt="..."
            className="max-w-sm md:hidden"
          />
          <div
            data-aos="fade-left"
            className="border-2 border-dark_primary max-w-[570px]
           p-4 shadow-sm rounded-xl rounded-br-[4rem] md:min-w-[20rem] mt-0 md:mt-[-80px]"
          >
            <p className="leading-7">{Hireme.para}</p>
            <br />
            <button className="btn bg-dark_primary text-white">
              {Hireme.btnText}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MyPage