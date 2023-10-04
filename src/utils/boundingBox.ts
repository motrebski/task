export const calculateBoundingBox = (width: number, height: number, angleRadians: number) => {
  
  const boundingBoxHeight = width * Math.abs(Math.sin(angleRadians)) + height * Math.abs(Math.cos(angleRadians));
  const boundingBoxWidth = width * Math.abs(Math.cos(angleRadians)) + height * Math.abs(Math.sin(angleRadians));
  return { width: boundingBoxWidth, height: boundingBoxHeight };

}
