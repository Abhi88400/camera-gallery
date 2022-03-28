setTimeout(() => {
    if (db) {
        let dbTransaction = db.transaction('video', 'readonly');
        let dbAccess = dbTransaction.objectStore('video');
        let videos = dbAccess.getAll(); // eventDriven
        console.log("Retrive Videos  " + videos);
        videos.onsuccess = (e) => {
            let videoResult = videos.result;
            let galleryCont = document.querySelector(".gallery-cont");
            videoResult.forEach((videoObj) => {
                let mediaElem = document.createElement("div");
                mediaElem.setAttribute("class", "media-cont");
                mediaElem.setAttribute("id", videoObj.id);

                let url = URL.createObjectURL(videoObj.blob);

                mediaElem.innerHTML = `
                <div class="media">
                    <video autoplay loop src="${url}"></video>
                </div>
                <div class="delete action-btn">DELETE</div>
                <div class="download action-btn">DOWNLOAD</div>
                `;

                galleryCont.appendChild(mediaElem);
                let deleteBtn = mediaElem.querySelector(".delete");
                deleteBtn.addEventListener("click", deleteListener);
                let downloadBtn = mediaElem.querySelector(".download");
                downloadBtn.addEventListener("click", downloadListener);
            })
        }

        // IMAGE RETRIEVEL

        let ImagedbTransaction = db.transaction('image', 'readonly');
        let ImagedbAccess = ImagedbTransaction.objectStore('image');
        let image = ImagedbAccess.getAll(); // eventDriven
        console.log("Retrive Videos  " + image);
        image.onsuccess = (e) => {
            let imageResult = image.result;
            let galleryCont = document.querySelector(".gallery-cont");
            imageResult.forEach((imageObj) => {
                let mediaElem = document.createElement("div");
                mediaElem.setAttribute("class", "media-cont");
                mediaElem.setAttribute("id", imageObj.id);

                let url = imageObj.url;

                mediaElem.innerHTML = `
                <div class="media">
                    <img src="${url}"/>
                </div>
                <div class="delete action-btn">DELETE</div>
                <div class="download action-btn">DOWNLOAD</div>
                `;

                galleryCont.appendChild(mediaElem);
                let deleteBtn = mediaElem.querySelector(".delete");
                deleteBtn.addEventListener("click", deleteListener);
                let downloadBtn = mediaElem.querySelector(".download");
                downloadBtn.addEventListener("click", downloadListener);
            })
        }

    }
}, 100)

function deleteListener(e) {
    let ParentOfID = e.target.parentElement;
    let id = ParentOfID.getAttribute('id');
    let type = id.slice(0, 3);

    if (type == 'vid') {
        let dbTransaction = db.transaction('video', 'readwrite');
        let dbAccess = dbTransaction.objectStore('video');
        dbAccess.delete(id);
    } else if (type == 'img') {

        let ImagedbTransaction = db.transaction('image', 'readwrite');
        let ImagedbAccess = ImagedbTransaction.objectStore('image');
        ImagedbAccess.delete(id);
    }
    e.target.parentElement.remove();
}

function downloadListener(e) {
    let id = e.target.parentElement.getAttribute("id");
    let type = id.slice(0, 3);
    if (type === "vid") {
        let videoDBTransaction = db.transaction("video", "readwrite");
        let videoStore = videoDBTransaction.objectStore("video");
        let videoRequest = videoStore.get(id);
        videoRequest.onsuccess = (e) => {
            let videoResult = videoRequest.result;

            let videoURL = URL.createObjectURL(videoResult.blob);

            let a = document.createElement("a");
            a.href = videoURL;
            a.download = "stream.mp4";
            a.click();
        }
    }
    else if (type === "img") {
        let imageDBTransaction = db.transaction("image", "readwrite");
        let imageStore = imageDBTransaction.objectStore("image");
        let imageRequest = imageStore.get(id);
        imageRequest.onsuccess = (e) => {
            let imageResult = imageRequest.result;

            let a = document.createElement("a");
            a.href = imageResult.url;
            a.download = "image.jpg";
            a.click();
        }
    }
}