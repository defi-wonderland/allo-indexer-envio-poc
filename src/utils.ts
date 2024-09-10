import { Block_t, Transaction_t } from "generated";

interface BaseEventLog {
    readonly chainId: number; 
    readonly srcAddress: string; 
    readonly logIndex: number; 
    readonly transaction: Transaction_t; 
    readonly block: Block_t;
}

export const generateEventId = (event:BaseEventLog) => {
    return event.chainId + '-' + event.block.number + '-' + event.logIndex;
}