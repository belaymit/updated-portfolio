import { createElement, useState } from "react";
import { content } from '../common/Content'
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    backgroundColor: "#FFFFFF",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "34rem",
    zIndex: 99,
  },
  overlay: {
    padding: "2rem",
  },
};

const mediaQuery = "@media (max-width: 768px)";


customStyles.content = {
  ...customStyles.content,
  [mediaQuery]: {
    maxWidth: "20rem", 
    width: "95%", 
  },
};

Modal.setAppElement("#root");

const Skills = () => {
  const { skills } = content;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectSkill, setSelectSkill] = useState(null);

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <section className="min-h-fit bg-bg_light_primary" id="skills">
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <div className="flex items-center gap-2">
        <img className="h-10" src={selectSkill?.logo} alt="..." />
        <h6>{selectSkill?.name}</h6>
      </div>
      <br />
      <ul className="list-decimal px-4 font-Poppins sm:text-sm text-xs !leading-7">
        {selectSkill?.skillList.map((item, index) => (
         <li key={index}>{item}</li>
        ))}
      </ul>
      <br />
      <div className="flex justify-end">
        <button onClick={closeModal} className="btn">
          Close
        </button>
      </div>
    </Modal>
    <div className="md:container px-5 py-14">
      <h2 className="title md:text-center" data-aos="fade-down">
        {skills.title}
      </h2>
      <h4 className="subtitle md:text-center" data-aos="fade-down">
        {skills.subtitle}
      </h4>
      <br />
      <div className="flex flex-wrap gap-4 justify-center">
        {skills.skills_content.map((skill, i) => (
          <div
            key={i}
            data-aos="fade-up"
            data-aos-delay={i * 400}
            className="bg-white sm:cursor-pointer 
             relative group w-full flex items-center
              gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200"
          >
            <div>
              <img
                src={skill.logo}
                alt="..."
                className="w-12 group-hover:scale-125 duration-200"
              />
            </div>
            <div>
              <h6>{skill.name}</h6>
              <p className="italic">{skill.para}</p>
              <div
                onClick={() => {
                  setSelectSkill(skill);
                  openModal();
                }}
                className="text-xl absolute top-3 right-3"
              >
                {createElement(skills.icon)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default Skills