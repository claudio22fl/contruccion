
export const formatDate = (date : string) => {
const objDate = new Date(date)
const formattedDate = `${objDate.getDate()}-${objDate.getMonth()+1}-${objDate.getFullYear()}` 
return formattedDate
}
