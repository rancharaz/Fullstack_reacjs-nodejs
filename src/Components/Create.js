import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Mario');
    const [isLoading, setisLoading] = useState(false)

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()

        const blog = { title, body, author }
        setisLoading(true)
        fetch('http://localhost:8000/blogs', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('New blog added')
            setisLoading(false);
            navigate('/')

        })
    }


    return (
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Blog title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />

                <label htmlFor="">Blog body</label>
                <textarea required value={body} onChange={(e) => setBody(e.target.value)} />

                <label htmlFor="">Blog author</label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>

                {!isLoading && <button>Add blog</button>}
                {isLoading && <button>Adding blog</button>}
            </form>
        </div>
    )
}

export default Create