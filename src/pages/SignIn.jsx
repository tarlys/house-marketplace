import { useState } from 'react'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg'
import OAuth from '../components/OAuth'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'

function SignIn() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const { email, password } = formData

  const navigate = useNavigate()

  const onChange = (e) => {
    setFormData((prevState) => ({ ...prevState, [e.target.id]: e.target.value }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      const auth = getAuth()
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      if (userCredential.user) {
        navigate('/')
      }
    } catch (error) {
      console.log(error)
      toast.error('Bad user credentials')
    }
  }

  return (
    <>
      <div className='pageContainer'>
        <header>
          <p className='pageHeader'>Welcome back!</p>
        </header>
        <form onSubmit={onSubmit}>
          <input type='email' name='' id='email' className='emailInput' placeholder='email' value={email} onChange={onChange} />
          <div className='passwordInputDiv'>
            <input type={showPassword ? 'text' : 'password'} className='passwordInput' placeholder='Password' id='password' value={password} onChange={onChange} />

            <img
              src={visibilityIcon}
              alt='show password'
              className='showPassword'
              onClick={() => {
                setShowPassword((prevState) => !prevState)
              }}
            />
          </div>
          <Link to='/forgot-password' className='forgotPasswordLink'>
            Forgot Password
          </Link>
          <div className='signInBar'>
            <p className='signInText'>Sign In</p>
            <button className='signInButton'>
              <ArrowRightIcon fill='#ffffff' width='34px' height='34px' />
            </button>
          </div>
        </form>
        <OAuth />
        <Link to='/sign-up' className='registerLink'>
          Sing Up Instead
        </Link>
      </div>
    </>
  )
}
export default SignIn
