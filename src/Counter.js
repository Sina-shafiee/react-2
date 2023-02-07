import { useState } from 'react';

const Counter = () => {
  //   const res = useState(0);
  let [count, setCount] = useState(0);
  const [isLogin, setIsLogin] = useState(false);
  //   console.log(res);

  //   const count = res[0];
  //   const setCount = res[1];

  function incrementCount() {
    setCount(count + 1);
    // count += 1;
  }

  function handlelogin() {
    // setIsLogin(isLogin ? false : true);
    setIsLogin(!isLogin);
  }

  return (
    <>
      <h2>count: {count}</h2>
      <button onClick={incrementCount}>Increment +</button>
      <button onClick={() => setCount(count - 1)}>Decrement -</button>

      <p>{isLogin ? 'Welcome user' : 'please Login'}</p>
      <button onClick={handlelogin}>{isLogin ? 'Logout' : 'Login'}</button>
    </>
  );
};

export default Counter;

// function Counter() {
//   const [count, setCount] = useState(0);

//   function incrementCount() {
//     // setCount(count + 1);
//     // console.log("count:", count);
//     // setCount(count + 1);

//     setCount(count + 1);
//     setCount((prev)=> prev + 1)
//   }

//   return (
//     <div>
//       <button onClick={incrementCount}>Click me</button>
//       <p>You clicked {count} times</p>
//     </div>
//   );
// }

// export default Counter;
