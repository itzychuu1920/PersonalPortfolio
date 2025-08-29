import React from 'react';
import { motion } from 'framer-motion';
import { Users, Star, Calendar } from 'lucide-react';
import { communities } from '../data/portfolioData';

export function CommunitiesSection() {
  return (
    <section id="communities" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Community Involvement
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Active participation in tech communities, contributing to open source, and helping fellow developers grow
          </p>
        </motion.div>

        <div className="space-y-8">
          {communities.map((community, index) => (
            <motion.div
              key={community.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-lg dark:hover:shadow-gray-900/50 transition-all duration-300"
            >
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                {/* Community Info */}
                <div className="lg:col-span-2">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {community.name}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold">
                        {community.role}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {community.description}
                  </p>
                  
                  <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 mb-4">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{community.period}</span>
                  </div>
                </div>

                {/* Achievements */}
                <div className="lg:col-span-1">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center space-x-2">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <span>Key Achievements</span>
                  </h4>
                  <ul className="space-y-2">
                    {community.achievements?.map((achievement, idx) => (
                      <li
                        key={idx}
                        className="text-gray-600 dark:text-gray-300 text-sm flex items-start space-x-2"
                      >
                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}