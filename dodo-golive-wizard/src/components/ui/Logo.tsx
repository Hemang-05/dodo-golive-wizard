"use client";

interface LogoProps {
  size?: "sm" | "md" | "lg";
}

export function Logo({ size = "md" }: LogoProps) {
  const sizes = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-4xl",
  };

  return (
    <div className={`font-display font-800 tracking-tight ${sizes[size]} flex items-center gap-2`}>
      <span
        className="inline-flex items-center justify-center rounded-lg bg-dodo-orange text-dodo-black font-display font-extrabold"
        style={{
          width: size === "lg" ? "2.5rem" : size === "md" ? "2rem" : "1.5rem",
          height: size === "lg" ? "2.5rem" : size === "md" ? "2rem" : "1.5rem",
          fontSize: size === "lg" ? "1.4rem" : size === "md" ? "1.1rem" : "0.85rem",
        }}
      >
        D
      </span>
      <span className="text-dodo-white font-display font-bold">
        dodo<span className="text-dodo-orange">.</span>
      </span>
    </div>
  );
}
