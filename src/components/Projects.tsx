import { motion } from 'framer-motion';
import { ExternalLink, Github, Smartphone, Monitor } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import hospitalProject from '@/assets/hospital-project.jpg';
import financeProject from '@/assets/finance-project.jpg';

const Projects = () => {
  const projects = [
    {
      title: "Hospital Management System",
      description: "A comprehensive web-based hospital management solution built with the MERN stack. Features include patient registration, appointment scheduling, medical records management, and real-time dashboards for healthcare professionals.",
      image: hospitalProject,
      technologies: ["React", "Node.js", "Express", "MongoDB", "TypeScript", "Tailwind CSS"],
      type: "web",
      features: [
        "Patient Registration & Management",
        "Appointment Scheduling System",
        "Medical Records Database",
        "Real-time Analytics Dashboard",
        "Role-based Access Control",
        "Responsive Design"
      ],
      github: "https://github.com/Minindu-thiranjaya/Hospital-System.git",
      demo: "#"
    },
    {
      title: "Personal Finance Manager App",
      description: "An intuitive Android application for personal finance tracking and budget management. Built with Kotlin, it helps users monitor expenses, set financial goals, and gain insights into their spending patterns.",
      image: financeProject,
      technologies: ["Kotlin", "Android SDK", "Room Database", "Material Design", "Charts Library"],
      type: "mobile",
      features: [
        "Expense Tracking & Categorization",
        "Budget Planning & Monitoring",
        "Financial Goal Setting",
        "Visual Spending Analytics",
        "Secure Local Data Storage",
        "Material Design UI"
      ],
      github: "https://github.com/Minindu-thiranjaya/Finance-Tracking-App.git",
      demo: "#"
    },
    {
      title: "Clothing Store E-commerce Platform",
      description: "A full-stack e-commerce application built with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, and payment integration.",
      image: "/pro2.jpeg",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Redux"],
      type: "web",
      features: [
        "User Authentication & Authorization",
        "Product Catalog & Search",
        "Responsive Material Design UI",
        "Admin Dashboard for Product Management",
        "Shopping Cart & Checkout Process",
      ],
      github: "https://github.com/Minindu-thiranjaya/Clothing-Store.git",
      demo: "#"
    },
    {
      title: "Property Management System",
      description: "A property management system for real estate agencies with features for property listings, tenant management, and lease tracking.",
      image: "/pro3.jpeg",
      technologies: ["React", "Node.js", "PostgreSQL", "TypeScript", "Material UI"],
      type: "web",
      features: [
        "User Authentication & Authorization",
        "User Account Management",
        "Review & Rating System",
        "Admin Dashboard & Controls",
        "Image Gallery for Properties",
      ],
      github: "https://github.com/Minindu-thiranjaya/Property-Management.git",
      demo: "#"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing real-world applications that demonstrate my skills and passion for development
          </p>
        </motion.div>

        <motion.div
          className="space-y-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
              variants={itemVariants}
            >
              {/* Project Image */}
              <motion.div
                className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-elegant border border-border">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex gap-3">
                        <Button 
                          size="sm" 
                          className="bg-white/20 backdrop-blur-sm text-white border-white/20 hover:bg-white/30"
                          asChild
                        >
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            Code
                          </a>
                        </Button>
                        <Button 
                          size="sm" 
                          className="bg-white/20 backdrop-blur-sm text-white border-white/20 hover:bg-white/30"
                          asChild
                        >
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Demo
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Project type indicator */}
                <div className="absolute -top-4 -right-4 p-3 bg-primary rounded-full shadow-lg">
                  {project.type === 'web' ? (
                    <Monitor className="h-6 w-6 text-primary-foreground" />
                  ) : (
                    <Smartphone className="h-6 w-6 text-primary-foreground" />
                  )}
                </div>
              </motion.div>

              {/* Project Content */}
              <motion.div
                className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div>
                  <h3 className="text-3xl font-bold text-foreground mb-4">{project.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Features */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        className="flex items-center text-muted-foreground"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                      >
                        <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                      >
                        <Badge variant="secondary" className="px-3 py-1">
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <Button variant="default" size="lg" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-5 w-5" />
                      View Code
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-5 w-5" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-gradient-card p-8 rounded-2xl shadow-card border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Interested in My Work?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              These projects represent just a glimpse of what I can create. I'm always working on 
              new ideas and would love to discuss how we can collaborate on your next project.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <a href="https://github.com/Minindu-thiranjaya" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                View More Projects
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;