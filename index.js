function receivesAFunction(callback){
    callback()
}
function returnsANamedFunction(){
    return returnsANamedFunction
}
function   returnsAnAnonymousFunction(){
    return ()=>{console.log("I am Here")}
}