import { Link } from "react-router-dom";
import Icon from "./Icon";

function CallToAction() {
  return (
    <section className="section">
      <div className="container">
        <div className="cta">
          <div>
            <h2>Have a project in mind?</h2>
            <p>Tell us about your goals and we&apos;ll recommend the right technology path, free of charge.</p>
          </div>
          <Link to="/contact" className="btn btn--light">
            Book a free consultation <Icon name="arrow" size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
