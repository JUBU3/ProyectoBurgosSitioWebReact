'use client'


import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {

    const pathname = usePathname();
    const isActive = (path) => path === pathname;



    return (

        <nav>
            <div className="holder">
                <ul>
                    <li><Link className={isActive("/") ? 'activo' : ''}href="/">Home</Link></li>
                    <li><Link className={isActive("/productos") ? 'activo' : ''} href="/productos">Catalogo de Productos</Link></li>
                    <li><Link className={isActive("/novedades") ? 'activo' : ''} href="/novedades">Novedades y Ofertas</Link></li>
                    <li><Link className={isActive("/contacto") ? 'activo' : ''} href="/contacto">Contacto</Link></li>
                </ul>

            </div>

        </nav>

    )

}