import React from 'react';

// Add for counting
const CountContext = React.createContext({
  dailyCount: 0,
  monthlyCount: 0,
  incrementCount: () => {},
});

export default CountContext;