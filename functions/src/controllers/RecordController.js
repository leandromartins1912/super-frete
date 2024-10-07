const FirestoreService = require("../services/FirestoreService");

class RecordController {
  static async create(req, res) {
    const { name } = req.body;

    if (!name) {
      return res.status(400).send("Name is required");
    }

    try {
      const recordRef = await FirestoreService.createRecord({ name });
      return res.status(201).send(recordRef);
    } catch (error) {
      console.error(error);
      return res.status(500).send("Error creating record");
    }
  }
}

module.exports = RecordController;
