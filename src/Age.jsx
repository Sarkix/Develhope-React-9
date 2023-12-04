import React from 'react';

function Age({ age }) {
  return <span> {age > 18 ? `Your age is ${age}` : 'You are very young!'}</span>;
}

export default Age;
