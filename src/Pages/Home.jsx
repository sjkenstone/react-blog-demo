import Button from './Button'

const Home = () => {

  return (
    <div className='d-flex justify-content-center align-items-center flex-column' style={{height: '700px'}}>
      <h4>Welcome to React-Blog</h4>
      <div className='my-2'><Button pagePath='/blogs' text='Go to Blog' /></div>
    </div>
  )
}

export default Home