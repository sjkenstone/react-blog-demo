import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Home from './Pages/Home' 
import Blogs from './Pages/Blogs' 
import Post from './Pages/Post' 

function App() {
  const [posts, setPosts] = useState([])
  const [newPost, setNewPost] = useState({})
  const [loading, setLoading] = useState(true)
  const [status, setStatus] = useState(false)

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
      const data = await res.json()

      setPosts(data)
      setLoading(false)
      setStatus(true)
      
    }
   
    fetchPosts()
    .catch(console.error)
    console.log({status})
  }, [status])



  useEffect(() => {
    const insertPost = () => {
      if(status === true){
      setPosts([newPost, ...posts])
      }
    }

    insertPost()

    console.log({ status })
  }, [newPost])

  const postBlog = async (blog) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(blog)
    })

    const data = await res.json()

    setNewPost(data)     
    console.log(newPost)
  }

  return (
    <Router>
      <nav className="navbar navbar-expand bg-light">
        <div className="container-fluid">
          <div className="navbar-nav">
            <Link to='/' className="nav-link" aria-current="page">Home</Link>     
            <Link to='/blogs' className="nav-link">Blog Page</Link>
            <Link to='/post' className="nav-link">Post Page</Link>
            </div>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blogs' element={<Blogs loading={loading} posts={posts} />} />
        <Route path='/post' element={<Post onPost={postBlog} />} />
      </Routes>  
    </Router>  
  );
}

export default App;
