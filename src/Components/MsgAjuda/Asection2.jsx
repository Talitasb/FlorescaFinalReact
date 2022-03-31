import React from "react";
import './Asection.css'
import api from '../../api'

import { useState, useEffect } from 'react'

const Asection = () => {

    const [cadastro, setCadastro] = useState([])

    useEffect(() => {
        api.get('/cadastro')
            .then((rest) => {
                setCadastro(rest.data)
                console.log(rest.data)
            })
            .catch((erro) => console.log(erro))
    }, [])

    return (
        <section>
        <div class="row fotobody">
            <br></br>
            <div class="col-12">
                <h1 class="main-title2"> Cadastro</h1>
                
            </div>
            <br></br>
            <form method="post" class="main-form" action="/Home/Create">
                <div class="card">
                    <h4>Faça seu cadastro, com login e senha, e comece sua nova jornada conosco!!</h4>
                    <br></br>
                    <div class="row">
                        <div class="col">
                            <div class="form-group"></div>
                            <label for="nome">Nome</label>
                            <input type="text" class="form-control" id="nome" placeholder="Nome" required=""></input>

                        </div>
                        <div class="col-md-6 mb-3">
                            <label for="validationCustom02">Email</label>
                            <input type="text" class="form-control" id="validationCustom02" placeholder="email" required=""></input>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 mb-12">
                            <div class="form-group"></div>
                            <label for="nome">Endereço</label>
                            <input type="text" class="form-control" id="Endereço" placeholder="Endereço" required=""></input>
                            <div class="invalid-feedback">
                                Por favor, confirme seu endereço.
                            </div>
                        </div>
                        </div>
                        <div class="row">
                                                
                        <div class="col-md-4 mb-4">
                            <label for="Cidade">Cidade</label>
                            <input type="text" class="form-control" id="validationCustom04" placeholder="Cidade" required=""></input>
                            <div class="invalid-feedback">
                                Por favor, confirme sua cidade.
                            </div>
                        </div>
                        <div class="col-md-4 mb-4">
                            <label for="validationCustom04">Estado</label>
                            <input type="text" class="form-control" id="validationCustom04" placeholder="Estado" required=""></input>
                            <div class="invalid-feedback">
                            </div>
                        </div>

                        <div class="col-md-4 mb-4">
                            
                            <label for="validationCustom05">CEP</label>
                            <input type="text" class="form-control" id="validationCustom05" placeholder="CEP" required=""></input>
                            <div class="invalid-feedback">
                                Por favor, confirme seu CEP.
                            </div>
                        </div>
                    </div>
                    <div class="row">
                    <div class="col">
                            <label for="validationCustom05">Senha</label>
                            <input type="password" class="form-control" id="validationCustom05" placeholder="********" required=""></input>
                            <div class="invalid-feedback">
                                Por favor, insira a sua senha.
                            </div>
                        </div>

                        <div class="col-md-6 mb-3">
                            <label for="validationCustom05"></label>
                            <input type="password" class="form-control" id="validationCustom05" placeholder="Confirmar senha" required=""></input>
                            <div class="invalid-feedback">
                                Por favor, confirme sua senha.
                            </div>
                        </div>
                    </div>
                    <h5>Area de interesse:</h5>
                    <div class="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me"></input> Psicologia
                        </label>
                        <label>
                            <input type="checkbox" value="remember-me"></input> Juridico
                        </label>
                        <label>
                            <input type="checkbox" value="remember-me"></input> Desempregada
                        </label>
                    </div>
                    <a class="btn btn-outline-primary" href="#">Enviar</a>
                </div>
                <input name="__RequestVerificationToken" type="hidden" value="CfDJ8ICARspdK2ZKvXBhTG9oSIUAhGQusTOYQEZOzQ1-fqOlhtOanvGHB-m8CaOLui996pYVwyP7QQtYav8JaNWPvPMiXVlgDqFgh4KKd-pd7MGlE0hMkEUJCuko0YBCi-L2yh3x1kRYcYkLaCV92fYSoNo"></input></form>
            <br></br>
            
        </div>
        <br></br>
        <br></br>
        </section>
    );
}
export default Asection