// Розпорядок дня від 7 до 9 подій . Реалізувати 3 способами: колбек,проміс,асинк евейт.

// Callback
function awake(check,cb){
    setTimeout(()=>{
        if(check){
                    cb(null,'I am wake up')
        }else{
            cb('sleep again',null)
        }       
    },3000)
};

function coffee(check,cb){
    setTimeout(()=>{
        if(check){
            cb(null,'Morning coffee')
        }else{
            cb('sleepy and angry',null )
        }
    },2500)
};

function goToWork(check,cb){
    setTimeout(()=>{
        if(check){
            cb(null,'Go by bus')
        }else{
            cb('i am late',null)
        }
    },2000)
};

function onWork(check,cb){
    setTimeout(()=>{
        if(check){
            cb(null,'i am working')
        }else {
            cb('turn off the light',null)
        }

    },1500)
};

function lunch(check,cb){
    setTimeout(()=>{
        if(check){
            cb(null,'Have a lunch')
        }else{
            cb('hungry',null)
        }
    },1000)
};
function working(check,cb){
    setTimeout(()=>{
        if(check){
            cb(null,'Working again')
        }else{
            cb('broken laptop',null)
        }
    },4000)
};
function goHome(check,cb){
    setTimeout(()=>{
        if(check){
            cb(null,'Home,sweet home')
        }else{
            cb('i am tired',null)
        }

    },4500)
};
function study(check,cb){
    setTimeout(()=>{
        if(check){
            cb(null,'New property')
        }else{
            cb('dont understand',null)
        }
    },5000)
};
function goSleep(check,cb){
    setTimeout(()=>{
        if(check){
            cb(null,'Sweet dreems')
        }else{
            cb('not good',null)
        }
    })
};


awake(true,(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data);
        coffee(true,(err,data)=>{
            if(err){
                console.log(err);
            }else{
                console.log(data);
                goToWork(true,(err,data)=>{
                    if(err){
                        console.log(err);
                    }else{
                        console.log(data);
                        onWork(true,(err,data)=>{
                        if(err){
                            console.log(err);
                        }else{
                            console.log(data);
                            lunch(true,(err,data)=>{
                                if(err){
                                    console.log(err);
                                }else{
                                    console.log(data);
                                    working(true,(err,data)=>{
                                        if(err){
                                            console.log(err);
                                        }else{
                                            console.log(data);
                                            goHome(true,(err,data)=>{
                                                if(err){
                                                    console.log(err);
                                                }else{
                                                    console.log(data);
                                                    study(true,(err,data)=>{
                                                        if(err){
                                                            console.log(err);
                                                        }else{
                                                            console.log(data);
                                                            goSleep(true,(err,data)=>{
                                                                if(err){
                                                                    console.log(err);
                                                                }else{
                                                                    console.log(data);
                                                                }
                                                            })
                                                        }
                                                    })
                                                }
                                            })
                                        }
                                    })
                                }
                            })
                        }
                    })
       
                }           
                              
            })
        }
    })
}
})

// Promise
function awake2(check){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(check){
        resolve('I am wake up')
        }else{
        reject('sleep again')
        }       
    },3000)
})
}

function coffee2(check){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(check){
            resolve('Morning coffee')
        }else{
            reject('sleepy and angry' )
        }
    },2500)
})};

function goToWork2(check){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(check){
            resolve('Go by bus')
        }else{
            reject('i am late')
        }
    },2000)
})}

function onWork2(check){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(check){
            resolve('i am working')
        }else {
            reject('turn off the light')
        }

    },1500)
})};

function lunch2(check){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(check){
            resolve('Have a lunch')
        }else{
            reject('hungry')
        }
    },1000)
})}
function working2(check){
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(check){
            resolve('Working again')
        }else{
            reject('broken laptop')
        }
    },4000)
})};

function goHome2(check){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(check){
            resolve('Home,sweet home')
        }else{
            reject('i am tired')
        }
    },4500)
})};
function study2(check){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(check){
            resolve('Study java script')
        }else{
            reject('dont understand')
        }
    },2300)
})};
function goSleep2(check){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(check){
            resolve('Sweet dreems')
        }else{
            reject('not good')
        }
    },500)
})};

awake2(true)
.then(value=>{
    console.log(value);
    return coffee2(value)
})
.then(value=>{
    console.log(value);
    return goToWork2(value)
})
.then(value=>{
    console.log(value);
    return onWork2(value)
})
.then(value=>{
    console.log(value);
    return lunch2(value)
})
.then(value=>{
    console.log(value);
    return working2(value)
}).then(value=>{
    console.log(value);
    return goHome2(value)
})
.then(value=>{
    console.log(value);
    return study2(value)
})
.then(value=>{
    console.log(value);
    return goSleep2(value)
})
.then(value=>{
    console.log(value);
})
.catch(reason=>{
    console.log(reason);
});

// Async await


function awake3(check){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(check){
        resolve('I am wake up')
        }else{
        reject('sleep again')
        }       
    },3000)
})
}
function coffee3(check){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(check){
            resolve('Morning coffee')
        }else{
            reject('sleepy and angry' )
        }
    },2500)
})};
function goToWork3(check){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(check){
            resolve('Go by bus')
        }else{
            reject('i am late')
        }
    },2000)
})}
function onWork3(check){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(check){
            resolve('i am working')
        }else {
            reject('turn off the light')
        }

    },1500)
})};
function lunch3(check){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(check){
            resolve('Have a lunch')
        }else{
            reject('hungry')
        }
    },1000)
})}
function working3(check){
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(check){
            resolve('Working again')
        }else{
            reject('broken laptop')
        }
    },4000)
})};
function goHome3(check){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(check){
            resolve('Home,sweet home')
        }else{
            reject('i am tired')
        }
    },4500)
})};
function study3(check){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(check){
            resolve('Study java script')
        }else{
            reject('dont understand')
        }
    },2300)
})};
function goSleep3(check){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(check){
            resolve('Sweet dreems')
        }else{
            reject('not good')
        }
    },500)
})};


async function myDay(){
    try{
    let dayStart=await awake3(true);
    console.log(dayStart);
    let myCoffee=await coffee3(dayStart);
    console.log(myCoffee);
    let myBus=await goToWork3(myCoffee);
    console.log(myBus);
    let myWork=await onWork3(myBus);
    console.log(myWork);
    let myLunch= await lunch3(myWork);
    console.log(myLunch);
    let workPart2=await working3(myLunch);
    console.log(workPart2);
    let goMyHome=await goHome3(workPart2);
    console.log(goMyHome);
    let myStudy=await study3(goMyHome);
    console.log(myStudy);
    let=sleep=await goSleep3(myStudy);
    console.log(sleep);

    }catch(e){
        console.log(e);
    }
}
myDay()