const net = require('net');

function sendCommand(cmd) {
    const client = net.connect('\\\\.\\pipe\\GamePipe');
    client.on('connect', () => {
        client.write(cmd, () => client.end());
    });
    client.on('error', () => alert("Cannot connect. Make sure the game is open and that you have the mod in your mods folder"));
}

// ---------------- Money ----------------
document.getElementById('moneyAdd').onclick = () => sendCommand(`MONEY_ADD:${document.getElementById('moneyAmount').value}`);
document.getElementById('moneySet').onclick = () => sendCommand(`MONEY_SET:${document.getElementById('moneyAmount').value}`);

// ---------------- Research ----------------
document.getElementById('researchAdd').onclick = () => sendCommand(`RESEARCH_ADD:${document.getElementById('researchAmount').value}`);
document.getElementById('researchSet').onclick = () => sendCommand(`RESEARCH_SET:${document.getElementById('researchAmount').value}`);

// ---------------- Stars ----------------
document.getElementById('starsAdd').onclick = () => sendCommand(`STARS_ADD:${document.getElementById('starsAmount').value}`);
document.getElementById('starsSet').onclick = () => sendCommand(`STARS_SET:${document.getElementById('starsAmount').value}`);

// ---------------- Day ----------------
document.getElementById('dayAdd').onclick = () => sendCommand(`DAY_ADD:${document.getElementById('dayAmount').value}`);
document.getElementById('daySet').onclick = () => sendCommand(`DAY_SET:${document.getElementById('dayAmount').value}`);

// ---------------- Music ----------------
document.getElementById('musicSet').onclick = () => {
    const musicName = document.getElementById('musicSelect').value;
    sendCommand(`MUSIC_SET:${musicName}`);
};
