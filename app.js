let functions = {
    "bar": () => {
        return new Promise((resolve, reject) => {
            resolve('foo')
        })
    },
    "foo": () => {
        return new Promise((resolve, reject) => {
            resolve('bar')
        })
    }
}

let actions = [
    [functions.bar, 0],
    [functions.foo, 5000]
]

require("./timed_actions")(actions)
