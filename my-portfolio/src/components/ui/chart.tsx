import * as React from 'react'

import { cn } from './utils'

// A simple, well-typed shim for chart utilities used across the app.
// This avoids heavyweight Recharts typings while keeping runtime
// correctness. Replace with a full implementation when you're ready.

export type ChartConfig = Record<
  string,
  { label?: React.ReactNode; icon?: React.ComponentType; color?: string }
>

const ChartContext = React.createContext<{ config: ChartConfig } | null>(null)

export function useChart() {
  const ctx = React.useContext(ChartContext)
  if (!ctx) throw new Error('useChart must be used within a <ChartContainer />')
  return ctx
}

export function ChartContainer({
  id,
  className,
  children,
  config,
  ...props
}: React.ComponentProps<'div'> & { config: ChartConfig; children?: React.ReactNode }) {
  return (
    <div data-slot="chart" id={id} className={cn('w-full', className)} {...props}>
      <ChartContext.Provider value={{ config }}>{children}</ChartContext.Provider>
    </div>
  )
}

export const ChartTooltip: React.FC<{ className?: string; children?: React.ReactNode }> = ({
  children,
  className,
}) => {
  return <div className={cn('chart-tooltip', className)}>{children}</div>
}

export function ChartTooltipContent({
  payload,
  className,
}: {
  payload?: any
  className?: string
}) {
  if (!Array.isArray(payload) || payload.length === 0) return null

  return (
    <div className={cn('chart-tooltip-content', className)}>
      {payload.map((p: any, i: number) => (
        <div key={i}>{p?.value ?? JSON.stringify(p)}</div>
      ))}
    </div>
  )
}

export const ChartLegend: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <div className="chart-legend">{children}</div>
)

export function ChartLegendContent({
  payload,
  nameKey,
  className,
}: {
  payload?: any[]
  nameKey?: string
  className?: string
}) {
  if (!payload || payload.length === 0) return null

  return (
    <div className={cn('chart-legend-content', className)}>
      {payload.map((item: any, idx: number) => (
        <div key={idx} className="flex items-center gap-2">
          <div className="w-2 h-2 rounded" style={{ backgroundColor: item.color }} />
          <div>{item[nameKey ?? 'name'] ?? item.value}</div>
        </div>
      ))}
    </div>
  )
}

export const ChartStyle: React.FC<{ id?: string; config?: ChartConfig }> = () => null


export default ChartContainer



