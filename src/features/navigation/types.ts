export interface MenuLink {
  title: string
  route: string
  navImg: string | null
}

export interface NavigationState {
  menuItems: MenuLink[]
}

export type SetMenuPayload = MenuLink[]
