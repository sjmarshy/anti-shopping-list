export default function compose(a, b) {
    return c => a(b(c));
}
