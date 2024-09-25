import { useState, useRef, useEffect } from "react";
import logo from "../assets/logo.png";
import { Link, NavLink, useLocation } from "react-router-dom";
import useBreakpoint from "../Hooks/breakpoint";
let Header = ({ parentfn }) => {
  const [showCard, setShowCard] = useState(false);
  const [listToggle, setListToggle] = useState({
    hamBurger: false,
    list: false,
  });
  const { pathname } = useLocation();

  const breakPoint = useBreakpoint();
  const [isMobile, setIsMobile] = useState(false);
  const listRef = useRef(null);

  const [color, setColor] = useState("text-white");
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!listRef.current.contains(e.target)) {
        setListToggle((obj) => ({
          ...obj,
          list: false,
        }));
      }
    };

    const checkingScoll = () => {
      setListToggle((obj) => ({
        hamBurger: false,
        list: false,
      }));
      if (scrollY !== 0) {
        setColor("text-black");
      } else {
        setColor("text-white");
      }
    };

    document.addEventListener("scroll", checkingScoll, true);
    document.addEventListener("click", handleOutsideClick, true);

    return () => {
      document.removeEventListener("click", handleOutsideClick, true);
      document.removeEventListener("scroll", checkingScoll);
    };
  }, []);

  useEffect(() => {
    setIsMobile(breakPoint === "sm");
    if (breakPoint === "sm") {
      parentfn(true);
    } else {
      parentfn(false);
    }
  }, [breakPoint]);
  return (
    <nav
      className={`w-full py-2 text-gray-400 box header ${
        color === "text-white" && pathname === "/" && !isMobile
          ? "header-glass"
          : "bg-black"
      }`}
    >
      <div className=" h-14 w-full">
        <nav className="flex w-full items-center  gap-4 pl-8 pr-20 justify-between px-6  xl:px-10 lg:gap-0">
          <NavLink
            className="flex shrink-0 py-2 items-center gap-1 lg:gap-2"
            to="/"
          >
            <img
              src={logo}
              alt="Xplore rentals logo"
              className="w-36"
            />
            
          </NavLink>
          <div className="hidden  py-2 md:flex">
            <div className="flex items-center justify-center w-full">
              <ul className="flex  gap-6 xl:gap-10 font-bold text-white uppercase items-center  whitespace-nowrap sm:text-xs   xl:text-md">
                
                <li className="hover:text-red-500 cursor-pointer">
                  <NavLink
                    className={({ isActive }) =>
                      ` cursor-pointer hover:!text-red-500 tracking-wider ${
                        isActive ? "!text-red-500" : ""
                      } ${
                        color === "text-white" && pathname === "/"
                          ? "text-white"
                          : "text-white"
                      }`
                    }
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>

                <li
                  ref={listRef}
                  onClick={() => {
                    setListToggle((obj) => ({
                      ...obj,
                      list: !obj.list,
                    }));
                  }}
                  className={`relative hover:!text-red-500 cursor-pointer tracking-wider ${
                    pathname.split("/")[1] === "services" ? "!text-red-500" : ""
                  }  ${pathname === "/" ? color : ""}  ${
                    pathname !== "/" ? "text-white" : "text-white"
                  }  `}
                >
                  Services
                  <div
                    className={` absolute bottom-[-140px] left-[-10px] w-[180px] h-auto text-white border-gray-200 rounded border bg-white ${
                      listToggle.list ? "block" : " hidden"
                    } `}
                  >
                    <ul
                      // onMouseEnter={() => {
                      //   setShowCard(true);
                      // }}
                      // onMouseLeave={() => {
                      //   setShowCard(false);
                      // }}
                      className={`  ${
                        listToggle.list ? "block" : " hidden"
                      } text-black pl-5 py-3 flex flex-col gap-2`}
                    >
                      <li>
                        <NavLink
                          // onClick={() => {
                          //   setListToggle((obj) => ({
                          //     ...obj,
                          //     list: !obj.list,
                          //   }));
                          // }}
                          className={({ isActive }) =>
                            ` cursor-pointer hover:!text-red-500 ${
                              isActive ? "!text-red-500" : "!text-black"
                            }`
                          }
                          to="/services/bike"
                        >
                          Bikes
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          // onClick={() => {
                          //   setListToggle((obj) => ({
                          //     ...obj,
                          //     list: !obj.list,
                          //   }));
                          // }}
                          className={({ isActive }) =>
                            ` cursor-pointer hover:!text-red-500 ${
                              isActive ? "!text-red-500" : "!text-black"
                            }`
                          }
                          to="/services/5seater"
                        >
                          5 Seaters
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          // onClick={() => {
                          //   setListToggle((obj) => ({
                          //     ...obj,
                          //     list: !obj.list,
                          //   }));
                          // }}
                          className={({ isActive }) =>
                            ` cursor-pointer hover:!text-red-500 ${
                              isActive ? "!text-red-500" : "!text-black"
                            }`
                          }
                          to="/services/7seater"
                        >
                          7 Seaters
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          // onClick={() => {
                          //   setListToggle((obj) => ({
                          //     ...obj,
                          //     list: !obj.list,
                          //   }));
                          // }}
                          className={({ isActive }) =>
                            ` cursor-pointer hover:!text-red-500 ${
                              isActive ? "!text-red-500" : "!text-black"
                            }`
                          }
                          to="/services/luxury"
                        >
                          Luxury Cars
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </li>

                
                <li className="">
                  <NavLink
                    className={({ isActive }) =>
                      ` cursor-pointer hover:!text-red-500 tracking-wider ${
                        isActive ? "!text-red-500" : ""
                      } ${
                        color === "text-white" && pathname === "/"
                          ? "text-white"
                          : "text-white"
                      }`
                    }
                    to="/support"
                  >
                    Support
                  </NavLink>
                </li>
                <li className="">
                  <NavLink
                    className={({ isActive }) =>
                      ` cursor-pointer hover:!text-red-500 tracking-wider ${
                        isActive ? "!text-red-500" : ""
                      } ${
                        color === "text-white" && pathname === "/"
                          ? "text-white"
                          : "text-white"
                      }`
                    }
                    to="/termsnconditions"
                  >
                    Terms & Conditions
                  </NavLink>
                </li>
                <li className="">
                  <button
                    className={` ${
                      color === "text-white" && pathname === "/"
                        ? "bg-red-500 text-black hover:bg-white/80"
                        : "bg-red-500 text-white hover:bg-black/60"
                    }uppercase px-5 py-2.5  rounded-lg`}
                  >
                    <Link
                      className={` ${
                        color === "text-white" && pathname === "/"
                          ? "!text-black"
                          : "!text-white"
                      }  !text-black`}
                      to="/bookNow"
                    >
                      {" "}
                      Book Now
                    </Link>
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* hamburger-icon */}
          <div className=" md:hidden   relative z-10 flex justify-center items-center  ">
            <svg
              onClick={() => {
                setListToggle((obj) => ({
                  ...obj,
                  hamBurger: !obj.hamBurger,
                }));
              }}
              viewBox="0 0 100 100"
              fill="black"
              className={`ham hamRotate180 ham5 w-10 ${
                listToggle.hamBurger ? "active" : ""
              }`}
            >
              <path
                d="m 30,33 h 40 c 0,0 8.5,-0.68551 8.5,10.375 0,8.292653 -6.122707,9.002293 -8.5,6.625 l -11.071429,-11.071429"
                className={`line top ${
                  color === "text-white" && pathname === "/" && !isMobile
                    ? "line-white"
                    : "line-white"
                } `}
              ></path>

              <path
                d="m 70,50 h -40"
                className={`line middle ${
                  color === "text-white" && pathname === "/" && !isMobile
                    ? "line-white"
                    : "line-white"
                } `}
              ></path>

              <path
                d="m 30,67 h 40 c 0,0 8.5,0.68551 8.5,-10.375 0,-8.292653 -6.122707,-9.002293 -8.5,-6.625 l -11.071429,11.071429"
                className={`line bottom ${
                  color === "text-white" && pathname === "/" && !isMobile
                    ? "line-white"
                    : "line-white"
                } `}
              ></path>
            </svg>
          </div>
          {/* hamburger-icon */}
          {/* hamBurger-list-items */}
          <div
            className={` w-full absolute md:hidden left-0  top-16 transition-all duration-700 bg-[#f0f2ef] border px-8 py-5  border-white/60 shadow-lg -z-10 ${
              listToggle.hamBurger ? " translate-y-0 " : " -translate-y-80 "
            } `}
          >
            <ul className=" space-y-2 w-full  text-center">
            <li>
                <NavLink
                  className={({ isActive }) =>
                    ` cursor-pointer hover:!text-red-500 ${
                      isActive ? "!text-red-500" : "!text-black"
                    }`
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li
              ref={listRef}
                onClick={() => {
                  setListToggle((obj) => ({
                    ...obj,
                    list: !obj.list,
                  }));
                }}
                className={` relative ${
                  pathname === "/services" ? "!text-red-500" : "text-black"
                } hover:!text-red-500 cursor-pointer  `}
              >
                Services
                <ul
                  className={` ${
                    listToggle.list
                      ? "block bg-black rounded-sm text-xs font-medium text-white w-full mt-4 "
                      : " hidden"
                  }  pl-5 py-3 flex flex-col gap-2`}
                >
                  <NavLink
                    className={({ isActive }) =>
                      ` cursor-pointer hover:!text-red-500 ${
                        isActive ? "!text-red-500" : ""
                      }`
                    }
                    to="/services/bike"
                  >
                    Bikes
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      ` cursor-pointer hover:!text-red-500 ${
                        isActive ? "!text-red-500" : ""
                      }`
                    }
                    to="/services/5seater"
                  >
                    5 Seaters
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      ` cursor-pointer hover:!text-red-500 ${
                        isActive ? "!text-red-500" : ""
                      }`
                    }
                    to="/services/7seater"
                  >
                    7 Seaters
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      ` cursor-pointer hover:!text-red-500 ${
                        isActive ? "!text-red-500" : ""
                      }`
                    }
                    to="/services/luxury"
                  >
                    Luxury Cars
                  </NavLink>
                </ul>
              </li> 
              <li>
                <NavLink
                  className={({ isActive }) =>
                    ` cursor-pointer hover:!text-red-500 ${
                      isActive ? "!text-red-500" : "!text-black"
                    }`
                  }
                  to="/support"
                >
                  Support
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    ` cursor-pointer hover:!text-red-500 ${
                      isActive ? "!text-red-500" : "!text-black"
                    }`
                  }
                  to="/termsnconditions"
                >
                  Terms & Conditions
                </NavLink>
              </li>
              <li className="">
                  <button
                    className={` ${
                      color === "text-white" && pathname === "/"
                        ? "bg-red-500 text-black hover:bg-white/80"
                        : "bg-red-500 text-white hover:bg-black/60"
                    }uppercase px-5 py-1.5 w-full  rounded-lg`}
                  >
                    <Link
                      className={` ${
                        color === "text-white" && pathname === "/"
                          ? "!text-black"
                          : "!text-white"
                      }  !text-black`}
                      to="/bookNow"
                    >
                      {" "}
                      Book Now
                    </Link>
                  </button>
                </li>
            </ul>
          </div>
          {/* hamBurger-list-items */}
        </nav>
      </div>
    </nav>
  );
};
export default Header;
