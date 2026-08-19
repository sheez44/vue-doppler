export function toPascalCase(str) {
  if (/^[a-z\d]+$/i.test(str)) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
  return str
    .replace(/([a-z\d])([a-z\d]*)/gi, (g0, g1, g2) => g1.toUpperCase() + g2.toLowerCase())
    .replace(/[^a-z\d]/gi, '')
}

export function formatTime(seconds: number): string {
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60

  return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`
}
