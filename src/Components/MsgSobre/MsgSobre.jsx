import React from "react";
import './MsgSobre.css'
import Fflor from '../../assets/img/floresça.jpg'
import Flor from './Flor'


export default () => {
    return (
        <section>
            <div id="about-area">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <br></br>
                    <h1 class="main-title">Sobre</h1>
                    <br></br>

                </div>

                <div class="col-md-6">
                <Flor foto={Fflor} id="logo"></Flor>
                    
                </div>
                <div class="col-md-6">
                    <h3 class="about-title">Floresça...onde Deus te Plantar</h3>
                    <p>A figura feminina ao longo dos tempos , sempre foi admirada em nossa sociedade, infelizmente muito mais por uma visão de posse, de propriedade, do que por suas necessidades, ambições e sonhos. Suas dores e dificuldades quase sempre menosprezadas ou nem vistas, há pouco tempo que ajustes no sentido de balizar as diferenças de gênero tem sido feitos, mas ainda há muito o que se fazer para que exista uma real equidade de gênero e é nesse sentido que foi criado o floreça.</p>
                    <p>Mais do que uma ferramenta que auxilia mulheres, a Floresça é uma ferramenta de transformação social que liga mulheres e suas necessidades, ter voluntários dipostos a ajudar, protagonizando não só a transformação dessas mulheres em situação de vulnerabilidade, como a dos profissionais e voluntários que terão suas vidas tocadas pelas histórias das mulheres atendidas fazendo com que tenham uma visão mais ampla das lutas e necessidades femininas, transformando a forma como desempenham suas funções em um sociedade tão desigual.</p>
                    <p>Nossos Serviços:</p>
                    <ul id="about-list">
                        <li> Ajuda Psicológica;</li>
                        <li> Ajuda Jurídica;</li>
                        <li> Auxílio a recolocação ao mercado;</li>
                        <li> Acolhimento de mulheres vitimas de violência.</li>

                    </ul>
                </div>
            </div>
        </div>
    </div>
        </section>
    );
}