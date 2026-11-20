console.log("This is the starting point of my code");

setTimeout(()=>{
console.log("This is first timeout function");
},2000);
setTimeout(()=>{
console.log("This is second timeout function");
},5000);
setTimeout(()=>{
console.log("This is third timeout function");
},0);
process.nextTick(()=>{
    console.log("This is process.next tick code");
});
new Promise((resolve,reject)=>{
    let success=true;
    if (success) resolve("data load successfully");
    else reject("something went wrong");
    
})
.then(()=>{
    console.log(result);
})
.catch((error)=>{
    console.log(error);
});
new Promise((resolve,reject)=>{
    let success=true;
    if(success)resolve("this is a new promise");
    else reject("ccode failed")
    .then(()=>{
        console.log(result)
    })
    .catch((error)=>{
        console.log(error)
    })
    setTimeout(()=>{
console.log("This is promise timeout function");
},10000);
})
console.log("This is end point of my code");
//dom event mimicking