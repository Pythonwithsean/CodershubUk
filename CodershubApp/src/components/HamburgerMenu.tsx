import { useState } from 'react';
//@ts-ignore
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div>
      {/* Hamburger button with styles */}
      <button className="bm-burger-button" onClick={toggleMenu}>
        <span className="bm-burger-bars"></span>
        <span className="bm-burger-bars"></span>
        <span className="bm-burger-bars"></span>
      </button>

      {/* Menu container */}
      <Menu isOpen={isOpen} hidden="false" onStateChange={(state:any) => setIsOpen(state.isOpen)}>
        <Link className="menu-item" to="/">Home</Link>
        <Link className="menu-item" to="/auth">Get started</Link>
        <Link className="menu-item" to="/pricing">Pricing</Link>
      </Menu>
    </div>
  );
};

export default HamburgerMenu;
