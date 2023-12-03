export function convertToPercentage(value: number, totalValue: number) {
  const percentage = Math.floor(
    parseFloat((value / totalValue).toFixed(2)) * 100
  )

  return percentage
}
