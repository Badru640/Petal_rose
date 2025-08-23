import { Link } from "react-router-dom"
import { Header } from "../components/header"



export const Home = () =>{
    return(

        <body className="bg-gradient-to-r from-pink-300 to-red-400  ">
            
        
        <div > 
            <Header/>

           <h1 className="flex justify-center text-4xl">Bem vindo a petal rose🌹</h1>
      
        <div className="flex justify-center mt-96 text-2xl ">
        <Link to={"Rosas"}>
        <button className="bg-white p-2 mr-6 rounded hover:text-red-500 transition-colors duration-300">
            Ver rosas
        </button>
        </Link>
        
        <Link to={"Contactos"}>
        <button className="bg-white p-2 ml-6 rounded hover:text-red-500 transition-colors duration-300">
            Contactos
        </button>
        </Link>
        
        </div>
        
        
        
        
        
        
        
        
        
        </div>
</body>

    )
}
export default Home