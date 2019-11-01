const withSass = require('@zeit/next-sass');
const withImages = require('next-images')

module.exports = () => {
  console.log('> Mapping next.config.js');

  return withImages(
    withSass({
      webpack: (config, { isServer, webpack }) => {


        // config.module.rules.push({
        //   test: /\.(jpg|png|svg)$/,
        //   use: [
        //     {
        //       loader: 'file-loader',
        //       options: {
        //         context: '',
        //         outputPath: 'static',
        //         publicPath: '/_next/static',
        //         name: '[name]_[hash].[ext]'
        //       }
        //     }
        //   ]
        // });

        config.plugins.push(new webpack.DefinePlugin({
          __CLIENT__: !isServer,
          __SERVER__: isServer,
        }));

        return config;
      },
    })
  )
};
