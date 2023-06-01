import React from "react";
import {
  Avatar,
  AvatarWrapper,
  Button,
  Item,
  List,
  Text,
} from "./UsersList.styled";

export default function UsersList({ users }) {
  return (
    <List>
      {users.map(({ id, user, tweets, followers, avatar }) => {
        return (
          <Item key={id}>
            <AvatarWrapper>
              <Avatar src={avatar} alt={user} />
            </AvatarWrapper>
            <Text>{tweets} TWEETS</Text>
            <Text>{followers} FOLLOWERS</Text>
            <Button>FOLLOW</Button>
          </Item>
        );
      })}
    </List>
  );
}