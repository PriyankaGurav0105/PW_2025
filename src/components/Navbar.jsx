import { FaGithub, FaLinkedinIn, FaMailBulk } from 'react-icons/fa'
import logo from '../assets/Logo.png'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <a href='/' aria-label='Home'>
            <img src={logo} className='mx-2'width={100} height={33} alt='Logo'/>
            </a>
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href='https://www.linkedin.com/in/priyanka-gurav-882445197/'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='LinkedIn'
            >
                <FaLinkedinIn />
            </a>
            <a href='https://github.com/PriyankaGurav0105'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='GitHub'
            >
                <FaGithub />
            </a>
            <a href='https://github.com/PriyankaGurav0105'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='GitHub'
            >
                <FaMailBulk />
            </a>

        </div>
      
    </div>
  )
}

export default Navbar
