module.exports = {
  apps: [{
    script: 'server.js',
    watch: '.',
    ignore_watch: ['node_modules', 'logs'],
    env_dev: {
      DATABASE_URI: 'mongodb+srv://anshor:DMKiRFL0TTqF9tiU@cluster0.gby4eul.mongodb.net/?retryWrites=true&w=majority',
      ACCESS_TOKEN_SECRET: 'NOTSECRET',
      REFRESH_TOKEN_SECRET: 'JUSTSECRET'
    }
  }],

  // deploy : {
  //   production : {
  //     user : 'SSH_USERNAME',
  //     host : 'SSH_HOSTMACHINE',
  //     ref  : 'origin/master',
  //     repo : 'GIT_REPOSITORY',
  //     path : 'DESTINATION_PATH',
  //     'pre-deploy-local': '',
  //     'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
  //     'pre-setup': ''
  //   }
  // }
};
