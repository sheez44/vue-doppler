export function shuffleArray<T>(array: T[]): T[] {
  return array.sort(function (a, b) {
    return Math.random() - 0.5
  })
}
