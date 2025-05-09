import { Link } from "react-router-dom";
import styles from "./Banner.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Banner() {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("banner-container")}>
                <div className={cx("overlay")}>
                    <div className={cx("content")}>
                        <div className={cx("banner-text")}>
                            <h2 className={cx("banner-title")}>
                                <span className={cx("brand-name")}>HIE QUE GO</span> là nơi bạn có thể đặt áo bóng đá với giá tốt nhất tại <span className={cx("highlight")}>TP.HCM</span> mà bạn không thể bỏ qua...
                            </h2>
                        </div>
                        <div className={cx("button-container")}>
                            <Link to = "/shirts/clb"    >
                                <button className={cx("banner-button")}>
                                    CÂU LẠC BỘ 24/25
                                </button>
                            </Link>
                            
                            <Link to = "/shirts/doituyen"    >
                                <button className={cx("banner-button")}>
                                    ĐỘI TUYỂN QUỐC GIA 2025
                                </button>
                            </Link>

                            <Link to = "/shirts/aokhonglogo"    >
                                <button className={cx("banner-button")}>
                                    BÓNG ĐÁ KHÔNG LOGO
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
