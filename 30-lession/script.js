let arr = [
    ['Bangladesh', 'Dhaka', 'Noakhali'],
    ['India', 'Kolkata', 'Tamil'],
    ['Pakitan', 'Karachi', 'Islamabad']
]

document.write(arr)
document.write('<br>')
document.write('<br>')

for(let i = 0; i < arr.length; i++){
    document.write(arr[i] + '<br>')
}

document.write('<br>')
document.write('<br>')

let playersInfo = [
    ['Sakib', 55],
    ['Tamim', 105],
    ['Musfiq', 65],
    ['Samya', 70]
]

function highestRunScorer(playersInfo){
    highestScorer = playersInfo[0][0]
    highestScore = playersInfo[0][1]

    for(let x = 1; x < playersInfo.length; x++){
        if(highestScore < playersInfo[x][1]){
            highestScore = playersInfo[x][1]
            highestScorer = playersInfo[x][0]
        }
    }
    return highestScore;
}

document.write(highestRunScorer(playersInfo))