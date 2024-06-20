import { useEffect, useState } from "react";

export const useFetchCategories = () => {
    const [data, setData] = useState([]);
    const [isLoadingCategories, setIsLoadingCategories] = useState(true);

    const getData = async () => {
        try {
            const response = await fetch(
                "http://jint_backend.test/api/categories/all"
            );
            //const data = await response.json();
            const categories = await response.json();
            setData(categories);
            setIsLoadingCategories(false);
            console.log('category: '+ categories);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return {
        categories: data,
        isLoadingCategories,
    };
};