export default new Proxy({}, { get: () => "" }) as Record<string, string>;
