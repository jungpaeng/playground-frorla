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

Froalaeditor.DefineIcon('bold', {
  NAME: 'info',
  PATH: 'M20.7854554,12.5746197 C20.9284063,12.7161269 21,12.8838001 21,13.0773263 C21,13.2708916 20.9283669,13.4384475 20.7859676,13.5797983 C20.6436865,13.7212664 20.4747695,13.7920591 20.2797683,13.7920591 L17.7598834,13.7920591 C17.7598834,15.0649595 17.5086947,16.1444509 17.0061205,17.030377 L19.3461347,19.3641514 C19.4882976,19.5055413 19.5597336,19.6730581 19.5597336,19.8666234 C19.5597336,20.0601887 19.4882582,20.2277837 19.3461347,20.3692518 C19.2109065,20.5107199 19.042226,20.5813953 18.8396596,20.5813953 C18.6371326,20.5813953 18.4687278,20.5107199 18.3334603,20.3692518 L16.1058998,18.1694751 C16.0684284,18.2065533 16.0123197,18.2548958 15.9371011,18.3145807 C15.8621582,18.3742656 15.7046678,18.4802983 15.46463,18.6328742 C15.224868,18.7854501 14.9807718,18.9211688 14.7335233,19.0404213 C14.4859597,19.1595565 14.1783472,19.2675448 13.8108041,19.3641905 C13.4433791,19.4611101 13.0797368,19.5095699 12.7198377,19.5095699 L12.7198377,9.50409233 L11.2798077,9.50409233 L11.2798077,19.5095699 C10.8973312,19.5095699 10.5167459,19.4592327 10.1379338,19.3585975 C9.7592792,19.2582361 9.4330295,19.1353462 9.15918464,18.9902406 C8.88553679,18.844744 8.63809136,18.6995211 8.41676955,18.5544155 C8.19540834,18.40931 8.03240169,18.2886494 7.9274344,18.1916907 L7.75859623,18.0350863 L5.69999212,20.3466842 C5.54990938,20.5032887 5.36995981,20.5811607 5.15994641,20.5811607 C4.97995745,20.5811607 4.8188027,20.5214758 4.67628517,20.4023797 C4.53376763,20.2682255 4.45689406,20.102547 4.44570385,19.9055398 C4.43439544,19.7083762 4.49251359,19.5353447 4.62005832,19.3863279 L6.89237963,16.8515178 C6.45745882,16.0030219 6.23988022,14.9828634 6.23988022,13.79202 L3.71999527,13.79202 C3.52499409,13.79202 3.35627413,13.7210708 3.213796,13.5796027 C3.07127847,13.4383693 3,13.270657 3,13.0770916 C3,12.8836827 3.07127847,12.7159705 3.213796,12.5746197 C3.35627413,12.4331515 3.52499409,12.3623588 3.71999527,12.3623588 L6.23988022,12.3623588 L6.23988022,9.07933592 L4.293651,7.14743737 C4.15113347,7.00604746 4.0799338,6.83853073 4.0799338,6.64484806 C4.0799338,6.45136096 4.15113347,6.28384423 4.293651,6.14237609 C4.43616854,6.00098618 4.60484909,5.93023256 4.79996848,5.93023256 C4.99496966,5.93023256 5.16365021,6.00094707 5.30616775,6.14237609 L7.25239696,8.07427464 L16.7469726,8.07427464 L18.6932806,6.14237609 C18.8356799,6.00098618 19.0044787,5.93023256 19.1994799,5.93023256 C19.3944811,5.93023256 19.5632798,6.00094707 19.7056792,6.14237609 C19.8481179,6.28388334 19.919554,6.45136096 19.919554,6.64484806 C19.919554,6.83853073 19.8480785,7.00604746 19.7056792,7.14743737 L17.7593711,9.07933592 L17.7593711,12.3623588 L20.2792561,12.3623588 C20.4742573,12.3623588 20.6433712,12.4331515 20.7854554,12.5746197 Z M14.5186384,4.10083544 C15.2117041,4.83471198 15.5581395,5.72375948 15.5581395,6.76744186 L8.44186047,6.76744186 C8.44186047,5.72359453 8.78833488,4.83471198 9.48140054,4.10083544 C10.174583,3.36704136 11.0139344,3 12.0000389,3 C12.9859877,3 13.8255727,3.36704136 14.5186384,4.10083544 Z',
});
// Froalaeditor.RegisterCommand('alert', {
//   title: 'Hello',
//   focus: false,
//   undo: false,
//   refreshAfterCallback: false,
//   callback: () => {
//     alert('Hello!');
//   },
// });

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
          <li>fullscreen [전체 화면]</li>
          <li>bold [굵게]</li>
          <li>italic [기울이기]</li>
          <li>underline [글씨 밑줄]</li>
          <li>strikeThrough [취소선]</li>
          <li>subscript [아래 첨자]</li>
          <li>superscript [위 첨자]</li>

          <li>fontFamily [글꼴]</li>
          <li>fontSize [글씨 크기]</li>
          <li>color [색상]</li>
          <li>inlineStyle [글자의 스타일을 미리 지정]</li>
          <li>paragraphStyle [글자의 스타일과 밑줄, 취소선 등의 스타일을 미리 지정]</li>

          <li>paragraphFormat [..?]</li>
          <li>align [정렬]</li>
          <li>formatOL [숫자 리스트]</li>
          <li>formatUL [불릿 리스트]</li>
          <li>outdent [들여쓰기 취소]</li>
          <li>indent [들여쓰기]</li>
          <li>quote [쿼터]</li>

          <li>insertLink [링크 연결]</li>
          <li>insertImage [이미지 추가]</li>
          <li>insertVideo [비디오 추가]</li>
          <li>insertFile [파일 추가]</li>
          <li>insertTable [테이블 추가]</li>

          <li>emoticons [이모티콘]</li>
          <li>specialCharacters [특수문자]</li>
          <li>insertHR [단락 나누기]</li>
          <li>selectAll [본문 전체 선택]</li>
          <li>clearFormatting [스타일 모두 제거]</li>

          <li>print [인쇄]</li>
          <li>help [도움말]</li>
          <li>html [html]</li>

          <li>undo [되돌리기]</li>
          <li>redo [되돌리기 취소]</li>
        </ol>
      </section>
    </div>
  );
};

export default App;
