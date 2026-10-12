function PageHeader({ eyebrow, title, text }) {
  return (
    <section className="page-header">
      <div className="container">
        {eyebrow && <span className="eyebrow eyebrow--light">{eyebrow}</span>}
        <h1>{title}</h1>
        {text && <p>{text}</p>}
      </div>
    </section>
  );
}

export default PageHeader;
