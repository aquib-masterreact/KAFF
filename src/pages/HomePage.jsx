import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import ServiceCard from "../components/ServiceCard";
import CallToAction from "../components/CallToAction";
import { services, values, process, industries } from "../data/site";

function HeroVisual() {
  return (
    <div className="hero__visual" aria-hidden="true">
      <div className="hero__window">
        <div className="hero__window-bar">
          <span /><span /><span />
        </div>
        <div className="hero__window-body">
          <div className="hero__metric">
            <small>Deployment</small>
            <strong>Successful</strong>
            <div className="hero__progress"><i /></div>
          </div>
          <div className="hero__bars">
            {[40, 65, 50, 80, 70, 95].map((h, i) => (
              <span key={i} style={{ height: `${h}%` }} />
            ))}
          </div>
          <div className="hero__lines">
            <span /><span /><span />
          </div>
        </div>
      </div>
      <div className="hero__chip hero__chip--a">
        <Icon name="cloud" size={18} /> Cloud ready
      </div>
      <div className="hero__chip hero__chip--b">
        <Icon name="shield" size={18} /> Secure by design
      </div>
    </div>
  );
}

function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__content">
            <span className="eyebrow eyebrow--light">IT Services &amp; Consulting</span>
            <h1>
              Technology that moves <span className="gradient-text">your business forward</span>
            </h1>
            <p>
              KAFF Solutions helps startups and enterprises plan, build and scale digital products, from
              strategy and custom software to cloud, data and managed IT.
            </p>
            <div className="hero__actions">
              <Link to="/contact" className="btn btn--primary">
                Start a project <Icon name="arrow" size={18} />
              </Link>
              <Link to="/services" className="btn btn--ghost">
                Explore services
              </Link>
            </div>
            <ul className="hero__ticks">
              <li><Icon name="check" size={18} /> Free consultation</li>
              <li><Icon name="check" size={18} /> Agile delivery</li>
              <li><Icon name="check" size={18} /> Ongoing support</li>
            </ul>
          </div>
          <HeroVisual />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">What we do</span>
            <h2>End-to-end IT services under one roof</h2>
            <p>From the first strategy session to round-the-clock support, we cover the full technology lifecycle.</p>
          </div>
          <div className="grid grid--4">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container split">
          <div>
            <span className="eyebrow">Why KAFF Solutions</span>
            <h2>A technology partner that thinks like your business</h2>
            <p className="lead">
              We combine consulting insight with hands-on engineering, so every recommendation we make is one
              we can deliver.
            </p>
            <Link to="/about" className="btn btn--outline">
              More about us
            </Link>
          </div>
          <div className="grid grid--2">
            {values.map((v) => (
              <div key={v.title} className="feature">
                <div className="icon-badge icon-badge--sm">
                  <Icon name={v.icon} size={20} />
                </div>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">How we work</span>
            <h2>A proven, transparent process</h2>
          </div>
          <ol className="steps">
            {process.map((p, i) => (
              <li key={p.title} className="step">
                <span className="step__num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Industries</span>
            <h2>Solutions tailored to your industry</h2>
          </div>
          <div className="pills">
            {industries.map((ind) => (
              <div key={ind.title} className="pill">
                <Icon name={ind.icon} size={20} />
                {ind.title}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
}

export default HomePage;
