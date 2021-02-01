
import { elements } from '../base';
import Footer from '../components/layouts/Footer';
import Header from '../components/layouts/Header';
import Main from '../components/layouts/Main';


const initRender = (childrens) => {
    const app = document.createElement('div');
    app.classList.add('app')
    elements.body.append(app);

    childrens.map(child => {
        app.append(child);
    })
}
Header

export const createApp = () => {
    initRender([Header("header"), Main("main"), Footer("footer")])
}
