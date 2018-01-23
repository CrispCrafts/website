import figlet from 'figlet';

export default function asyncFiglet(text, { font, horizontalLayout, verticalLayout }) {
    return new Promise((success, failure) => {
        figlet(text, { font, horizontalLayout, verticalLayout }, (err, data) => {
            if(err) failure(err);
            success(data);
        });
    });
}