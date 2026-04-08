import { useRef } from "react";
import { motion } from "framer-motion";

type Props = React.ComponentProps<typeof motion.a> & {
  dragThreshold?: number; // px
};

export function DraggableLink({ dragThreshold = 6, onClick, ...props }: Props) {
  const startRef = useRef<{ x: number; y: number } | null>(null);
  const draggedRef = useRef(false);

  return (
    <motion.a
      {...props}
      onPointerDown={(e) => {
        // pointer start pos
        startRef.current = { x: e.clientX, y: e.clientY };
        draggedRef.current = false;
        props.onPointerDown?.(e);
      }}
      onPointerMove={(e) => {
        if (!startRef.current) return;

        const dx = e.clientX - startRef.current.x;
        const dy = e.clientY - startRef.current.y;

        if (Math.hypot(dx, dy) > dragThreshold) {
          draggedRef.current = true;
        }
        props.onPointerMove?.(e);
      }}
      onPointerUp={(e) => {
        startRef.current = null;
        props.onPointerUp?.(e);
      }}
      onClick={(e) => {
        // If it was a drag, cancel click navigation
        if (draggedRef.current) {
          e.preventDefault();
          e.stopPropagation();
          return;
        }
        onClick?.(e);
      }}
    />
  );
}