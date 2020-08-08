export default function convertHourToMinutes(time: string) {
  //8:00

  //time.split(':').map(el => Number(el)) //convertendo elem string em int
  const [hour, minutes] = time.split(':').map(Number) //convertendo elem string em int
  const timeInMinutes = (hour * 60) + minutes

  return timeInMinutes
}