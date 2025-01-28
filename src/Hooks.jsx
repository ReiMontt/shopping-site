import { useState, useEffect, useRef } from "react";

export function useFetchItems() {
    const [items, setItems] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchedRef = useRef(false);

    useEffect(() => {
        if (fetchedRef.current) return;

        const fetchItems = async () => {
            setLoading(true);
            try {
                const response = await fetch(`https://fakestoreapi.com/products`);
                const data = await response.json();
                setItems(data);
                setError(null);
            } catch (err) {
                setError('Error fecthing data', err);
            } finally {
                setLoading(false);
                fetchedRef.current = true;
            }
        };

        fetchItems()
    }, [])

    return {items, loading, error};
}   

export function useFetchItem(id) {
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchedRef = useRef(false);

    useEffect(() => {
        const fetchItems = async () => {
            setLoading(true);
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                const data = await response.json();
                setItem(data);
                setError(null);
            } catch (err) {
                setError('Error fecthing data', err);
            } finally {
                setLoading(false);
                fetchedRef.current = true;
            }
        };

        fetchItems()
    }, [id])

    return {item, loading, error};
}   