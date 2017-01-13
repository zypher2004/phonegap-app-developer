#!/usr/bin/env node

 var fs = require('fs-extra'),
     path = require('path');

/*!
 * Update config.xml for PhoneGap Nightly builds
 */

var projectRoot = require('app-root-path').path;
var configPath = path.join(projectRoot, 'config.xml');


console.log('Running: adding PGB O-Auth tokens');

var PGBTokenFile = path.join(projectRoot, 'resources/signing/pgb-oauth/keys.json');
var PGBPluginPath = path.join(projectRoot, 'plugins/phonegap-plugin-pgb-oauth');

var androidFile = path.join(PGBPluginPath, 'src/android/src/com/phonegap/build/oauth/PhonegapBuildOauth.java');
var iosFile = path.join(PGBPluginPath, 'src/ios/CDVPhonegapBuildOauth.m');

// modify Phonegap Build Oauth files to include keys
fs.readFile(PGBTokenFile, 'utf8', function(err, data) {
    if (err) {
        console.log('Error reading', PGBTokenFile);
        console.log('More info: <', err.message, '>');
        process.exit(1);
    }

    var pgbKeys = JSON.parse(data);
    
    fs.readFile(androidFile, 'utf8', function(err, androidData) {
        if (err) {
            console.log('Error reading', androidFile);
            console.log('More info: <', err.message, '>');
            process.exit(1);
        }

        // insert pgb android token
        var androidClientID = /private String CLIENT_ID = "";/;
        var androidClientSecret = /private String CLIENT_SECRET = "";/;

        if ((androidClientID).test(androidData) && (androidClientSecret).test(androidData)) {
            androidData = androidData.replace(androidClientID, 'private String CLIENT_ID = "' + pgbKeys.client_id + '";');
            androidData = androidData.replace(androidClientSecret, 'private String CLIENT_ID = "' + pgbKeys.client_secret + '";');

            // write back to analytic.js
            fs.writeFile(androidFile, androidData, 'utf8', function(err) {
                if (err) {
                    console.log('Error writing to', androidFile);
                    console.log('More info: <', err.message, '>');
                    process.exit(1);
                }
            });
        } else {
            console.log('Exiting: unable to find PGB token strings to replace in Android');
        }     
    });

    fs.readFile(iosFile, 'utf8', function(err, iosData) {
        if (err) {
            console.log('Error reading', iosFile);
            console.log('More info: <', err.message, '>');
            process.exit(1);
        }

        // insert pgb ios token
        var iosClientID = /NSString\* CLIENT_ID = @"";/;
        var iosClientSecret = /NSString\* CLIENT_SECRET = @"";/;

        if ((iosClientID).test(iosData) && (iosClientSecret).test(iosData)) {
            iosData = iosData.replace(iosClientID, 'NSString* CLIENT_ID = @"' + pgbKeys.client_id + '";');
            iosData = iosData.replace(iosClientSecret, 'NSString* CLIENT_SECRET = @"' + pgbKeys.client_secret +'";');

            // write back to analytic.js
            fs.writeFile(iosFile, iosData, 'utf8', function(err) {
                if (err) {
                    console.log('Error writing to', iosFile);
                    console.log('More info: <', err.message, '>');
                    process.exit(1);
                }
            });
        } else {
            console.log('Exiting: unable to find PGB token strings to replace in iOS');
        } 
    });
});
