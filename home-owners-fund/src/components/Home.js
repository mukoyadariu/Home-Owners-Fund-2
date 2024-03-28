import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Crowdfunding Platform</h1>
      <p>Welcome to our crowdfunding platform!</p>
      <Link to="/campaign/1">Campaign 1</Link>
      <Link to="/campaign/2">Campaign 2</Link>
      <Link to="/campaign/3">Campaign 3</Link>
    </div>
  );
}

export default Home;