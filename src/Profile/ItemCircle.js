import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function ItemCircle({
  items, relativeRadius, shouldAnimate, children,
}) {
  function calculatePosition(angle) {
    return {
      x: `${Math.round(relativeRadius * Math.cos(angle) * 100) / 100}%`,
      y: `${Math.round(-relativeRadius * Math.sin(angle) * 100) / 100}%`,
    };
  }

  let angle = -Math.PI / 6;
  const itemsWithPosition = items.map(i => {
    const { x, y } = calculatePosition(angle);
    angle += ((4 / 3) * Math.PI) / (items.length - 1);

    return { ...i, x, y };
  });

  return (
    <div className="techstack">
      <AnimatePresence initial={shouldAnimate}>
        {React.Children.toArray(itemsWithPosition.map(item => (
          <motion.div
            className="profile__icon"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              x: item.x,
              y: item.y,
            }}
            transition={{
              type: 'spring',
              duration: 1.8,
              delay: 0.2,
            }}
          >
            {item.icon}
            <p className="profile__icon-title">{item.title}</p>
          </motion.div>
        )))}
      </AnimatePresence>
      {children}
    </div>
  );
}

export default ItemCircle;
