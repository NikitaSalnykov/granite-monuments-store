import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Dropdown = ({ title, links, theme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownMenuRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSearchInput = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  // const links = [{title:"Гранит", link:""}]

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownMenuRef.current &&
        !dropdownMenuRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="flex items-center justify-center ">
      <div className="relative group" ref={dropdownMenuRef}>
        <button
          id="dropdown-button"
          onClick={toggleDropdown}
          className={` px-2 py-2 cursor-pointer rounded-sm  font-medium hover:bg-gray-100 ${
            theme && theme === 'dark' && 'hover:bg-black'
          }  flex items-center justify-center`}
        >
          <span>{title}</span>
          <div
            className={` transition-transform ${isOpen && ' scale-y-[-1]'} `}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </button>
        {isOpen && (
          <div
            id="dropdown-menu"
            className={` z-50 absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-3 px-6 space-y-3 flex flex-col ${
              theme && theme === 'dark' && 'bg-black  text-black'
            }`}
          >
            {links &&
              links.map((item, index) => (
                <Link key={index} to={item.link}>
                  {item.title}
                </Link>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};
