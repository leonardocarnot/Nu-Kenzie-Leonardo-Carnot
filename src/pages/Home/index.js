import React from "react";

function Home(){
    return(
        <main>
        <div class="div1">
        <h1>
            <img className="nuKenzieTitle" src="./../src/img/homePageTitle.svg" alt="nukenzie"></img>
        </h1>
        <h2>Centralize o controle das suas finanças</h2>
        <p>de forma rápida e segura</p>
        <button onclick="window.location.href='./../src/App.js'">Iniciar</button>
    </div>
    <div class="div2">
        <img className="nuKenzieHeader" src="./../src/img/homePageImage.svg" alt="homePageImage"></img>
    </div>
    </main>
    )
}

export default Home;