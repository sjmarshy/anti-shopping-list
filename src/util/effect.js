export function effect(fn, args) {
  return {
    fn,
    args,
    type: 'EFFECT',
  };
}

export function call(eff) {
  return new Promise((res, rej) => {
    let result;
    try {
      result = eff.fn.apply(null, eff.args);
    } catch (e) {
      return rej(e);
    }
    return res(result);
  });
}
