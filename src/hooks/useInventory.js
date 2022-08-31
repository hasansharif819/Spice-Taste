import { useEffect, useState } from "react"

const useInventory = () => {
    const [inventories, setInventories] = useState([]);
    useEffect( () => {
        fetch('https://boiling-coast-23133.herokuapp.com/spice')
        .then(res => res.json())
        .then(data => setInventories(data))
    }, [])
    return [inventories, setInventories];
}

export default useInventory;