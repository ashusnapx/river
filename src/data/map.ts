import india from "./india-map.json";
import world from "./world-map.json";

export interface RiverGeom {
  d: string;
  length: number;
  source: [number, number];
  end: [number, number];
  /** x, y, angle in degrees */
  label: [number, number, number];
  bbox: [number, number, number, number];
}

export interface MapData {
  viewBox: string;
  credits: string;
  india?: string;
  land?: string;
  neighbours?: { name: string; d: string }[];
  states?: string;
  lakes?: { name: string; d: string }[];
  seas?: { name: string; x: number; y: number }[];
  cities?: { name: string; x: number; y: number }[];
  rivers: Record<string, RiverGeom>;
}

export const indiaMap = india as unknown as MapData;
export const worldMap = world as unknown as MapData;
export const mapFor = (system: string) => (system === "world" ? worldMap : indiaMap);
