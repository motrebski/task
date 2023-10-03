declare module HomeTypes {

  type ElementType =
  | "rectangle"
  | "ellipse";

  interface ProjectInitData {
    id: string;
    name: string;
    modified: number;
  }

  interface BoundingBox {
    width: number;
    height: number;
  }

  interface ElementProperty {
    id: string;
    type: ElementType;
    color: string;
    rotation: number;
    x: number;
    y: number;
    width: number;
    height: number;
    boundingBox: BoundingBox;
  }

  interface ProjectDescription {
    id: string;
    project: {
      id: string;
      name: string;
      width: number;
      height: number;
      items: ElementProperty[];
    }
  }
}

export type { HomeTypes };
