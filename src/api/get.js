import api from "./api"
import { useState, useEffect } from "react"



export default get = (path) => {
    const [item, setItems] = useState([])
    const [refresh, setRefresh] = useState(false)
    const getProducts = async() => {
        let data = await api.get(path)
        setItems(data.data.data)
    }
    useEffect(() => {
        getProducts()
        setRefresh(true)
    }, [refresh])
    return {refresh, data}
}