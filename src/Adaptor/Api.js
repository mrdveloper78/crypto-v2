import axios from "axios";


const BaseUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false&locale=en'


const getCoins = async () => {
    const response = await axios.get(BaseUrl);
    return response.data;
}



export {getCoins};
