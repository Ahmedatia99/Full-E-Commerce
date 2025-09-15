import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-black text-white  py-2 ">
      {/* Centered Text */}
      <div className="text-center">
        <h2>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <Link
            to={"/"}
            className="underline ml-2 font-bold hover:text-gray-200 "
          >
            Shop Now
          </Link>
        </h2>
      </div>
    </header>
  );
}

export default Header;
