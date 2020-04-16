console.log('twitch.tv/kingslimtim');


const ioHook = require('iohook');
const fs = require('fs');
const SockJS = require('sockjs-client');
const binds = JSON.parse(fs.readFileSync(`${__dirname}/config.json`));
const sock = new SockJS('http://127.0.0.1:59650/api');
const pendingTransactions = [];

var currWindow;

sock.onopen = () => {
    console.log('===> Connected Successfully to Streamlabs');
};

sock.onmessage = e => {
    // Remove pending transaction.
    if (pendingTransactions.length <= 0) return;
    var transactionType = pendingTransactions.shift();

    // Parse JSON Data
    var response = JSON.parse(e.data);

    if (transactionType.type === 'sceneRequest') {
        if (response.result[0].name === undefined) {
            console.log('Was unable to parse a result.');
            return;
        }

        var foundScene = response.result.find(x => x.name === transactionType.sceneName);

        if (foundScene === undefined) return;

        console.log(`Transition to Scene: ${transactionType.sceneName}`);
        sock.send(
            JSON.stringify({
                jsonrpc: '2.0',
                id: 1,
                method: 'makeSceneActive',
                params: {
                    resource: 'ScenesService',
                    args: [foundScene.id]
                }
            })
        );
        return;
    }
};

function sendSceneRequest(nameOfScene) {
    pendingTransactions.push({ type: 'sceneRequest', sceneName: nameOfScene });
    sock.send(
        JSON.stringify({
            jsonrpc: '2.0',
            id: 1,
            method: 'getScenes',
            params: {
                resource: 'ScenesService'
            }
        })
    );
}

ioHook.on("keypress", event => {
	switch(event.keychar){
		case 49:
			var windowFound = binds.data.find(x => {
				if (x.NumPad == 1) return x;
			});
			if (windowFound !== undefined) {
				sendSceneRequest(windowFound.sceneSelect);
			}
		break;
		case 50:
			var windowFound = binds.data.find(x => {
				if (x.NumPad == 2) return x;
			});
			if (windowFound !== undefined) {
				sendSceneRequest(windowFound.sceneSelect);
			}
		break;
		case 51:
			var windowFound = binds.data.find(x => {
				if (x.NumPad == 3) return x;
			});
			if (windowFound !== undefined) {
				sendSceneRequest(windowFound.sceneSelect);
			}
		break;
		case 52:
			var windowFound = binds.data.find(x => {
				if (x.NumPad == 4) return x;
			});
			if (windowFound !== undefined) {
				sendSceneRequest(windowFound.sceneSelect);
			}
		break;
		case 53:
			var windowFound = binds.data.find(x => {
				if (x.NumPad == 5) return x;
			});
			if (windowFound !== undefined) {
				sendSceneRequest(windowFound.sceneSelect);
			}
		break;
		case 54:
			var windowFound = binds.data.find(x => {
				if (x.NumPad == 6) return x;
			});
			if (windowFound !== undefined) {
				sendSceneRequest(windowFound.sceneSelect);
			}
		break;
		case 55:
			var windowFound = binds.data.find(x => {
				if (x.NumPad == 7) return x;
			});
			if (windowFound !== undefined) {
				sendSceneRequest(windowFound.sceneSelect);
			}
		break;
		case 56:
			var windowFound = binds.data.find(x => {
				if (x.NumPad == 8) return x;
			});
			if (windowFound !== undefined) {
				sendSceneRequest(windowFound.sceneSelect);
			}
		break;
		case 57:
			var windowFound = binds.data.find(x => {
				if (x.NumPad == 9) return x;
			});
			if (windowFound !== undefined) {
				sendSceneRequest(windowFound.sceneSelect);
			}
		break;
	}
});
ioHook.start();