type ChainId = number;

/**
 * TODO: Complete the type definition for the Providers object.
 */
type Providers = {
    pricing: unknown;
    metadata: unknown;
    repository: unknown;
    rpc: Map<ChainId, unknown>;
} 

// Providers object should be initialized only once.
let providers: Providers | undefined;

// TODO: complete this function. It should initialize the Providers object.
const initProviders = (): Providers => {
    return {} as Providers;
}

// Returns the Providers object.
export const getProviders = (): Readonly<Providers> => {
    if (!providers) {
        return initProviders();
    }
    return providers;
}