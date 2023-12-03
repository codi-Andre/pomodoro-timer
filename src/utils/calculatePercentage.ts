export function calculatePercentage(percentage: number, value: number) {
  const endingNumber = Math.floor(
    parseFloat((percentage / 100).toFixed(2)) * value
  )

  return endingNumber
}
