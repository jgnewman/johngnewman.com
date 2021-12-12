export interface MenuLink {
  title: string
  route: string
}

export interface NavigationState {
  menuItems: MenuLink[]
}

export type SetMenuPayload = MenuLink[]
