
let videoCapture = document.querySelector("video");
let record_btn = document.querySelector(".record-btn");
let capture_btn = document.querySelector(".capture-btn");
let record = document.querySelector(".record");
let capture = document.querySelector(".capture");

let flag = false;
let chunks = [];
let recordMedia;
let camera = {
  video: true,
  audio: false
}


window.navigator.mediaDevices.getUserMedia(camera)
  .then((stream) => {
    // console.log(stream);
    videoCapture.srcObject = stream;
    recordMedia = new MediaRecorder(stream)
    recordMedia.addEventListener('dataavailable', (e) => {
      chunks.push(e.data)
      // e -> blobEvent => it contains many events
    })
    recordMedia.addEventListener('stop', (e) => 
    {
      let blob = new Blob(chunks, { type: "video/mp4" });
      let createURL = window.URL.createObjectURL(blob);
      if (db) {
        
        let IdVideo = shortid();
        let dbTransaction = db.transaction("video", "readwrite")
        let dbAccess = dbTransaction.objectStore("video");
        let video = {
          id: `vid-${IdVideo}`,
          blob: blob
        }
        dbAccess.add(video);
      }

    })

  })

record.addEventListener("click", () => {
  flag = !flag
  if (flag) {
    recordMedia.start();
  } else {
    recordMedia.stop();
  }
})

capture.addEventListener('click', (e) => {
  let canvas = document.querySelector('canvas');
  let video = document.querySelector('video');
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  canvas.getContext('2d').drawImage(video, 0, 0, video.videoWidth, video.videoHeight);

  let imageUrl = canvas.toDataURL();
  if (db) {
    let IdImage = shortid();
    let dbTransaction = db.transaction("image", "readwrite")
    let dbAccess = dbTransaction.objectStore("image");
    let image = {
      id: `img-${IdImage}`,
      url: imageUrl
    }
    dbAccess.add(image);

  }
})


  // mediaRecorder {stream: MediaStream, mimeType: '', state: 'inactive', onstart: null, onstop: null, …}
  // audioBitrateMode: "variable"
  // audioBitsPerSecond: 0
  // mimeType: ""
  // ondataavailable: null
  // onerror: null
  // onpause: null
  // onresume: null
  // onstart: null
  // onstop: null
  // state: "inactive"
  // stream: MediaStream {id: 'K3wagcwU2UCvXQK6LC3M3tPvmiGhxcI3XrEu', active: true, onaddtrack: null, onremovetrack: null, onactive: null, …}
  // videoBitsPerSecond: 0
  // [[Prototype]]: MediaRecorder


  // MEDIA STREAM

// mediaStream {id: 'q7PiLmQHxaO6IhE2oh9WfAE9UzYebN9DxcdK', active: true, onaddtrack: null, onremovetrack: null, onactive: null, …}
// active: true
// id: "q7PiLmQHxaO6IhE2oh9WfAE9UzYebN9DxcdK"
// onactive: null
// onaddtrack: null
// oninactive: null
// onremovetrack: null
// [[Prototype]]: MediaStream
// active: (...)
// addTrack: ƒ addTrack()
// clone: ƒ clone()
// getAudioTracks: ƒ getAudioTracks()
// getTrackById: ƒ getTrackById()
// getTracks: ƒ getTracks()
// getVideoTracks: ƒ getVideoTracks()
// id: (...)
// onactive: (...)
// onaddtrack: (...)
// oninactive: (...)
// onremovetrack: (...)
// removeTrack: ƒ removeTrack()
// constructor: ƒ MediaStream()
// Symbol(Symbol.toStringTag): "MediaStream"
// get active: ƒ active()
// get id: ƒ id()
// get onactive: ƒ onactive()
// set onactive: ƒ onactive()
// get onaddtrack: ƒ onaddtrack()
// set onaddtrack: ƒ onaddtrack()
// get oninactive: ƒ oninactive()
// set oninactive: ƒ oninactive()
// get onremovetrack: ƒ onremovetrack()
// set onremovetrack: ƒ onremovetrack()

// [[Prototype]]: EventTarget

// addEventListener: ƒ addEventListener()
// dispatchEvent: ƒ dispatchEvent()
// removeEventListener: ƒ removeEventListener()
// constructor: ƒ EventTarget()
// Symbol(Symbol.toStringTag): "EventTarget"
// [[Prototype]]: Object
// constructor: ƒ Object()
// hasOwnProperty: ƒ hasOwnProperty()
// isPrototypeOf: ƒ isPrototypeOf()
// propertyIsEnumerable: ƒ propertyIsEnumerable()
// toLocaleString: ƒ toLocaleString()
// toString: ƒ toString()
// valueOf: ƒ valueOf()
// __defineGetter__: ƒ __defineGetter__()
// __defineSetter__: ƒ __defineSetter__()
// __lookupGetter__: ƒ __lookupGetter__()
// __lookupSetter__: ƒ __lookupSetter__()
// __proto__: (...)
// get __proto__: ƒ __proto__()
// set __proto__: ƒ __proto__()