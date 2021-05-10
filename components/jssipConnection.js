import {
  mediaDevices,
  MediaStream,
  MediaStreamTrack,
  RTCIceCandidate,
  RTCPeerConnection,
  RTCSessionDescription,
} from 'react-native-webrtc';

window.RTCPeerConnection = window.RTCPeerConnection || RTCPeerConnection;
window.RTCIceCandidate = window.RTCIceCandidate || RTCIceCandidate;
window.RTCSessionDescription =
  window.RTCSessionDescription || RTCSessionDescription;
window.MediaStream = window.MediaStream || MediaStream;
window.MediaStreamTrack = window.MediaStreamTrack || MediaStreamTrack;
window.navigator.mediaDevices = window.navigator.mediaDevices || mediaDevices;
window.navigator.getUserMedia =
  window.navigator.getUserMedia || mediaDevices.getUserMedia;

var JsSIP = require('jssip');

let socket = new JsSIP.WebSocketInterface('wss://tryit.jssip.net:10443');

var configuration = {
  sockets: [socket],
  uri: 'sip:prathik_ywmflw@tryit.jssip.net',
  password: null,
  pcConfig: {
    rtcpMuxPolicy: 'negotiate',
    iceServers: [
      {
        urls: ['stun:stun.l.google.com:19302'],
      },
    ],
  },
};

var ua = new JsSIP.UA(configuration);
ua.start();
ua.on('connected', function (e) {
  console.log('connected');
});

ua.on('disconnected', function (e) {
  console.log('disconnected');
});
