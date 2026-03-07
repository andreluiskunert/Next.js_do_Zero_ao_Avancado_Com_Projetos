import React from 'react'
import Link from "next/link";


const PostsPage = () => {
    const postsIds = [1, 2, 3]
  return (
    <div>
  <h1> Minha FrontPage</h1>
       <ul>
        {postsIds.map((id) => (
            <li key={id}>
                <Link href={`/posts/${id}`}> ver post {id} </Link>
            </li>

        ))}
       </ul>
    </div>
  )
}

export default PostsPage
