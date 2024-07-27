"use client";
import { kronaOne } from "./Font";
import { useRouter } from "next/navigation";

const Button = ({ children, onClick, href, className = "" }) => {
  const router = useRouter();
  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
    if (href && !e.defaultPrevented) {
      e.preventDefault();
      router.push(href);
    }
    if (!href) {
      return;
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`
        ${kronaOne.className}
         inline-block px-8 py-2 bg-gradient-to-b font-bold rounded text-sm text-center  uppercase tracking-wider ${className}
      `}
      style={{
        clipPath: "polygon(12% 0, 100% 0%, 100% 60%, 90% 100%, 0 100%, 0 40%)",
        textShadow: "0 1px 2px rgba(0, 0, 0, 0.5)",
        boxShadow:
          "0 2px 4px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
      }}>
      {children}
    </button>
  );
};

export default Button;

// To re-use the button
// import Button from "./path/to/Button";

// function MyComponent() {
//   return (
//     <div>
//       <Button>Connect</Button>
//     </div>
//   );
// }
