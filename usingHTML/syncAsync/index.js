// synchronous = Executes line by line consecutively in a sequential manner
//               codde that waits for an operation to complete.
// 
// asynchronous = Allows multiple operations to be performed concurrently without waiting
//                Doen;t block the execution flow and allows the program to continue
//                (I/O operations, network requests, fetching data)
//                Handled with: Callbacks, Promises, Async/Await

function func1(callback) {
    setTimeout(() => {
        console.log("Task 1"); 
        func2();
    }, 3000)

}

function func2(){
    console.log("Task 2");
    console.log("Task 3");
}

func1(func2)