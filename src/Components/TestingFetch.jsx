import React, { useState, useEffect } from 'react'

const TestingFetch = () => {

    const [tests, setTest] = useState("")


    useEffect(() => {

        fetch('http://127.0.0.1:3001/blogs')
            .then(function (response) {
                if (!response.ok) {
                    throw Error('Could not fetch the data')
                }
                return response.json()
            })
            .then(function (data) {
                setTest(data)
            })
            .catch(function (error) {

                console.log(error.message)

            })

    }, [])


    return (
        <div>
            {
                tests && tests.map(test => {
                    return (
                        <>
                            {test.title}
                        </>
                    )
                })
            }
        </div>
    )
}

export default TestingFetch