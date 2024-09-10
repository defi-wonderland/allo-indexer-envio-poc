import { generateEventId } from "../utils";
import {
    Registry,
  } from "generated";


// Handler for ProfileCreated event
Registry.ProfileCreated.handler(async ({ event, context }) => {
  const id = generateEventId(event);
  console.debug('ProfileCreated', event.params);
  context.Metadata.set({id, protocol: event.params.metadata[0], pointer: event.params.metadata[1]})
  context.ProfileCreated.set({
    id,
    blockNumber: event.block.number,
    timestamp: event.block.timestamp,
    logIndex: event.logIndex,
    srcAddress: event.srcAddress,
    profileId: event.params.profileId,
    nonce: event.params.nonce,
    name: event.params.name,
    metadata_id: id,
    owner: event.params.owner,
    anchor: event.params.anchor
  });
});

// Handler for ProfileMetadataUpdated event
Registry.ProfileMetadataUpdated.handler(async ({ event, context }) => {
  const id = generateEventId(event);
  console.debug('ProfileMetadataUpdated', event.params);
  context.Metadata.set({id, protocol: event.params.metadata[0], pointer: event.params.metadata[1]});
  context.ProfileMetadataUpdated.set({
    id,
    blockNumber: event.block.number,
    timestamp: event.block.timestamp,
    logIndex: event.logIndex,
    srcAddress: event.srcAddress,
    profileId: event.params.profileId,
    metadata_id: id
  });
});

// Handler for ProfileNameUpdated event
Registry.ProfileNameUpdated.handler(async ({ event, context }) => {
  const id = generateEventId(event);
  console.debug('ProfileNameUpdated', event.params);
  context.ProfileNameUpdated.set({
    id,
    blockNumber: event.block.number,
    timestamp: event.block.timestamp,
    logIndex: event.logIndex,
    srcAddress: event.srcAddress,
    profileId: event.params.profileId,
    name: event.params.name,
    anchor: event.params.anchor
  });
});

// Handler for ProfileOwnerUpdated event
Registry.ProfileOwnerUpdated.handler(async ({ event, context }) => {
  const id = generateEventId(event);
  console.debug('ProfileOwnerUpdated', event.params);
  context.ProfileOwnerUpdated.set({
    id,
    blockNumber: event.block.number,
    timestamp: event.block.timestamp,
    logIndex: event.logIndex,
    srcAddress: event.srcAddress,
    profileId: event.params.profileId,
    owner: event.params.owner
  });
});
