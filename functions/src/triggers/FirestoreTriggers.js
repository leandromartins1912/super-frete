const FirestoreService = require("../services/FirestoreService");

class FirestoreTriggers {
  static async setIncrementId(snapshot, context) {
    const incrementId = await FirestoreService.getNextIncrementId(
      snapshot.ref.parent
    );
    await snapshot.ref.update({ increment_id: incrementId });
    console.log("Novo registro criado com increment_id:", incrementId);
  }
}

module.exports = FirestoreTriggers;
