const BASE_URL = "https://api.coingecko.com/api/v3";
const API_KEY = "CG-u1rk4MQ4EsGUNBQ53AuAp46L";

const getCoinList = () => {
  return `${BASE_URL}/coins/markets?x_cg_demo_api_key=${API_KEY}&vs_currency=usd&order=market_cap_desc&per_page=20&page=1`;
};

export { getCoinList };
