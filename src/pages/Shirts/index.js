import styles from "./Shirts.module.scss";
import classNames from "classnames/bind";
import ShirtItem from "~/components/Layout/components/ShirtItem";
<<<<<<< Updated upstream

const cx = classNames.bind(styles);

const mancity = [
    { id: 'mc1', 
        shirtName: 'Quần áo Manchester City xanh sân nhà 24/25 hàng Thái Lan', 
        originalPrice: "330.000đ", 
        discountedPrice: "280.000đ", 
        image1: images.mancity1, 
        image2: images.mancity2 },

    { id: 'mc2', 
        shirtName: 'Quần áo Manchester City xanh sân khách 24/25 hàng Thái Lan', 
        originalPrice: "338.000đ", 
        discountedPrice: "280.000đ", 
        image1: images.mancity3,
        image2: images.mancity4 }, 

    { id: 'mc3', 
        shirtName: 'Quần áo Manchester City xanh sân khách mẫu 3 24/25 hàng Thái Lan', 
        originalPrice: "320.000đ", 
        discountedPrice: "280.000đ", 
        image1: images.mancity6,
        image2: images.mancity5 }, 

    { id: 'mc4', 
        shirtName: 'Quần áo Manchester City xanh sân khách 24/25', 
        originalPrice: "139.000đ", 
        discountedPrice: "100.000đ", 
        image1: images.mancity8,
        image2: images.mancity7 }, 

    { id: 'mc5', 
        shirtName: 'Quần áo Manchester City đỏ sân khách mẫu 3 24/25', 
        originalPrice: "139.000đ", 
        discountedPrice: "100.000đ", 
        image1: images.mancity10, 
        image2: images.mancity9 },

    { id: 'mc6', 
        shirtName: 'Quần áo Manchester City đỏ sân nhà 24/25', 
        originalPrice: "139.000đ", 
        discountedPrice: "100.000đ", 
        image1: images.mancity12, 
        image2: images.mancity11 },
  ];

function Shirts() {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("grid")}>
                {mancity.map((item) => (
=======
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const cx = classNames.bind(styles);

function Shirts() {
    const { clubId } = useParams();
    const [shirts, setShirts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/shirts")
            .then((response) => response.json())
            .then((data) => {
                const clubShirts = data[clubId]; // Lấy mảng áo đấu theo clubId
                if (clubShirts) {
                    // Nếu ảnh dùng "~", thay thế bằng đúng đường dẫn từ public/
                    const normalizedShirts = clubShirts.map((shirt) => ({
                        ...shirt,
                        image1: shirt.image1.replace(/^~\/assets/, "/assets"),
                        image2: shirt.image2.replace(/^~\/assets/, "/assets"),
                    }));
                    setShirts(normalizedShirts);
                } else {
                    setShirts([]);
                }
            })
            .catch((error) => {
                console.error("Lỗi khi fetch áo đấu:", error);
                setShirts([]);
            });
    }, [clubId]);

    return (
        <div className={cx("wrapper")}>
            <div className={cx("grid")}>
                {shirts.map((item) => (
>>>>>>> Stashed changes
                    <ShirtItem
                        key={item.id}
                        shirtName={item.shirtName}
                        originalPrice={item.originalPrice}
                        discountedPrice={item.discountedPrice}
                        image1={item.image1}
                        image2={item.image2}
                    />
                ))}
            </div>
        </div>
    );
}

export default Shirts;
