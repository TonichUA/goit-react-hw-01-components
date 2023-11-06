import React from 'react';
import {
  StyledFriendListItem,
  StyledFriendListSpan,
  StyledFriendListAvatar,
  StyledFriendListName,
} from './FriendListItem.styled';

const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <StyledFriendListItem key={id}>
      <StyledFriendListSpan $isOnline={isOnline} className="status" />
      <StyledFriendListAvatar src={avatar} alt="User avatar" />
      <StyledFriendListName>{name}</StyledFriendListName>
    </StyledFriendListItem>
  );
};

export default FriendListItem;
