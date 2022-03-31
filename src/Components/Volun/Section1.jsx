import React from "react";

import Simg from '../../assets/img/voluntariado.jpg'
import SecImg from './SecImg'


export default () => {
    return (
        <section>
            <div id="about-area">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <br></br>
                <h1 class="main-title">Voluntariado</h1>
                <br></br>
            </div>
            {/* <div class="col-md-6">
            <SecImg foto={Simg} id="logo"></SecImg>
            </div> */}
            <div>
                <h3 class="about-title">De mulheres para mulheres...</h3>
                <p>Venha fazer parte na nossa equipe, como voluntário. Ser voluntário além de ajudar ao outro, ajuda a nós mesmos, nos enriquece como pessoa e cidadão.</p>
                <p>Desenvolvemos programas em três eixos principais, com o objetivo de ajudar nossa sociedade.</p>
                <p>Queremos pessoas ativas e com vontade de mudar o mundo que vivemos, que tem um olhar e atitudes acolhedoras, com reciprocidade e principalmente sororidade.</p>
                <p>Ser voluntário é usar o bem como .... florir</p>
                <p>Nossas Vagas:</p>
                <ul id="about-list">
                    <li> Psicologo formado, ou em fase de estagio para auxiliar as mulheres.</li>
                    <li> Pessoa da area Juridica para auxilio e orientação nos casos.</li>
                    <li> Dar acolhimento a mulheres vitimas de violência que precisam de auxilio juridico ou psicologico.</li>
                    <li> Pessoa para auxilio nos encaminhamentos e encaminhamento de novas vagas.</li>
                    <li> Todo apoio é bem vindo...</li>

                </ul>
            </div>
        </div>
    </div>
</div>
        </section>
    );
}