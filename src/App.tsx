// @ts-nocheck
import React from 'react';
import FroalaEditor from 'react-froala-wysiwyg';
import Froalaeditor from 'froala-editor';
import 'froala-editor/js/plugins/image.min.js';
import 'froala-editor/js/plugins/video.min.js';
import 'froala-editor/js/plugins/file.min.js';
import 'froala-editor/js/plugins/link.min.js';
import 'froala-editor/js/plugins/colors.min.js';
import 'froala-editor/js/plugins/lists.min.js';
import 'froala-editor/js/plugins/fullscreen.min.js';
import 'froala-editor/js/plugins/font_size.min.js';
import 'froala-editor/js/languages/ko.js';

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
  language: 'ko',
  placeholderText: 'Edit Your Content Here!',
  attribution: false,
  pasteAllowLocalImages: true,
  fontSize: ['12', '14', '18', '24', '30', '36', '48'],
  toolbarButtons: [
    'fullscreen', 'fontSize', 'textColor', 'backgroundColor', 'bold', 'strikeThrough', 'underline', 'italic', 'clearFormatting', 'superscript', 'subscript', 'formatOL', 'formatUL', 'outdent', 'indent', '|',
    'insertLink', 'insertFile', 'insertImage', 'insertVideo',
  ],
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
            ...EDITOR_CONFIG,
            events: {
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
      <section>
        <h1>Editor Feature</h1>
        <ol>
          <li>fullscreen</li>
          <li>bold</li>
          <li>italic</li>
          <li>underline</li>
          <li>strikeThrough</li>
          <li>subscript</li>
          <li>superscript</li>

          <li>fontFamily</li>
          <li>fontSize</li>
          <li>color</li>
          <li>inlineStyle</li>
          <li>paragraphStyle</li>

          <li>paragraphFormat</li>
          <li>align</li>
          <li>formatOL</li>
          <li>formatUL</li>
          <li>outdent</li>
          <li>indent</li>
          <li>quote</li>
          <li>-</li>
          <li>insertLink</li>
          <li>insertImage</li>
          <li>insertVideo</li>
          <li>insertFile</li>
          <li>insertTable</li>

          <li>emoticons</li>
          <li>specialCharacters</li>
          <li>insertHR</li>
          <li>selectAll</li>
          <li>clearFormatting</li>

          <li>print</li>
          <li>help</li>
          <li>html</li>

          <li>undo</li>
          <li>redo</li>
        </ol>
      </section>
    </div>
  );
};

export default App;
