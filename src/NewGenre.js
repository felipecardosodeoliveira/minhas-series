import React from 'react';

import { useNavigate } from 'react-router-dom';

import axios from 'axios';

function NewGenre() {
    const [name, setName] = React.useState('');
    const navigate = useNavigate();

    const onChange = (evt) =>
        setName(evt.target.value);

    const save = () =>
        axios.post('/api/genres', { name })
            .then(resp => navigate('/generos'))

    return (
        <section className="container">
            <h1>Novo Gênero</h1>
            <div className="card">
                <div className="card-header">
                    Cadastrar novo Gênero
                </div>
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Nome</label>
                            <input
                                type="text"
                                value={name}
                                onChange={onChange}
                                className="form-control" id="name"
                            />
                            <button
                                type="button"
                                className="btn btn-primary mt-3"
                                onClick={save}
                            >
                                Salvar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default NewGenre;