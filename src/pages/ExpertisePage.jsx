import PageHeader from "../components/PageHeader";
import CallToAction from "../components/CallToAction";
import Icon from "../components/Icon";
import { industries, techStack } from "../data/site";

function ExpertisePage() {
  return (
    <>
      <PageHeader
        eyebrow="Our expertise"
        title="Deep skills across modern technology"
        text="We pick proven tools for each job, and the right expertise for each industry."
      />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Technology stack</span>
            <h2>Platforms and tools we work with</h2>
          </div>
          <div className="grid grid--3">
            {techStack.map((t) => (
              <div key={t.group} className="card card--plain">
                <h3>{t.group}</h3>
                <div className="tags">
                  {t.items.map((item) => (
                    <span key={item} className="tag">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Industries</span>
            <h2>Industries we serve</h2>
            <p>Domain knowledge that helps us understand your challenges faster and build the right solution.</p>
          </div>
          <div className="grid grid--4">
            {industries.map((ind) => (
              <div key={ind.title} className="industry">
                <div className="icon-badge"><Icon name={ind.icon} /></div>
                <h3>{ind.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
}

export default ExpertisePage;
