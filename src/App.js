import React, { useState } from 'react';
//this is a component
function App() {
  return (
    <div>
      <Folder name="Desktop">
        <Folder name="Music">
          <File name="you're_so_cold.mp4" />
          <File name="in_silence.mp4" />
        </Folder>
        <Folder name="cutuu pictures">
          <File name="dogs.jpeg" />
          <File name="cats.png" />
        </Folder>
      </Folder>
      <Folder name="Applications">
        <File name="snake_game.gm" />
      </Folder>
    </div>
  )
}

const Folder = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { name, children } = props;
  const handleClick = () => setIsOpen(!isOpen);

  return <div><span onClick={handleClick}>
    <i className={`folder ${isOpen ? "open outline " : ""}icon`}></i>
    <i className={isOpen ? "caret down icon" : "caret right icon"}></i>
  </span>
    {name}
    <div style={{ marginLeft: '17px' }}>{isOpen ? children : null}</div>
  </div>
};
const File = (props) => {
  const { name } = props;

  const fileExtension = name.split('.')[1];
  const fileIcons = {
    mp4: 'headphones',
    jpeg: 'file image',
    png: 'file image outline',
    gm: 'gamepad'
  };
  return <div>
    <i className={`${fileIcons[fileExtension]} icon`}></i>
    {name}</div>
};
export default App;
