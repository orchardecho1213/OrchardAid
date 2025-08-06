'use client'
import { ReactNode } from "react"

export function Card({ children, className = "" }: { children: ReactNode, className?: string }) {
  return <div className={className}>{children}</div>
}

export function CardContent({ children, className = "" }: { children: ReactNode, className?: string }) {
  return <div className={className}>{children}</div>
}