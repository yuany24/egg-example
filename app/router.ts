import { Application } from 'egg';

export default (app: Application) => {
    console.log('99999');
    app.router.get('/user', app.controller.user.info);
};