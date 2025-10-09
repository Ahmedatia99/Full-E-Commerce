import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link
      to={"/"}
      aria-label="Exclusive Store Logo - Home"
      className="md:text-2xl tracking-wide"
    >
      EXCLUSIVE
    </Link>
  );
}

export default Logo;
