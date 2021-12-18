export interface GridNode {
  ui: JSX.Element
  route: string
  title: string
  navImg: string | null
}

export interface GridDimensions {
  rows: number
  columns: number
}

export interface GridPosition {
  x: string
  y: string
}

export interface GridData extends GridPosition {
  shouldRedirect: boolean
}

export type GridRow = GridNode[]
export type Grid = GridRow[]

export interface PageGridProps {
  grid: Grid
}