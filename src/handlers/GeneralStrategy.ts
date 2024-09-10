import { GeneralStrategy } from "generated";
import { generateEventId } from "../utils";
// Registered Handlers
GeneralStrategy.RegisteredWithSender.handler(async ({ event, context }) => {
  const id = generateEventId(event);
  console.debug('RegisteredWithSender', event.params);
  context.RegisteredWithSender.set({
    id,
    blockNumber: event.block.number,
    timestamp: event.block.timestamp,
    logIndex: event.logIndex,
    srcAddress: event.srcAddress,
    recipientId: event.params.recipientId,
    data: event.params.data,
    sender: event.params.sender
  });
});

GeneralStrategy.RegisteredWithData.handler(async ({ event, context }) => {
  const id = generateEventId(event);
  console.debug('RegisteredWithData', event.params);
  context.RegisteredWithData.set({
    id,
    blockNumber: event.block.number,
    timestamp: event.block.timestamp,
    logIndex: event.logIndex,
    srcAddress: event.srcAddress,
    recipient: event.params._recipient,
    data: event.params._data
  });
});

// TimestampsUpdated Handlers
GeneralStrategy.TimestampsUpdatedWithAllocation.handler(async ({ event, context }) => {
  const id = generateEventId(event);
  console.debug('TimestampsUpdatedWithAllocation', event.params);
  context.TimestampsUpdatedWithAllocation.set({
    id,
    blockNumber: event.block.number,
    timestamp: event.block.timestamp,
    logIndex: event.logIndex,
    srcAddress: event.srcAddress,
    allocationStartTime: event.params.allocationStartTime,
    allocationEndTime: event.params.allocationEndTime,
    sender: event.params.sender
  });
});

// GeneralStrategy.TimestampsUpdatedWithRegistrationAndAllocation.handler(async ({ event, context }) => {
//   const id = generateEventId(event);
//   console.debug('TimestampsUpdatedWithRegistrationAndAllocation', event.params);
//   context.TimestampsUpdatedWithRegistrationAndAllocation.set({
//     id,
//     blockNumber: event.block.number,
//     timestamp: event.block.timestamp,
//     logIndex: event.logIndex    srcAddress: event.srcAddress,
//     registrationStartTime: event.params.registrationStartTime,
//     registrationEndTime: event.params.registrationEndTime,
//     allocationStartTime: event.params.allocationStartTime,
//     allocationEndTime: event.params.allocationEndTime,
//     sender: event.params.sender
//   });
// });

// GeneralStrategy.TimestampsUpdatedWithRegistration.handler(async ({ event, context }) => {
//   const id = generateEventId(event);
//   console.debug('TimestampsUpdatedWithRegistration', event);
//   context.TimestampsUpdatedWithRegistration.set({
//     id,
//     blockNumber: event.block.number,
//     timestamp: event.block.timestamp,
//     logIndex: event.logIndex    srcAddress: event.srcAddress,
//     registrationStartTime: event.params.registrationStartTime,
//     registrationEndTime: event.params.registrationEndTime,
//     sender: event.params.sender
//   });
// });

// DistributionUpdated Handler
GeneralStrategy.DistributionUpdated.handler(async ({ event, context }) => {
  const id = generateEventId(event);
  console.debug('DistributionUpdated', event.params);
  context.Metadata.set({id, protocol: event.params.metadata[0], pointer: event.params.metadata[1]});
  context.DistributionUpdated.set({
    id,
    blockNumber: event.block.number,
    timestamp: event.block.timestamp,
    logIndex: event.logIndex,
    srcAddress: event.srcAddress,
    merkleRoot: event.params.merkleRoot,
    metadata_id: id
  });
});

// FundsDistributed Handler
GeneralStrategy.FundsDistributed.handler(async ({ event, context }) => {
  const id = generateEventId(event);
  console.debug('FundsDistributed', event.params);
  context.FundsDistributed.set({
    id,
    blockNumber: event.block.number,
    timestamp: event.block.timestamp,
    logIndex: event.logIndex,
    srcAddress: event.srcAddress,
    amount: event.params.amount,
    grantee: event.params.grantee,
    token: event.params.token,
    recipientId: event.params.recipientId
  });
});

// Distributed Handlers
GeneralStrategy.DistributedWithRecipientAddress.handler(async ({ event, context }) => {
  const id = generateEventId(event);
  console.debug('DistributedWithRecipientAddress', event.params);
  context.DistributedWithRecipientAddress.set({
    id,
    blockNumber: event.block.number,
    timestamp: event.block.timestamp,
    logIndex: event.logIndex,
    srcAddress: event.srcAddress,
    recipientId: event.params.recipientId,
    recipientAddress: event.params.recipientAddress,
    amount: event.params.amount,
    sender: event.params.sender
  });
});

GeneralStrategy.DistributedWithData.handler(async ({ event, context }) => {
  const id = generateEventId(event);
  console.debug('DistributedWithData', event.params);
  context.DistributedWithData.set({
    id,
    blockNumber: event.block.number,
    timestamp: event.block.timestamp,
    logIndex: event.logIndex,
    srcAddress: event.srcAddress,
    recipient: event.params._recipient,
    data: event.params._data
  });
});

GeneralStrategy.DistributedWithFlowRate.handler(async ({ event, context }) => {
  const id = generateEventId(event);
  console.debug('DistributedWithFlowRate', event.params);
  context.DistributedWithFlowRate.set({
    id,
    blockNumber: event.block.number,
    timestamp: event.block.timestamp,
    logIndex: event.logIndex,
    srcAddress: event.srcAddress,
    sender: event.params.sender,
    flowRate: event.params.flowRate
  });
});

