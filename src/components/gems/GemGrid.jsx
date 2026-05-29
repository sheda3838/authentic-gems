import React, { useEffect, useState } from 'react';
import GemCard from './GemCard';
// In a real app, this would be an API fetch. For now, we import the local JSON.
import gemsData from '../../data/gems.json';

const GemGrid = () => {
  const [gems, setGems] = useState([]);

  useEffect(() => {
    // Simulate API fetch
    setGems(gemsData);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 w-full">
      {gems.map(gem => (
        <GemCard key={gem.id} gem={gem} />
      ))}
    </div>
  );
};

export default GemGrid;
