import styles from "./DefaultLayout.module.scss";
import classNames from "classnames/bind";
import Header from "~/components/Layout/components/Header";
<<<<<<< HEAD
import Banner from "./Banner";
=======
import NavLinks from "./NavLinks";
>>>>>>> a67b12a (4. Create component NavLinks and code completyly, Add Tippy libary, Add FontAwasome Lib,)

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx("wrapper")}>
            <NavLinks />
            <Header />
            <Banner />
            <div className={cx("container")}>
                <div className={cx("content")}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
