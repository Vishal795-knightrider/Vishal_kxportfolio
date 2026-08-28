import React from 'react';

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, setIsOpen }) => {
  if (!isOpen) return null;

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="mobile-menu open" id="mobileMenu" style={{ display: 'flex' }}>
      <a href="#about" onClick={handleLinkClick}>about</a>
      <a href="#projects" onClick={handleLinkClick}>projects</a>
      <a href="#experience" onClick={handleLinkClick}>experience</a>
      <a href="#skills" onClick={handleLinkClick}>skills</a>
      <a href="#github-activity" onClick={handleLinkClick}>activity</a>
      <a href="#education" onClick={handleLinkClick}>education</a>
      <a href="#contact" onClick={handleLinkClick}>contact</a>
    </div>
  );
};
export default MobileMenu;
