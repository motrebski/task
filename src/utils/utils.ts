import { HomeTypes }  from "../types/home";

export const calculateBoundingBox = (width: number, height: number, angleRadians: number) => {
  
  const boundingBoxHeight = width * Math.abs(Math.sin(angleRadians)) + height * Math.abs(Math.cos(angleRadians));
  const boundingBoxWidth = width * Math.abs(Math.cos(angleRadians)) + height * Math.abs(Math.sin(angleRadians));
  return { width: boundingBoxWidth, height: boundingBoxHeight };

}

export const validateProjectItems = (items: HomeTypes.ElementProperty[]) => {
  let error = false;

  items.forEach(item => {
    if ((typeof item?.height !== 'number') || (item?.height < 0)
      || (typeof item?.width !== 'number') || (item?.width < 0)
      || (typeof item?.x !== 'number') || (item?.x < 0)
      || (typeof item?.y !== 'number') || (item?.y < 0)
      || (typeof item?.rotation !== 'number') || (item?.rotation < 0)) {
      error = true;
    }
  });
  return error;
} 