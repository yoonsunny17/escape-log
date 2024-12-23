import fetcher from "@/lib/fetcher";
import useSWR from "swr";

const useEscapes = (userId?: string) => {
  const url = userId ? `/api/escapes?userId=${userId}` : "/api/escapes";
  const { data, error, isLoading, mutate } = useSWR(url, fetcher);

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useEscapes;
