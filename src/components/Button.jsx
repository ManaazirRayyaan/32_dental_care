import { Link } from "react-router-dom";

const styles = {
  primary:
    "bg-[#2D9CDB] text-white shadow-lg shadow-blue-500/20 hover:-translate-y-0.5 hover:bg-blue-600",
  secondary:
    "border border-slate-200 bg-white text-slate-900 hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-700",
  dark: "bg-slate-950 text-white hover:-translate-y-0.5 hover:bg-slate-800",
  ghost: "bg-slate-100 text-slate-800 hover:-translate-y-0.5 hover:bg-slate-200",
};

export default function Button({ children, to, href, variant = "primary", className = "", ...props }) {
  const classes = `inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-extrabold transition duration-200 ${styles[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={classes} {...props}>
      {children}
    </a>
  );
}
