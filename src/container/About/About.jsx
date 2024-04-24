import React from 'react'
import { motion } from 'framer-motion'

import { AppWrap, MotionWrap } from '../../wrapper'
import './About.scss'

const About = () => {

  return (
    <>
      <h2 className="head-text">A Little <span>About Myself</span></h2>

      <div className="app__profiles">
          <motion.div
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
          >
            <p className="about-text" style={{ marginTop: 10 }}>

              My journey into the world of web development began during my time at Tallinn University of Technology, where I am currently pursuing a Bachelor's degree in Business Information Technology. From the start, I found myself drawn to the fascinating realm of web technologies, and as a result, I became well-versed in HTML and CSS. Additionally, in my current job, I have had the opportunity to utilize JavaScript to craft responsive navigation menus and other simple yet impactful elements. As my passion for web development grew, I delved into React through engaging tutorial projects, further expanding my skillset.
              <br />
              <br />
              Beyond the realm of work and academia, I find joy in the simple pleasures of life. Cooking, nurturing plants, and staying active with a particular enthusiasm for boxing are among my favorite pastimes. Not to mention, my lovely cat Tiara is a constant source of warmth and comfort in my life. Furthermore, I share a deep appreciation for the captivating worlds of Marvel, Harry Potter, Game of Thrones, and other enthralling sci-fi/fantasy stories. And let's not forget the allure of traveling—nothing excites me more than exploring diverse cultures, immersing myself in the beauty of nature, and marveling at the sights of far-off lands.
              <br />
              <br />
              In conclusion, this brief overview provides insight into both my professional pursuits and the delightful aspects of my personal life. As I continue to evolve in the realm of web development, I remain committed to embracing new challenges and adventures with an unwavering enthusiasm.
            </p>
          </motion.div>
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
)