import React from "react";
import './Asection.css'
import AsecImg from './AsecImg'
import Ajuda from "../../assets/img/ajuda.jpg"

import api from '../../api'

import { useState, useEffect } from 'react'

const Asection = () => {

    const [setCadastro] = useState([])

    useEffect(() => {
        api.get('/cadastro')
            .then((rest) => {
                setCadastro(rest.data)
                console.log(rest.data)
            })
            .catch((erro) => console.log(erro))
    }, [])

    return (
        <div id="about-area">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <br></br>
                        <h1 class="main-title">Ajuda</h1>
                        <br></br>
                    </div>
                    <div class="col-md-6">
                    <AsecImg foto={Ajuda}></AsecImg>
                    </div>
                    <div class="col-md-6">
                        <h3 class="about-title">De mulheres para mulheres...</h3>
                        <p>
                            Pedir ajuda não é sinônimo de fraqueza ou de vulnerabilidade. <br></br>
                                Na verdade, é justamente o contrário, pedir ajuda é um ato de valentia através do qual conhecemos a importância de assumir nossas
                                limitações e de reconhecer o papel que os outros têm em nosso crescimento.
                        </p>

                        <p></p>
                        <p>Ajuda:</p>
                        <ul id="about-list">
                            <li><i class="fas fa-check" aria-hidden="true"></i> Apoio Psicológico;</li>
                            <li><i class="fas fa-check" aria-hidden="true"></i> Apoio Juridico;</li>
                            <li><i class="fas fa-check" aria-hidden="true"></i> Apoio para casos de situação de risco.</li>
                            <li><i class="fas fa-check" aria-hidden="true"></i> Apoio para mulheres em caso de desemprego.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Asection