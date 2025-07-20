import { motion } from 'framer-motion'

const emojis = ['❤️', '✨', '🌟', '🥰', '🍰', '🎂', '🧁', '🌸']

const FloatingHearts = () => {
  return (
    <div className="floating-hearts">
      {[...Array(15)].map((_, i) => (
        <motion.span
          key={i}
          initial={{ y: 0, x: Math.random() * 100 }}
          animate={{ 
            y: [0, -100, -200],
            x: [0, Math.random() * 40 - 20, 0],
            opacity: [0.3, 1, 0]
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 5
          }}
          style={{
            left: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 1 + 0.8}rem`
          }}
        >
          {emojis[Math.floor(Math.random() * emojis.length)]}
        </motion.span>
      ))}
    </div>
  )
}

export default FloatingHearts