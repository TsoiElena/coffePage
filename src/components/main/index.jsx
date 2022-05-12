import React, {useEffect, useState} from 'react'
import Preloader from "../Preloader";
import CoffeePage from "../CoffeePage";

const  Main = () => {
    const [loading, setLoading] = useState(true)
    const [coffeeList, setCoffeeList] = useState([])

    useEffect(() => {
        fetch('https://random-data-api.com/api/coffee/random_coffee?size=20')
            .then((res) => {
                if (res.status >= 200 && res.status < 300) {
                    return res
                } else {
                    let error = new Error(res.statusText)
                    error.response = res
                    throw error
                }
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCoffeeList(data)
                setLoading(false)
            })
            .catch((e) => {
                alert('Error: ' + e.message)
                console.log(e.response)
                setLoading(false)
            })
    }, [])
    return (
        <>
            { loading ? <Preloader/> : (
                <>
                    {
                        coffeeList.length === 0 ? <h1>Результатов не найдено</h1> : (
                            <CoffeePage coffeeList={coffeeList}/>
                        )
                    }
                </>
            )}
        </>
    )
}

export default Main
