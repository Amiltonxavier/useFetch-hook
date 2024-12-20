import { useEffect, useState } from "react"
import type { Post } from "../types/posts"

type Props = {
    endpoint: string
}

type StateProps = {
    error: string | null,
    loading: boolean,
    data: Post[] | null
}

export function useFetch({ endpoint }: Props) {
    const [state, setState] = useState<StateProps>({
        error: null,
        loading: false,
        data: null
    })

    const handleResponse = (response: Response) => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        }
        return response.json()
    }

    async function request() {
        setState(prev => ({ ...prev, loading: true }));
        try {
            const headers: HeadersInit = {
                'Content-Type': 'application/json'
            }
            const response = await fetch(`${import.meta.env.VITE_APP_URL}/${endpoint}`, {
                headers,
            })
            const data = await handleResponse(response)
            setState(prev => ({ ...prev, data, loading: false, error: null }))
        } catch (err: unknown) {
            const errorMessage = err instanceof Error ? err.message : 'Ocorreu um erro inesperado'
            setState({ data: null, loading: false, error: errorMessage })
        }
    }

    useEffect(() => {
        request();
    }, [endpoint])


    return { ...state, request }
}

