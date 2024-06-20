import { useEffect, useState } from "react";

export const useFetchTags = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getData = async () => {
        try {
            const response = await fetch(
                "http://jint_backend.test/api/tags/all"
            );
            //const data = await response.json();
            const tags = await response.json();
            setData(tags);
            setIsLoading(false);
            console.log('category: '+ tags);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return {
        tags: data,
        isLoadingTags: isLoading,
    };
};