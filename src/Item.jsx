import { Link } from "react-router-dom";

export default function Item({item}) {
    return (
        <>  
        <Link to={`/desc/${item.id}`} className="item-wrapper">
            <div className="item-single">
                <div className="item-img">
                    <img src={item.image} alt={item.title} loading="lazy"/>
                </div>
                <div className="item-description">
                    <div className="item-title">
                        {item.title}
                    </div>
                    <div className="item-price">
                        ${item.price.toFixed(2)}
                    </div>
                </div>
        </div>
        </Link>
        </>
    )
}