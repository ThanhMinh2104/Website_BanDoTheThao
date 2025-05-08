import classNames from "classnames/bind";
import styles from "./NavLink.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fa0, faEnvelope, faMailBulk, faPhone, faVoicemail } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faPinterest, faSwift, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Tippy from "@tippyjs/react/headless";

const cx = classNames.bind(styles);

export default function NavLinks() {
    return (
        <nav className={cx("wrapper")}>
            <Tippy
                render={(attrs) => (
                    <div className={cx("box")} tabIndex="-1" {...attrs}>
                        Follow on Facebook
                    </div>
                )}
            >
                <a href="facebook">
                    <FontAwesomeIcon icon={faFacebook} className={cx("icon")} />
                </a>
            </Tippy>
            <Tippy
                render={(attrs) => (
                    <div className={cx("box")} tabIndex="-1" {...attrs}>
                        Follow on Instagram
                    </div>
                )}
            >
                <a href="instagram">
                    <FontAwesomeIcon icon={faInstagram} className={cx("icon")} />
                </a>
            </Tippy>
            <Tippy
                render={(attrs) => (
                    <div className={cx("box")} tabIndex="-1" {...attrs}>
                        Follow on Twitter
                    </div>
                )}
            >
                <a href="twitter">
                    <FontAwesomeIcon icon={faTwitter} className={cx("icon")} />
                </a>
            </Tippy>
            <Tippy
                render={(attrs) => (
                    <div className={cx("box")} tabIndex="-1" {...attrs}>
                        hiequegosport@gmail.com
                    </div>
                )}
            >
                <a href="email">
                    <FontAwesomeIcon icon={faEnvelope} className={cx("icon")} />
                </a>
            </Tippy>
            <Tippy
                render={(attrs) => (
                    <div className={cx("box")} tabIndex="-1" {...attrs}>
                        0386237477
                    </div>
                )}
            >
                <a href="call">
                    <FontAwesomeIcon icon={faPhone} className={cx("icon")} />
                </a>
            </Tippy>
            <Tippy
                render={(attrs) => (
                    <div className={cx("box")} tabIndex="-1" {...attrs}>
                        Follow on Interest
                    </div>
                )}
            >
                <a href="interest">
                    <FontAwesomeIcon icon={faPinterest} className={cx("icon")} />
                </a>
            </Tippy>
        </nav>
    );
}
