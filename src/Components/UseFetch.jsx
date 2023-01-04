import React, { useState, useEffect } from 'react'

const UseFetch = (url) => {

    const [blogs, setBlogs] = useState(null);
    const [error, setError] = useState(null)
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {

        setTimeout(() => {
            fetch(url)
                .then(function (response) {
                    if (!response.ok) {
                        throw Error('Could not fetch the data')
                    }
                    return response.json()
                })
                .then(function (data) {
                    setBlogs(data);
                    setLoading(false)
                })
                .catch(function (error) {

                    setError(error.message)
                    setLoading(false)
                })
        }, 2000);

    }, [url])

    return { blogs, error, isLoading }
}

export default UseFetch