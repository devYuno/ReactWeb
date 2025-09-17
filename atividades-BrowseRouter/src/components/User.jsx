import { useParams } from "react-router-dom"

export const User= () => {
    const {id} = useParams()

    const type = id == 1? "Admin" : "Comum"

    return (
        <>
            <h1>Usuário: {id}</h1>
            <h2>Tipo de acesso: {type}</h2>
        </>
    )
}