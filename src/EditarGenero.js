import React from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import axios from 'axios';

function EditarGenero() {
    const [name, setName] = React.useState('');
    const navigate = useNavigate();
    const params = useParams();

    React.useEffect(() => {
        axios.get('/api/genres/' + params.id)
            .then(res => setName(res.data.name))
    }, [params.id]);

    const onChange = (evt) =>
        setName(evt.target.value);

    const save = () =>
        axios.put('/api/genres/' + params.id, { name })
            .then(resp => navigate('/generos'))

    return (
        <section className="container">
            <h1>Editar Gênero</h1>
            <div className="card">
                <div className="card-header">
                    Escolha um novo nome para o Gênero
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

export default EditarGenero;
