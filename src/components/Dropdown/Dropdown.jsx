import React, { useState, useRef, useEffect } from 'react';

export const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownMenuRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSearchInput = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredItems = ['Uppercase', 'Lowercase', 'Camel Case', 'Kebab Case'].filter(item =>
    item.toLowerCase().includes(searchTerm)
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownMenuRef.current && !dropdownMenuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div className="relative group" ref={dropdownMenuRef}>
        <button
          id="dropdown-button"
          onClick={toggleDropdown}
          className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white "
        >
          <span className="mr-2">Open Dropdown</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 ml-2 -mr-1"
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
        </button>
        {isOpen && (
          <div
            id="dropdown-menu"
            className="absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1 w-40"
          >

            {filteredItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
