function memoize(fn) {
    const cache = {}
    return function(...args) {
        const key = JSON.stringify(args)
        if(key in cache){
            return cache[key]
        }
        cache[key] = fn(...args)
        return cache[key]
    }
}
/*
function memoize(fn) {
    let cache = new Map()
    return function(...args) {
        const k = JSON.stringify(args)
        if(cache.has(k)) {
            return cache.get(k)
        }
        const r = fn(...args);
        cache.set(k,r)
        return r
    }
}
*/