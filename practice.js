// Two sum by using two pointer
function twosum(arr,target)
{
    arr.sort((a,b)=>a-b)
    let l = 0 , r = arr.length-1
    while(l<r)
    {
        let sum = arr[l] + arr[r]


        if(sum===target)
        {
            return true
        }

        else if (sum>target)
        {
            r--
        }
        else {
            l++
            
        }

        


    }
    return false


}
let nums = [100, 2, 30, 4];
console.log(twosum(nums,6))