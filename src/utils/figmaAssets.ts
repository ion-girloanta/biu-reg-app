import figmaAssetManifest from '../assets/figma-assets.json';

// Placeholder logo SVG as data URL
const mainLogo = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTAwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjQwIiByeD0iOCIgZmlsbD0iIzAwNTEzNiIvPgo8dGV4dCB4PSI1MCIgeT0iMjQiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IndoaXRlIiBmb250LWZhbWlseT0iSGVlYm8sIEFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iYm9sZCI+QklVPC90ZXh0Pgo8L3N2Zz4K";

// Asset mapping based on the manifest
const assetMap: Record<string, string> = {
  'main-logo-bea68e78.png': mainLogo,
};

// Asset interface based on the manifest structure
export interface FigmaAsset {
  name: string;
  nodeId: string;
  nodeType: string;
  path: string;
  ref: string;
  scaleMode: string;
  filename: string;
  fillIndex?: number;
  backgroundIndex?: number;
}

export interface FigmaAssetManifest {
  downloadedAt: string;
  figmaFileId: string;
  targetNodeId: string;
  targetNodeName: string;
  method: string;
  totalAssets: number;
  assets: FigmaAsset[];
}

// Get asset by name
export const getAssetByName = (name: string): string | undefined => {
  const asset = figmaAssetManifest.assets.find(a => a.name === name);
  return asset ? assetMap[asset.filename] : undefined;
};

// Get asset by reference ID
export const getAssetByRef = (ref: string): string | undefined => {
  const asset = figmaAssetManifest.assets.find(a => a.ref === ref);
  return asset ? assetMap[asset.filename] : undefined;
};

// Get asset by node ID
export const getAssetByNodeId = (nodeId: string): string | undefined => {
  const asset = figmaAssetManifest.assets.find(a => a.nodeId === nodeId);
  return asset ? assetMap[asset.filename] : undefined;
};

// Get all assets
export const getAllAssets = (): FigmaAsset[] => {
  return figmaAssetManifest.assets;
};

// Get asset URL by filename
export const getAssetByFilename = (filename: string): string | undefined => {
  return assetMap[filename];
};

// Asset constants for easy access
export const ASSETS = {
  MAIN_LOGO: mainLogo,
} as const;

// Utility function to check if an element has an image fill
export const hasImageFill = (element: any): boolean => {
  if (!element.fills) return false;
  return element.fills.some((fill: any) => fill.type === 'IMAGE' && fill.imageRef);
};

// Get image from Figma element
export const getImageFromElement = (element: any): string | undefined => {
  if (!hasImageFill(element)) return undefined;
  
  const imageFill = element.fills.find((fill: any) => fill.type === 'IMAGE' && fill.imageRef);
  if (!imageFill) return undefined;
  
  return getAssetByRef(imageFill.imageRef);
};

export default {
  getAssetByName,
  getAssetByRef,
  getAssetByNodeId,
  getAllAssets,
  getAssetByFilename,
  hasImageFill,
  getImageFromElement,
  ASSETS,
  manifest: figmaAssetManifest as FigmaAssetManifest,
};
