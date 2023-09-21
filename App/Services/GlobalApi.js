import { create } from "apisauce";


const api =create({
    baseURL:'https://newsapi.org/v2',
     }
     
)
const apikey= '?sources=bbc-news&apiKey=ac06b9c65b7345469539701e928cb5c4';
const getTopHeadLine=api.get('/top-headlines'+apikey)

export default{
    getTopHeadLine
}

// https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=ac06b9c65b7345469539701e928cb5c4


