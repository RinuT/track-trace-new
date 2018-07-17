app/                    --> all of the source files for the application
  app.css               --> default stylesheet
  components/           --> all app specific modules
    version/              --> version related components
      version.js                 --> version module declaration and basic "version" value service
      version_test.js            --> "version" value service tests
      version-directive.js       --> custom directive that returns the current app version
      version-directive_test.js  --> version directive tests
      interpolate-filter.js      --> custom interpolation filter
      interpolate-filter_test.js --> interpolate filter tests
    home/                --> the home view template and logic
    home.html            --> the partial template
    home.js              --> the controller logic
    home.js         --> tests of the controller
  manufacturer/                --> the manufacturer view template and logic
    manufacturer.html            --> the partial template
    manufacturer.js              --> the controller logic
    manufacturer_test.js         --> tests of the controller
  distributor/                --> the distributor view template and logic
    distributor.html            --> the partial template
    distributor.js              --> the controller logic
    distributor_test.js         --> tests of the controller
  wholesaler/                --> the wholesaler view template and logic
    wholesaler.html            --> the partial template
    wholesaler.js              --> the controller logic
    wholesaler_test.js         --> tests of the controller
  hospital/                --> the hospital view template and logic
    hospital.html            --> the partial template
    hospital.js              --> the controller logic
    hospital_test.js         --> tests of the controller
  app.js                --> main application module
  index.html            --> app layout file (the main html template file of the app)
  index-async.html      --> just like index.html, but loads js files asynchronously
karma.conf.js         --> config file for running unit tests with Karma
e2e-tests/            --> end-to-end tests
  protractor-conf.js    --> Protractor config file
  scenarios.js          --> end-to-end scenarios to be run by Protractor