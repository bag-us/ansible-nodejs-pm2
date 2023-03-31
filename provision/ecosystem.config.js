module.exports = {
    apps : [{
      name: "Backend",
      script: "./Backend/app.js",
      instances: 'max',  //jumlah worker
      exec_mode: 'cluster',  //mode cluster
      watch: 'true',    //menyimpan perubahan otomatis
      ignore_watch: [
        'node_module',
      ]
    }, {
       name: 'Frontend',
       script: './Frontend/app.js',
       instances: 'max',  //jumlah worker
       exec_mode: 'cluster',  //mode cluster
       watch: 'true',    //menyimpan perubahan otomatis
       ignore_watch: [
         'node_module',
      ]
    }]
  }