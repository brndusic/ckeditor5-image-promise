import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Image from '@ckeditor/ckeditor5-image/src/image';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import List from '@ckeditor/ckeditor5-list/src/list';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';

import ImagePromise from '../image-promise/image-promise';

ClassicEditor
    .create(document.querySelector('#editor'), {
        plugins: [Essentials, Paragraph, Heading, List, Bold, Italic, Image],
        extraPlugins: [ImagePromise],
        toolbar: ['heading', 'bold', 'italic', 'numberedList', 'bulletedList', '|', 'imagePromise'],
        imagePromiseConfig: {
            getPromise: () => {
                return new Promise((resolve) => {
                    setTimeout(() => {
                        resolve({
                            src: 'https://lh5.ggpht.com/REQiWghvdKMWG1gyHoAfPoeV7_TM5ziu_a5glyeu3ku5obSXuyzZVPoiOM1aQwbAHDwgORh_trxoRybJUMar8KYSwXccAD5BFsVghJdNtg=s0'
                        });
                    }, 3000)
                });
            }
        }
    })
    .then(editor => {
        console.log('Editor was initialized', editor);
        window.editor = editor;
    })
    .catch(error => {
        console.error(error.stack);
    });