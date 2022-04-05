function saturdayFun(activty = "roller-skate"){
     return `This Saturday, I want to ${activty}!`
}
function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}
function wrapAdjective(highlight = "*"){
    const innerFunction = function(adjective = "special"){    
     return `You are ${highlight}${adjective}${highlight}!`
    }
    return innerFunction
}