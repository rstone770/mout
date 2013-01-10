// ============================================================================
// IMPORTANT!
// ----------------------------------------------------------------------------
// This file is automatically generated, do not edit it! Changes will be lost
// on the next build.
// Edit source file at "_build/templates/spec/runner_js.hbs" and run
// `node build pkg`
// ============================================================================

(function(requirejs, jasmine){


var env, reporter;

var opts = {
    baseUrl : 'spec',
    paths : {
        'mout' : '../../src'
    }
};


var specs = [
    'spec-array',
    'spec-collection',
    'spec-function',
    'spec-lang',
    'spec-math',
    'spec-number',
    'spec-object',
    'spec-queryString',
    'spec-random',
    'spec-string',
    'spec-time'
];



if (typeof document !== 'undefined') { //browser

    env = jasmine.getEnv();
    reporter = new jasmine.HtmlReporter();
    // in case the user decides to run a single spec
    env.specFilter = function(spec){
        return reporter.specFilter(spec);
    };
    env.addReporter(reporter);

    //fail early local and cache bust
    opts.waitSeconds = (location.protocol === 'file:' || location.href.indexOf('://localhost') !== -1)? 5 : 45;
    opts.urlArgs = 'bust='+ (+new Date());

} else { // nodejs

    // jasmine-node doesn't expose the TerminalReporter :(
    // see: https://github.com/mhevery/jasmine-node/issues/184
    var TerminalReporter = require('jasmine-node/lib/jasmine-node/reporter').jasmineNode.TerminalReporter;
    reporter = new TerminalReporter({
        color: true
    });
    env = jasmine.getEnv();
    env.addReporter(reporter);

    opts.baseUrl = __dirname + '/spec';
    opts.nodeRequire = require;

}


// load and execute specs, should come after all options and jasmine.getEnv()
// calls
requirejs(opts, specs, function(){
    env.execute();
});


}(
  typeof requirejs !== 'undefined'? requirejs : require('requirejs'),
  typeof jasmine !== 'undefined'? jasmine : require('jasmine-node')
));

