// import React, {useState} from 'react';
// import {
//   Container,
//   Header,
//   Title,
//   Button,
//   Left,
//   Form,
//   Item,
//   Input,
//   Label,
//   Body,
//   Text,
//   View,
//   Grid,
//   Col,
//   Icon,
// } from 'native-base';
// import Icons from 'react-native-vector-icons/Ionicons';
// import Iconunmute from 'react-native-vector-icons/Octicons';
// import Iconcallend from 'react-native-vector-icons/MaterialIcons';
// import Iconvideocall from 'react-native-vector-icons/MaterialIcons';

// export default function Call() {
//   const [state, setstate] = useState(false);
//   return (
//     <Container>
//       <Header noLeft>
//         <Left>
//           <Button transparent>
//             <Icon name="arrow-back" />
//           </Button>
//         </Left>
//         <Body>
//           <Title>Radisys</Title>
//         </Body>
//       </Header>
//       <Button
//         disabled
//         rounded
//         style={{
//           alignSelf: 'center',
//           justifyContent: 'center',
//           alignItems: 'center',
//           marginTop: 10,
//           display: 'flex',
//           height: 35,
//         }}>
//         <Text style={{textTransform: 'lowercase'}}>
//           <Text style={{color: '#72B41A'}}>{'\u2B24'}</Text> alice
//           sip:alice_ywmflw@tryit.jssip.net{' '}
//         </Text>
//       </Button>

//       <Grid>
//         <Col
//           style={{
//             backgroundColor: '#C5C5C5',
//             height: 250,
//             marginTop: 80,
//             margin: 8,
//           }}></Col>
//       </Grid>
//       <View
//         style={{
//           display: 'flex',
//           flexDirection: 'row',
//           justifyContent: 'center',
//           alignItems: 'center',
//           position: 'absolute',
//           bottom: 130,
//           left: 0,
//           width: '100%',
//         }}>
//         {state ? (
//           <Icon
//             onPress={() => setstate(!state)}
//             name="volume-mute"
//             size={50}
//             color="#5275E2"
//           />
//         ) : (
//           <Iconunmute
//             onPress={() => setstate(!state)}
//             name="unmute"
//             size={50}
//             color="#5275E2"
//           />
//         )}
//         <Iconcallend
//           name="call-end"
//           size={60}
//           color="#B02E38"
//           style={{marginLeft: 14, marginRight: 14}}
//         />
//         <Iconvideocall name="video-call" size={50} color="#5275E2" />
//       </View>
//       <View
//         style={{
//           display: 'flex',
//           position: 'absolute',
//           bottom: 70,
//           left: 0,
//           width: '100%',
//         }}>
//         <Form>
//           <Item floatingLabel>
//             <Label>SIP URI or username</Label>
//             <Input />
//           </Item>
//         </Form>
//       </View>
//       <Button
//         style={{
//           justifyContent: 'center',
//           alignItems: 'center',
//           width: '100%',
//           position: 'absolute',
//           bottom: 0,
//           left: 0,
//         }}>
//         <Text>Call</Text>
//       </Button>
//     </Container>
//   );
// }

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
console.log('initial ');
let socket = new JsSIP.WebSocketInterface('wss://tryit.jssip.net:10443');

var configuration = {
  sockets: [socket],
  uri: 'sip:prathik_ywmflw@tryit.jssip.net',
  password: 'password',
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
console.log('started ');
ua.on('connected', function (e) {
  console.log('connected....');
});

ua.on('disconnected', function (e) {
  console.log('disconnected....');
});
