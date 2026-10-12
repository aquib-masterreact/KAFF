import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <section className="section not-found">
      <div className="container">
        <span className="eyebrow">404</span>
        <h1>Page not found</h1>
        <p>The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
        <Link to="/" className="btn btn--primary">Back to home</Link>
      </div>
    </section>
  );
}

export default NotFoundPage;
