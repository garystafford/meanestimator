'use strict';

module.exports = {
  db: 'mongodb://localhost/env-estimate-dev',
  app: {
    title: 'Environment Application Estimator - Development Environment'
  },
  facebook: {
    clientID: 'APP_ID',
    clientSecret: 'APP_SECRET',
    callbackURL: 'http://localhost:3000/auth/facebook/callback'
  },
  twitter: {
    clientID: 'CONSUMER_KEY',
    clientSecret: 'CONSUMER_SECRET',
    callbackURL: 'http://localhost:3000/auth/twitter/callback'
  },
  google: {
    clientID: 'APP_ID',
    clientSecret: 'APP_SECRET',
    callbackURL: 'http://localhost:3000/auth/google/callback'
  },
  linkedin: {
    clientID: 'APP_ID',
    clientSecret: 'APP_SECRET',
    callbackURL: 'http://localhost:3000/auth/linkedin/callback'
  },
  // below not implimented yet...
  jsConfigPath: 'public/js/config.js',
  jsApplicationPath: 'public/js/application.js',
  cssPath: 'css/common.css'
};