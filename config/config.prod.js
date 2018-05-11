// import { DefaultConfig } from './config.default';
//
// export default () => {
//   const config: DefaultConfig = {
//       listen:{
//           mongodb: 'mongodb://rscdba:a11111@localhost:27033/rsc_main',
//           hostname: '60.205.146.196',
//           port: 18010,
//           port_https: 17010,
//           is_sms: true ,
//     },
//   };
//   return config;
// };
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
        port:'7003'
    }
}