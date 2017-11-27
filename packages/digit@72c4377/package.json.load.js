montageDefine("72c4377","package.json",{exports:{name:"digit",description:"Touch-optimized MontageJS components for tablets and phones.",version:"3.0.2",license:"BSD-3-Clause",repository:{type:"git",url:"git+https://github.com/montagejs/digit.git"},dependencies:{montage:"^17.0.7"},devDependencies:{concurrently:"^3.4.0","http-server":"^0.9.0","jasmine-console-reporter":"^1.2.7","jasmine-core":"^2.5.2",karma:"^1.5.0","karma-chrome-launcher":"^2.0.0","karma-coverage":"^1.1.1","karma-firefox-launcher":"^1.0.1","karma-jasmine":"^1.1.0","karma-phantomjs-launcher":"^1.0.2","montage-testing":"git://github.com/montagejs/montage-testing.git#master",open:"0.0.5"},scripts:{test:"node test/run-node.js","test:karma":"karma start --no-auto-watch --single-run","test:karma-dev":"karma start --auto-watch --no-single-run","test:jasmine":'concurrently "http-server -a localhost -p 8085" "open http://localhost:8085/test/run.html"',"start:demo":'concurrently "http-server -a localhost -p 8085" "open http://localhost:8085/demo/sizing/index.html"',"start:overview":'concurrently "http-server -a localhost -p 8085" "open http://localhost:8085/overview/index.html"'},exclude:["demo","report","overview","test"],gitHead:"1cbebce20f69fcaef6cf7889f9b751d0aa73a30e",bugs:{url:"https://github.com/montagejs/digit/issues"},homepage:"https://github.com/montagejs/digit#readme",_id:"digit@3.0.2",_shasum:"5f24117736a0043283f177d654ab6387ff6ae2d2",_from:"digit@3.0.2",_npmVersion:"2.15.11",_nodeVersion:"4.8.6",_npmUser:{name:"hthetiot",email:"hthetiot@gmail.com"},dist:{shasum:"5f24117736a0043283f177d654ab6387ff6ae2d2",tarball:"https://registry.npmjs.org/digit/-/digit-3.0.2.tgz"},maintainers:[{name:"francoisfrisch",email:"francoisfrisch@gmail.com"},{name:"hthetiot",email:"hthetiot@gmail.com"},{name:"marchant",email:"benoit@montagestudio.com"},{name:"montage-bot",email:"francoisfrisch@gmail.com"}],_npmOperationalInternal:{host:"s3://npm-registry-packages",tmp:"tmp/digit-3.0.2.tgz_1511813082971_0.7558041899465024"},directories:{},_resolved:"https://registry.npmjs.org/digit/-/digit-3.0.2.tgz",main:"index",hash:"72c4377",mappings:{montage:{name:"montage",hash:"891a5ba",location:"../montage@891a5ba/"}},production:!0,useScriptInjection:!0}});