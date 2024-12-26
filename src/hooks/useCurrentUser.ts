import fetcher from "@/lib/fetcher";
import useSWR from "swr";

const useCurrentUser = () => {
  const { data, error, isLoading, mutate } = useSWR("/api/current", fetcher);

  console.log("current user data는 ???", data);
  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useCurrentUser;
