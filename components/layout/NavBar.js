import Link from "next/link";
import { useState } from "react";
import classes from "./NavBar.module.css";
import NavMenu from "./NavMenu";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className={classes.navBar}>
      <div className={`container ${classes.container}`}>
        <div className={classes.logoMenu}>
          <div className={classes.logo}>
            <Link href="/">
              <img src="img/logo-icon.png" alt="Icono Pixel40" />
            </Link>
            <Link href="/">
              <h1>
                Pixel<span>40</span>
              </h1>
            </Link>
          </div>
        </div>
        <div className={classes["menu-desktop"]}>
          <NavMenu />
        </div>

        <button onClick={()=>{setShowMenu(pV=>!pV)}} className={classes["menu-btn"]}>Menu</button>
      </div>
      {showMenu && (
        <div className={classes["menu-mobil"]}>
          <NavMenu />
        </div>
      )}
    </div>
  );
};

export default NavBar;

//1. Create a fixed navegation version
//2. maybe psosition absoulte?
