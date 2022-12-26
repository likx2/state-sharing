import React, { memo } from "react";
import styles from "./ProductCard.module.css";
import classNames from "classnames";

interface ProductCardProps {
    id: string;
    image: string;
    text: string;
    isHover: boolean;
    onMouseOver: (id: string) => void;
    onMouseLeave: (id: string) => void;
}

const ProductCard = ({id, image, text, isHover, onMouseOver, onMouseLeave}: ProductCardProps) => {
    const fullText = text;
    const croppedText = text.slice(0, 20) + '...';

    const onMouseOverHandler = () => {
        onMouseOver(id);
    }

    const onMouseLeaveHandler = () => {
        onMouseLeave(id);
    }

    return (
        <div onMouseEnter={onMouseOverHandler} onMouseLeave={onMouseLeaveHandler} className={styles.wrapper}>
            <div className={styles.image_wrapper}>
                <img src={image}
                     className={classNames(styles.image, {[styles.image_hovered]: isHover})}
                     alt="img"
                />
            </div>
            <p>
                {isHover ? fullText : croppedText}
            </p>
        </div>
    );
};

export default memo(ProductCard);
