import classNames from "classnames/bind";
import styles from "./CartSummary.module.scss";

const cx = classNames.bind(styles);

function CartSummary({ total, onClick }) {
    return (
        <div className={cx("cart-summary")}>
            <h3>CART TOTALS</h3>
            <div className={cx("summary-row")}>
                <span>Subtotal</span>
                <span>{total.toLocaleString()}đ</span>
            </div>
            <div className={cx("summary-row")}>
                <span>Total</span>
                <span>{total.toLocaleString()}đ</span>
            </div>
            <button className={cx("checkout-btn")} onClick={onClick}>
                PROCEED TO CHECKOUT
            </button>

            <div className={cx("coupon-section")}>
                <label>Coupon</label>
                <input type="text" placeholder="Coupon code" />
                <button>Apply coupon</button>
            </div>
        </div>
    );
}

export default CartSummary;
