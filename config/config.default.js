// import {EggAppConfig, PowerPartial} from 'egg';
//
// // for config.{env}.ts
// export type DefaultConfig = PowerPartial<EggAppConfig & BizConfig>;
//
// // app special config scheme
// export interface BizConfig {
//     sourceUrl: string;
// }
//
// export default (appInfo: EggAppConfig) => {
//     const config = {} as PowerPartial<EggAppConfig> & BizConfig;
//
//     // app special config
//     config.sourceUrl = `https://github.com/eggjs/examples/tree/master/${appInfo.name}`;
//
//     // override config from framework / plugin
//     // use for cookie sign key, should change to your own and keep security
//     config.keys = appInfo.name +'1525415192797_1826'; //'_1525233401890_8434';
//     // config.keys ='';
//         // add your config here
//     config.middleware = [];
//     // appInfo.name = 'xxx';
//     // appInfo.baseDir = 'xxx';
//     appInfo.env = 'dev';
//     // appInfo.HOME = 'xxx';
//     // appInfo.pkg = 'xxx';
//     return config;
// };

module.exports = appInfo => {
    return {
        //你需要添加的项目配置，下面是例子
        NAME: 'EGG_ACHE',
        keys: '2222',
        middleware:[]
    }
}
