function Card(props) {
  console.log(props);

  function handleBlur(event) {
    console.log('input blurred');
    event.target.placeholder = 'please enter your name';
  }

  const handleFocus = (event) => {
    console.log('input focused');
    event.target.placeholder = '';
  };

  //   props.funcClick();

  return (
    // <div onClick={() => props.funcClick && props.funcClick()}>

    <div onClick={props.funcClick}>
      <h1>{props.text}</h1>

      <input
        type='text'
        style={{ padding: '1rem' }}
        onBlur={handleBlur}
        placeholder='please enter your name'
        onFocus={handleFocus}
      />
    </div>
  );
}
export default Card;

// addEventListener('click', (event)=>{})
