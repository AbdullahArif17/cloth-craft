// src/animations/variants.js

// Simple fade in from below
export const fadeInUp = {
	hidden: { opacity: 0, y: 30 },
	visible: {
	  opacity: 1,
	  y: 0,
	  transition: {
		duration: 0.6,
		ease: 'easeOut',
	  },
	},
  };
  
  // Stagger container for multiple items
  export const staggerContainer = {
	hidden: {},
	visible: {
	  transition: {
		staggerChildren: 0.2,
	  },
	},
  };
  