const {app, BrowserWindow} = require('electron');
const fs = require('fs');

function createWindow () {
    let pat = app.getPath('userData');
    if (!fs.existsSync(`${pat}/RRRconfig.json`)) {
        fs.writeFileSync(`${pat}/RRRconfig.json`, JSON.stringify({
            texts: [
                "Windows is a toy",
                "Ruby sucks",
                "C# is for kids",
                "Thunder pls",
                "DESIGNED FOR WINDOWS XP",
                "FREE DOWNLOAD 2018",
                "downloadmoreram.com",
                "FACEBOOK HACK WORKING!!!",
                "I do graphic design",
                "Rainbow comic sans",
                "BEST FONT EVER",
                "VB.NET BEST LANGUAGE",
                "HoW tO pRoGRaM iN hTMl"
            ],
            activate: true,
            rgb: true,
            music: [
                true,
                0
            ],
            version: 1,
            rate: 60
        }));
    }
    let win = new BrowserWindow({fullscreen:true, frame:false});
    win.loadFile('index_electron.html');
}
app.commandLine.appendSwitch('autoplay-policy', 'no-user-gesture-required');
app.on('ready', createWindow);