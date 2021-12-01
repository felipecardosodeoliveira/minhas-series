
import React from 'react';

import axios from 'axios';

import { } from 'reactstrap';

import { Link } from 'react-router-dom';

function Home() {
    const [data, setData] = React.useState({});

    React.useEffect(() => {
        axios.get('/api')
            .then(resp => setData(resp.data))
            .catch(e => console.log('error', e));

    }, []);

    return (
        <>
            <h1>Home</h1>
        </>
    )
}

export default Home;
