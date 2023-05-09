
function raiderAvoidancePlan(targetsFoundWhileForaging){
    for(let currentTargetIndexNum = 0; currentTargetIndexNum < targetsFoundWhileForaging.length; currentTargetIndexNum++){
       let currentTarget = targetsFoundWhileForaging[currentTargetIndexNum]
       
       if (currentTarget === "zombie" || currentTarget === "raider"){
        console.log(`JARVIS has found a ${currentTarget} ENGAGING AVOIDANCE PLAN!!`)
       } else {
        console.log("JARVIS has found a " + currentTarget + ".")
       }
    }
    return targetsFoundWhileForaging.length
}

console.log(raiderAvoidancePlan(["insulin", "oatmeal", "raider", "zombie", "canned peaches"]))