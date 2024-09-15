const BASE_URL = "https://api.coingecko.com/api/v3";
const API_KEY = "CG-u1rk4MQ4EsGUNBQ53AuAp46L";

const getCoinList = (page, currency) => {
  return `${BASE_URL}/coins/markets?x_cg_demo_api_key=${API_KEY}&vs_currency=${currency}&order=market_cap_desc&per_page=20&page=${page}`;
};

const searchCoin = (query) =>
  `${BASE_URL}/search?query=${query}&x_cg_demo_api_key=${API_KEY}`;

const marketChart = (coin) => {
  return `${BASE_URL}/coins/${coin}/market_chart?vs_currency=usd&days=7`;
};
export { getCoinList, searchCoin, marketChart };
