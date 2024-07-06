/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  AlloContract,
  Allo_BaseFeeUpdatedEntity,
  Allo_InitializedEntity,
  Allo_TreasuryUpdatedEntity,
} from "generated";

AlloContract.BaseFeeUpdated.handler(({ event, context }) => {
  const entity: Allo_BaseFeeUpdatedEntity = {
    id: `${event.transactionHash}_${event.logIndex}`,
    baseFee: event.params.baseFee,
  };

  context.Allo_BaseFeeUpdated.set(entity);
});

AlloContract.Initialized.handler(({ event, context }) => {
  const entity: Allo_InitializedEntity = {
    id: `${event.transactionHash}_${event.logIndex}`,
    version: event.params.version,
  };

  context.Allo_Initialized.set(entity);
});

AlloContract.TreasuryUpdated.handler(({ event, context }) => {
  const entity: Allo_TreasuryUpdatedEntity = {
    id: `${event.transactionHash}_${event.logIndex}`,
    treasury: event.params.treasury,
  };

  context.Allo_TreasuryUpdated.set(entity);
});
