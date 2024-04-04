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

## Development Guide
### Define the mapapps remote base
Before you can run the project you have to define the mapapps.remote.base property in the pom.xml-file:
`<mapapps.remote.base>http://%YOURSERVER%/ct-mapapps-webapp-%VERSION%</mapapps.remote.base>`

### Other methods to to define the mapapps.remote.base property.
1. Goal parameters
`mvn install -Dmapapps.remote.base=http://%YOURSERVER%/ct-mapapps-webapp-%VERSION%`

2. Build properties
Change the mapapps.remote.base in the build.properties file and run:
`mvn install -Denv=dev -Dlocal.configfile=%ABSOLUTEPATHTOPROJECTROOT%/build.properties`
