import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./MobileNav.css";

const menuVariants = {
  hidden: {
    x: "100%",
  },
  show: {
    x: 0,
    Transition: {
      ease: [0.6, 0.01, -0.05, 0.9],
    },
  },
};

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav>
      <div onClick={() => setOpenMenu(true)} className="mobileMenu_icon">
        <FiMenu />
      </div>

      {openMenu && (
        <motion.div
          className="mobile_navigation"
          variants={menuVariants}
          initial="hidden"
          animate={openMenu ? "show" : ""}
        >
          <div onClick={() => setOpenMenu(false)} className="mobileClose_icon">
            <FiX />
          </div>
          <ul className="menu_items">
            <li>
              {" "}
              <Link onClick={() => setOpenMenu(false)} to="/portfolio">
                Portfolio
              </Link>{" "}
            </li>

            <li>
              {" "}
              <Link onClick={() => setOpenMenu(false)} to="/about">
                About
              </Link>{" "}
            </li>

            <li>
              {" "}
              <Link onClick={() => setOpenMenu(false)} to="/contact">
                Contact
              </Link>{" "}
            </li>
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default MobileNav;
