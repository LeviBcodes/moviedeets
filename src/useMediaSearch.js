import {useEffect, useState} from 'react'
import axios from 'axios';
import { logDOM } from '@testing-library/react';

export default function useMediaSearch(query, pageNumber) {
    const[loading, setLoading] = useState(false)
    const[error,setError] = useState(false)
    const[media, setMedia] = useState([])
    const[hasMore, setHasMore] = useState(false)

    const api = "http://www.omdbapi.com/?apikey=a619790&plot=full";

    useEffect(() => {
        setMedia([])
    }, [query])

    useEffect(() => {
        setLoading(true)
        setError(false)
        let cancel
        axios.get(api, {
            params: {s: query, page: pageNumber},
            cancelToken: new axios.CancelToken(c => cancel = c)
            },
            )
            .then(res => {
                setMedia(prevMedia => {
                    return [...new Set([...prevMedia, ...[res.data]])]
                })
                setHasMore(res.data.Search.length > 0)
                setLoading(false)
            }).catch(e => {
                if(axios.isCancel(e)) return
                setError(true)
            })
        return () => cancel()
    }, [query, pageNumber]);
  return {loading, error, media, hasMore}
}
