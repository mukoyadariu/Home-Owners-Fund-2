import React from 'react';
import { useParams } from 'react-router-dom';

function Campaign() {
  const { id } = useParams();

  return (
    <div>
      <h2>Campaign {id}</h2>
      <p>This is the details page for Campaign {id}.</p>
    </div>
  );
}

export default Campaign;