export function formatTimeToTwoDigits(nums: number[]) {
  const time = nums.map((num) => num.toString().padStart(2, "0"))
  return time.join(":")
}
