import Blog from "./Blog";
import Button from "./Button"

const Blogs = ({ loading ,posts }) => {

  return loading ? 
    (
    <div>
      Loading...
    </div>
    ) : (    
    <div className='container-fluid'>
      <h4 className="p-2 mt-3">This is Blogs Page</h4>
      <Blog posts={posts} />
      <div className='d-flex justify-content-center my-3'>
          <Button pagePath='/' text='Go Back' />
          <Button pagePath='/post' text='Post' />
      </div>
    </div>
    )
}

export default Blogs