const Blog = ({ posts }) => {
  
  
  return (
 
    <div className='d-flex flex-wrap justify-content-start'>
    {posts.map((post) => (
        <div key={post.id} className='card col-12 col-md-6 col-xl-3 p-2 m-2' >
          <div className='card-body'>
            <h5 className='card-title'>{post.title}</h5>
            <p className='card-text'>{post.body}</p>
            <p className='card-link'>{post.userId}</p>
          </div>
        </div>
      ))}
    </div>

  )
}

export default Blog