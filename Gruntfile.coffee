module.exports = (grunt)->
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')

    typescript:
      base:
        src: ['tests/**/*.ts']
        options:
          sourceMap: false

    watch:
      typescript:
        files: ['tests/**/*.ts']
        tasks: ['typescript']
        options:
          atBegin: true

  })

  grunt.loadNpmTasks('grunt-typescript')
  grunt.loadNpmTasks('grunt-contrib-watch')

  grunt.registerTask('default', ['typescript'])
