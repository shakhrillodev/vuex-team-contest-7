import "./hiring.scss";

const Hiring = () => {
  return (
    <section style={{background: "white"}}>
        <div className="home-hiring box">
        <h3 className="big-title" style={{textAlign: 'center'}}>
          It’s not a pipeline problem.
          <br />
          <span className="colourful-text">It’s a spotlight problem.</span>
        </h3>
        

        <p className="description">
            Tech hiring needs a reset. From prepping for jobs and practicing coding
            to running a world-class technical interview, give developers the tools
            they need to showcase their skills, passion, and potential.
        </p>

        <ul>
            <li>
            <a href="#community">Prep</a>
            </li>

            <li>
            <a href="#screen">Screen</a>
            </li>

            <li>
            <a href="#interview">Interview</a>
            </li>
        </ul>
        </div>
    </section>
  );
};

export default Hiring;
