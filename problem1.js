function buildFenceCommand(numOfFencePostsNeeded, fencePostMaterial){
    for(let numOfPostsBuiltSoFar = 1; numOfPostsBuiltSoFar < numOfFencePostsNeeded; numOfPostsBuiltSoFar++ ) {
        console.log("JARVIS is now building " + fencePostMaterial + " fence post number " + numOfPostsBuiltSoFar + ".")
    }
}

buildFenceCommand(10, "wood")