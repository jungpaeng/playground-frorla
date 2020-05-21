// @ts-nocheck
import React from 'react';
import FroalaEditor from 'react-froala-wysiwyg';
import Froalaeditor from 'froala-editor';
import 'froala-editor/js/plugins/image.min.js';
import 'froala-editor/js/plugins/video.min.js';
import 'froala-editor/js/plugins/file.min.js';

Froalaeditor.DefineIcon('alert', { NAME: 'info', SVG_KEY: 'help' });
Froalaeditor.RegisterCommand('alert', {
  title: 'Hello',
  focus: false,
  undo: false,
  refreshAfterCallback: false,
  callback: () => {
    alert('Hello!');
  },
});

const EDITOR_CONFIG = {
  placeholderText: 'Edit Your Content Here!',
  pasteAllowLocalImages: true,
  toolbarButtons: [['undo', 'redo', 'bold', 'insertImage', 'insertVideo', 'insertFile'], ['alert']],
};

const App: React.FC = () => {
  const [state, setState] = React.useState('<p>Default Text</p>');
  const editorRef = React.useRef(null);

  const imageBeforeUpload = React.useCallback((files) => {
    const { editor } = editorRef.current;

    if (files.length) {
      const reader = new FileReader();
      reader.onload = (e) => {
        editor.image.insert(e.target.result, null, null, editor.image.get());
      };
      reader.readAsDataURL(files[0]);
    }
    editor.popups.hideAll();
    return false;
  }, []);

  return (
    <div className="App">
      <section>
        <h1>Editor</h1>
        <FroalaEditor
          ref={editorRef}
          tag="textarea"
          config={{
            events: {
              ...EDITOR_CONFIG,
              'image.beforeUpload': imageBeforeUpload,
            },
          }}
          model={state}
          onModelChange={setState}
        />
      </section>
      <section>
        <h1>Renderer</h1>
        <p>{state}</p>
      </section>
    </div>
  );
};

export default App;
