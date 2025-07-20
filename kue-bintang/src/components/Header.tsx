import { FaStar, FaBars } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <header className="header">
      <motion.div 
        className="container"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="logo">
          <motion.img 
            src="/images/logo.png" 
            alt="Kue Bintang" 
            whileHover={{ rotate: 10 }}
          />
          <div>
            <h1>Kue Bintang</h1>
            <p>Rasa Bintang di Setiap Gigitan!</p>
          </div>
        </div>
        
        <nav>
          <FaBars className="mobile-menu" />
          <ul>
            <li><a href="#home">Beranda</a></li>
            <li><a href="#products">Produk</a></li>
            <li><a href="#testimonials">Testimoni</a></li>
            <li><a href="#contact">Kontak</a></li>
          </ul>
        </nav>
      </motion.div>
      
      <FaStar className="star star-1" />
      <FaStar className="star star-2" />
    </header>
  )
}

export default Header