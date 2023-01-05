import React, { useState, useEffect } from 'react'

const TestingFetch = () => {

    const [tests, setTest] = useState("");
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("")
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


    const handleSubmitForm = (e) => {
        e.preventDefault();

        const blog = { title, body, author }
        fetch('http://127.0.0.1:3001/blogs', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(blog)
        }).then(() => {
            alert('blog added')
        })

    }





    return (
        <div>
            <div className="display">
                {
                    tests && tests.map(test => {
                        return (
                            <div key={test.id}>
                                {test.title}
                            </div>
                        )
                    })
                }
            </div>
            <div className="create">
                <form onSubmit={handleSubmitForm}>
                    <label htmlFor="title">Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} id="" required />
                    <label htmlFor="title">Body</label>
                    <input type="text" value={body} onChange={(e) => setBody(e.target.value)} id="" required />
                    <label htmlFor="title">Author</label>
                    <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} id="" required />
                    <button>Add</button>
                </form>
            </div>
        </div>
    )
}

export default TestingFetch