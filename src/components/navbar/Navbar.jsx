import Link from "next/link";
import React from "react";
import styles from "./page.module.css";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.lamadev}>
        Lamdev
      </Link>
      <div className={styles.navbaroptions}>
        {links.map((item) => (
          <Link key={item.id} href={item.url}>
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
