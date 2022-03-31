import React from "react";
import './Header.css'
import Logo from "./Logo";
import Flogo from "../../assets/img/floresça-removebg-preview.png"
import Footer from '../Footer/Footer'
import MainCarroussel from "../MainCarroussel/MainCarroussel";
import MainCorpo from "../MainCorpo/MainCorpo";
import { Link } from "react-router-dom";


export default () => {
    return (
        <section>
            <header>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        
                    <Logo foto={Flogo} id="logo"></Logo>
                    
                        <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="navbar-collapse collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <Link to="/">
                                        <a class="nav-link" >Home</a>
                                    </Link>
                                </li>

                                <li class="nav-item">
                                    <Link to="/Ajuda">
                                        <a class="nav-link" href="/Home/Ajuda">Preciso de ajuda</a>
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/Voluntariado">
                                        <a class="nav-link" href="/Home/Voluntariado">Voluntariado</a>
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/Sobre">
                                        <a class="nav-link" href="/Home/Sobre">Sobre</a>
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/Parcerias">
                                        <a class="nav-link" href="/Home/Parcerias">Parcerias</a>
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/Contato">
                                        <a class="nav-link" href="/Home/Contato">Contato</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <form action="/Home/Login" method="post"><button class="btn btn btn-outline-primary">Login</button><input name="__RequestVerificationToken" type="hidden" value="CfDJ8ICARspdK2ZKvXBhTG9oSIWkbs-8XAR77AAlPNDM5GYoSJvYuFC620tclOQ585reDma2Ea1HafXFckoGxt5OV3eYY_ryD1vpshFM-u29EOZ9au3ATr3Io_6z3b5M5Zf8jOCZB-fq60gxi62kYjZG5qk"></input></form>
                    </div>
                </nav>
            </header>

        </section>

    )
}