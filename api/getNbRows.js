/**
 * Created by Training on 22/10/2014.
 */

var mongoose = require('mongoose');
var dbUtils = require('../dbUtils');
var config = require('../config');
var async = require('async');
var Session = require('../models/SessionSchema');
var Attendee = require('../models/AttendeeSchema');

module.exports = function (req, res) {
    var self = this;
    self.results = {
        'nbSessions': null,
        'nbAttendees': null
    };
    async.series([
            function (callback) {
                console.log('Getting nb of sessions');
                Session.find(function (err, sessions) {
                    if (err) {
                        callback(err);
                        return;
                    }
                    self.results.nbSessions = sessions.length;
                    callback();
                });
            },
            function (callback) {
                console.log('Getting nb of attendees');
                Attendee.find(function (err, attendees) {
                    if (err) {
                        callback(err);
                        return;
                    }
                    self.results.nbAttendees = attendees.length;
                    callback();
                });

            }],
        function (err) {
            if (err) {
                console.err(err);
                return res.status(404)        // HTTP status 404: NotFound
                    .send('Not found');
            }
            else
                return res.status(200)
                    .json(self.results);
        }
    );

};