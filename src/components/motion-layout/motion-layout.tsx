import React from 'react'
import { motion } from 'framer-motion'
import { IMotionLayoutProps } from '../../models/interface/motion-layout'

const MotionLayout: React.FC<IMotionLayoutProps> = ({ children, id }) => {
    return (
        <motion.div
            key={id}
            initial={{ scale: 0 }}
            animate={{
                scale: 1,
                transition: { delay: 0.3, type: 'spring' }
            }}
            exit={{
                opacity: 0,
                transition: { delay: 0.3 },
            }}
            layout
        >
            {children}
        </motion.div>
    )
}

export default MotionLayout