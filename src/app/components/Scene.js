import { MotionCanvas, LayoutCamera, Box } from "framer-motion-3d";

export function Scene() {
  return (
    <div>
      <MotionCanvas>
        <LayoutCamera position={[0, 0, 5]} />
        <Box />
      </MotionCanvas>
    </div>
  );
}
