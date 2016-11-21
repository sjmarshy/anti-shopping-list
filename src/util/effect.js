export function effect(fn, args) {
    return {
        fn,
        args,
        type: 'EFFECT'
    };
}

export function call(eff) {
    return new Promise(res => res(eff.fn.apply(null, eff.args)));
}
