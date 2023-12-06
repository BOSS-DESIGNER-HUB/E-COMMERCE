import { Fragment, useEffect, useState } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";


import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import { navigation } from "./navigationData";


import { deepPurple } from "@mui/material/colors";


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navigation() {
  const [open, setOpen] = useState(false);
  

  const [anchorEl, setAnchorEl] = useState(null);
  const openUserMenu = Boolean(anchorEl);


 
  const handleUserClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseUserMenu = (event) => {
    setAnchorEl(null);
  };

  

  const handleCategoryClick = (category, section, item, close) => {
    
    close();
  };

 

  
  const handleMyOrderClick=()=>{
    handleCloseUserMenu()
    
  }

  return (
    <div className="bg-white pb-10">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <Tab.Group as="div" className="mt-2">
                  <div className="border-b border-gray-200">
                    <Tab.List className="-mb-px flex space-x-8 px-4">
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected
                                ? "border-indigo-600 text-indigo-600"
                                : "border-transparent text-gray-900",
                              "flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium border-none"
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                  <Tab.Panels as={Fragment}>
                    {navigation.categories.map((category) => (
                      <Tab.Panel
                        key={category.name}
                        className="space-y-10 px-4 pb-8 pt-10"
                      >
                        <div className="grid grid-cols-2 gap-x-4">
                          {category.featured.map((item) => (
                            <div
                              key={item.name}
                              className="group relative text-sm"
                            >
                              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                <img
                                  src={item.imageSrc}
                                  alt={item.imageAlt}
                                  className="object-cover object-center"
                                />
                              </div>
                              <a
                                href={item.href}
                                className="mt-6 block font-medium text-gray-900"
                              >
                                <span
                                  className="absolute inset-0 z-10"
                                  aria-hidden="true"
                                />
                                {item.name}
                              </a>
                              <p aria-hidden="true" className="mt-1">
                                Shop now
                              </p>
                            </div>
                          ))}
                        </div>
                        {category.sections.map((section) => (
                          <div key={section.name}>
                            <p
                              id={`${category.id}-${section.id}-heading-mobile`}
                              className="font-medium text-gray-900"
                            >
                              {section.name}
                            </p>
                            {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
                            <ul
                              role="list"
                              aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                              className="mt-6 flex flex-col space-y-6"
                            >
                              {section.items.map((item) => (
                                <li key={item.name} className="flow-root">
                                  <p className="-m-2 block p-2 text-gray-500">
                                    {"item.name"}
                                  </p>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <a
                        href={page.href}
                        className="-m-2 block p-2 font-medium text-gray-900"
                      >
                        {page.name}
                      </a>
                    </div>
                  ))}
                </div>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <div className="flow-root">
                    <a
                      href="/"
                      className="-m-2 block p-2 font-medium text-gray-900"
                    >
                      Sign in
                    </a>
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6">
                  <a href="/" className="-m-2 flex items-center p-2">
                    <img
                      src="https://tailwindui.com/img/flags/flag-canada.svg"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-base font-medium text-gray-900">
                      CAD
                    </span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white">
        <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
          Free Delivery Across Andhra Pradesh
        </p>

        <nav aria-label="Top" className="mx-auto">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center px-11">
              <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                
                  <span className="sr-only">Your Company</span>
                  <img
                    src="data:image/png;base64,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"
                    alt="Shopwithzosh"
                    className="h-16 w-15 mr-2"
                  />
                
              </div>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch z-10">
                <div className="flex h-full space-x-8">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      {({ open, close }) => (
                        <>
                          <div className="relative flex">
                            <Popover.Button
                              className={classNames(
                                open
                                  ? "border-indigo-600 text-indigo-600"
                                  : "border-transparent text-gray-700 hover:text-gray-800",
                                "relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out"
                              )}
                            >
                              {category.name}
                            </Popover.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                              <div
                                className="absolute inset-0 top-1/2 bg-white shadow"
                                aria-hidden="true"
                              />

                              <div className="relative bg-white">
                                <div className="mx-auto max-w-7xl px-8">
                                  <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                                    <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                      {category.featured.map((item) => (
                                        <div
                                          key={item.name}
                                          className="group relative text-base sm:text-sm"
                                        >
                                          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                            <img
                                              src={item.imageSrc}
                                              alt={item.imageAlt}
                                              className="object-cover object-center"
                                            />
                                          </div>
                                          <a
                                            href={item.href}
                                            className="mt-6 block font-medium text-gray-900"
                                          >
                                            <span
                                              className="absolute inset-0 z-10"
                                              aria-hidden="true"
                                            />
                                            {item.name}
                                          </a>
                                          <p
                                            aria-hidden="true"
                                            className="mt-1"
                                          >
                                            Shop now
                                          </p>
                                        </div>
                                      ))}
                                    </div>
                                    <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                      {category.sections.map((section) => (
                                        <div key={section.name}>
                                          <p
                                            id={`${section.name}-heading`}
                                            className="font-medium text-gray-900"
                                          >
                                            {section.name}
                                          </p>
                                          {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
                                          <ul
                                            role="list"
                                            aria-labelledby={`${section.name}-heading`}
                                            className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                          >
                                            {section.items.map((item) => (
                                              <li
                                                key={item.name}
                                                className="flex"
                                              >
                                                <p
                                                  onClick={() =>
                                                    handleCategoryClick(
                                                      category,
                                                      section,
                                                      item,
                                                      close
                                                    )
                                                  }
                                                  className="cursor-pointer hover:text-gray-800"
                                                >
                                                  {item.name}
                                                </p>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}

                  {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </a>
                  ))}
                </div>
              </Popover.Group>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  {true ? (
                    <div>
                      <Avatar
                        className="text-white"
                        onClick={handleUserClick}
                        aria-controls={open ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        // onClick={handleUserClick}
                        sx={{
                          bgcolor: deepPurple[500],
                          color: "white",
                          cursor: "pointer",
                        }}
                      >
                       R
                      </Avatar>
                      {/* <Button
                        id="basic-button"
                        aria-controls={open ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        onClick={handleUserClick}
                      >
                        Dashboard
                      </Button> */}
                      <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={openUserMenu}
                        onClose={handleCloseUserMenu}
                        MenuListProps={{
                          "aria-labelledby": "basic-button",
                        }}
                      >
                        <MenuItem onClick={handleCloseUserMenu}>
                          Profile
                        </MenuItem>
                        
                        <MenuItem onClick={handleMyOrderClick}>
                          My Orders
                        </MenuItem>
                        <MenuItem >Logout</MenuItem>
                      </Menu>
                    </div>
                  ) : (
                    <Button
                      
                      className="text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      Signin
                    </Button>
                  )}
                </div>

                {/* Search */}
                <div className="flex lg:ml-6">
                  <p className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon
                      className="h-6 w-6"
                      aria-hidden="true"
                    />
                  </p>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <Button
                  
                    className="group -m-2 flex items-center p-2"
                  >
                    <ShoppingBagIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                      2
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      
    </div>
  );
}
