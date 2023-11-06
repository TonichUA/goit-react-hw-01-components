import React from 'react';
import {
  StyledStatistics,
  StyledStatisticsUl,
  StyledStatisticsLi,
  StyledStatisticsH2,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StyledStatistics className="statistics">
      {title && (
        <StyledStatisticsH2 className="title">{title}</StyledStatisticsH2>
      )}

      <StyledStatisticsUl className="stat-list">
        {stats.map(({ id, label, percentage }) => (
          <StyledStatisticsLi className="item" key={id}>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
          </StyledStatisticsLi>
        ))}
      </StyledStatisticsUl>
    </StyledStatistics>
  );
};
