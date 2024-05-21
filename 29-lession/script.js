let scores = [15, 90, 85, 70, 65, 55]

function highestScore(scores)
{
    let max = scores[0];
    for(let x = 1; x < scores.length; x++)
        {
            if(max < scores[x])
                {
                    max = scores[x]
                }
        }
    return max;
}

document.write(highestScore(scores))

document.write('<br>')
document.write('<br>')

let runs = [25, 40, 110, 5, 0, 90, 10, 5, 0]

function highestRun(){
    let maxRun = runs[0]
    for(let i = 1; i < runs.length; i++)
        {
            if(maxRun < runs[i])
                {
                    maxRun = runs[i]
                }
        }
    return maxRun;

}

document.write(highestRun(runs))