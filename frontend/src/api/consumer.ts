import type { AxiosRequestConfig } from "axios"
import axios from "axios"

const client = axios.create({
  baseURL: "http://localhost:8000/api",
  timeout: 5000,
})

export async function api<T>( url: string, config?: AxiosRequestConfig): Promise<T> {
  try {
    const response = await client(url, config)
    return response.data
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data?.message || "API error")
    }
    throw new Error("Network error")
  }
}