const fs = require('fs')
const path = require('path')
const swaggerGen = require('swagger-vue')

module.exports = function(grunt) {

  grunt.initConfig({
    'pkg': grunt.file.readJSON('package.json'),
    'swagger-vue-codegen': {
      options: {
        swagger: "<%= pkg.swagger.definition %>",
        className: "<%= pkg.swagger.className %>",
        moduleName: "vue-<%= pkg.swagger.moduleName %>",
        dest: ''
      },
      dist: {

      }
    }
  });

  grunt.registerMultiTask('swagger-vue-codegen', function() {
    var callback = this.async();
    var opt = this.options();
    var distFileName = path.join(opt.dest, opt.moduleName + '.js');

    fs.readFile(opt.swagger, function(err, data) {
      if (err) {
        grunt.log.error(err.toString());
        callback(false);
      } else {
        var parsedData = JSON.parse(data);

        var codeResult = swaggerGen({
          swagger: parsedData,
          moduleName: opt.moduleName,
          className: opt.className
        });

        fs.writeFile(distFileName, codeResult, function(err) {
          if (err) {
            grunt.log.error(err.toString());
            callback(false);
          } else {
            grunt.log.writeln('Generated ' + distFileName + ' from ' + opt.swagger);
          }
        })
      }
    });
  });

  grunt.registerTask('vue', ['swagger-vue-codegen']);
};