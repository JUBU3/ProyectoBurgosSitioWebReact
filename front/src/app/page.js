import Image from "next/image";
import styles from "./page.module.css";

import Header from "./componentes/Header";


<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-SgOJa3DmI69IUzQ2PVdRZhwQ+dy64/BUtbMJw1MZ8t5HZApcHrRKUc4W0kG879m7" crossorigin="anonymous"></link>

export default function Home() {
  return (
<main class="holder">

        <div class="columnas">
            <section class="bievenidos">
                <h2>Bienvenidos</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, minima ad. Voluptas fuga est, vero nostrum veniam accusamus doloremque quas, obcaecati sapiente sunt ipsa cum pariatur nisi reprehenderit esse libero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae possimus tenetur nulla at excepturi minus veritatis fugit praesentium, sunt amet vero, laudantium officiis quo, mollitia ullam voluptatem quisquam commodi ratione. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut dolor laudantium sequi explicabo doloribus necessitatibus, enim ex ipsam minus atque alias! Accusantium officiis odio deserunt incidunt, totam impedit quos magnam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores libero alias voluptatem, sapiente optio maiores quasi tempore ipsam! Expedita quidem molestiae consequuntur provident quibusdam ipsum nemo totam nulla ut aut. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam maxime officia molestias excepturi doloribus iure saepe optio, natus aperiam pariatur voluptates dolores minima distinctio? Quibusdam repellat itaque corrupti impedit accusantium!</p>
            </section>
            <section class="testimonios">
                <h2>Testimonios</h2>
                <div class="testimonio">
                    <span class="cita">Simplemente excelente</span>
                    <span class="autor">Juan Gomez - zapatos.com</span>
                </div>
                <div class="testimonio">
                    <span class="cita">Simplemente excelente</span>
                    <span class="autor">Juan Gomez - zapatos.com</span>
                </div>

            </section>

        </div>
        <br/>
        <br/>

        <div class="carouselcustom">
            <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="10000">
                        <img src="img/carroselHome1.png" class="d-block w-100" alt="..."/>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src="img/carroselHome2.png" class="d-block w-100" alt="..."/>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="img/carroselHome3.png" class="d-block w-100" alt="..."/>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        

    </main>



  );
}
