import axios from 'axios';
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
export const HTTP = axios.create({
  baseURL: "http://mowafaqwali-001-site1.gtempurl.com/api/",
  headers: {
  
   "Accept": 'application/json',
   "Content-Type": 'application/json'
  }
})


export const auth = axios.create({
    baseURL: "http://mowafaqwali-001-site1.gtempurl.com/api/",
    headers: {
     "Accept": 'application/json',
     "Content-Type": 'application/json'
    }
   
  })