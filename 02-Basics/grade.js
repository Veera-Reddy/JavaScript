
function getMyGarde(currentMarks , totalMarks) {
    
    let myPercentage = (currentMarks/totalMarks) * 100

    let myGrde = ""
    if (myPercentage >= 90) {
        myGrde = 'A'
    } else if (myPercentage >= 80) {
        myGrde = 'B'
    } else if (myPercentage >= 70) {
        myGrde = 'C'
    } else if (myPercentage >= 60) {
        myGrde = 'D'
    } else {
        myGrde = 'F'
    }
  
return `Your Grade is ${myGrde} and percentage is ${myPercentage}` 
}

console.log(getMyGarde(45,70));
