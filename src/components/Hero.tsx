import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Github, Linkedin, ExternalLink, Mail, Download, Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const roles = [
    'Software Engineer',
    'Full Stack Developer',
    'Mobile Developer',
    'Problem Solver'
  ];

  // Track mouse position for parallax effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Parallax values for background
  const parallaxX = useTransform(mouseX, [0, window.innerWidth], [-20, 20]);
  const parallaxY = useTransform(mouseY, [0, window.innerHeight], [-20, 20]);
  
  // Tilt values for profile picture
  const tiltX = useTransform(mouseX, [0, window.innerWidth], [-15, 15]);
  const tiltY = useTransform(mouseY, [0, window.innerHeight], [-15, 15]);

  // Typewriter effect
  useEffect(() => {
    const handleType = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setDisplayText(
        isDeleting
          ? fullText.substring(0, displayText.length - 1)
          : fullText.substring(0, displayText.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed, roles]);

  const handleMouseMove = (e: React.MouseEvent<HTMouseEvent>) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  const handleMouseLeave = () => {
    mouseX.set(window.innerWidth / 2);
    mouseY.set(window.innerHeight / 2);
  };

  const handleDownloadCV = () => {
    const cvUrl = '/Minidu_Thiranjaya_CV.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Minidu_Thiranjaya_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Check if device supports touch
  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  // Custom animation variants for social links
  const socialLinkVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      rotate: -10
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        delay: 0.5 + i * 0.15,
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }),
    hover: {
      y: -5,
      rotate: [0, 5, -5, 0],
      transition: {
        y: { type: "spring", stiffness: 300 },
        rotate: { duration: 0.6 }
      }
    }
  };

  // Custom animation variants for profile image
  const profileImageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotateY: 90
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        delay: 0.3,
        duration: 0.8,
        type: "spring",
        bounce: 0.4
      }
    },
    hover: {
      scale: 1.05,
      transition: { 
        duration: 0.3,
        type: "spring",
        stiffness: 200
      }
    }
  };

  // Animation for floating circles around profile
  const floatingCircleVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: [0.3, 0.8, 0.3],
      scale: [0.8, 1.2, 0.8],
      transition: {
        delay: 0.5 + i * 0.2,
        duration: 3 + i,
        repeat: Infinity,
        ease: "easeInOut"
      }
    })
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden"
      onMouseMove={!isTouchDevice ? handleMouseMove : undefined}
      onMouseLeave={!isTouchDevice ? handleMouseLeave : undefined}
    >
      {/* Geometric background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.1)_1px,transparent_1px)] bg-[size:80px_80px]" />
        <motion.div
          className="absolute top-32 left-32 w-72 h-72 bg-primary-glow/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-32 right-32 w-96 h-96 bg-accent/15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Interactive spotlight effect */}
      {!isTouchDevice && (
        <motion.div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${mouseX.get()}px ${mouseY.get()}px, rgba(59, 130, 246, 0.1) 0%, transparent 15%)`,
            opacity: 0.7,
            transition: 'background 0.2s ease-out'
          }}
        />
      )}

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl lg:text-7xl font-bold text-primary-foreground mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Minidu{' '}
              <span className="bg-gradient-to-r from-primary-glow to-accent bg-clip-text text-transparent">
                Thiranjaya
              </span>
            </motion.h1>

            <motion.div
              className="text-xl lg:text-2xl text-primary-foreground/90 mb-6 font-medium h-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span>{displayText}</span>
              <span className="animate-pulse">|</span>
            </motion.div>

            <motion.p
              className="text-lg text-primary-foreground/80 mb-12 max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Passionate about crafting innovative digital solutions and building 
              the future through code. Always eager to learn and create impactful technology.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button 
                size="lg" 
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-elegant transition-all duration-300 hover:scale-105"
                onClick={handleDownloadCV}
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href="mailto:mininduthiranjayayapa@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Me
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Profile Photo with Custom Animation */}
          <motion.div
            className="flex-shrink-0 relative pt-8 md:pt-0"
            initial="hidden"
            animate="visible"
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96 flex items-center justify-center">
              {/* Animated outer ring segments */}
              <div className="absolute inset-0">
                {/* Rotating outer ring */}
                <motion.div
                  className="absolute inset-0 rounded-full border-8 border-transparent"
                  style={{
                    borderTopColor: 'hsl(var(--primary-glow))',
                    borderRightColor: 'transparent',
                    borderBottomColor: 'transparent',
                    borderLeftColor: 'transparent',
                  }}
                  animate={{ 
                    rotate: 360,
                    borderRightColor: ['transparent', 'hsl(var(--accent))', 'transparent'],
                    borderBottomColor: ['transparent', 'hsl(var(--primary))', 'transparent'],
                    borderLeftColor: ['transparent', 'hsl(var(--primary-glow))', 'transparent'],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                
                {/* Pulsing inner ring */}
                <motion.div
                  className="absolute inset-8 rounded-full border-4 border-primary-glow/30"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.4, 0.8, 0.4],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
              
              {/* Profile image container with custom animation */}
              <motion.div
                variants={profileImageVariants}
                whileHover="hover"
                className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl z-10"
                style={{
                  transform: !isTouchDevice ? 
                    `perspective(1000px) rotateY(${tiltX.get()}deg) rotateX(${tiltY.get()}deg)` : 
                    'none',
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.3s ease-out',
                }}
              >
                {/* Profile image */}
                <img
                  src="/propic.jpeg"
                  alt="Minidu Thiranjaya"
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </motion.div>
              
              {/* Floating circles with custom animation */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 rounded-full bg-primary-glow/50"
                  style={{
                    left: `${50 + 50 * Math.cos((i * Math.PI * 2) / 6)}%`,
                    top: `${50 + 50 * Math.sin((i * Math.PI * 2) / 6)}%`,
                  }}
                  custom={i}
                  variants={floatingCircleVariants}
                  initial="hidden"
                  animate="visible"
                />
              ))}
            </div>
          </motion.div>

          {/* Social Links with Custom Animation */}
          <motion.div
            className="relative flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {/* Animated vertical line */}
            <motion.div 
              className="absolute left-1/2 transform -translate-x-1/2 w-px h-96 bg-gradient-to-b from-transparent via-primary-foreground/30 to-transparent"
              initial={{ height: 0 }}
              animate={{ height: '24rem' }}
              transition={{ 
                delay: 1,
                duration: 1.5,
                ease: [0.16, 1, 0.3, 1]
              }}
            />
            
            {/* Social icons with custom animation */}
            <div className="flex flex-col space-y-6 relative z-10">
              {[
                { icon: Github, href: 'https://github.com/Minindu-thiranjaya', label: 'GitHub', color: 'hover:bg-gray-800' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/minindu-thiranjaya-5327a2377/', label: 'LinkedIn', color: 'hover:bg-blue-600' },
                { icon: Mail, href: 'mailto:mininduthiranjayayapa@gmail.com', label: 'Email', color: 'hover:bg-red-500' },
              ].map((social, index) => (
                <motion.div
                  key={social.label}
                  custom={index}
                  variants={socialLinkVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  className="relative group"
                >
                  {/* Icon container */}
                  <motion.a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`relative w-14 h-14 rounded-full bg-primary-foreground/10 ${social.color} flex items-center justify-center text-primary-foreground hover:text-white transition-all duration-300 shadow-lg hover:shadow-2xl border-2 border-transparent hover:border-white/20 backdrop-blur-sm`}
                    aria-label={social.label}
                  >
                    {/* Icon with bounce animation */}
                    <motion.div
                      whileHover={{ 
                        scale: 1.2,
                        transition: { type: "spring", stiffness: 500 }
                      }}
                      className="relative z-10"
                    >
                      <social.icon className="h-6 w-6" />
                    </motion.div>
                    
                    {/* Glow effect on hover */}
                    <motion.div
                      className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100"
                      style={{
                        background: `radial-gradient(circle, ${social.color.replace('hover:', '')} 0%, transparent 70%)`
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                  
                  {/* Tooltip with custom animation */}
                  <motion.div
                    className="absolute left-full ml-4 px-3 py-1 bg-primary-foreground text-primary rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    initial={{ x: -10, opacity: 0 }}
                    whileHover={{ 
                      x: 0,
                      opacity: 1,
                      transition: { 
                        type: "spring",
                        stiffness: 300,
                        damping: 15
                      }
                    }}
                    style={{ top: '50%', transform: 'translateY(-50%)' }}
                  >
                    {social.label}
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-primary-foreground" />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-primary-foreground/60 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;