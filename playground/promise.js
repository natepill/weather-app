var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof a === 'number' && typeof b === 'number'){
                resolve(a +  b);
                // console.log('Console log:' ,a + b)
            }else{
                reject('Arguments must be numbers!')
            }
        }, 1500);
    });
};

asyncAdd(5, 7).then((res) => {
    console.log('Result is', res);
    return asyncAdd(res, 33)
}).then((res) => {
    console.log('Should be 45', res);
}).catch((errorMessage) => {
    console.log(errorMessage);
});





// var somePromise = new Promise((resolve, reject) => {
//
//     setTimeout(() => {
//         // resolve('Hey, it worked!');
//         reject('Unable to fufill Promise');
//     }, 2500);
//
// });
//
// somePromise.then((message) => {
//     console.log('Success: ', message)
// }, (errorMessage) => {
//     console.log('Error: ', errorMessage)
// })

/*
Two states of promise: resolved and rejected. Resolved means that a task was completed, like
and http request to a server. Rejected means the task couldnt be completed for whatever reason.

You can only pass one argument to resolve and reject
If you want provide multiple pieces of information, you should return an object with multiple
attributes

To do something when a promise is resolved/rejected, we need need to call a promise method
called "then"
".then" allows us to provide callbacks for both success cases and error cases.

So a difference between callbacks and promises can be when we use a callback
we fire a function no matter what and the arguments let us know if things went well. However,
in Promises, we have two functions that let us know if things went as planned.

You can only resolve or reject a Promise once. So you can resolve and reject a promise. This is an
advantage over callbacks because callbacks can be called multiple times unessecarily.

Before a Promise's resolve or reject function is called, a Promise is in a state known as pending.
This means we are waiting for data to come back or we are waiting for Async computations to
finish. A Promise is considered "settled" when it has been resolved or rejected.

Some things don't support Promises in node. For example, the request library doesn't support
Promises naitively. But we can wrap our request call inside of a Promise as we did in the
asyncAdd function.

The ".catch" block allows us to centralize all error handling from our Promise instead of
having a mess of multiple callbacks which pass in an error message.

*/
