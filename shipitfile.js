module.exports = function (shipit) {
  require('shipit-deploy')(shipit)
  shipit.initConfig({
    default: {
      deployTo: '~/sites/worker-front',
      ignores: ['.git', 'node_modules'],
      keepReleases: 2,
      key: '~/.ssh/id_rsa',
      branch: 'master'
    },
    prod: {
      servers: 'worker@142.93.53.196'
    }
  });
  shipit.blTask('git_pull',() => {
    return shipit.remote('cd ' + shipit.config.deployTo + ' && git pull origin master')    
  })
  shipit.blTask('drop_dist',() => {
    return shipit.remote('cd ' + shipit.config.deployTo + ' && sudo rm -rf dist')
  })
  shipit.blTask('npm_install',() => {
    return shipit.remote('cd ' + shipit.config.deployTo + ' && npm install')
  })
  shipit.blTask('biuld_dist',() => {
    return shipit.remote('cd ' + shipit.config.deployTo + ' && npm run webpack-prod')
  })
  shipit.on('deploy',() => {
    shipit.start('biuld_dist');
    shipit.start('npm_install');
    shipit.start('drop_dist');
    shipit.start('git_pull');
  });
};