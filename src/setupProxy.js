// src/setupProxy.js


console.log( '----------- get ----------' )

const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(
    '/myGetData',
    createProxyMiddleware({
      target: 'http://192.168.88.1',
      changeOrigin: true
    //   pathRewrite: {
    //     '^/proxy': '' // URL ^/api -> 공백 변경
    //     }      
    }),
  );
};




// const { createProxyMiddleware } = require('http-proxy-middleware');
// module.exports = function (app) {

//     setInterval(() => {
//         console.log( new Date() );
//     }, 1000 );
    

//   app.use(
//     '/myGetData',
//     createProxyMiddleware({
//       target: 'http://192.168.88.1',
//       pathRewrite: {
//         '^/myGetData': '',
//       },
//     }),
//   );


// };


