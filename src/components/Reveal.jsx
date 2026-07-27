import { useInView } from "../hooks/useInView"

/**
 * Wrapper de entrada al scroll.
 * variant: up | down | left | right | scale | blur
 */
export default function Reveal({
  children,
  className = "",
  variant = "up",
  delay = 0,
  as: Tag = "div",
  once = true,
}) {
  const [ref, inView] = useInView({ once })

  return (
    <Tag
      ref={ref}
      className={`reveal reveal-${variant} ${inView ? "is-visible" : ""} ${className}`}
      style={{ "--reveal-delay": `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}
