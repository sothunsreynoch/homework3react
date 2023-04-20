import { useEffect } from "react"
import { useState } from "react"
import { MyCard } from "./MyCard"
import Skeleton from "./Skeleton"

  const Products = () => {
    const[products , setProducts] = useState([])
    const[loading , setLoading] = useState(true)


        const fetchProduct = () => {
            fetch('https://api.escuelajs.co/api/v1/products')
            .then(res => res.json())
            .then(res =>
                {
                    setProducts(res)
                    setLoading(false)
                }
            )}
            useEffect(() => {
                fetchProduct()
            },[])
            return(
                <>
                <div className="container mt-4">
                    <h1 style={{textAlign:'center',margin:'25px'}}>List Data Product Card</h1>
                    <div className="row g-4">
                    {
                        loading ? <Skeleton/> : products.map((product) => (
                            <MyCard key={product.id} product={product}/>))
                    }
                    </div>
                </div>
                </>
            )

}
export default Products

