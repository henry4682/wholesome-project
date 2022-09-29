import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.scss';
import { motion } from 'framer-motion';

function NotFound() {
  return (
    <>
      <motion.div
        className=" d-flex flex-column my-5 fs-1 page-height text-center text-primary"
        initial={{ scale: 1, y: 0, opacity: 0.5 }}
        animate={{ scale: 1.5, y: 100, opacity: 1 }}
        exit={{ scale: 1 }}
      >
        404 NotFound
        <p className=" mt-1 fs-5">走錯了喔</p>
        <Link className="text-dark fs-5 mt-3" to="/">
          回首頁
        </Link>
      </motion.div>
    </>
  );
}

export default NotFound;
