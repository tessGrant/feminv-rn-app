import { useState, useEffect } from 'react';

interface UseFetchProps<T> {
  url: string;
  options?: RequestInit;
}

interface UseFetchResult<T> {
  data: T | null;
  loading: boolean;
  error?: Error | null;
  refetch: () => Promise<void>;
}

export default function useFetch<T>({ url, options }: UseFetchProps<T>): UseFetchResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(url, options);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, loading, error, refetch: fetchData };
}