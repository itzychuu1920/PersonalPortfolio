import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code } from 'lucide-react';

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-gray-900 dark:bg-black text-white py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-2xl">VS</span>
            </div>
            <h3 className="text-2xl font-bold mb-2">Vaishnav S</h3>
            <p className="text-gray-400">Enthusiastic Developer</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="border-t border-gray-800 pt-8"
          >
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
                <span>© 2025 Vaishnav S. Made with</span>
                <Heart className="w-4 h-4 text-red-500 fill-current" />
                <span>and</span>
                <Code className="w-4 h-4 text-blue-500" />
              </div>
              
              <div className="text-gray-400 text-sm">
                Built with React, TypeScript & Tailwind CSS
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
}