import React from 'react';
import './App.css';
import 'tui-image-editor/dist/tui-image-editor.css';
import ImageEditor from '@toast-ui/react-image-editor'
import Header from './components/header';
import NavigationBar from './components/NavigationBar';


const myTheme = {
  // Theme object to extends default dark theme.
};
function App() {
  return (
    <>
      <NavigationBar></NavigationBar>
      <main role="main" class="flex-shrink-0">
        <div className='container'>
          <ImageEditor
            includeUI={{
              loadImage: {
                path: 'img/Untitled Diagram-Page-2.jpg',
                name: 'Untitled Diagram-Page-2'
              },
              theme: myTheme,
              menu: ['shape', 'filter', 'text'],
              initMenu: 'filter',
              uiSize: {
                width: 'auto',
                height: '700px'
              },
              menuBarPosition: 'left'
            }}
            cssMaxHeight={500}
            cssMaxWidth={700}
            selectionStyle={{
              cornerSize: 20,
              rotatingPointOffset: 70
            }}
            usageStatistics={true}
          />
        </div>
      </main>
    </>
  );
}

export default App;
