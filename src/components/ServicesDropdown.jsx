import React from 'react';
import { Link } from 'react-router-dom';
import { serviceDropdown } from './NavItems';

function ServicesDropdown({ setDropdownOpen, closeMenu }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-3  p-6">
      {serviceDropdown.map((item, index) => (
        <Link 
          key={index}
          to={item.path}
          onClick={() => {
            setDropdownOpen(false);
            if (closeMenu) closeMenu();
          }}
          className="flex items-center gap-2 px-4 py-1.5 rounded-md text-sm font-semibold text-gray-700/70 hover:bg-gray-100 transition-all duration-150"
        >
          <span className="text-blue-600 text-[16px]">{item.icon}</span>
          <span>{item.title}</span>
        </Link>
      ))}
    </div>
  );
}

export default ServicesDropdown;
