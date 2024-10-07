const assert = require("assert");
const FirestoreService = require("../services/FirestoreService");
const RecordController = require("../controllers/RecordController");
const httpMocks = require("node-mocks-http");

// Mock FirestoreService
FirestoreService.createRecord = async (data) => ({ id: "mockId" });

describe("RecordController", () => {
  it("should return 400 if name is not provided", async () => {
    const req = httpMocks.createRequest({
      method: "POST",
      body: {},
    });
    const res = httpMocks.createResponse();

    await RecordController.create(req, res);
    assert.strictEqual(res.statusCode, 400);
    assert.strictEqual(res._getData(), "Name is required");
  });

  it("should return 201 if name is provided", async () => {
    const req = httpMocks.createRequest({
      method: "POST",
      body: { name: "Example" },
    });
    const res = httpMocks.createResponse();

    await RecordController.create(req, res);
    assert.strictEqual(res.statusCode, 201);
  });
});
