module.exports = function(config) {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    frameworks: ['jasmine', 'webpack'],

    // list of files / patterns to load in the browser
    files: [
      'src/**/*.test.jsx',
      'src/**/*.test.js'
    ],

    // list of files / patterns to exclude
    exclude: [],

    // preprocess matching files before serving them to the browser
    preprocessors: {
      'src/**/*.test.jsx': ['webpack', 'coverage'],
      'src/**/*.test.js': ['webpack', 'coverage']
    },

    // webpack configuration
    webpack: {
      mode: 'development',
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['@babel/preset-env', {
                    targets: {
                      node: 'current'
                    }
                  }],
                  ['@babel/preset-react', {
                    runtime: 'automatic'
                  }]
                ]
              }
            }
          }
        ]
      },
      resolve: {
        extensions: ['.js', '.jsx'],
        modules: ['node_modules', 'src'],
        fallback: {
          path: false,
          fs: false
        }
      }
    },    // test results reporter to use
    reporters: ['progress', 'coverage', 'kjhtml'],

    coverageReporter: {
      dir: 'coverage/',
      reporters: [
        { type: 'html', subdir: 'html' },
        { type: 'lcov', subdir: 'lcov' },
        { type: 'text-summary' }
      ]
    },

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    browsers: ['jsdom'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}