const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = function override(config, env) {
    // Находим индекс HtmlWebpackPlugin в массиве плагинов
    const HtmlWebpackPluginIndex = config.plugins.findIndex((plugin) => plugin.constructor.name === 'HtmlWebpackPlugin');

    // Заменяем опции этого плагина на свои
    config.plugins[HtmlWebpackPluginIndex] = new HtmlWebpackPlugin({
        template: 'src/page35921456.html',
    });

    // Правила для CSS
    config.module.rules.push({
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
    });

    // Добавление правил для обработки изображений
    config.module.rules.push({
        test: /\.(png|svg|jpe?g|gif)$/i,
        type: 'asset/resource',
    });

    config.entry = './src/index.js';
    config.output = {
        path: path.resolve(__dirname, 'build'),
        filename: 'index.js'
    };

    return config;
};
