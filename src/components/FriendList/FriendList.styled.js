import styled from 'styled-components';

export const FriendListUl = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const FriendListSpan = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10px;
  height: 10px;
  background-color: ${props => (props.$isOnline ? 'green' : 'red')};
  border-radius: 50%;
`;

export const FriendListP = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
`;
