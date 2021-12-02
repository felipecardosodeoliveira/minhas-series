
import React from 'react';

import { Link } from 'react-router-dom';

function Home() {

    return (
        <>
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-4">Bem-Vindo ao <strong>Minhas Séries</strong></h1>
                    <p className="lead">Através deste aplicativo, você pode criar uma lista com  as informações da suas séries preferidas.</p>
                    <hr className="my-4" />
                    <p>Não perca tempo!! Clique no botão abaixo e comece a utilizar nossos serviços.</p>
                    <p className="lead">
                        <Link className="btn btn-primary btn-lg" to="/series">Cadastrar Série</Link>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Home;
