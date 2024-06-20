import axios from "axios"
let handler = async (m, { args , text}) => {
if (!args[0]) throw "*اكتب اسم المدينة او البلد الذي تريد ان تعرف مناخه*"
try {
const response = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${args}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273`)
const res = await response
const name = res.data.name
const Country = res.data.sys.country
const Weather = res.data.weather[0].description
const Temperature = res.data.main.temp + "°C"
const Minimum_Temperature = res.data.main.temp_min + "°C"
const Maximum_Temperature = res.data.main.temp_max + "°C"
const Humidity = res.data.main.humidity + "%"
const Wind = res.data.wind.speed + "km/h"
const wea = `「 📍 」الــمــكــان: ${name}\n「 🗺️ 」الـــدولــه: ${Country}\n「 🌤️ 」الــسـماء: ${Weather}\n「 🌡️ 」الــحــراره: ${Temperature}\n「 💠 」  الـوسـطـي: ${Minimum_Temperature}\n「 📛 」 الــعـظـمـي: ${Maximum_Temperature}\n「 💦 」الــرطــوبــه: ${Humidity}\n「 🌬️ 」 الــريــاح: ${Wind}`
m.reply(wea)
} catch {
return "*ERROR*"}}
handler.help = ['climate *<place>*']
handler.tags = ['herramientas']
handler.command = /^(climate|weather|الطقس)$/i
export default handler
