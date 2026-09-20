export const Card = ({ image, title, price, category }) => {
    console.log(image, title, price, category);

    return (
        <div>
            <div className="border-2 border-slate-400 p-4">

                <img
                    src={image}
                    alt={title}
                    className="w-full h-40 object-contain mb-4"
                />

                <h3 className="text-xl font-semibold mb-2">{title}</h3>

                <p className="text-blue-600 font-bold mb-2">
                    ${price}
                </p>

                <p className="text-slate-600">{category}</p>

            </div>
        </div>
    );
}

export default Card;