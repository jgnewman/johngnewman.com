export interface GridNode {
  ui: JSX.Element
  route: string
  title: string
}

export interface MapNode {
  ui: JSX.Element,
  title: string,
  route: string,
  x: string
  y: string
}

// { route1: { ui, x: 0, y: 1}, route2: { ui, x: 1, y: 1 }, ...etc }
export type RouteMap = Record<string, MapNode>

export interface GridPosition {
  routeMap: RouteMap
  nodes: JSX.Element[]
  rows: number
  columns: number
  currentNode: MapNode
  nextNode: GridNode | null
  prevNode: GridNode | null
  shouldRedirect: boolean
}

export type GridRow = GridNode[]
export type Grid = GridRow[]

export interface PageGridProps {
  grid: Grid
}