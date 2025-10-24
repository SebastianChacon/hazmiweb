import { useCallback } from "react";

export const useScrollTo = () => {
  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return { scrollToSection };
};
