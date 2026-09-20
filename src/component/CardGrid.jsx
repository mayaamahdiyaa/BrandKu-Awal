import { useEffect, useState } from "react";
import { getData } from "../api/getData";
import Card from "./Card";

function CardGrid() {

    const [dataProduct, setDataProduct] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            const data = await getData();
            setDataProduct(data);
        };

        fetchData();

    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 border-2 border-slate-400 p-4">
            {
                dataProduct.map((data) => (
                    <Card
                        key={data.id} image={data.image} title={data.title} price={data.price} category={data.category} />
                ))
            }
        </div>
    );
}

export default CardGrid;