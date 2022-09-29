import React from 'react';
import './NotFound.scss';
import { motion } from 'framer-motion';

function NotFound() {
  return (
    <motion.div
      className="my-5 fs-1 page-height text-center text-primary"
      initial={{ scale: 1, y: 0, opacity: 0.5 }}
      animate={{ scale: 1.5, y: 180, opacity: 1 }}
      exit={{ scale: 1 }}
    >
      404 NotFound
    </motion.div>
  );
}

export default NotFound;
