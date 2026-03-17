import { useEffect, useState, useCallback } from "react"
import { api } from "@/api/consumer" 
import type { Company } from "../model"

interface UseCompaniesState {
  companies: Company[]
  loading: boolean
  error: string | null
}

export function useCompanies() {
  const [state, setState] = useState<UseCompaniesState>({
    companies: [],
    loading: true,
    error: null,
  })

  const fetchCompanies = useCallback(async () => {
    setState(prev => ({ ...prev, loading: true, error: null }))

    try {
      const data = await api<Company[]>("/companies")

      setState({
        companies: data,
        loading: false,
        error: null,
      })
    } catch (err: any) {
      setState({
        companies: [],
        loading: false,
        error: err.message || "Error inesperado",
      })
    }
  }, [])

  useEffect(() => {
    fetchCompanies()
  }, [fetchCompanies])

  return {
    ...state,
    refetch: fetchCompanies,
  }
}