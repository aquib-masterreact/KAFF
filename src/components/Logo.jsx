import { Link } from "react-router-dom";
import kaffLogo from "../assets/kaff_logo.png";

function Logo({ light = false }) {
  return (
    <Link to="/" className={`logo ${light ? "logo--light" : ""}`} aria-label="KAFF Solutions home">
      <img className="logo__mark" src={kaffLogo} alt="" width="71" height="40" />
      <span className="logo__text">
        KAFF <span>Solutions</span>
      </span>
    </Link>
  );
}

export default Logo;
