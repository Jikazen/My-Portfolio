/**
 * Shared framer-motion variants.
 *
 * `fadeUp` is a staggered entrance: pass the item index as the custom prop
 * (`custom={i}`) to offset its delay.
 */
export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24
  },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.15 + i * 0.1,
      ease: 'easeOut' as const
    }
  })
};