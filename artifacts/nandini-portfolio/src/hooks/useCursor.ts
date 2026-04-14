import { useEffect } from "react";

export function useCursor() {
  useEffect(() => {
    const dot = document.getElementById("cursor-dot");
    const ring = document.getElementById("cursor-ring");

    if (!dot || !ring) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let animFrame: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
      animFrame = requestAnimationFrame(animate);
    };

    const onMouseEnterLink = () => {
      dot.style.transform = "translate(-50%, -50%) scale(2)";
      ring.style.width = "56px";
      ring.style.height = "56px";
      ring.style.borderColor = "hsl(38 92% 50%)";
    };

    const onMouseLeaveLink = () => {
      dot.style.transform = "translate(-50%, -50%) scale(1)";
      ring.style.width = "36px";
      ring.style.height = "36px";
      ring.style.borderColor = "hsl(38 92% 50% / 0.5)";
    };

    document.addEventListener("mousemove", onMouseMove);
    animFrame = requestAnimationFrame(animate);

    const links = document.querySelectorAll("a, button, [data-cursor]");
    links.forEach((link) => {
      link.addEventListener("mouseenter", onMouseEnterLink);
      link.addEventListener("mouseleave", onMouseLeaveLink);
    });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animFrame);
    };
  }, []);
}
