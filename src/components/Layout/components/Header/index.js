import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import images from "~/assests/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
<<<<<<< Updated upstream
import { faCartShopping, faMagnifyingGlass, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
=======
import { faCartShopping, faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import LoginModal from "~/components/Form/LoginModal";
import CartPopup from "~/components/Popper/CartPopup/CartPopup";
import { Link } from "react-router-dom";
>>>>>>> Stashed changes

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx("wrapper")}>
            <div className={cx("inner")}>
                <div></div>
                <div className={cx("logo")}>
                    <img className={cx("logo-image")} src={images.logo} alt="logo"></img>
                </div>
                <div className={cx("actions")}>
                    <FontAwesomeIcon className={cx("action-icon")} icon={faMagnifyingGlass} />
                    <FontAwesomeIcon className={cx("action-icon")} icon={faUser} />
                    <div className={cx("cart")}>
                        <span className={cx("cart-total")}>0đ</span>
                        <FontAwesomeIcon className={cx("cart-icon")} icon={faCartShopping} />
                    </div>
                </div>
            </div>
<<<<<<< Updated upstream
=======

            {/* Navigation Bar */}
            <nav className={cx("nav-bar")}>
                <ul className={cx("nav-list")}>
                    <li  className={cx("nav-item")}>
                        <Link  to="/shirts/thailand" className={cx("nav-link")}>
                            ÁO BÓNG ĐÁ THÁI LAN
                        </Link>
                    </li>
                    <li className={cx("nav-item")}>
                        <Link  to="/shirts/doituyen" className={cx("nav-link")}>
                            ÁO ĐỘI TUYỂN
                        </Link>
                    </li>
                    <li className={cx("nav-item")}>
                        <Link  to="/shirts/clb" className={cx("nav-link")}>
                            ÁO BÓNG ĐÁ CLB
                        </Link>
                    </li>
                    <li className={cx("nav-item")}>
                        <Link  to="/shirts/aokhonglogo" className={cx("nav-link")}>
                            ÁO BÓNG ĐÁ KHÔNG LOGO
                        </Link>
                    </li>
                    <li className={cx("nav-item")}>
                        <a href="#" className={cx("nav-link")}>
                            BÓNG ĐÁ
                        </a>
                    </li>
                    <li className={cx("nav-item")}>
                        <a href="#" className={cx("nav-link")}>
                            GYM
                        </a>
                    </li>
                    <li className={cx("nav-item")}>
                        <a href="#" className={cx("nav-link")}>
                            YOGA
                        </a>
                    </li>
                </ul>
            </nav>

            {/* Overlay và nội dung */}
            {showOverlay && (
                <>
                    <div className={cx("overlay")} onClick={() => setShowOverlay(false)}></div>
                    <div className={cx("search-wrapper")}>
                        <input type="text" className={cx("search-input")} placeholder="Tìm kiếm sản phẩm..." />
                        <i className={cx("search-icon")}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} onClick={() => {}} />
                        </i>
                    </div>
                </>
            )}

            {/* Modal Login & Logout */}
            <LoginModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />
>>>>>>> Stashed changes
        </header>
    );
}

export default Header;
