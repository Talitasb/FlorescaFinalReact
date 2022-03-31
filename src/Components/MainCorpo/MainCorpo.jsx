import React from "react";
import './MainCorpo.css'
import Video from "./Video";



export default () => {
    return (
        <div class="px-4 py-5 my-5 text-center" id="div1">
            <h1 class="text-light display-5 fw-bold">Floresça! </h1>
            <div class="col-lg-6 mx-auto">
                <p class="lead mb-4">
                    ...Onde Deus te Plantar <br></br>Com base nessa frase, tivemos a ideia do nome "Floresça!", pois queremos que todas as mulheres que precisarem da nossa ajuda floresçam onde elas estiverem,
                    criem raizes e consigam crescer.
                    Estamos aqui para ajudar e ser ajudada.
                </p>
        </div>
        <Video></Video>
        </div>
    );
}