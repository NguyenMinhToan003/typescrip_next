'use client'

import * as React from 'react'
import { TrendingUp } from 'lucide-react'
import { Label, Pie, PieChart } from 'recharts'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import { iIsOpenAIAnalysis } from '@/types/test-ai'

const dataTest = [
  { browser: 'Tiêu Cực', visitors: 0, fill: 'var(--color-NEGATIVE)' },
  { browser: 'Tích Cực', visitors: 100, fill: 'var(--color-POSITIVE)' },
  { browser: 'Trung Lập', visitors: 0, fill: 'var(--color-NEUTRAL)' },
]

const chartConfig = {
  visitors: { label: '%' },
  NEGATIVE: { label: 'Tiêu cực', color: 'black' },
  POSITIVE: { label: 'Tích Cực', color: 'green' },
  NEUTRAL: { label: 'Trung Lập', color: 'orange' },
} satisfies ChartConfig

export function ChartC({ data }: { data: iIsOpenAIAnalysis }) {
  if (!data?.open) return null

  const chartData = data.analysis.chartData || dataTest

  if (chartData.every((item) => item.visitors === 0)) {
    chartData[1].visitors = 100
  }

  const totalVisitors = React.useMemo(() => data?.analysis?.totalComments || 0, [data])

  return (
    <Card className='flex flex-col'>
      <CardHeader className='items-center pb-0'>
        <CardTitle>Pie Chart - {data.post.title}</CardTitle>
        <CardDescription>phân tích dữ liệu bình luận</CardDescription>
      </CardHeader>
      <CardContent className='flex-1 pb-0'>
        <ChartContainer config={chartConfig} className='mx-auto aspect-square max-h-[250px]'>
          <PieChart>
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Pie data={chartData} dataKey='visitors' nameKey='browser' innerRadius={60} strokeWidth={5}>
              <Label
                content={({ viewBox }) =>
                  viewBox && 'cx' in viewBox && 'cy' in viewBox ? (
                    <text x={viewBox.cx} y={viewBox.cy} textAnchor='middle' dominantBaseline='middle'>
                      <tspan x={viewBox.cx} y={viewBox.cy} className='fill-foreground text-3xl font-bold'>
                        {totalVisitors.toLocaleString()}
                      </tspan>
                      <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 24} className='fill-muted-foreground'>
                        Bình luận
                      </tspan>
                    </text>
                  ) : null
                }
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className='flex-col gap-3 text-sm'>
        {
          data?.analysis?.totalComments > 0 && (
            <div className='mt-2 flex gap-4'>
          <div className='flex items-center gap-1'>
            <span className='w-3 h-3 rounded-full bg-green-500'></span>
            <span className='text-xs text-muted-foreground'>Tích cực ({data.analysis.chartData[0].count})</span>
          </div>
          <div className='flex items-center gap-1'>
            <span className='w-3 h-3 rounded-full bg-yellow-500'></span>
            <span className='text-xs text-muted-foreground'>Trung lập ({data.analysis.chartData[1].count})</span>
          </div>
          <div className='flex items-center gap-1'>
            <span className='w-3 h-3 rounded-full bg-black'></span>
            <span className='text-xs text-muted-foreground'>Tiêu cực ({data.analysis.chartData[2].count})</span>
          </div>
        </div>
          )
        }
        {data.analysis.totalComments > 0 && (
          <div className='flex items-center gap-3 font-medium leading-none'>
            <span className='text-muted-foreground'>{data?.analysis?.averageScore * 100}% độ chính xác</span>
            <TrendingUp className='h-4 w-4' />
          </div>
        )}
        <div className='leading-none text-muted-foreground'>{data.analysis.message}</div>
      </CardFooter>
    </Card>
  )
}
