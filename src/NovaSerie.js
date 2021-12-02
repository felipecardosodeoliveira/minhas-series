import React from 'react';

import { useNavigate } from 'react-router-dom';

import axios from 'axios';

function NovaSerie() {
    const [form, setForm] = React.useState({ name: '', genre_id: null });
    const [genres, setGenres] = React.useState([]);
    const navigate = useNavigate();

    React.useEffect(() => {
        axios.get('/api/genres')
            .then(res => setGenres(res.data.data));
    }, []);


    const onChange = (evt) => {
        setForm({ ...form, [evt.target.name]: evt.target.value });
    }

    const save = () => {
        axios.post('/api/series', form)
            .then(resp => navigate('/series'))
    }

    return (
        <section className="container">
            <h1>Nova Série</h1>
            <div className="card">
                <div className="card-header">
                    Cadastrar nova Série
                </div>
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Nome</label>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={onChange}
                                className="form-control" id="name"
                            />

                            <div className="form-group mt-3">
                                <label htmlFor="genrer">Gênero</label>
                                <select className="form-control custom-select"
                                    name="genre_id" onChange={onChange}>
                                    <option
                                        key="selecione-null"
                                        value={null}
                                    >
                                        Selecione
                                    </option>
                                    {genres.map((g, i) => {
                                        return <option
                                            key={g.id}
                                            value={g.id}
                                        >
                                            {g.name}
                                        </option>
                                    })}
                                </select>
                            </div>
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

export default NovaSerie;