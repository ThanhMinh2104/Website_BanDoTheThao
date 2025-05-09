<<<<<<< Updated upstream
import Header from "~/components/Layout/components/Header";
=======
import classNames from "classnames/bind";
import styles from "../components/Header/Header.module.scss";
import images from "~/assests/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import LoginModal from "~/components/Form/LoginModal";
import CartPopup from "~/components/Popper/CartPopup/CartPopup";
import Header from "../components/Header";
import NavLinks from "../DefaultLayout/NavLinks";

const cx = classNames.bind(styles);
>>>>>>> Stashed changes

function HeaderOnly({ children }) {
    return (
<<<<<<< Updated upstream
        <div>
            <Header />
            <div className="container">{children}</div>
        </div>
=======
        <>
            <NavLinks />
            <Header />
            <div>{children}</div>
        </>
>>>>>>> Stashed changes
    );
}

export default HeaderOnly;
