import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import images from "~/assests/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faMagnifyingGlass, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";

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
        </header>
    );
}

export default Header;
