import fetcher from "@/lib/fetcher";
import useSWR from "swr";

const useEscape = (themeId: string) => {
  const { data, error, isLoading, mutate } = useSWR(
    themeId ? `/api/escapes/${themeId}` : null,
    fetcher
  );

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useEscape;
