import { motion } from 'framer-motion'

const BubbleBackground = () => {
  return (
    <div className="bubble-background">
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="bubble"
          initial={{ y: 100, x: Math.random() * 100 }}
          animate={{ 
            y: -100,
            opacity: [0, 0.5, 0]
          }}
          transition={{
            duration: Math.random() * 15 + 10,
            repeat: Infinity,
            delay: Math.random() * 5
          }}
          style={{
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 60 + 40}px`,
            height: `${Math.random() * 60 + 40}px`,
          }}
        />
      ))}
    </div>
  )
}

export default BubbleBackground