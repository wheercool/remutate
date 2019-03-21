export function mutate<T>(origin: T, mutation: Partial<T>): T {
    return Object.assign({}, origin, mutation);
}
