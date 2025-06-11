


export default function Contacto() {
  return (

    <main class="holder contacto">

        <div>
            <h2>Contacto Rápido</h2>
            <form action="" method="" class="formulario">
                <p>
                    <label for="nombre">Nombre</label>
                    <input type="text" name=""/>
                </p>
                <p>
                    <label for="email">Email</label>
                    <input type="text" name=""/>
                </p>
                <p>
                    <label for="telefono">Telefono</label>
                    <input type="number" name=""/>
                </p>
                <p>
                    <label for="mensaje">Mensaje</label>
                    <textarea name="" id=""></textarea>
                </p>
                <p>
                    <input type="submit" value="Enviar"/>
                </p>
            </form>

        </div>
        <div class="datos">
            <h2>Otras vias de comunicación</h2>
            <p>También puede contactarse con nosotros usando los siguientes medios</p>
            <ul>
                <li>Telefono: 11223344</li>
                <li>Email: contactanos@gmail.com</li>
                <li>Dirección: Juramento 600</li>
            </ul>
        </div>
         


    </main>




  );
}
