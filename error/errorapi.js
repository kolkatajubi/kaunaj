var socket = require("socket.io-client")("http://127.0.0.1:4001")

var io = socket(server)

var errorapi = {
    getError:()=>{
        return new Promise(async(resolve, reject)=>{
            io.on("connection", function(socket){
                console.log("Made socket connection", socket.id);
                socket.on("event", function(data){
                    console.log(data);
                });
            });
            return resolve("a is not defined")
        })

    // },
    // getSolutions:(error)=>{
    //     return new Promise(async(resolve,reject)=>{
    //         let req = {search: error}
    //         let resp = await requestServer('http://127.0.0.1:3125/createUser', req)
    //         if (resp.status == "success") {
    //             return resolve(resp)
    //         }
    //     })
    }
}

// function requestServer(url,data){
//     return new Promise((resolve,reject)=>{
//         $.ajax({
//             url: url,
//             type: 'post',
//             dataType: 'json',
//             contentType: 'application/json',
//             data: JSON.stringify(data),
//             success:(resp)=>{
//                 // console.log("SUCCESS")
//                 // console.log(resp)
//                 return resolve({status:"success",data:resp})
//             },
//             error:(err)=>{
//                 // console.log("Error")
//                 // console.log(err)
//                 return resolve({status:"error",data:err})
//             }
//         });
//     })
// }