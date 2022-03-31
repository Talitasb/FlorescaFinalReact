import React from "react";
import './Section1.css'
import SecImg from "./SecImg";
import Autoestima from "../../assets/img/autoestima.png"
import Justiceiras from "../../assets/img/justiceiras.png"
import Atados from "../../assets/img/atados.png"


export default () => {
    return (
        <div id="ongs" class="album py-5 bg-light">
    <div class="container">
        <h1>Conheça nossas ongs Parceiras:</h1>
        <br></br>
        <br></br>

        <div class="row">
            <div class="col-md-4">
                <div class="card mb-4 box-shadow">
                    <SecImg foto={Autoestima}></SecImg>
                    <div class="card-body">
                        <p class="card-text">O Programa Autoestima quer estar com você e reuniu um conjunto de conteúdos como: autocuidado, controle do estresse, relaxamento, alimentação, e outros temas relacionados à saúde mental que podem te ajudar a repensar seu cotidiano e transformá-lo para um dia a dia melhor.</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <a class="btn btn-outline-primary" href="https://autoestima.sp.gov.br/">Visitar</a>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card mb-4 box-shadow">
                <SecImg foto={Justiceiras}></SecImg>
                    <div class="card-body">
                        <p class="card-text"> O “Justiceiras” possibilitará uma orientação para que mulheres em situação de violência realizem quando desejarem, o boletim de ocorrência on-line ou presencial, ou façam o pedido de medidas protetivas. Ë uma rede de mulheres unidas para informar e, antes mais nada, apoiar, fortalecer e encorajar as meninas e mulheres que estão em situação de violência doméstica.</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <a class="btn btn-outline-primary" href="https://justiceiras.org.br/">Visitar</a>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-4">
                <div class="card mb-4 box-shadow">
                <SecImg foto={Atados}></SecImg>
                    <div class="card-body">
                        <p class="card-text">#JuntandoGenteBoa com oportunidades de voluntariado pelo Brasil. O Atados tem o objetivo de mobilizar pessoas e gerar transformações positivas na sociedade, através das seguintes frentes: nossa plataforma digital gratuita, projetos que fazemos com empresas, nossos projetos sociais autorais, fortalecimento de rede.</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <a class="btn btn-outline-primary" href="https://www.atados.com.br/">Visitar</a>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    );
}