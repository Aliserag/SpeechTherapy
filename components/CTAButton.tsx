import Link from "next/link";

interface CTAButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
}

export function CTAButton({
  href = "/book",
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
}: CTAButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-sm";

  const variantStyles = {
    primary: "bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500",
    secondary: "bg-white text-primary-700 border-2 border-primary-600 hover:bg-primary-50 focus:ring-primary-500",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (onClick) {
    return (
      <button onClick={onClick} className={buttonClasses}>
        {children}
      </button>
    );
  }

  return (
    <Link href={href} className={buttonClasses}>
      {children}
    </Link>
  );
}
