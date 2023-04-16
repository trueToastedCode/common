export default function isValidDate (dateNumber) {
  if (dateNumber == null || typeof dateNumber !== 'number') {
    return false
  }
  const date = new Date(dateNumber)
  return !isNaN(date.getTime())
}