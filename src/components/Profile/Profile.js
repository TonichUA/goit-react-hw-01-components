import React from 'react';
import {
  StyledProfile,
  StyledProfileDiv,
  StyledProfileUl,
  StyledProfileLi,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <StyledProfile className="profile">
      <StyledProfileDiv className="description">
        <img src={avatar} alt={username} className="avatar" />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </StyledProfileDiv>

      <StyledProfileUl className="stats">
        <StyledProfileLi>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </StyledProfileLi>
        <StyledProfileLi>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </StyledProfileLi>
        <StyledProfileLi>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </StyledProfileLi>
      </StyledProfileUl>
    </StyledProfile>
  );
};
