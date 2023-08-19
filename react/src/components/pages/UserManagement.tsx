import { Wrap, WrapItem } from "@chakra-ui/react";
import { FC, memo } from "react";

import { UserCard } from "../organisms/user/UserCard";

export const UserManagement: FC = memo(() => {
  return (
    <Wrap spacing="30px" p={{ base: 4, md: 10 }}>
      <WrapItem>
        <UserCard imageUrl="https://source.unsplash.com/random" userName="test" fullName="test full name" />
      </WrapItem>
    </Wrap>
  )
});