import { Link } from "react-router-dom";
import Logo from "./Logo";
import Icon from "./Icon";
import { company, services } from "../data/site";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo light />
          <p>
            {company.name} is an IT services and consulting company helping businesses plan, build and
            run technology that drives growth.
          </p>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/expertise">Expertise</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4>Services</h4>
          <ul>
            {services.slice(0, 5).map((s) => (
              <li key={s.slug}>
                <Link to={`/services#${s.slug}`}>{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Get in touch</h4>
          <ul className="footer__contact">
            <li>
              <Icon name="mail" size={18} />
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </li>
            {company.phone && (
              <li>
                <Icon name="phone" size={18} />
                <a href={`tel:${company.phone.replace(/\s/g, "")}`}>{company.phone}</a>
              </li>
            )}
            <li>
              <Icon name="pin" size={18} />
              <span>{company.address}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} {company.name}. All rights reserved.</span>
        <span>{company.domain}</span>
      </div>
    </footer>
  );
}

export default Footer;
