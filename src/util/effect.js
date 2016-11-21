export function effect(fn, args) {
  return {
    fn,
    args,
    type: 'EFFECT',
  };
}

export function call(eff) {
  return new Promise((resolve, reject) => {
    try {
      return resolve(eff.fn.apply(null, eff.args));
    } catch (e) {
      return reject(e);
    }
  });
}
