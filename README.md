[![devnet-bundle-snapshot](https://github.com/conterra/mapapps-popups-draggable/actions/workflows/devnet-bundle-snapshot.yml/badge.svg)](https://github.com/conterra/mapapps-popups-draggable/actions/workflows/devnet-bundle-snapshot.yml)
![Static Badge](https://img.shields.io/badge/tested_for_map.apps-4.17.0-%20?labelColor=%233E464F&color=%232FC050)
# Popups Draggable

This bundle makes popups draggable to move them to other positions on the screen.

![Screenshot App](https://github.com/conterra/mapapps-popups-draggable/blob/main/screenshot.JPG)

## Sample App
https://demos.conterra.de/mapapps/resources/apps/downloads_popups-draggable/index.html

## Installation Guide
⚠️**Requirement: map.apps 4.16.0**

[dn_popups-draggable Documentation](https://github.com/conterra/mapapps-popups-draggable/tree/master/src/main/js/bundles/dn_popups-draggable)

## Quick start

Clone this project and ensure that you have all required dependencies installed correctly (see [Documentation](https://docs.conterra.de/en/mapapps/latest/developersguide/getting-started/set-up-development-environment.html)).

Then run the following commands from the project root directory to start a local development server:

```bash
# install all required node modules
$ mvn initialize

# start dev server
$ mvn compile -Denv=dev -Pinclude-mapapps-deps

# run unit tests
$ mvn test -P run-js-tests,include-mapapps-deps
```
