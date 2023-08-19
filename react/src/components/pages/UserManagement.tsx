/* eslint-disable react-hooks/exhaustive-deps */
import { Center, Spinner, Wrap, WrapItem } from "@chakra-ui/react";
import { FC, memo, useEffect } from "react";

import { UserCard } from "../organisms/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";

export const UserManagement: FC = memo(() => {
  const { getUsers, loading, users } = useAllUsers();

  useEffect(() => getUsers(), [])

  return (
    <>
      {loading ? (
        <Center>
          <Spinner />
        </Center>
      ) : (
        <Wrap spacing="30px" p={{ base: 4, md: 10 }}>
            {users.map((user) => (
              <WrapItem key={user.id} mx="auto">
                <UserCard imageUrl="https://source.unsplash.com/random" userName={user.username} fullName={user.name} />
              </WrapItem>
            ))}
        </Wrap>
      )}
    </>
  )
});