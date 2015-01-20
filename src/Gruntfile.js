module.exports = function(grunt) {

    grunt.initConfig({

        clean: ["scripts/build", "styles/build"],

        coffee: {
            compile: {
                files: [
                    {
                        expand: true,
                        cwd: "scripts",
                        src: ["*.coffee"],
                        dest: "scripts/build",
                        ext: ".js"
                    }
                ]
            }
        },

        stylus: {
            compile: {
                files: [
                    {
                        expand: true,
                        cwd: "styles",
                        src: ["*.styl"],
                        dest: "styles/build",
                        ext: ".css"
                    }
                ]
            }
        },

        watch: {
            scripts: {
                files: [".coffee"],
                tasks: ["coffee:compile"]
            },    
            styles: {
                files: ["./styles"],
                tasks: ["stylus:compile"]
            }    
        }

    });


    grunt.loadNpmTasks("grunt-contrib-coffee");
    grunt.loadNpmTasks("grunt-contrib-stylus");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-watch");


    grunt.registerTask("clean-build", [ "clean"]);

    grunt.registerTask("default", ["clean", "coffee:compile", "stylus:compile"]);
};

