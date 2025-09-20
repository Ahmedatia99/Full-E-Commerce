import BurgerNavMenu from "./BurgerNavMenu";
import Logo from "./Logo";
import NavActions from "./NavActions";
import NavMenu from "./NavMenu";
import Search_Input from "./Search_Input";

function NavBar() {
  return (
    <nav className=" bg-white  border-b  flex-col  justify-between items-center w-full">
      <div className=" container mx-auto  ">
        <div className=" w-full">
          <Search_Input className="sm:hidden" />
        </div>
        <div className="flex justify-between py-5 items-center px-3">
          <div className="flex gap-5 items-center ">
            <BurgerNavMenu className="lg:hidden" />
            <Logo />
          </div>
          <NavMenu className="hidden lg:flex" />
          <NavActions />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
