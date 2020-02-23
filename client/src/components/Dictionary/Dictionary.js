import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/async/useFetch';
import { DICTIONARY_GET, TRANSLATION_GET, TRANSLATION_POST } from '../../api/keys';

const TrGet = props => {
    const [, request] = useFetch({ key: TRANSLATION_GET });

    const get = () => {
        request({ query: { id: props.id } })
    }

    return (
        <div>
            <button onClick={get}>Get</button>
        </div>
    )
}

const TrPost = props => {
    const [, request] = useFetch({ key: TRANSLATION_POST });

    const post = () => {
        request({ body: {
            id: props.id,
            entry: 'oooo',
            output: 'aaaa'
        }})
    }

    return (
        <div>
            <button onClick={post}>Post</button>
        </div>
    )
}

const Dictionary = () => {
    const [state, request] = useFetch({ key: DICTIONARY_GET });

    const { response } = state;
    const params = useParams()

    useEffect(() => {
        request({ query: params })
    }, [request, params]);

    return (
        <div>
            <TrGet id={params.id} />
            <TrPost id={params.id} />
            <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
    )
}

export default Dictionary;