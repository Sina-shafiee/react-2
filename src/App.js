import { Fragment } from 'react';
// import ArrayState from './ArrayState';
// import Highlighter from './Highlighter';
import MartianPhotoFetcher from './MartianPhotoFetcher';
// import Counter from './Counter';
// import Card from './Card';
// import ClickLoggerApp from './ClickLoggerApp';

function App() {
  // const [text, setText] = useState('');s

  // const handleClick = () => {
  //   console.log('card clicked');
  //   // setText('hello');
  // };

  return (
    <Fragment>
      <MartianPhotoFetcher />
      {/* <Highlighter word='hello' color='red' />
      <Highlighter word='hello' color='red' />
      <Highlighter word='hello' color='red' />
      <Highlighter word='hello' color='green' /> */}
      {/* <ArrayState /> */}
      {/* <Counter /> */}
      {/* <ClickLoggerApp /> */}
      {/* <Card funcClick={handleClick} text='hello from card 1' />
      <Card funcClick={handleClick} text='hello from card 2' />
      <Card funcClick={handleClick} text='hello from card 3' />
      <Card text='hello from card 4' /> */}
    </Fragment>
  );
}

// class Card extends

export default App;
