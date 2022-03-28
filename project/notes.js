 // Note 
  // 1) navigator is global object of browser and  
  // 2)it contain the information of browser
  // 3) it is provided by window 

  // MEDIA DEVICES

//   The MediaDevices interface provides access to connected media input devices 
//   like cameras and microphones, as well as screen sharing. In essence, 
//   it lets you obtain access to any hardware source of media data.

// GET-USER - MEDIA

// getUserMedia()

// With the user's permission through a prompt, turns on a camera and/or a microphone
//  on the system and provides a MediaStream containing a video track and/or an audio track with the input.

// enumerateDevices()
// Obtains an array of information about the media input and output devices available on the system.

// getSupportedConstraints()
// Returns an object conforming to MediaTrackSupportedConstraints indicating which constrainable properties are supported on the MediaStreamTrack interface. See Capabilities and constraints in Media Capture and Streams API (Media Stream) to learn more about constraints and how to use them.

// getDisplayMedia()
// Prompts the user to select a display or portion of a display (such as a window) to capture as 
// a MediaStream for sharing or recording purposes. Returns a promise that resolves to a MediaStream.


// selectAudioOutput()
// Prompts the user to select a specific audio output device.

// MEDIA- RECORDER API

// The MediaRecorder interface of the MediaStream Recording
//  API provides functionality to easily record media. 
//  It is created using the MediaRecorder() constructor.


// NOTE 2
// stream data come into the form of chunks (broken parts)
// so we have to be collected DATA
// 

// CANVAS
// VIDEO IS A COLLECTION OF FRAME...AND WHEN WE
// CAPTURE A IMAGE THEN A LAST FRAME AT THAT MOMENT CALED IMAGE
// 
