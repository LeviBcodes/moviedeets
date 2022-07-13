import {useEffect, useState} from 'react'
import axios from 'axios';

export default function useMediaSearch(query, pageNumber) {

    useEffect(() => {
        axios({
            method: 'GET',
            url: 'http://www.omdbapi.com/?apikey=a619790',
            params: {
                s: query,
                page: pageNumber
            }
        }).then(res => {
            console.log(res.data)
            }).catch(err => {
                console.log(err)
            })
    }, [query, pageNumber]);
  return null
}
