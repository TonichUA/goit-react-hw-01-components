import styled from 'styled-components';

export const StyledFriendListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
`;

export const StyledFriendListSpan = styled.span`
  width: 10px;
  height: 10px;
  background-color: ${props => (props.$isOnline ? 'green' : 'red')};
  border-radius: 50%;
`;

export const StyledFriendListAvatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;

export const StyledFriendListName = styled.p`
  display: flex;
  align-items: center;
`;
