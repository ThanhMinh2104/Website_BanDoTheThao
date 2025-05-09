import Header from "~/components/Layout/components/Header";
import classNames from "classnames/bind";
import styles from "../components/Header/Header.module.scss";
import images from "~/assests/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import LoginModal from "~/components/Form/LoginModal";
import CartPopup from "~/components/Popper/CartPopup/CartPopup";
import NavLinks from "../DefaultLayout/NavLinks";
import Footer from "../components/Footer";

const cx = classNames.bind(styles);

function HeaderOnly({ children }) {
    const [showOverlay, setShowOverlay] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);

    const cartItems = [
        { id: 1, name: "Man City sân khách màu ba 24/25 hàng Thái Lan", quantity: 1 },
        { id: 2, name: "Man City sân khách 24/25 hàng Thái Lan", quantity: 1 },
        { id: 3, name: "Quần áo Manchester City", quantity: 1 },
    ];
    const total = "1,140,000đ";

    const handleViewCart = () => {
        console.log("View Cart clicked");
    };

    const handleCheckout = () => {
        console.log("Checkout clicked");
    };

    return (
        <>
            <Header />
            <div>{children}</div>
            <Footer />
        </>
    );
}

export default HeaderOnly;
