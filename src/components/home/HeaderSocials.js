import React from 'react'
const recipientEmail = 'shivamkumarsingh1998@gmail.com';
  const mailtoLink = `mailto:${recipientEmail}`;
const HeaderSocials = () => {
	return (
		<div className='home_socials'>
			<a href={mailtoLink} className='home_social-link'target="_blank" rel="noreferrer">
			<i class="fa fa-envelope"></i>
			</a>

			<a href="" className='home_social-link'target="_blank">
			<i class="fa-brands fa-facebook"></i>
			</a>

			<a href="https://github.com/shivamk1998" className='home_social-link'target="_blank" rel="noreferrer">
			<i class="fa-brands fa-github"></i>
			</a>

			<a href="https://www.linkedin.com/in/shivam-singh-068214163" className='home_social-link'target="_blank" rel="noreferrer">
			<i class="fa-brands fa-linkedin"></i>
			</a>

			<a href="" className='home_social-link'target="_blank">
			<i class="fa-brands fa-twitter"></i>
			</a>
		</div>
	)
}

export default HeaderSocials