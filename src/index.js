import GrapesJS from 'grapesjs';
import imageEditorPlugin from 'grapesjs-tui-image-editor';
import grapesWebpagePreset from 'grapesjs-preset-webpage';
import grapesjsBlocksBasic from 'grapesjs-blocks-basic';
import tailwindCss from '@rustyroad/editor';
import projectManager from 'grapesjs-project-manager';
import codeEditor from 'grapesjs-component-code-editor';
import scriptEditor from 'grapesjs-script-editor';
// Get the container element
var container = document.getElementById('gjs');

// Check if the container exists
if (container) {
    // Initialize GrapesJS here
    window.editor = GrapesJS.init({
      container: '#gjs',
      height: '100%',
      fromElement: true,
      storageManager: false,
      
      showOffsets: true,
      fromElement: true,
      noticeOnUnload: false,
      plugins: [
        imageEditorPlugin,
        grapesWebpagePreset,
        grapesjsBlocksBasic,
        tailwindCss,
        codeEditor,
        scriptEditor
      ],
      pluginsOpts: {
        [imageEditorPlugin]: {
          // Plugin-specific options for grapesjs-tui-image-editor
        },
        [grapesWebpagePreset]: {
          // Plugin-specific options for grapesjs-preset-webpage
        },
        [grapesjsBlocksBasic]: {
          // Plugin-specific options for grapesjs-blocks-basic
        },
        [tailwindCss]: {
          // Plugin-specific options for grapesjs-blocks-basic
        },
     
        [codeEditor]: {
          // Plugin-specific options for grapesjs-blocks-basic
        },
        [scriptEditor]: {
          // Plugin-specific options for grapesjs-blocks-basic
        }
      }
    
    
    
    });
} else {
    console.error('The GrapesJS container does not exist in the DOM.');
}