// Allocated Handlers
GeneralStrategy.AllocatedWithOrigin.handler(async ({ event, context }) => {
  const id = generateEventId(event);
  console.debug('AllocatedWithOrigin', event.params);
  context.AllocatedWithOrigin.set({
    id,
    blockNumber: event.block.number,
    timestamp: event.block.timestamp,
    logIndex: event.logIndex,
    srcAddress: event.srcAddress,
    recipientId: event.params.recipientId,
    amount: event.params.amount,
    token: event.params.token,
    sender: event.params.sender,
    origin: event.params.origin
  });
});

GeneralStrategy.AllocatedWithData.handler(async ({ event, context }) => {
  const id = generateEventId(event);
  console.debug('AllocatedWithData', event.params);
  context.AllocatedWithData.set({
    id,
    blockNumber: event.block.number,
    timestamp: event.block.timestamp,
    logIndex: event.logIndex,
    srcAddress: event.srcAddress,
    recipientId: event.params._recipient,
    sender: event.params._sender,
    amount: event.params._amount,
    data: event.params._data
  });
});

GeneralStrategy.AllocatedWithToken.handler(async ({ event, context }) => {
  const id = generateEventId(event);
  console.debug('AllocatedWithToken', event.params);
  context.AllocatedWithToken.set({
    id,
    blockNumber: event.block.number,
    timestamp: event.block.timestamp,
    logIndex: event.logIndex,
    srcAddress: event.srcAddress,
    recipientId: event.params.recipientId,
    amount: event.params.amount,
    token: event.params.token,
    sender: event.params.sender
  });
});

GeneralStrategy.AllocatedWithVotes.handler(async ({ event, context }) => {
  const id = generateEventId(event);
  console.debug('AllocatedWithVotes', event.params);
  context.AllocatedWithVotes.set({
    id,
    blockNumber: event.block.number,
    timestamp: event.block.timestamp,
    logIndex: event.logIndex,
    srcAddress: event.srcAddress,
    recipientId: event.params.recipientId,
    votes: event.params.votes,
    allocator: event.params.allocator
  });
});

GeneralStrategy.AllocatedWithStatus.handler(async ({ event, context }) => {
  const id = generateEventId(event);
  console.debug('AllocatedWithStatus', event.params);
  context.AllocatedWithStatus.set({
    id,
    blockNumber: event.block.number,
    timestamp: event.block.timestamp,
    logIndex: event.logIndex,
    srcAddress: event.srcAddress,
    recipientId: event.params.recipientId,
    status: event.params.status,
    sender: event.params.sender
  });
});

// AllocatedWithNft Handler
GeneralStrategy.AllocatedWithNft.handler(async ({ event, context }) => {
  const id = generateEventId(event);
  console.debug('AllocatedWithNft', event.params);
  context.AllocatedWithNft.set({
    id,
    blockNumber: event.block.number,
    timestamp: event.block.timestamp,
    logIndex: event.logIndex,
    srcAddress: event.srcAddress,
    recipientId: event.params.recipientId,
    votes: event.params.votes,
    nft: event.params.nft,
    allocator: event.params.allocator
  });
});

// DirectAllocated Handler
GeneralStrategy.DirectAllocated.handler(async ({ event, context }) => {
  const id = generateEventId(event);
  console.debug('DirectAllocated', event.params);
  context.DirectAllocated.set({
    id,
    blockNumber: event.block.number,
    timestamp: event.block.timestamp,
    logIndex: event.logIndex,
    srcAddress: event.srcAddress,
    recipient: event.params.recipient,
    amount: event.params.amount,
    token: event.params.token,
    sender: event.params.sender
  });
});

// RecipientStatusUpdated Handlers
GeneralStrategy.RecipientStatusUpdatedWithApplicationId.handler(async ({ event, context }) => {
  const id = generateEventId(event);
  console.debug('RecipientStatusUpdatedWithApplicationId', event.params);
  context.RecipientStatusUpdatedWithApplicationId.set({
    id,
    blockNumber: event.block.number,
    timestamp: event.block.timestamp,
    logIndex: event.logIndex,
    srcAddress: event.srcAddress,
    recipientId: event.params.recipientId,
    applicationId: event.params.applicationId,
    status: event.params.status,
    sender: event.params.sender
  });
});

GeneralStrategy.RecipientStatusUpdatedWithRecipientStatus.handler(async ({ event, context }) => {
  const id = generateEventId(event);
  console.debug('RecipientStatusUpdatedWithRecipientStatus', event.params);
  context.RecipientStatusUpdatedWithRecipientStatus.set({
    id,
    blockNumber: event.block.number,
    timestamp: event.block.timestamp,
    logIndex: event.logIndex,
    srcAddress: event.srcAddress,
    recipientId: event.params.recipientId,
    recipientStatus: event.params.recipientStatus,
    sender: event.params.sender
  });
});


GeneralStrategy.RecipientStatusUpdatedWithFullRow.handler(async ({ event, context }) => {
    const id = generateEventId(event);
    console.debug('RecipientStatusUpdatedWithFullRow', event.params);
    context.RecipientStatusUpdatedWithFullRow.set({
        id,
        blockNumber: event.block.number,
        timestamp: event.block.timestamp,
        logIndex: event.logIndex,
        srcAddress: event.srcAddress,
        rowIndex: event.params.rowIndex,
        fullRow: event.params.fullRow,
        sender: event.params.sender
    });
});
