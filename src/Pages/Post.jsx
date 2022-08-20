import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button'

const Post = ({ onPost }) => {
  const [title, setTitle] = useState('')
  const [userId, setUserId] = useState('')
  const [body, setBody] = useState('')

  const navigate = useNavigate()

  const onSubmit = async (event) => {
    event.preventDefault()

    if(!title) {
      alert('Please add a title')
      return
    }

    if (!userId) {
      alert('Please add userId')
      return
    } 

    onPost({ title, userId, body })

    setTitle('')
    setUserId('')
    setBody('')

    navigate('/blogs')

  }

  const handleTitle = (event) => {
    setTitle(event.target.value)
  }

  const handleUserId = (event) => {
    const userId = Number(event.target.value)
    
    setUserId(userId)
  }

  const handleContent = (event) => {
    setBody(event.target.value)
  }
  
  return (
    <div className='container p-5' style={{width: '1000px'}}>
      <h4>Post New Blog Page</h4>
      <form onSubmit={onSubmit}>
        <div className='row my-3'>
          <div className='col'>
            <input type='text' className='form-control' placeholder='Add Title' value={title} onChange={handleTitle} />
          </div>
          <div className='col'>
            <input type='number' className='form-control' placeholder='Add User ID' value={userId} onChange={handleUserId} />
          </div>
        </div>
        <div className='form-floating'>
          <textarea className="form-control" placeholder="Post content here" id="floatingTextarea" value={body} onChange={handleContent} style={{ height: '300px'}} ></textarea>
          <label htmlFor="floatingTextarea">Content</label>
        </div>
        <div className='d-flex justify-content-center py-2'>
          {/* <input type='submit' value='Post' className='btn btn-primary mx-1' /> */}
          <button type='submit' className='btn btn-primary mx-1'> Post </button>
          <Button pagePath='/blogs' text='Cancel' />
        </div>
      </form>
    </div>
    
  )
}

export default Post