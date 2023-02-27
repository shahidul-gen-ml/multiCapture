import { useEffect } from 'react';
import io from 'socket.io-client';

function App() {
  useEffect(() => {
    const socket = io('http://localhost:5000');
    socket.on('videoCaptured', () => {
      console.log('Video captured!');
    });
    return () => {
      socket.disconnect();
    };
  }, []);

  return <div>Webhook listener</div>;
}

export default App;
