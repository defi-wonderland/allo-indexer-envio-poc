import assert from "assert";
import { 
  TestHelpers,
  Allo_BaseFeeUpdatedEntity
} from "generated";
const { MockDb, Allo } = TestHelpers;

describe("Allo contract BaseFeeUpdated event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for Allo contract BaseFeeUpdated event
  const event = Allo.BaseFeeUpdated.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  // Processing the event
  const mockDbUpdated = Allo.BaseFeeUpdated.processEvent({
    event,
    mockDb,
  });

  it("Allo_BaseFeeUpdatedEntity is created correctly", () => {
    // Getting the actual entity from the mock database
    let actualAlloBaseFeeUpdatedEntity = mockDbUpdated.entities.Allo_BaseFeeUpdated.get(
      `${event.transactionHash}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedAlloBaseFeeUpdatedEntity: Allo_BaseFeeUpdatedEntity = {
      id: `${event.transactionHash}_${event.logIndex}`,
      baseFee: event.params.baseFee,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualAlloBaseFeeUpdatedEntity, expectedAlloBaseFeeUpdatedEntity, "Actual AlloBaseFeeUpdatedEntity should be the same as the expectedAlloBaseFeeUpdatedEntity");
  });
});
