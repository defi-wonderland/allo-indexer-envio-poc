// /*
//  * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
//  */
import {
  Allo,
} from "generated";
import { generateEventId } from "../utils";

Allo.PoolCreated.contractRegister(({ event, context }) => {
  context.addGeneralStrategy(event.params.strategy);
});

Allo.PoolCreated.handler(async ({ event, context }) => {
});

Allo.PoolMetadataUpdated.handler(async ({ event, context }) => {
});

Allo.PoolFunded.handler(async ({ event, context }) => {
 });

Allo.RoleGranted.handler(async ({ event, context }) => {
});

Allo.RoleRevoked.handler(async ({ event, context }) => {
});
