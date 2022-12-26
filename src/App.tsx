import React, { useCallback, useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import styles from "./App.module.css";

const App = () => {
    const [data, setData] = useState<any>([]);
    const [currentId, setCurrentId] = useState(-1);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://dummyjson.com/products/?limit=10");
            const resData = await response.json();
            setData(resData.products);
        }

        fetchData();
    }, []);

    const onMouseOverMemoized = useCallback((id: any) => setCurrentId(id), []);
    const onMouseLeaveMemoized = useCallback(() => setCurrentId(-1), []);

    return (
        <div className={styles.main}>
            {!!data.length && data.map((product: any) =>
                <ProductCard image={product.images[0]}
                             id={product.id}
                             text={product.description}
                             isHover={product.id === currentId}
                             onMouseOver={onMouseOverMemoized}
                             key={product.id}
                             onMouseLeave={onMouseLeaveMemoized}
                />)}
        </div>
    );
}

export default App;
