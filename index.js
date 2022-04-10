function receivesAFunction(fn) {
    fn();
}

function returnsANamedFunction() {
    return function namedFunction() {
        return "foo";
    }
}

function returnsAnAnonymousFunction() {
    return () => "foo";
}