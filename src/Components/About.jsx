import "./comp.css";

function About() {
  return (
    <div className="about" style={{ padding: "2rem" }}>
      <div className="heading">
        <h1>KAFF Solutions</h1>
        <br />
        <p >
          KAFF Solutions is a forward-thinking Information Technology company
          specializing in cutting-edge Software as a Service (SaaS) and Platform
          as a Service (PaaS) solutions. We empower businesses of all sizes and
          industries to thrive in today&apos;s dynamic digital landscape.
        </p>
      </div>
      <div className="image" style={{ float: "right" }}>
        <img
          src="https://appinventiv.com/wp-content/uploads/sites/1/2022/06/The-Ultimate-Guide-to-Software-Development-05-scaled.webp"
          width={500}
          height={500}
          className="responsiveImg"
          alt="KAFF Solutions"
        />
      </div>
    </div>
  );
}

export default About;
