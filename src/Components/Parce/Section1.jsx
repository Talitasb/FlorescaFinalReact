import React from "react";
import './Section1.css'


export default () => {
    return (
        <div class="px-4 py-5 my-5 text-center" id="parce1">
            <h1 class="display-5 fw-bold">Parcerias</h1>
            <div class="col-lg-6 mx-auto">
                <p class="lead mb-4">Obrigada por se interessar em ser nosso parceiro, a sua ajuda será de grande serventia para nosso futuro.</p>
                <p>Conheca nossas ongs parceiras, ou se cadastre</p>
                <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <form action="/Home/Parcerias#ongs" method="post"><a class="btn btn-outline-primary btn-lg px-4" href="#ongs">Ongs Parceiras</a><input name="__RequestVerificationToken" type="hidden" value="CfDJ8ICARspdK2ZKvXBhTG9oSIU27v4ANh-e7sBqdENhgGspvJHMmKheP63ivttK2B4AhXbXMHHLtIS56YBvYNvEC3njF9znwpqGzOtBLBA3QsVCXhhlE28NQNy10JQWmVAiFyrVl66_KfpwSpY_uMEjobE"></input></form>
                    <form action="/Home/Parcerias#cadastro" method="post"><a class="btn btn-outline-primary btn-lg px-4" href="#volsec2">Faça seu Cadastro</a><input name="__RequestVerificationToken" type="hidden" value="CfDJ8ICARspdK2ZKvXBhTG9oSIU27v4ANh-e7sBqdENhgGspvJHMmKheP63ivttK2B4AhXbXMHHLtIS56YBvYNvEC3njF9znwpqGzOtBLBA3QsVCXhhlE28NQNy10JQWmVAiFyrVl66_KfpwSpY_uMEjobE"></input></form>
                </div>
            </div>
        </div>
    );
}