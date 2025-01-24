import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import clsx from "clsx";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="top-0 left-0 w-full z-50 py-12 pb-14 ">
            <div className="container flex items-center max-lg:px-5 h-14">
                <a href="" className="lg:hidden flex-1 cursor-pointer z-10  ">
                    <img src="/images/logo.png" alt="ISI Hub logo" width={118} height={118} className="bg-white rounded-full" />
                </a> 
                <div className={
                    clsx(`w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-blue-600 transition-opacity duration-300 opacity-1`, 
                    isOpen ? `max-lg:opacity-1` : `max-lg:opacity-0 max-lg:pointer-events-none`)
                    }> 
                    <div className="max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:overflow-hidden  ">
                        <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
                            <ul className="flex max-lg:block max-lg:px-10">
                                <li className="nav-li">
                                    <Link to="/" className="nav-link">
                                        Home
                                    </Link>
                                    <Link to="/" className="nav-link">
                                        About
                                    </Link>
                                </li>
                                <li className="nav-logo">
                                    <Link>
                                        <img src="/images/logo.png" alt="ISI Hub logo" width={118} height={118} className={clsx("max-lg:hidden transition-transform duration-500 cursor-pointer")} />
                                    </Link>
                                </li>
                                <li className="nav-li">
                                    <Link to="/" className="nav-link">
                                        FAQ
                                    </Link>
                                    <Link to="/" className="nav-link">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <button className="lg:hidden z-10 size-12 border-2 bg-blue-700 rounded-full flex justify-center items-center" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <MdClose className="text-white" size={24} /> : <GiHamburgerMenu className="text-white" size={24} />}
                </button>
            </div>
        </header>
    );
}

export default Header;