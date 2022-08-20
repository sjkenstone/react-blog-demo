import { Link } from 'react-router-dom'

const Button = ({pagePath, text}) => {
  return (
    <Link to={pagePath} className='btn btn-primary mx-1'>{text}</Link>
  )
}

export default Button