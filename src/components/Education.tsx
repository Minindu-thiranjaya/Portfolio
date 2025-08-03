import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      institution: "Sri Lanka Institute of Information Technology (SLIIT)",
      degree: "Bachelor of Science in Software Engineering",
      period: "2023 - 2027 (Expected)",
      location: "Malabe, Sri Lanka",
      description: "Currently pursuing a comprehensive degree in Software Engineering with focus on modern development practices, software architecture, and emerging technologies.",
      highlights: [
        "Object-Oriented Programming & Design Patterns",
        "Full-Stack Web Development",
        "Mobile Application Development",
        "Database Design & Management",
        "Software Project Management"
      ]
    },
    {
      institution: "St. Thomas' College",
      degree: "Advanced Level - Physical Science Stream",
      period: "2010 - 2018",
      location: "Matara, Sri Lanka",
      description: "Completed Advanced Level studies with a strong foundation in Mathematics and Science, developing analytical and problem-solving skills.",
      highlights: [
        "Combined Mathematics",
        "Physics",
        "Chemistry",
        "General English"
        
      ]
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
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            My <span className="text-primary">Education</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building a strong foundation through quality education and continuous learning
          </p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary-glow"></div>

            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                className="relative mb-12 last:mb-0"
                variants={itemVariants}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10"></div>

                {/* Content card */}
                <div className="ml-20">
                  <motion.div
                    className="bg-gradient-card p-8 rounded-2xl shadow-card border border-border hover:shadow-elegant transition-all duration-300"
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-2 flex items-center">
                          <GraduationCap className="mr-3 h-6 w-6 text-primary" />
                          {edu.institution}
                        </h3>
                        <p className="text-lg font-semibold text-primary mb-2">{edu.degree}</p>
                      </div>
                      
                      <div className="text-right">
                        <div className="flex items-center text-muted-foreground mb-1">
                          <Calendar className="mr-2 h-4 w-4" />
                          {edu.period}
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <MapPin className="mr-2 h-4 w-4" />
                          {edu.location}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {edu.description}
                    </p>

                    {/* Highlights */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Key Subjects & Achievements:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {edu.highlights.map((highlight, idx) => (
                          <motion.div
                            key={idx}
                            className="flex items-center text-muted-foreground"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                          >
                            <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                            {highlight}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
