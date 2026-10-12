import PageHeader from "../components/PageHeader";
import CallToAction from "../components/CallToAction";
import Icon from "../components/Icon";
import { company, values } from "../data/site";

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="Your partner for practical, scalable technology"
        text={`${company.name} is an IT services and consulting company helping organisations of every size thrive in a digital-first world.`}
      />

      <section className="section">
        <div className="container split">
          <div>
            <span className="eyebrow">Who we are</span>
            <h2>Consultants and engineers on one team</h2>
          </div>
          <div className="prose">
            <p>
              Founded in {company.founded}, {company.name} brings together experienced consultants, architects
              and developers who share one goal: delivering technology that creates measurable business value.
            </p>
            <p>
              We work across custom software, cloud, data, CRM and enterprise applications, SaaS and PaaS
              platforms, digital marketing and managed IT. Whether you are a startup building your first
              product or an established business modernising legacy systems, we tailor our approach to your
              needs, budget and timelines.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container grid grid--2">
          <div className="card card--plain">
            <div className="icon-badge"><Icon name="target" /></div>
            <h3>Our mission</h3>
            <p>
              To provide innovative, reliable and scalable technology solutions that help organisations
              streamline operations, improve efficiency and reach new heights of success.
            </p>
          </div>
          <div className="card card--plain">
            <div className="icon-badge"><Icon name="rocket" /></div>
            <h3>Our vision</h3>
            <p>
              To be the most trusted technology partner for growing businesses, known for honest advice,
              quality engineering and long-term relationships.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Our values</span>
            <h2>What you can expect from us</h2>
          </div>
          <div className="grid grid--4">
            {values.map((v) => (
              <div key={v.title} className="feature">
                <div className="icon-badge icon-badge--sm"><Icon name={v.icon} size={20} /></div>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
}

export default AboutPage;
