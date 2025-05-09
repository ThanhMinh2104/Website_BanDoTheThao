import classNames from "classnames/bind";
import styles from "./Footer.module.scss";
import images from "~/assests/images";

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("container")}>
                <div className={cx("info-section")}>
                    <div className={cx("logo")}>
                        <img src= {images.logo} alt="BigSport Logo" />
                    </div>
                    <div className={cx("contact-info")}>
                        <div className={cx("contact-item")}>
                            <i className={cx("location-icon")}></i>
                            <span className={cx("address")}>
                                Địa chỉ:
                                <div className={cx("address-item")}>
                                    <span className={cx("check-icon")}></span>
                                    306 Lê Trọng Tấn, Phường Tây Thạnh, Quận Tân Phú, Thành Phố Hồ Chí Minh
                                </div>
                                <div className={cx("address-item")}>
                                    <span className={cx("check-icon")}></span>
                                    173 Nguyễn Oanh, Phường 17, Quận Gò Vấp, Thành Phố Hồ Chí Minh
                                </div>
                            </span>
                        </div>
                        <div className={cx("contact-item")}>
                            <i className={cx("phone-icon")}></i>
                            <span>Số điện thoại: 0364237477</span>
                        </div>
                        <div className={cx("contact-item")}>
                            <i className={cx("mail-icon")}></i>
                            <span>Email: hiequegosport@gmail.com</span>
                        </div>
                    </div>
                    <div className={cx("copyright")}>
                        <span>© Bản quyền thuộc về <a href="#" className={cx("egany-link")}>HIEQUEGO</a> | Cung cấp bởi <a href="#" className={cx("haravan-link")}>Just Play</a></span>
                    </div>
                </div>

                <div className={cx("links-section")}>
                    <div className={cx("info-links")}>
                        <h3 style={{color: "#ff6b00"}}>CỔNG THÔNG TIN</h3>
                        <ul>
                            <li><a href="#">Giới thiệu</a></li>
                            <li><a href="#">Tin Tức</a></li>
                            <li><a href="#">Khuyến Mãi</a></li>
                            <li><a href="#">Sản phẩm</a></li>
                            <li><a href="#">SALE OFF</a></li>
                            <li><a href="#">HỆ THỐNG CỬA HÀNG</a></li>
                        </ul>
                    </div>

                    <div className={cx("policy-links")}>
                        <h3 style={{color: "#ff6b00"}}>CHÍNH SÁCH</h3>
                        <ul>
                            <li><a href="#">Chính sách vận chuyển giao nhận hàng</a></li>
                            <li><a href="#">Chính sách đổi trả sản phẩm</a></li>
                            <li><a href="#">Chính sách kiểm hàng</a></li>
                            <li><a href="#">Chính sách thanh toán</a></li>
                            <li><a href="#">Chính sách bảo mật</a></li>
                            <li><a href="#">Hướng dẫn mua hàng</a></li>
                        </ul>
                    </div>

                    <div className={cx("subscribe-section")}>
                        <h3 style={{color: "#ff6b00"}}>ĐĂNG KÝ NHẬN TIN</h3>
                        <div className={cx("subscribe-form")}>
                            <input type="email" placeholder="Nhập địa chỉ email" />
                            <button>Đăng ký</button>
                        </div>
                        <div className={cx("social-links")}>
                            <a href="#" className={cx("social-icon", "facebook")}></a>
                            <a href="#" className={cx("social-icon", "youtube")}></a>
                            <a href="#" className={cx("social-icon", "tiktok")}></a>
                        </div>
                        <div className={cx("certificate")}>
                        <img src= {images.bocongthuong} alt="Bộ Công Thương" />
                    </div>
                    </div>
                </div>
                
                <div className={cx("payment-section")}>
                    <div className={cx("payment-methods")}>
                        <img src= {images.payment} alt="Payment" />
                    </div>
                </div>
            </div>
            <div className={cx("floating-buttons")}>
                <a href="#" className={cx("scroll-top")}></a>
                <a href="tel:0703058058" className={cx("phone-call")}></a>
            </div>
        </div>
    );
}

export default Footer;