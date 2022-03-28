 let db;
const openRequest = indexedDB.open('myDataBase', 2);
openRequest.addEventListener("success", (e) => {
    console.log("suceess");
    db = openRequest.result;
})
openRequest.addEventListener("upgradeneeded", (e) => {
    db = openRequest.result;
    console.log("upgrade")
    db.createObjectStore("video", { keyPath: "id" });
    db.createObjectStore("image", { keyPath: "id" });
})

openRequest.addEventListener("error", (e) => {
    
    console.log('error');
})

