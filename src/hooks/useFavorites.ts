import fetcher from "@/lib/fetcher";
import useSWR from "swr";

const useFavorites = (userId: string) => {
  const { data, error, isLoading, mutate } = useSWR(
    userId ? `/api/favorites?userId=${userId}` : null,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useFavorites;
