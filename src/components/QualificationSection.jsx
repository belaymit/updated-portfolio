import PropTypes from 'prop-types';

const QualificationSection = ({ toggle }) => (
  <div className="qualification-sections">
    <div
      className={toggle === 1 ? 'qualification-content qualification-content-active'
        : 'qualification-content'}
    >
      <div className="qualification-data" data-aos="fade-up">
        <div>
          <h3 className="qualification-title">Microverse</h3>
          <span className="qualification-subtitle">
            Full Stack Web Development
          </span>
          <div className="qualification-calendar">
            <i className="uil uil-calendar-alt" />
            2022-Present
          </div>
        </div>
        <div>
          <span className="qualification-rounder" />
          <span className="qualification-line" />
        </div>
      </div>

      <div className="qualification-data">
        <div />
        <div>
          <span className="qualification-rounder" />
          <span className="qualification-line" />
        </div>
        <div>
          <h3 className="qualification-title py-2" data-aos="fade-left">Adama Science and Technology University</h3>
          <span className="qualification-subtitle">
            MSc. in Computer Science and Engineering
          </span>
          <div className="qualification-calendar" data-aos="fade-up">
            <i className="uil uil-calendar-alt" />
            2021-Present
          </div>
        </div>
      </div>

      <div className="qualification-data">
        <div>
          <h3 className="qualification-title py-3" data-aos="fade-up">Mekelle Institute of Technology</h3>
          <span className="qualification-subtitle">
            BSc. in Computer Science and Engineering
          </span>
          <div className="qualification-calendar">
            <i className="uil uil-calendar-alt" />
            2014-2018
          </div>
        </div>
        <div>
          <span className="qualification-rounder" />
          <span className="qualification-line" />
        </div>
      </div>
    </div>

    <div className={toggle === 2 ? 'qualification-content qualification-content-active'
      : 'qualification-content'}
    >
       <div className="qualification-data">
        <div>
          <h3 className="qualification-title">10 Academy</h3>
          <span className="qualification-subtitle">
            Front-end Developer
          </span>
          <div className="qualification-calendar">
            <i className="uil uil-calendar-alt" />
            June 2023-Present
          </div>
        </div>
        <div>
          <span className="qualification-rounder" />
          <span className="qualification-line" />
        </div>
      </div>
      <div className="qualification-data">
        <div>
          <h3 className="qualification-title">Microverse</h3>
          <span className="qualification-subtitle">
            Full Stack Web Developer
          </span>
          <div className="qualification-calendar">
            <i className="uil uil-calendar-alt" />
            2022-Present
          </div>
        </div>
        <div>
          <span className="qualification-rounder" />
          <span className="qualification-line" />
        </div>
      </div>

      <div className="qualification-data">
        <div />
        <div>
          <span className="qualification-rounder" />
          <span className="qualification-line" />
        </div>
        <div>
          <h3 className="qualification-title">Microverse</h3>
          <span className="qualification-subtitle">
            Student Mentor
          </span>
          <div className="qualification-calendar">
            <i className="uil uil-calendar-alt" />
            2022-Present
          </div>
        </div>
      </div>

      <div className="qualification-data">
        <div>
          <h3 className="qualification-title">Haramaya University</h3>
          <span className="qualification-subtitle">
            Teacher
          </span>
          <div className="qualification-calendar">
            <i className="uil uil-calendar-alt" />
            2019-2021
          </div>
        </div>
        <div>
          <span className="qualification-rounder" />
          <span className="qualification-line" />
        </div>
      </div>

    </div>

  </div>
);

QualificationSection.propTypes = {
  toggle: PropTypes.number.isRequired,
};

export default QualificationSection;