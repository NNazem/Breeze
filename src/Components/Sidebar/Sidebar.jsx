import UserList from "./UserList";
import styles from "./Sidebar.module.css";
import { HiMenu } from "react-icons/hi";
import { GoSearch } from "react-icons/go";
import { useEffect, useState } from "react";
import { useContactList } from "../../hooks/useContactList";
import { contactsApi } from "../../api/contactApi";

function Sidebar({ onSelectedChat, selectedChat, messages }) {
  const [search, setSearch] = useState("");
  const [searchedUsers, setSearchedUsers] = useState([]);

  const { data: users, isLoading, error } = useContactList(search);

  function handleSearch(e) {
    setSearch(e.target.value);
    console.log(search);
  }

  useEffect(() => {
    if (!search) {
      setSearchedUsers([]);
      return;
    }

    contactsApi.searchContact(search).then((response) => {
      setSearchedUsers(response);
      console.log(searchedUsers);
    });
  }, [search]);

  return (
    <div className={styles.sidebar}>
      <div className={styles.searchContainer}>
        <GoSearch className={styles.searchIcon} />
        <input
          className={styles.search}
          placeholder=""
          value={search}
          onChange={handleSearch}
        />
      </div>

      {!search && (
        <UserList
          onSelectedChat={onSelectedChat}
          selectedChat={selectedChat}
          users={users}
          isLoading={isLoading}
          error={error}
        />
      )}

      {search && searchedUsers?.length > 0 && (
        <UserList
          onSelectedChat={onSelectedChat}
          selectedChat={selectedChat}
          users={searchedUsers}
          isLoading={isLoading}
          error={error}
        />
      )}
    </div>
  );
}

export default Sidebar;
