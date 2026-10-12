import PageHeader from "../components/PageHeader";
import CallToAction from "../components/CallToAction";
import Icon from "../components/Icon";
import { services } from "../data/site";

function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="IT services built around your goals"
        text="Pick a single service or combine them into an end-to-end engagement. Every solution is tailored to your business."
      />

      <section className="section">
        <div className="container service-list">
          {services.map((s, i) => (
            <article key={s.slug} id={s.slug} className={`service-row ${i % 2 ? "service-row--flip" : ""}`}>
              <div className="service-row__media">
                {s.image ? (
                  <img src={s.image} alt={s.title} loading="lazy" />
                ) : (
                  <div className="service-row__placeholder">
                    <Icon name={s.icon} size={72} />
                  </div>
                )}
              </div>
              <div className="service-row__body">
                <div className="icon-badge"><Icon name={s.icon} /></div>
                <h2>{s.title}</h2>
                <p className="lead">{s.summary}</p>
                <ul className="checklist">
                  {s.points.map((p) => (
                    <li key={p}><Icon name="check" size={18} /> {p}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CallToAction />
    </>
  );
}

export default ServicesPage;
