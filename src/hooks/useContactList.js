import { useQuery } from "@tanstack/react-query";
import { contactsApi } from "../api/contactApi";

export const useContactList = () => {
  const contactId = Number(localStorage.getItem("contactId"));
  return useQuery({
    queryKey: ["contacts", contactId],
    queryFn: () => contactsApi.fetchContacts(contactId),
    enabled: !!contactId,
  });
};
