declare module Home {

  type ElementType =
  | "rectangle"
  | "ellipse";

  interface ProjectInitData {
    id: string;
    name: string;
    modified: number;
  }

  interface ElementProperties {
    id: string;
    type: ElementType;
    color: string;
    rotation: number;
    x: number;
    y: number;
    width: number;
    height: number;
  }

  interface ProjectDescription {
    id: string;
    project: {
      id: string;
      name: string;
      width: number;
      height: number;
      items: ElementProperties[];
    }
  }
}

export type { Home };
