import { Link } from "react-router-dom";
import Icon from "./Icon";

function ServiceCard({ service }) {
  return (
    <article className="card service-card">
      <div className="icon-badge">
        <Icon name={service.icon} />
      </div>
      <h3>{service.title}</h3>
      <p>{service.summary}</p>
      <Link to={`/services#${service.slug}`} className="link-arrow">
        Learn more <Icon name="arrow" size={16} />
      </Link>
    </article>
  );
}

export default ServiceCard;
