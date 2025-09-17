import { useParams } from "react-router-dom"

export const Category= () => {
    const {category} = useParams()
    const {id} = useParams()

    return (
        <>
            <h1>Categoria: {category}</h1>
            <h1>Id: {id}</h1>
        </>
    )
}