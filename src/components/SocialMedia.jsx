import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
            <a href="https://github.com/SaidNivek" target="_blank" rel="noreferrer"><BsGithub /></a>
        </div>
        <div>
            <a href="https://www.linkedin.com/in/saidnivek/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
        </div>
    </div>
  )
}

export default SocialMedia