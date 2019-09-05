import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import imageIcon from '@ckeditor/ckeditor5-core/theme/icons/image.svg';

export default class ImagePromise extends Plugin {
    init() {
        const config = this.editor.config.get('imagePromiseConfig');
        const editor = this.editor;

        editor.ui.componentFactory.add('imagePromise', locale => {
            const view = new ButtonView(locale);

            view.set({
                label: 'Insert image',
                icon: imageIcon,
                tooltip: true
            });

            // Callback executed once the image is clicked.
            view.on('execute', () => {
                if (config.getPromise) {
                    config.getPromise()
                        .then((res) => {
                            editor.model.change(writer => {
                                const imageElement = writer.createElement('image', {
                                    src: res.src
                                });

                                // Insert the image in the current selection location.
                                editor.model.insertContent(imageElement, editor.model.document.selection);
                            });
                        });
                }
            });

            return view;
        });
    }
}