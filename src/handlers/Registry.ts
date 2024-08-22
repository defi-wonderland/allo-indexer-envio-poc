// /*
//  * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
//  */
// import {
//   RegistryContract,
//   Registry_ProfileCreatedEntity,
//   Registry_ProfileMetadataUpdatedEntity,
// } from "generated";

// RegistryContract.ProfileCreated.handler(({ event, context }) => {
//   const entity: Registry_ProfileCreatedEntity = {
//     id: `${event.transactionHash}_${event.logIndex}`,
//     profileId: event.params.profileId,
//     nonce: event.params.nonce,
//     name: event.params.name,
//     metadata_0: event.params.metadata[0],
//     metadata_1: event.params.metadata[1],
//     owner: event.params.owner,
//     anchor: event.params.anchor,
//   };

//   context.Registry_ProfileCreated.set(entity);
// });

// RegistryContract.ProfileMetadataUpdated.handler(({ event, context }) => {
//   const entity: Registry_ProfileMetadataUpdatedEntity = {
//     id: `${event.transactionHash}_${event.logIndex}`,
//     profileId: event.params.profileId,
//     metadata_0: event.params.metadata[0],
//     metadata_1: event.params.metadata[1],
//   };

//   context.Registry_ProfileMetadataUpdated.set(entity);
// });
