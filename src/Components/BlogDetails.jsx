import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import UseFetch from './UseFetch';

const BlogDetails = () => {

    const { id } = useParams()
    const { blogs, error, isLoading } = UseFetch('http://localhost:8000/blogs/' + id)
    const navigate = useNavigate()
    const handleClick = () => {

        fetch('http://localhost:8000/blogs/' + blogs.id, {
            method: 'DELETE'
        }).then(() => {
            navigate(-1)
        })

    }

    return (
        <div className="blog-details">
            {isLoading && <div> Loading ... </div>}
            {error && <div> {error} </div>}

            {blogs && (
                <article>
                    <h2>{blogs.title}</h2>
                    <p>Written by {blogs.author}</p>
                    <div>{blogs.body}</div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
    )
}

export default BlogDetails