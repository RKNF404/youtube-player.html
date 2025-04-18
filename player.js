var playerWidth = 0;
var playerHeight = 0;

function youtube_video_parser(url){
    var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = url.match(regExp);
    if (match && match[2].length == 11) {
        return match[2];
    }
    return false;
}

function youtube_playlist_parser(url) {
    var regExp = /^.*(v\/|u\/\w\/|\?list=|\&list=)([^#\&\?]*).*/;
    var match = url.match(regExp);
    if (match && match[2].length == 34) {
        return match[2];
    }
    return false;
}

function hidePlayer() {
    const playerFrame = document.getElementById('playerFrame');
    if (!playerFrame) {
        console.log("ERROR in hidePlayer(): no playerFrame id found");
        return;
    }
    playerFrame.width = 0;
    playerFrame.height = 0;
}

function showPlayer() {
    const playerFrame = document.getElementById('playerFrame');
    if (!playerFrame) {
        console.log("ERROR in showPlayer(): no playerFrame id found");
        return;
    }
    playerFrame.width = playerWidth;
    playerFrame.height = playerHeight;
}

function loadPlayer() {
    unloadPlayer();
    var url = "https://www.youtube.com/embed";
    var params = "&iv_load_policy=3&autoplay=0&rel=0"
    var playerid = youtube_video_parser(document.getElementById("playerid").value);
    if (!playerid) {
        url += "?list=";
        playerid = youtube_playlist_parser(document.getElementById("playerid").value);
        if (!playerid) {
            console.log("ERROR in loadPlayer(): could not locate video/playlist id in url");
            return;
        }
    } else {
        var playlistid = youtube_playlist_parser(document.getElementById("playerid").value.replace(playerid, ""));
        if (playlistid) {
            params += "&list=" + playlistid;
        }
        url += "/";
        playerid += "?";
    }
    url += playerid + params;

    const frame = document.createElement("iframe");
    frame.id = "playerFrame";
    frame.credentialless = true;
    frame.allowFullscreen = true;
    frame.sandbox = "allow-same-origin allow-scripts allow-presentation allow-popups";
    frame.csp = "require-trusted-types-for 'script'; trusted-types 'none'; upgrade-insecure-requests;";
    frame.src = url;
    frame.width = 0;
    frame.height = 0;
    document.body.appendChild(frame);

    const playerFrame = document.getElementById('playerFrame');
    playerFrame.removeAttribute("width");
    playerFrame.removeAttribute("height");
    playerWidth = playerFrame.contentWindow.document.body.scrollWidth * 4;
    playerHeight = playerFrame.contentWindow.document.body.scrollHeight * 4;
    showPlayer();
}

function unloadPlayer() {
    const playerFrame = document.getElementById('playerFrame');
    if (playerFrame) {
        playerFrame.remove();
    }
}
