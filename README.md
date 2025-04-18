# youtube-player.html

To quickly summarize what this is, it's essentially a super minimal youtube client. You get a Youtube link, paste it in the box, press play and enjoy.
\
My web dev skills are kinda jank so expect the visuals to be... yeah.

## Features

(You expect too much if you think this can do anything too advanced)
- Play Videos (but not all, due to Youtube's anti-piracy some videos are unavailable to embedders, this is mainly just commercial stuff like officially posted music)
- Playlists (Youtube supports embedded playlists as well, which can be dropped in the playbar, you can even play from a specific position in said playlist while still retaining the context of being in a playlist)
- Future Proof (unlike most Youtube clients, this works exactly how Youtube intends it to, so as long as Youtube allows arbitrary embedders this will work)
- Cross Platform (it's literally HTML and JS, what do you expect?)
- Automation (some query parameters are added  for convenience, then being `url=` which will automatically load the player the passed URL as the value, and `autoplay=` which will enable autoplay when `1` is passed)
