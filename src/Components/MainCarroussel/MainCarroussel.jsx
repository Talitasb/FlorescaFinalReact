import React from "react";
import './MainCarroussel.css'
import MainCarrousselImg from "./MainCarrousselImg";
import Luta from "../../assets/img/luta.png"


export default () => {
    return (
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
        <div class="carousel-item active">
            <MainCarrousselImg foto={Luta}></MainCarrousselImg>
        </div>
    </div>
</div>
    );
}