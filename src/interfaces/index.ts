import { ReactNode } from "react"

export type Todo = {
  _id: string,
  todoName: string,
  isComplete: boolean
}

export type LayoutProps = {
  children: ReactNode
}

export type Photos = {
  title: string,
  thumbnailUrl: string
}