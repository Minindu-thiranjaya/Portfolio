import { motion } from 'framer-motion';
import { Code, Lightbulb, Target } from 'lucide-react';

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          {...fadeInUp}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Main Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xl text-muted-foreground leading-relaxed">
              I'm a third-year Software Engineering undergraduate at{' '}
              <span className="">SLIIT (Sri Lanka Institute of Information Technology)</span>,
              passionate about creating innovative digital solutions that make a real difference.
            </p>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              My journey in technology is driven by an insatiable curiosity for web and mobile development,
              emerging technologies, and the endless possibilities they bring. I believe in the power of
              clean code, user-centered design, and continuous learning.
            </p>

            <p className="text-xl text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring the latest tech trends, contributing to
              open-source projects, or working on personal projects that challenge my skills and creativity.
            </p>

            <div className="pt-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">Career Aspirations</h3>
              <p className="text-xl text-muted-foreground leading-relaxed">
                I aspire to become a versatile software engineer who can bridge the gap between
                innovative ideas and practical implementations, contributing to projects that have
                meaningful impact on society and technology advancement.
              </p>
            </div>
          </motion.div>

          {/* Key Highlights */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-card p-6 rounded-2xl shadow-card border border-border">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Technical Excellence</h4>
                  <p className="text-muted-foreground">
                    Focused on mastering modern development stacks including MERN,
                    mobile development with Kotlin, and emerging technologies.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-2xl shadow-card border border-border">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Lightbulb className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Innovation Mindset</h4>
                  <p className="text-muted-foreground">
                    Always seeking creative solutions to complex problems and
                    staying updated with the latest industry trends and best practices.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-2xl shadow-card border border-border">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary-glow/10 rounded-lg">
                  <Target className="h-6 w-6 text-primary-glow" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Future-Ready</h4>
                  <p className="text-muted-foreground">
                    Committed to continuous learning and adapting to new technologies
                    to build scalable and impactful software solutions.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;