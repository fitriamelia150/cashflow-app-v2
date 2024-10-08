import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Logo.css'

const Logo = () => {
  const navigate = useNavigate();

  return (
    <div className="logo" onClick={() => navigate('/')}>

        <svg id="logo-35" width="35" height="39" viewBox="0 0 50 39" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z" className="ccompli1" fill="#007AFF"></path> 
          <path d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z" className="ccustom" fill="#312ECB"></path>
        </svg>

        {/* <svg id="logo-43" width="160" height="30" viewBox="0 0 160 30" fill="none" xmlns="http://www.w3.org/2000/svg"> 
          <path d="M0 26.6953C4.91448 26.6953 8.89841 22.7113 8.89841 17.7969C8.89841 12.8824 4.91448 8.89844 0 8.89844V15.1273C1.47433 15.1273 2.66951 16.3225 2.66951 17.7969C2.66951 19.2712 1.47433 20.4664 0 20.4664V26.6953Z" fill="#726BEA" class="ccompli1"></path> 
          <path d="M29.6614 11.8646C28.1408 11.3829 26.5215 11.123 24.8414 11.123C16.0363 11.123 8.89844 18.261 8.89844 27.066C8.89844 27.9498 8.97036 28.8168 9.10862 29.6614H19.0145C18.6609 28.8686 18.4643 27.9903 18.4643 27.066C18.4643 23.544 21.3194 20.6888 24.8414 20.6888C26.7664 20.6888 28.4921 21.5417 29.6614 22.8902V11.8646Z" fill="#A5B4FC" class="ccompli2"></path> 
          <path d="M1.56451 0C2.30225 6.67374 7.9603 11.8646 14.8307 11.8646C21.701 11.8646 27.3591 6.67374 28.0968 0H18.5513C17.962 1.4773 16.5182 2.52121 14.8307 2.52121C13.1431 2.52121 11.6994 1.4773 11.11 0H1.56451Z" fill="#4F46E5" class="ccustom"></path>
        </svg> */}
    </div>
  )
}

export default Logo
