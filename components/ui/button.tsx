'use client'
import { ReactNode } from "react"

export function Button({ children, asChild = false, variant = "", ...props }: any) {
  const Tag = asChild ? "span" : "button"
  return <Tag {...props} className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">{children}</Tag>
}