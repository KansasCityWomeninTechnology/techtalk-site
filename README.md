# TechTalks Website

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.1.

## Local Development
To get going:
```bash
git clone
npm install
ng serve
```
Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Deploy
Install and login with [Firebase CLI](https://firebase.google.com/docs/cli#install-cli-windows), if you haven't.
```
ng build
firebase deploy
```
To deploy, make sure you are added as a collaborator to our Firebase project techtalk-site. If you don't have access yet, contact Jennifer Wadella.

## How to activate links, update mentors, etc
All data used to populate app is found in "src/data" folder. Update previous talks in _previoustalks.ts_, update upcoming talks in _talks.ts_, and team members info in _team.ts_.

* To activate links for a talk, enable the `areLinksEnabled` flag for the talk.
* To display next talk's ticket purchasing view:
    1. Make sure the talk's `eventbriteIFrameLink` is populated
    1. Set the `UPCOMING_TALK_MONTH` for the talk to display using the integer representation for the month (ie 7 for July)

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
TODO: Write tests...

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Troubleshooting

1. Error using `ng` command
    ```
    ng: command not found
    ```

    Install Angular CLI with `npm install -g @angular/cli@latest`. Note that if you later switch node version, you'll need to install again for that node version.

2. Error during `firebase deploy`
    ```
    Error: Assertion failed: resolving hosting target of a site with no site name or target name. This should have caused an error earlier
    ```
    Make sure your firebase CLI has logged into the correct account that has `techtalk-site` in the projects.

3. Error with `openssl`
    ```
    opensslErrorStack: [ 'error:03000086:digital envelope routines::initialization error' ],
    library: 'digital envelope routines',
    reason: 'unsupported',
    code: 'ERR_OSSL_EVP_UNSUPPORTED'
    ```
    Try `export NODE_OPTIONS=--openssl-legacy-provider` or try downgrading or upgrading your node version.

4. Site is not updated though `firebase deploy` succeeds.

    This might be due to browser caches. Try loading the site in another browser or in incognito mode.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
