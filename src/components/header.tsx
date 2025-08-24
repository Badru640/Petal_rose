import { Link } from "react-router-dom";

export const Header = () =>{
    return(
        <header className="bg-black h-20 p-6 ">
            <nav>
                <ul>
                    <div>
            
                        <div className="flex justify-end ">
                            <Link to={"/"}
                            className="text-white font-medium text-2xl ml-8 hover:text-red-200 
                            ease-in-out transition-colors duration-300">
                            pagina inicial
                            </Link>
                            
                            <Link to={"Rosas"}
                            className="text-white font-medium text-2xl ml-8 hover:text-red-200 
                            ease-in-out transition-colors duration-300">
                            rosas   
                            </Link>

                            <Link to={"Contacto"}
                            className="text-white font-medium text-2xl ml-8 hover:text-red-200 
                            ease-in-out transition-colors duration-300">
                            contacto   
                            </Link>
                            
                        </div>
                        
                    </div>
                </ul>
            </nav>
        </header>
    )
}