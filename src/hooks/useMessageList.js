import { useQuery, useQueryClient } from "@tanstack/react-query";
import { messageApi } from "../api/messageApi";

export const useMessageList = (group_id) => {
  const queryClient = useQueryClient();
  const queryKey = ["messages", group_id];

  const query = useQuery({
    queryKey,
    queryFn: () => messageApi.fetchMessages(group_id),
    enabled: !!group_id,
  });

  const refreshMessages = () => {
    queryClient.invalidateQueries({ queryKey });
    queryClient.invalidateQueries(["lastMessage"]);
  };

  return {
    ...query,
    refreshMessages,
  };
};
