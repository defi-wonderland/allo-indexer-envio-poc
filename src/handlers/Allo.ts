// /*
//  * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
//  */
import {
  Allo,
} from "generated";
import { generateEventId } from "../utils";

Allo.PoolCreated.contractRegister(({ event, context }) => {
  console.debug('PoolCreated', event);
  
  context.addGeneralStrategy(event.params.strategy);
});

Allo.PoolCreated.handler(async ({ event, context }) => {
  const id = generateEventId(event);
  console.debug('PoolCreated', event.params);
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
