import { useQuery } from "@tanstack/react-query";
import { messageApi } from "../api/messageApi";

export const useLastMessage = (groupId) => {
  return useQuery({
    queryKey: ["lastMessage", groupId],
    queryFn: () => messageApi.fetchLastMessages(groupId),
    enabled: !!groupId,
  });
};
