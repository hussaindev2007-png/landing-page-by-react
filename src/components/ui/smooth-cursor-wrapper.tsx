import { useEffect, useState } from "react";
import { SmoothCursor as BaseCursor } from "@/components/ui/smooth-cursor";

export function SmoothCursor() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const update = () => setIsDesktop(window.innerWidth > 768);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  if (!isDesktop) return null;

  return <BaseCursor />;
}
