import { GeneralStrategy } from "generated";
import { generateEventId } from "../utils";
// Registered Handlers
GeneralStrategy.RegisteredWithSender.handler(async ({ event, context }) => {
  const id = generateEventId(event);
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
GeneralStrategy.TimestampsUpdated.handler(async ({ event, context }) => {
  const id = generateEventId(event);
  context.TimestampsUpdated.set({
    id,
    blockNumber: event.block.number,
    timestamp: event.block.timestamp,
    logIndex: event.logIndex,
    srcAddress: event.srcAddress,
    startTime: event.params.startTime,
    endTime: event.params.endTime,
    sender: event.params.sender
  });
});

GeneralStrategy.TimestampsUpdatedWithRegistrationAndAllocation.handler(async ({ event, context }) => {
  const id = generateEventId(event);
  context.TimestampsUpdatedWithRegistrationAndAllocation.set({
    id,
    blockNumber: event.block.number,
    timestamp: event.block.timestamp,
    logIndex: event.logIndex,
    srcAddress: event.srcAddress,
    registrationStartTime: event.params.registrationStartTime,
    registrationEndTime: event.params.registrationEndTime,
    allocationStartTime: event.params.allocationStartTime,
    allocationEndTime: event.params.allocationEndTime,
    sender: event.params.sender
  });
});

// DistributionUpdated Handler
GeneralStrategy.DistributionUpdated.handler(async ({ event, context }) => {
  const id = generateEventId(event);
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
