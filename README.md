# One Click Multiple Video Capture

## Folder Structure

```console
├── client
├── server
│   │   ├── hooking
        |── trigger
```

## Run Client

```console
cd client
npm install
npm start
```

## Run Server (Hooking & Trigger)

- ### Hooking

    ```console
    cd server/hooking
    npm install
    node server.js
    ```

- ### Trigger

    ```console
    cd server/trigger
    python app.py
    ```

#### *Reference*

- [Socket.io][1]

[1]: https://socket.io/docs/v4/client-installation/ "Socket.io"
