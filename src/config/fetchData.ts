import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import appData from './data';
interface ErrorResponse {
  status: number;
}

export default async function sendRequest(
  method: string,
  endpoint: string,
  data: any = null,
  token: string | null = null,
): Promise<AxiosResponse | ErrorResponse | undefined> {
  
  const url = appData.apiUrl + endpoint;
  const headers: { [key: string]: string } = {
    'Content-Type': 'application/json',
  };
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const config: AxiosRequestConfig = {
    method,
    url,
    data,
    headers,
  };

  try {
    const response = await axios(config);
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError; 
      if (axiosError.response) {
        return { status: axiosError.response.status };
      }
    }
    console.error('An error occured');
    return undefined; 
  }
}

