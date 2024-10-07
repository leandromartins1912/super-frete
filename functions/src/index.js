const functions = require("firebase-functions");
const admin = require("firebase-admin");
const RecordController = require("./controllers/RecordController");
const FirestoreTriggers = require("./triggers/FirestoreTriggers");

admin.initializeApp();

exports.createRecord = functions.https.onRequest(RecordController.create);

exports.onCreateRecord = functions.firestore
  .document("records/{recordId}")
  .onCreate(FirestoreTriggers.setIncrementId);
