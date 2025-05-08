import styles from "./DefaultLayout.module.scss";
import classNames from "classnames/bind";
import Header from "~/components/Layout/components/Header";
import Banner from "./Banner";

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx("wrapper")}>
            <Header />
            <Banner />
            <div className={cx("container")}>
                <div className={cx("content")}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
