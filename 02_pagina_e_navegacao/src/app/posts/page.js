import Link from "next/link";
import React from "react";
const PostsPage = () =>{
    const postsIds = [1, 2, 3]
    return 
    <div> 
       <h1>Meu Blog  </h1> 
       <ul>
        {postsIds.map((id) =>{
            <li key={id}>
                <Link href={`/posts/${id}`}> Ver Post{id} </Link>
            </li>
        })}
       </ul>


    </div>



}
export default PostsPage