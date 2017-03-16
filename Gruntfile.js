"use strict";

module.exports = function (grunt) {



    // Project configuration.
    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON('date-names-ex.json'),
        banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
                '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
                '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %> (<%= pkg.author.email %>);' +
                ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
        // Task configuration.
        clean: {
            files: ['build']
        },
        concat: {
            options: {
                banner: '<%= banner %>',
                separator: ';',
                stripBanners: true
            },
        },
        uglify: {
            options: {
                banner: '<%= banner %>',
                mangle: true
            },
            dist: {
                files: [{
                        'build/date-names-ex.min.js': 'build/date-names-ex.js',
                        'build/date-names-ex.de.min.js': 'src/de.js',
                        'build/date-names-ex.en.min.js': 'src/en.js',
                        'build/date-names-ex.es.min.js': 'src/es.js',
                        'build/date-names-ex.fi.min.js': 'src/fi.js',
                        'build/date-names-ex.pt-br.min.js': 'src/pt-br.js',
                        'build/date-names-ex.ru.min.js': 'src/ru.js',
                    }]
            }
        },
        jshint: {
            options: {
                jshintrc: true,
                reporterOutput: "",
            },
            gruntfile: {
                src: 'Gruntfile.js'
            },
            src: {
                src: ['src/**/*.js']
            },
            test: {
                src: ['test/**/*.js']
            },
        },
        watch: {
            gruntfile: {
                files: '<%= jshint.gruntfile.src %>',
                tasks: ['jshint:gruntfile']
            },
            src: {
                files: '',
                tasks: ['', '']
            },
            test: {
                files: '<%= jshint.test.src %>',
                tasks: ['jshint:test', 'qunit']
            },
        },
        qunit: {
            files: ['test/**/*.html']
        },
        json_generator: {
            target: {
                dest: "build/package.json",
                options: {
                    name: "date-names-ex",
                    version: "0.0.1",
                    description: "JavaScript repository of localized month and day names for single or separate files use.  Based on Martin Andert code https://github.com/martinandert/date-names",
                    main: "date-names-ex.js",
                    scripts: {
                        test: "echo \"Error: no test specified\" && exit 1"
                    },
                    repository: {
                        type: "git",
                        url: "git+https://github.com/vasiliyaltunin/date-names-ex.git"
                    },
                    keywords: [
                        "localization",
                        "translation",
                        "translate",
                        "localize",
                        "month",
                        "weekday",
                        "day",
                        "names",
                        "i18n",
                        "l10n",
                        "date"
                    ],
                    author: "Vasiliy Altunin",
                    license: "MPL-2.0",
                    bugs: {
                        url: "https://github.com/vasiliyaltunin/date-names-ex/issues"
                    },
                    homepage: "https://github.com/vasiliyaltunin/date-names-ex#readme"

                }
            }
        }



    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-json-generator');

    grunt.registerTask("prepareModules", "Finds and prepares modules for concatenation.", function () {

        var concat = grunt.config.get('concat') || {};


        concat["date-names"] = {
            src: ['src/de.js', 'src/en.js', 'src/es.js', 'src/fi.js', 'src/pt-br.js', 'src/ru.js', 'src/main.js'],
            dest: 'build/date-names-ex.js'
        };

        grunt.config.set('concat', concat);
    });

    // Default task.
    grunt.registerTask('default', ['clean', 'jshint', 'qunit', 'prepareModules', 'concat', 'uglify', 'json_generator']);

};