let arr=[1,2,4,21,11,31,44,32,34];


if(!Array.prototype.myForEach){
    Array.prototype.myForEach=function(callbackfn){
        let originalArray=this;
        for(let i=0;i<originalArray.length;i++){
            callbackfn(originalArray[i],i,originalArray)
        }
    }
}
arr.myForEach((x,i)=>console.log(`Index ${i} contains the value ${x}`));
console.log(arr)