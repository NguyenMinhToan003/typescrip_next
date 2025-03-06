export interface iPost {
  _id: string;
  title: string;
  content: string;
}
export interface iItemChartData {
  browser: string,
  visitors: number,
  fill: string,
  count?: number
}
export interface iIsOpenAIAnalysis{
  open: boolean,
  post: {
    _id: string,
    title: string,
    content: string
  },
  analysis: {
    chartData: iItemChartData[],
    averageScore: number,
    totalComments: number,
    message: string
  }
}