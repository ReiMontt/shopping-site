import Item from "./Item";
import { useState, useEffect } from "react";

export default function ItemList({ query, items }) {

    const [filteredItems, setFilteredItems] = useState([]);

    useEffect(() => {
        if (!items || items.length === 0) {
            setFilteredItems([]);
            return;
        }
    
        const lowerCaseQuery = query.toLowerCase();
        const filtered = items.filter(item => {
            const words = item.title.toLowerCase().split(/\s+/)
            return words.some(word => word.startsWith(lowerCaseQuery));
        });
        setFilteredItems(filtered);
    }, [query, items]);
    

    return (
        <>  
        <div className="item-list-wrapper">
            {
            filteredItems.length === 0 ? "No Items" : (
                <div className="item-list">
                    {
                        filteredItems.map((item) => 
                        <Item key={item.id} item={item} />
                        )
                    }
                </div>)
            }
        </div>
        </>
    )
}