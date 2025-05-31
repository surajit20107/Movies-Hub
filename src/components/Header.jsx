import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-slate-800 flex justify-between items-center cursor-pointer h-14 md:mx-2 md:py-6">
      <div className="mx-4">
        <Link to="/">
          <img src="/logo.webp" alt="icon" width={120} />
        </Link>
      </div>
      <div className="p-4">
        <Link to="/contact">
          <i className="fa-solid fa-user fa-xl" style={{ color: "aquamarine" }}></i>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
