import { GeneralStrategy } from "generated";
import { generateEventId } from "../utils";

// Registered Handlers
GeneralStrategy.RegisteredWithSender.handler(async ({ event, context }) => {});
GeneralStrategy.RegisteredWithData.handler(async ({ event, context }) => {});

// TimestampsUpdated Handlers
GeneralStrategy.TimestampsUpdated.handler(async ({ event, context }) => {});
GeneralStrategy.TimestampsUpdatedWithRegistrationAndAllocation.handler(async ({ event, context }) => {});

// DistributionUpdated Handler
GeneralStrategy.DistributionUpdated.handler(async ({ event, context }) => {});

// FundsDistributed Handler
GeneralStrategy.FundsDistributed.handler(async ({ event, context }) => {});

// Distributed Handlers
GeneralStrategy.DistributedWithRecipientAddress.handler(async ({ event, context }) => {});
GeneralStrategy.DistributedWithData.handler(async ({ event, context }) => {});
GeneralStrategy.DistributedWithFlowRate.handler(async ({ event, context }) => {});

// Allocated Handlers
GeneralStrategy.AllocatedWithOrigin.handler(async ({ event, context }) => {});
GeneralStrategy.AllocatedWithData.handler(async ({ event, context }) => {});
GeneralStrategy.AllocatedWithToken.handler(async ({ event, context }) => {});
GeneralStrategy.AllocatedWithVotes.handler(async ({ event, context }) => {});
GeneralStrategy.AllocatedWithStatus.handler(async ({ event, context }) => {});

// AllocatedWithNft Handler
GeneralStrategy.AllocatedWithNft.handler(async ({ event, context }) => {});

// DirectAllocated Handler
GeneralStrategy.DirectAllocated.handler(async ({ event, context }) => {});

// RecipientStatusUpdated Handlers
GeneralStrategy.RecipientStatusUpdatedWithApplicationId.handler(async ({ event, context }) => {});
GeneralStrategy.RecipientStatusUpdatedWithRecipientStatus.handler(async ({ event, context }) => {});
GeneralStrategy.RecipientStatusUpdatedWithFullRow.handler(async ({ event, context }) => {});
