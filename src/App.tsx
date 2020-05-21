import React from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import FroalaEditorComponent from 'react-froala-wysiwyg';

const App: React.FC = () => (
  <div className="App">
    <FroalaEditorComponent tag="textarea" />
  </div>
);

export default App;
