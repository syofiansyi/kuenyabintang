import { motion } from 'framer-motion'
import FloatingHearts from './FloatingHearts'
import BubbleBackground from './BubbleBackground'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <BubbleBackground />
      <FloatingHearts />
      
      <motion.div 
        className="content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <motion.h2
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          Kue Imut Penuh Cinta 💖
        </motion.h2>
        
        <p>Dibuat dengan bahan premium dan sentuhan kasih sayang</p>
        
        <motion.a
          href="#products"
          className="cta-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Lihat Kue Kami
        </motion.a>
      </motion.div>
      
      <motion.div 
        className="cake-image"
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
      >
        <img src="/images/hero-cake.png" alt="Kue Bintang" />
      </motion.div>
    </section>
  )
}

export default Hero