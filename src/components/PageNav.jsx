import React from "react";
import { NavLink } from "react-router-dom";
import Logo from './../components/Logo'
import styles from "./PageNav.module.css";

function PageNav() {
  return (
    <nav className={styles.nav}>
      <Logo />

      <ul className={styles.list}>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>

        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        
        <li>
          <NavLink to="/login" className={styles.ctaLink}>Login</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
