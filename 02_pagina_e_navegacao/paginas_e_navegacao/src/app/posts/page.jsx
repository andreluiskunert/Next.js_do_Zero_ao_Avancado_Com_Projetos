import React from 'react'
import Link from "next/link";

const PostsPage = () => {
    const postsIds = [1, 2, 3]
  return (
    
    <div>
        <Link href="/"> home</Link> <br />
      paginas de posts <br />
       
       <h1>Blog</h1>
       <ul>
        {postsIds.map((id) =>(
            <li key={id}> 
                <Link href={`/posts/${id}`}> ver post {id}</Link>
                {/* pra faço o restante */}
            </li>
        ))}
       </ul>
       
    </div>
  )
}

export default PostsPage
