import { useScroll } from 'framer-motion'

export function useScrollProgress() {
  const { scrollY, scrollYProgress } = useScroll()
  return { scrollY, scrollYProgress }
}
