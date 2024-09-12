// /*
//  * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
//  */
import {
  Allo,
} from "generated";
import { generateEventId } from "../utils";
// import { getProviders } from "../providers";
/**
 * Registers new strategy contract dynamically
 */
Allo.PoolCreated.contractRegister(({ event, context }) => {
  context.addGeneralStrategy(event.params.strategy);
});

/**
 * Expample usage of providers
 */
Allo.PoolCreated.handler(async ({ event, context }) => {
  //const providers = getProviders();
  //providers.pricing.getPrice()
  //providers.metadata.getMetadata()
  //providers.repository.save()
  const id = generateEventId(event);
  context.Metadata.set({id, protocol: event.params.metadata[0], pointer: event.params.metadata[1]})
  context.PoolCreated.set({id, ...event.params, metadata_id: id, blockNumber: event.block.number, logIndex: event.logIndex,     srcAddress: event.srcAddress, timestamp: event.block.timestamp});
});

Allo.PoolMetadataUpdated.handler(async ({ event, context }) => {
  const id = generateEventId(event);
  context.Metadata.set({id, protocol: event.params.metadata[0], pointer: event.params.metadata[1]})
  context.PoolMetadataUpdated.set({id, ...event.params, metadata_id: id, blockNumber: event.block.number, logIndex: event.logIndex,     srcAddress: event.srcAddress, timestamp: event.block.timestamp});
});

Allo.PoolFunded.handler(async ({ event, context }) => {
  const id = generateEventId(event);
  context.PoolFunded.set({id, ...event.params, blockNumber: event.block.number, logIndex: event.logIndex,     srcAddress: event.srcAddress, timestamp: event.block.timestamp});
});

Allo.RoleGranted.handler(async ({ event, context }) => {
  const id = generateEventId(event);
  context.RoleGranted.set({id, ...event.params, blockNumber: event.block.number, logIndex: event.logIndex,     srcAddress: event.srcAddress, timestamp: event.block.timestamp});
});

Allo.RoleRevoked.handler(async ({ event, context }) => {
  const id = generateEventId(event);
  context.RoleRevoked.set({id, ...event.params, blockNumber: event.block.number, logIndex: event.logIndex,     srcAddress: event.srcAddress, timestamp: event.block.timestamp});
});
