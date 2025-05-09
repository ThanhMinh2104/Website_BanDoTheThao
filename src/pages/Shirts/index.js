import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Shirts.module.scss";
import ShirtItem from "~/components/Layout/components/ShirtItem";

const cx = classNames.bind(styles);

function Shirts() {
    const { clubId } = useParams();
    const [shirts, setShirts] = useState([]);
    const [cart, setCart] = useState([]);

const handleAddToCart = (product, count) => {
    setCart(prevCart => {
        const existingItem = prevCart.find(item => item.id === product.id);
        const newQuantity = existingItem ? existingItem.quantity + count : count;

        if (newQuantity > product.stock) {
            alert("Vượt quá số lượng tồn kho!");
            return prevCart;
        }

        if (existingItem) {
            return prevCart.map(item =>
                item.id === product.id
                    ? { ...item, quantity: newQuantity, total: newQuantity * product.price }
                    : item
            );
        } else {
            return [
                ...prevCart,
                {
                    id: product.id,
                    name: product.shirtName,
                    price: product.price,
                    quantity: count,
                    total: count * product.price,
                    image: product.image1,
                },
            ];
        }
    });
};    

    useEffect(() => {
    fetch(`http://localhost:3001/${clubId}`) // Fetch động theo clubId
        .then((response) => {
            if (!response.ok) throw new Error("Không tìm thấy dữ liệu");
            return response.json();
        })
        .then((data) => {
            // data là mảng áo đấu
            const normalizedShirts = data.map((shirt) => ({
                ...shirt,
                image1: shirt.image1, // Không cần replace vì đường dẫn đã đúng
                image2: shirt.image2,
            }));
            setShirts(normalizedShirts);
        })
        .catch((error) => {
            console.error("Lỗi khi fetch áo đấu:", error);
            setShirts([]);
        });
}, [clubId]);

    console.log(shirts);
    

    return (
        <div className={cx("wrapper")}>
            <div className={cx("grid")}>
                {shirts.map((item) => (
                    <ShirtItem
                        key={item.id}
                        shirtName={item.shirtName}
                        originalPrice={item.originalPrice}
                        discountedPrice={item.discountedPrice}
                        image1={item.image1}
                        image2={item.image2}
                        onAddToCart={handleAddToCart}
                    />
                ))}
            </div>
        </div>
    );
}

export default Shirts;
