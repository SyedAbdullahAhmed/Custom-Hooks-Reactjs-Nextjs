"use client"
import { useEffect, useState } from "react"
import axios from 'axios'

const useFetch = (url) => {
    const [isLoading, setIsLoading] = useState(false)
    const [apiData, setApiData] = useState(null)
    const [serverError, setsServerError] = useState(null)

    useEffect(()=>{
        setIsLoading(true)
        const fetchData = async () => {
            try {
                const res = await axios.get(url)
                const data = await res?.data
                setApiData(data)
                setIsLoading(false)
            } catch (error) {
                setsServerError(error)
                setIsLoading(false)
            }
        }
        fetchData()
    },[url])
    console.log(apiData);
    return {isLoading, apiData, serverError}
}

export default useFetch