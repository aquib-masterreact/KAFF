import { useState } from "react";
import PageHeader from "../components/PageHeader";
import Icon from "../components/Icon";
import { company, services } from "../data/site";

const ENDPOINT = "https://fir-react-3119e-default-rtdb.firebaseio.com/userDataRecords.json";

const emptyForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  message: "",
  consent: false,
};

function ContactPage() {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: "loading", message: "" });
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, submittedAt: new Date().toISOString() }),
      });
      if (!res.ok) throw new Error(`Request failed (${res.status})`);
      setForm(emptyForm);
      setStatus({ state: "success", message: "Thank you! Our team will get back to you shortly." });
    } catch {
      setStatus({
        state: "error",
        message: `Sorry, something went wrong. Please try again or email us at ${company.email}.`,
      });
    }
  };

  return (
    <>
      <PageHeader
        eyebrow="Contact us"
        title="Let's talk about your project"
        text="Request a free consultation, a demo or a quote. We usually respond within one business day."
      />

      <section className="section">
        <div className="container contact">
          <aside className="contact__info">
            <h2>Get in touch</h2>
            <p>
              Ready to transform your business with {company.name}? Share a few details and the right expert
              from our team will reach out.
            </p>
            <ul className="contact__list">
              <li>
                <div className="icon-badge icon-badge--sm"><Icon name="mail" size={20} /></div>
                <div>
                  <small>Email</small>
                  <a href={`mailto:${company.email}`}>{company.email}</a>
                </div>
              </li>
              {company.phone && (
                <li>
                  <div className="icon-badge icon-badge--sm"><Icon name="phone" size={20} /></div>
                  <div>
                    <small>Phone</small>
                    <a href={`tel:${company.phone.replace(/\s/g, "")}`}>{company.phone}</a>
                  </div>
                </li>
              )}
              <li>
                <div className="icon-badge icon-badge--sm"><Icon name="pin" size={20} /></div>
                <div>
                  <small>Location</small>
                  <span>{company.address}</span>
                </div>
              </li>
            </ul>
          </aside>

          <form className="card contact__form" onSubmit={onSubmit}>
            <div className="form-row">
              <label className="field">
                <span>First name *</span>
                <input name="firstName" value={form.firstName} onChange={onChange} required autoComplete="given-name" />
              </label>
              <label className="field">
                <span>Last name *</span>
                <input name="lastName" value={form.lastName} onChange={onChange} required autoComplete="family-name" />
              </label>
            </div>
            <div className="form-row">
              <label className="field">
                <span>Work email *</span>
                <input type="email" name="email" value={form.email} onChange={onChange} required autoComplete="email" />
              </label>
              <label className="field">
                <span>Phone</span>
                <input type="tel" name="phone" value={form.phone} onChange={onChange} autoComplete="tel" />
              </label>
            </div>
            <div className="form-row">
              <label className="field">
                <span>Company</span>
                <input name="company" value={form.company} onChange={onChange} autoComplete="organization" />
              </label>
              <label className="field">
                <span>Service of interest</span>
                <select name="service" value={form.service} onChange={onChange}>
                  <option value="">Select a service</option>
                  {services.map((s) => (
                    <option key={s.slug} value={s.title}>{s.title}</option>
                  ))}
                  <option value="Other">Other</option>
                </select>
              </label>
            </div>
            <label className="field">
              <span>How can we help? *</span>
              <textarea name="message" rows="5" value={form.message} onChange={onChange} required />
            </label>
            <label className="checkbox">
              <input type="checkbox" name="consent" checked={form.consent} onChange={onChange} required />
              <span>I agree that {company.name} may contact me at the email address or phone number above.</span>
            </label>
            <button type="submit" className="btn btn--primary btn--block" disabled={status.state === "loading"}>
              {status.state === "loading" ? "Sending…" : "Send message"}
            </button>
            {status.message && (
              <p className={`form-status form-status--${status.state}`} role="status">
                {status.message}
              </p>
            )}
          </form>
        </div>
      </section>
    </>
  );
}

export default ContactPage;
