
let fig = [
    [1, 1, 0, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
]

function turnLeft(arr){
    let ans = []
    for(let i=3;i>=0;i--){
        let nar = []
        for(let j=0;j<4;j++){
            nar.push(arr[j][i])
        }
        ans.push(nar)
    }
    return ans
}

function turnRight(arr){
    let ans = []
    for(let i=0;i<4;i++){
        let nar = []
        for(let j=3;j>=0;j--){
            nar.push(arr[j][i])
        }
        ans.push(nar)
    }
    return ans
}

function moveCorner(arr){
    let ans = arr
    for(let i=0;i<3;i++){
        if(ans[0][0]==0 && ans[0][1]==0 && ans[0][2]==0 && ans[0][3]==0)
            ans.push(ans.shift())
        else
            break
    }
        
    for(let i=0;i<3;i++){
        if(ans[0][0]==0 && ans[1][0]==0 && ans[2][0]==0 && ans[3][0]==0){
            ans[0].push(ans[0].shift())
            ans[1].push(ans[1].shift())
            ans[2].push(ans[2].shift())
            ans[3].push(ans[3].shift())
        } else
            return ans
    }
}

let outputArr = moveCorner(turnRight(fig))
console.log('\n', outputArr[0], '\n', outputArr[1], '\n',outputArr[2], '\n',outputArr[3], '\n')