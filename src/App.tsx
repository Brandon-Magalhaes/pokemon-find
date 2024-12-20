// src/App.tsx

import React from 'react';
import PokemonList from './components/PokemonList';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <PokemonList />
    </div>
  );
};

export default App;
