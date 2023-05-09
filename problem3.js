
function gatherSupplies(suppliesToLookFor){
    for(let indexNumOfCurrentSupply = 0; indexNumOfCurrentSupply < suppliesToLookFor.length; indexNumOfCurrentSupply++){
        console.log("Jarvis has found some " + suppliesToLookFor[indexNumOfCurrentSupply])
    }
    return suppliesToLookFor.length
}

console.log(gatherSupplies(["canned food", "aspirin", "bandages"]))