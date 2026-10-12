import { Link } from "react-router-dom";

function Logo({ light = false }) {
  return (
    <Link to="/" className={`logo ${light ? "logo--light" : ""}`} aria-label="KAFF Solutions home">
      <svg className="logo__mark" width="36" height="36" viewBox="0 0 36 36" aria-hidden="true">
        <rect width="36" height="36" rx="9" fill="url(#kaffGradient)" />
        <path d="M11 9v18M11 18l9-9M14.5 15 22 27" stroke="#fff" strokeWidth="3" strokeLinecap="round" fill="none" />
        <circle cx="26" cy="10" r="2.5" fill="#fff" />
        <defs>
          <linearGradient id="kaffGradient" x1="0" y1="0" x2="36" y2="36">
            <stop stopColor="#2563eb" />
            <stop offset="1" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
      </svg>
      <span className="logo__text">
        KAFF <span>Solutions</span>
      </span>
    </Link>
  );
}

export default Logo;
