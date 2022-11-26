/* eslint-disable */
// @ts-nocheck


const proxy = require('http-proxy-middleware');

// src/setupProxy.js
module.exports = function(app) {
    app.use(
        proxy('/ticker?currency=all', {
            target: 'https://api.coinone.co.kr/', // 비즈니스 서버 URL 설정
            changeOrigin: true
        })
    );
};