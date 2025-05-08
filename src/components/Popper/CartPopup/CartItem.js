import classNames from "classnames/bind";
import styles from "./CartItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function CartItem({ item, onRemove }) {
    return (
        <div className={cx("cart-item")}>
            <img src={item.image} alt={item.name} className={cx("item-image")} />
            <div className={cx("item-info")}>
                <h4 className={cx("item-name")}>{item.name}</h4>
                <p className={cx("item-quantity-price")}>
                    {item.quantity} x {Number.parseInt(item.price)}₫
                </p>
            </div>
            <button className={cx("remove-button")} onClick={() => onRemove(item.id)}>
                <FontAwesomeIcon icon={faTimes} />
            </button>
        </div>
    );
}

export default CartItem;
