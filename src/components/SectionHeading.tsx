import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionHeadingProps {
  tag?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
  centered?: boolean;
  light?: boolean;
}

const SectionHeading = ({ tag, title, subtitle, children, centered = true, light = false }: SectionHeadingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${centered ? "text-center" : ""}`}
    >
      {tag && (
        <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 ${
          light
            ? "bg-primary-foreground/10 text-cyan-glow"
            : "bg-secondary/10 text-secondary"
        }`}>
          {tag}
        </span>
      )}
      <h2 className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${
        light ? "text-primary-foreground" : "text-foreground"
      }`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg max-w-2xl ${centered ? "mx-auto" : ""} ${
          light ? "text-primary-foreground/70" : "text-muted-foreground"
        }`}>
          {subtitle}
        </p>
      )}
      {children}
    </motion.div>
  );
};

export default SectionHeading;
