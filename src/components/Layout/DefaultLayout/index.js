import styles from "./DefaultLayout.module.scss";
import classNames from "classnames/bind";
import Header from "~/components/Layout/components/Header";
import Banner from "./Banner";
import NavLinks from "./NavLinks";
import ClubLogo from "./ClubLogo";

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx("wrapper")}>
            <NavLinks />
            <Header />
            <Banner />
            <ClubLogo />
            <div className={cx("container")}>
                <div className={cx("content")}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
