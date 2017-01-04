export default function captureRefFactory(context) {
    return n => {
        return r => {
            context[n] = r;
        };
    };
}

