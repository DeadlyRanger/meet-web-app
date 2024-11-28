import React from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const Room = () => {
    const { roomId } = useParams();  

    const myMeeting = async (element) =>{
        const appID = 1791942198;
        const serverSecret = "c488500255479b3a279d78414965b562";
        const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId,Date.now().toString(),"Random-User" );

 const zp = ZegoUIKitPrebuilt.create(kitToken);

 zp.joinRoom({
    container: element,
    scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference,
    },
});
};
    
  return (
    <div className='room'>
       
    <div ref={myMeeting} />


    </div>
  )

}
export default Room
