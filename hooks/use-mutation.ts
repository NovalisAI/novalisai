import { useCallback, useState } from "react";

export function useMutate<T>(url: string) {
  const [isPending, setIsPending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const mutate = useCallback(async (body: T) => {
    setIsPending(true);
    setIsSuccess(false);
    setError(null);

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        throw new Error(data.message);
      }

      setIsSuccess(true);
    } catch (err: any) {
      setError(err.message || "An unknown error occurred");
    } finally {
      setIsPending(false);
    }
  }, []);

  return {
    mutate,
    isPending,
    isSuccess,
    isError: !!error,
    error,
  };
}
