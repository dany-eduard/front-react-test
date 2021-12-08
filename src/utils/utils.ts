export const formatDate = (date: string): string => {
  const day = date.slice(0, 2)
  const month = date.slice(2, 4)
  const currentDecade = new Date().getFullYear().toFixed().slice(0, 2)
  const year = `${currentDecade}${date.slice(4)}`

  return `${year}-${month}-${day}`
}
