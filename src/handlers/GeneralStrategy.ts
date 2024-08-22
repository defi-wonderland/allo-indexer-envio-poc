import {
    GeneralStrategy,
    handlerContext,
} from "generated";

interface LastEventPointer {
    blockNumber: number;
    logIndex: number;
}

// const lastEventPointers: Record<string, LastEventPointer> = {};
// async function getLastEvent(eventType: string, context: handlerContext): Promise<LastEventPointer> {
//     if (lastEventPointers[eventType]) {
//         return Promise.resolve(lastEventPointers[eventType]);
//     }
//     context.Allo_BaseFeeUpdated.getWhere
//     context.Allo_TreasuryUpdated.get()
//     context[eventType].get();
// }

GeneralStrategy.Allocated.handler(async ({ event, context }) => {
    console.log('found AllocatedWithOrigin event', event);
});

GeneralStrategy.AllocatedWithOrigin.handler(async ({ event, context }) => {
    console.log('found AllocatedWithOrigin event', event);
});

GeneralStrategy.DirectAllocated.handler(async ({ event, context }) => {
    console.log('found DirectAllocated event', event);
});
