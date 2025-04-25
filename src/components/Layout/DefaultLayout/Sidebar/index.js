import styles from "./Sidebar.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div className={cx("wrapper")}>
            <aside className={cx("sidebar")}>Sidebar</aside>
        </div>
    );
}

export default Sidebar;
