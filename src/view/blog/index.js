// import EditarSystem from "./EditarSystem";
import api from "../../utils/api";

import { useEffect, useState } from "react";

import Post from "../../components/PostCard";

import { getCurrentUser } from '../../utils/auth/auth.service.js';
import { Link } from "react-router-dom";

function Blog() {
  const [posts, setPost] = useState([])

  useEffect(() => {
    api.get('/post/list')
    .then((res) => {
      console.log(res.data)
      setPost(res.data)
    })
    .catch((err) => {
      alert(`Error: ${err}` )
    });
  }, [])
  
  return (
    <>
      <section className="container my-4">
        <div>
          <div className="d-flex justify-content-between align-items-center">
            <h1 className="title text-start text-warning">
              Confira nossos posts...
            </h1>
            {!getCurrentUser()?<Link to="blog/create" className="align-items-center background-success">Teste</Link>:<p>HELLO</p>}
          </div>

          <ul
            className="d-flex justify-content-around flex-wrap gap-3 mt-4"
            id="listPostsComponents"
          >
            {posts.map((post) => (
              <li className="w-100 " key={post.id}>
                <Post image={post.banner_image} title={post.title} autor={post.autor} text={post.text} link={`/post/${post.id}`}/>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default Blog;
