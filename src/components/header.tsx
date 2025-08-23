import { Link } from "react-router-dom";

export const Header = () =>{
    return(
        <header className="bg-amber-600 p-4">
            <nav>
                <ul>
                    <Link to={"/"}>
                    pagina
                    </Link>
                </ul>
            </nav>
        </header>
    )
}