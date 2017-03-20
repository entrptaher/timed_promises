let runfunc = (actions) => {
    let current = actions.shift()
    setTimeout(() => {
        current[0]()
            .then((result) => {
                console.log(result)
                if (actions.length) runfunc(actions)
            })
    }, current[1])
}

module.exports = runfunc
