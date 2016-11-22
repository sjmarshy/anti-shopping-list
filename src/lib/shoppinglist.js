/* eslint import/prefer-default-export: 0 */
export function shoppinglistContainsItem(xs, link) {
    return xs.filter(x => x.link === link).length > 0;
}
