import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';

export function SkillsSection() {
  const categories = {
    frontend: 'Frontend',
    backend: 'Backend',
    tools: 'Tools & DevOps',
    design: 'Design',
    others: 'Others'
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        {Object.entries(categories).map(([categoryKey, categoryName]) => {
          const categorySkills = skills.filter(skill => skill.category === categoryKey);
          
          return (
            <motion.div
              key={categoryKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
                {categoryName}
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {categorySkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center hover:shadow-lg dark:hover:shadow-gray-900/50 transition-all duration-300 border border-gray-200 dark:border-gray-700"
                  >
                    <div className="text-4xl mb-3">{skill.icon}</div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {skill.name}
                    </h4>
                    
                    {/* Skill Level Bar */}
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                      />
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {skill.level}%
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}