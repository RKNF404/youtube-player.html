# youtube-player.html
To quickly summarize what this is, it's essentially a super minimal youtube client. You get a Youtube link, paste it in the box, press play and enjoy.
\
My web dev skills are kinda jank so expect the visuals to be... yeah.

## Features
(You expect too much if you think this can do anything too advanced)
- Play Youtube Videos (nuh doi, what did you expect, a TikTok audio player?)
- Playlists (Youtube supports embedded playlists as well, which can be dropped in the playbar, you can even play from a specific index in said playlist while still retaining the context of being in a playlist)
- Future Proof (unlike most Youtube clients, this works exactly how Youtube intends it to, so as long as Youtube allows arbitrary embedders this will work)
- Cross Platform (it's literally HTML and JS, what do you expect? It even works on mobile if you wish... idk why you would do that to yourself though...)
- Automation (some query parameters are added  for convenience, them being `url=` which will automatically load the player the passed URL as the value, and `autoplay=` which will enable autoplay when `1` is passed)

## Limitations
- This is at most a video & playlist player for Youtube (can't do much else)
- Not all videos work (mostly music videos or other content with copyright protections put in place, it's the most basic form of anti-piracy Youtube has despite it literally only impeding me and maybe one other schmuck in the middle of Nevada or something)

## Why
- Electron sucks major... popcicles (Freetube uses it, and it's the only client that actually works, so I wanted to change that a little)
- I want to practice some web dev stuff (don't even say anything, I don't want to hear it)
- Bored ¯\\\_(ツ)\_/¯
