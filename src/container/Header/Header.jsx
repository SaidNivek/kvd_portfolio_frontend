import React from 'react'
import './Header.scss'
import { motion } from 'framer-motion'
import { images } from '../../constants'
import { AppWrap } from '../../wrapper'
import { BsDownload } from 'react-icons/bs'

import KD_Resume from './KD_Resume.pdf'

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I'm</p>
              <h1 className="head-text">Kevin</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text">Insatiably Curious</p>
            <p className="p-text">Web Developer</p>
            <p className="p-text">Cat Dad</p>
            <p className="p-text">Gamer</p>
          </div>

          <div className="tag-cmp app__flex">
            <a href={KD_Resume} download target="_blank" rel="noopener noreferrer">
              <button className="app__header-button">
                  <BsDownload />
              </button>
            </a>
            <p className="p-text">Download Résumé</p>
          </div>
        </div>        
      </motion.div>

      <motion.div 
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img className="app__header-profile-img" src={images.profile} alt="profile_bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}          
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        />      
      </motion.div>

      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.git, images.react, images.sass, images.api, images.javascript, images.node].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>

    </div>
  )
}

export default AppWrap(Header, 'home')