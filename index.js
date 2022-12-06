const { returns } = require("chai-spies");
  function receivesAFunction (callback)
 {
     callback();
 }
 //names function
 function divide(a ,b){
    return ( a/b)
 }
 function returnsANamedFunction(){
    return (divide)}
     function returnsAnAnonymousFunction(){
        return function(){
            console.log("Anonymous!")
        }
    }