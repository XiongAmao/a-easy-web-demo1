function assert(value,description){
    description = description || ''
    value === true? (console.info('[TEST PASS]'+ description)): (console.error('[Test failed]'+ description))
}

assert(1===1,'1等于1')