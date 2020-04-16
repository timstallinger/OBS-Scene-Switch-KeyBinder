# Check out the original Scene Switcher by Stuyk: https://github.com/Stuyk/Streamlabs-OBS-Scene-Switcher
### I have modified the Scene Switcher so it is controlled by the NumPad. You can bind the NumPad keys 1-9 to different scenes.


# Streamlabs OBS Scene Switcher

Its not a plugin; but the scene switcher will detect which program you click on then switch to the designated scene.

[Check me out on Twitch](https://twitch.tv/kingslimtim/)

[Check out Stuyk on Twitch](https://twitch.tv/stuyksoft/)

### Requirements

-   [NodeJS v12+](https://nodejs.org/en/download/)
-   [Python 2.7](https://www.python.org/downloads/release/python-2716/)
-   [node-gyp]()

#### Installation:

Download the files in this repo.

In a Powershell or CMD
`npm install`

Run the app by running the `run.bat` or run `node index.js` in a console window.

Keep the console window open while streaming.

Open up Streamlabs OBS; go to your settings and navigate to remote control.
Click on 'show' to display the QR Code. After; you can stream normally.

Scene switching should work normally.

### Configuration
```
windowIncludes = WindowTitle
sceneSelect = FULL name of the scene in StreamLabs

Make sure that every KeyBind has a valid Scene. Just change the SceneSelect to the name of the Scene you wish to bind to.
[
        {
            "NumPad": 1,
            "sceneSelect": "Live Scene"
        },
        {
            "NumPad": 2,
            "sceneSelect": "Game"
        },
]
```
