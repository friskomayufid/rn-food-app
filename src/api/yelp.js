import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer UPH03akUhDC0cSzC0ndz3LD7L-ewF4OwS6yIc6b9LxFYlmi0JEfe6G_jmiKL1MROvey6lxjKZ8LyBHN2qES1nonD2CmyV374rbc8brmaNuqssFMefpDvjWQRUtOTX3Yx'
  }
})