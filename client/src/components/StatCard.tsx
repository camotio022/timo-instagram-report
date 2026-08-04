import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";
import type { ReactNode } from "react";

interface StatCardProps {
  title: string;
  value: number;
  suffix?: string;
  prefix?: string;
  icon?: ReactNode;
  borderColor?: string;
  trend?: "up" | "down" | "neutral";
  trendValue?: string;
  delay?: number;
}

export default function StatCard({
  title,
  value,
  suffix = "",
  prefix = "",
  icon,
  borderColor = "border-l-ig-pink",
  trend,
  trendValue,
  delay = 0,
}: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay, ease: [0.23, 1, 0.32, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`bg-card rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 border-l-4 ${borderColor}`}
    >
      <div className="flex items-start justify-between mb-3">
        <p className="text-sm font-medium text-muted-foreground">{title}</p>
        {icon && (
          <div className="text-muted-foreground opacity-60">
            {icon}
          </div>
        )}
      </div>
      <p className="text-3xl font-display font-bold tabular-nums text-foreground">
        <AnimatedCounter value={value} prefix={prefix} suffix={suffix} />
      </p>
      {trend && trendValue && (
        <div className={`mt-2 text-xs font-medium flex items-center gap-1 ${
          trend === "up" ? "text-growth" : trend === "down" ? "text-danger" : "text-muted-foreground"
        }`}>
          {trend === "up" && "↑"}
          {trend === "down" && "↓"}
          <span>{trendValue}</span>
        </div>
      )}
    </motion.div>
  );
}
