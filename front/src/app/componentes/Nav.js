import Link from "next/link";

export default function Nav() {
    return (

        <nav>
            <div className="holder">
                <ul>
                    <li><Link className="activo" href="/">Home</Link></li>
                    <li><Link href="/productos">Catalogo de Productos</Link></li>
                    <li><Link href="/novedades">Novedades y Ofertas</Link></li>
                    <li><Link href="/contacto">Contacto</Link></li>
                </ul>

            </div>

        </nav>

    )

}