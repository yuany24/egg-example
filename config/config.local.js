// import {BizConfig, DefaultConfig} from './config.default';
//
// export default () => {
//     const config: DefaultConfig = {
//         config.keys = 'sss';
//         // listen:{
//         //     mongodb: 'mongodb://192.168.3.248:27017/rsc_main',
//         //     hostname: '192.168.3.248',
//         //     port: 18080,
//         //     port_https: 17080,
//         //     is_sms: true,
//         // },
//     };
//     return config;
//
// };
module.exports = appInfo => {
    return {
        //你需要添加的项目配置，下面是例子
        NAME: 'EGG_ACHE',
        keys: '2222',
        middleware:[],
        port:'7002'
    }
}