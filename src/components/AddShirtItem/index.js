import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./AddShirtItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import AddShirtModal from "../AddShirtModal";


const cx = classNames.bind(styles);

function AddShirtItem({ clubId, onShirtAdded }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const openModal = () => {
        setIsModalOpen(true);
        document.body.style.overflow = "hidden";
    };
    
    const closeModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = "auto";
    };
    
    return (
        <div className={cx("wrapper")}>
            <div className={cx("add-shirt-card")} onClick={openModal}>
                <div className={cx("add-icon-container")}>
                    <FontAwesomeIcon icon={faPlus} className={cx("add-icon")} />
                    <span className={cx("add-text")}>Add New Shirt</span>
                </div>
            </div>
            
            <AddShirtModal 
                isOpen={isModalOpen}
                onClose={closeModal}
                clubId={clubId}
                onShirtAdded={onShirtAdded}
            />
        </div>
    );
}

export default AddShirtItem;