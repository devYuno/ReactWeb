import { useNavigate } from "react-router-dom"

export const About = () => {
    const navigate = useNavigate()

    const handleNavigate = () => {
        //alert("Navegação")
        navigate('/')
    }

    return (
        <>
            <h1>About</h1>
            <button onClick={handleNavigate}>Voltar para Home</button>
        </>
    )
} 