// code your solution here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}
const mondayWork = function (activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}
function wrapAdjective(thaplug="*"){
    return function innerfunction(bigx = "special") {
        return `You are ${thaplug}${bigx}${thaplug}!`;
    };
}