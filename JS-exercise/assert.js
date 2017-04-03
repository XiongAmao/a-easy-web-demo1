// assert 方法1
// function assert(value,description){
//     description = description || ''
//     value ? (console.info('[TEST PASS]'+ description)): (console.error('[Test failed]'+ description))
// }
// assert(1===1,'1等于1')

// assert 方法2
function assert(value, description){
    description = description || ''
    if(value){
        var div = document.createElement('div')
        div.innerText = '[TEST PASS]' + description
        div.className = 'success'
        document.body.appendChild(div)
        console.info('TEST PASS' + description)
    }else{
        var div = document.createElement('div')
        div.innerText = '[TEST FAILED]' + description
        div.className = 'error'
        document.body.appendChild(div)
        console.error('TEST FAILED' + description)
    }
}
