
function directTurretDefenceCommand(numOfTurrets, numOfDetectedZombies){
    for(let numofZombiesBlastedSoFar = 1; numofZombiesBlastedSoFar <= numOfDetectedZombies; numofZombiesBlastedSoFar++ ){
        console.log("Directing " + numOfTurrets + " turrets' fire to zombie #" + numofZombiesBlastedSoFar + ".")
    }
}

directTurretDefenceCommand(5, 8)
