import { useEffect, useState, useContext } from 'react'
import { modalContext } from '../context/modalContext'

export const useFetchEventsWeek = () => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { user } = useContext(modalContext);

    const getData = async () => {
        try {
            const response = await fetch(
            )
            const eventsWeek = await response.json()
            setData(eventsWeek)
            setIsLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return {
        eventsWeek: data,
        isLoadingEventsWeek: isLoading,
    }
}
