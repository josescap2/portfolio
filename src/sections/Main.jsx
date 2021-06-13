import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import image from "./../assets/ian-schneider-TamMbr4okv4-unsplash.jpg";

const styles = {
  background: {
    backgroundImage: `url("${image}")`,
  },
};

const Main = () => {
  return (
    <div className="main">
      <div className="image-wrapper" style={styles.background}>
        <div className="overlay"></div>
      </div>
      <div className="text-wrapper">
        <h1 className="title">Hi! Welcome to my page.</h1>
        <h3 className="introduce">Let me introduce myself.</h3>
        <p className="paragraph">
          I'm <span className="bolder">Juan José</span> and I'm a{" "}
          <span className="bolder">fullstack developer</span>. Could you see my
          projects, work experience and professional career?
        </p>
      </div>
      <p className="arrow">
        <FontAwesomeIcon icon={faArrowDown} />
      </p>
    </div>
  );
};

export default Main;
