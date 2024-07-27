import axios, { CreateAxiosDefaults } from 'axios';
import { ApiConstant } from '../const';
import { create} from 'apisauce';
import { API_KEY, BASE_URL } from '../const/api.const';
import diacritics from 'diacritics';


const DEFAULT_CONFIG: CreateAxiosDefaults = {
    baseURL: BASE_URL,
    headers: {...ApiConstant.HEADER_DEFAULT},
    timeout: ApiConstant.TIMEOUT,
  };
  
  const customAxiosInstance = axios.create(DEFAULT_CONFIG);
  let Api = create({axiosInstance: customAxiosInstance, baseURL: BASE_URL});

  export const getWeather = async (lat:any, lon:any) => {
    const response = await Api.get('', {
      lat: lat,
      lon: lon,
      appid: API_KEY,
      lang: 'vi'
    });
  
    if (!response.ok) {
      throw new Error(response.problem);
    }
  
    return response.data;
  };
  
  export const normalizeText = (text: string) => {
    return diacritics.remove(text).toLowerCase().replace(/\s+/g, '');
};

export const formatDate = (date: Date) => {
  const day = date.getDate();
  const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const month = monthNames[date.getMonth()];
  return `${day} ${month}`;
};

export const updateCurrentDate = () => {
  const now = new Date();
  return formatDate(now);
};