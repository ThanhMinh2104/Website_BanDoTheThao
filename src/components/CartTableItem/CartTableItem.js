import classNames from "classnames/bind";
import styles from "./CartTableItem.module.scss";

const cx = classNames.bind(styles);

function CartTableItem({ item, onIncrease, onDecrease }) {
    return (
        <tr className={cx("cart-row")}>
            <td className={cx("product-info")}>
                <img src={item.image} alt={item.name} className={cx("thumbnail")} />
                <span className={cx("name")}>{item.name}</span>
            </td>
            <td className={cx("price")}>{item.price.toLocaleString()}đ</td>
            <td className={cx("quantity-control")}>
                <button onClick={() => onDecrease(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => onIncrease(item.id)}>+</button>
            </td>
            <td className={cx("subtotal")}>{(item.price * item.quantity).toLocaleString()}đ</td>
        </tr>
    );
}

export default CartTableItem;
