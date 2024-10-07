const admin = require("firebase-admin");

class FirestoreService {
  static async createRecord(data) {
    const collectionRef = admin.firestore().collection("records");
    const recordRef = await collectionRef.add(data);
    return recordRef;
  }

  static async getNextIncrementId(collectionRef) {
    const snapshot = await collectionRef
      .orderBy("increment_id", "desc")
      .limit(1)
      .get();
    return snapshot.empty ? 1 : snapshot.docs[0].data().increment_id + 1;
  }
}

module.exports = FirestoreService;
