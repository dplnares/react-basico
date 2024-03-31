import MainMenu from "./MainMenu";
import Logo from "./Logo";

const Header = () => {
  return (
    <>
      <header>
        <nav className="menu">
          <Logo />
          <MainMenu />
        </nav>
      </header>
    </>
  );
};

export default Header;
