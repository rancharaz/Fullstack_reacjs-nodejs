import React, { useState, useEffect } from 'react'
import BlogList from './BlogList';
import UseFetch from './UseFetch';

const Home = () => {

    const { blogs, isLoading, error } = UseFetch('http://localhost:8000/blogs')


    return (
        <div className="home">

            <div>{isLoading && <p> ... is loading </p>}</div>
            <p>{error && <p> {error} </p>}</p>
            <BlogList blogs={blogs} />
            {/*             <BlogList blogs={blogs.filter(blogs => blogs.author === "mario")} title="Mario's blogs" />*/}
        </div>
    )
}

export default Home