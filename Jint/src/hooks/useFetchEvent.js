import { useEffect, useState } from "react";
import { modalContext } from "../context/modalContext";
import { useContext } from 'react'

export const useFetchEvent = (id) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { taskId } = useContext(modalContext);

    const getData = async () => {
        try {
            const response = await fetch(
            );
            //const data = await response.json();
            const events = await response.json();
            setData(events);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getData();
    }, [taskId]);

    return {
        data,
        isLoading,
    };
};