import useCurrentUser from "@/hooks/useCurrentUser";
import useFavorites from "@/hooks/useFavorites";
import axios from "axios";
import React, { useCallback, useMemo } from "react";
import { AiOutlineCheck, AiOutlinePlus } from "react-icons/ai";

interface FavoriteButtonProps {
  themeId: string;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ themeId }) => {
  const { data: currentUser, mutate } = useCurrentUser();
  const { mutate: mutateFavorites } = useFavorites(currentUser?.id as string);

  const isFavorite = useMemo(() => {
    const list = currentUser?.favoriteIds || [];

    return list.includes(themeId);
  }, [currentUser, themeId]);

  const toggleFavorites = useCallback(async () => {
    try {
      if (!currentUser) {
        return;
      }

      console.log("Attempting to toggle favorite for themeId:", themeId);
      console.log("Current user favoriteIds:", currentUser.favoriteIds);

      let response;

      if (isFavorite) {
        response = await axios.delete("/api/favorite", { data: { themeId } });
      } else {
        response = await axios.post("/api/favorite", { themeId });
      }

      const updatedFavoriteIds = response?.data?.favoriteIds;

      mutate({
        ...currentUser,
        favoriteIds: updatedFavoriteIds,
      });

      console.log("Response from server:", response.data);

      mutateFavorites();
    } catch (error) {
      console.log(error);
    }
  }, [themeId, isFavorite, currentUser, mutate, mutateFavorites]);

  const Icon = isFavorite ? AiOutlineCheck : AiOutlinePlus;

  return (
    <div
      onClick={toggleFavorites}
      className="cursor-pointer group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300"
    >
      <Icon className="text-white w-4 h-4 lg:w-6 lg:h-6" />
    </div>
  );
};

export default FavoriteButton;
