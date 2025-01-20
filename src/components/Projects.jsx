import { PROJECTS } from "../constants/index.js";
import { motion } from "framer-motion";

const Projects = () => {


 
 

  return (
    <div className="pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        My Work
      </motion.h2>
      <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-1">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 1 }}
            className="flex flex-col lg:flex-row bg-slate-900 shadow-lg rounded-lg overflow-hidden"
          >
            {/* Project Image */}
            <div className="lg:w-1/2">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-80 object-cover"
              />
            </div>

            {/* Project Details */}
            <div className="p-6 lg:w-2/3">
              <h3 className="mb-2 font-semibold text-2xl">{project.title}</h3>
              <p className="mb-4 text-stone-400">{project.description}</p>
              <div className="mb-4 flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {project.githubLink ? (
                  <a
                    href={project.githubLink}
                    className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 focus:ring-2 focus:ring-gray-500 focus:outline-none transition duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                ) : (
                  <button
                    disabled
                    className="px-4 py-2 bg-gray-400 text-gray-700 rounded-lg cursor-not-allowed"
                  >
                    GitHub
                  </button>
                )}
                {project.liveLink ? (
                  <a
                    href={project.liveLink}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 focus:ring-2 focus:ring-blue-400 focus:outline-none transition duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                ) : (
                  <button
                    disabled
                    className="px-4 py-2 bg-gray-400 text-gray-700 rounded-lg cursor-not-allowed"
                  >
                    Live Demo
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
     
    </div>
  );
};

export default Projects;
