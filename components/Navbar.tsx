import Image from "next/image";
import logo from "../public/assets/icons/logo.svg";
import search from "../public/assets/icons/search.svg";
import heart from "../public/assets/icons/red-heart.svg";
import user from "../public/assets/icons/user.svg";
const Navbar = () => {
  return (
    <header className="w-full">
      <nav className="nav">
        <div className="flex items-center space-x-4 mr-10">
          <Image
            className="nav-logo"
            src={logo}
            width={36}
            height={24}
            alt="logo"
          />
          <h1 className="text-xl sm:text-3xl font-inter font-bold">
            Price <span className="text-orange-700">Wise</span>
          </h1>
        </div>
        <div className=" sm:justify-evenly flex items-center sm:space-x-10">
          <Image src={search} width={27} height={24} alt="logo" />
          <Image
            className="max-sm:hidden"
            src={heart}
            width={27}
            height={24}
            alt="logo"
          />
          <Image
            className="max-sm:hidden"
            src={user}
            width={27}
            height={24}
            alt="logo"
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
