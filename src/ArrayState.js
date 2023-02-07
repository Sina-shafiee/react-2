import { useState } from 'react';

const ArrayState = () => {
  const [numbers, setNumbers] = useState([1000, 123230]);

  const handleAdd = () => {
    const randomNumber = Math.floor(Math.random() * 99);

    // const newArr = numbers.concat(randomNumber);
    // numbers.push(10)
    setNumbers(numbers.concat(randomNumber));
    // setNumbers([randomNumber, ...numbers]);
  };

  return (
    <>
      <h1>hello zana</h1>
      <button onClick={handleAdd}>Add Number</button>

      {numbers.map((number, i) => (
        <p key={i} value={i}>
          {number}
        </p>
      ))}
    </>
  );
};

export default ArrayState;
