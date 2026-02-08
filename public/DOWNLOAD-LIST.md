# Video / audio list for download

Use these URLs with a download tool (e.g. **yt-dlp**). Save files into the folders and names below so the site can play them.

---

## Songs (save as MP3 in `public/audio/`)

| # | Save as filename | Day | YouTube URL |
|---|------------------|-----|-------------|
| 1 | `WWZxDA81JFk.mp3` | Rose Day | https://www.youtube.com/watch?v=WWZxDA81JFk |
| 2 | `Qdz5n1Xe5Qo.mp3` | Propose Day | https://www.youtube.com/watch?v=Qdz5n1Xe5Qo |
| 3 | `-7_MyOao-eE.mp3` | Chocolate Day | https://www.youtube.com/watch?v=-7_MyOao-eE |
| 4 | `U2QNhsAgIIE.mp3` | Teddy Day | https://www.youtube.com/watch?v=U2QNhsAgIIE |
| 5 | `kKljXVVkgS4.mp3` | Promise Day (Sanam Teri Kasam) | https://www.youtube.com/watch?v=kKljXVVkgS4 |
| 6 | `qoq8B8ThgEM.mp3` | Hug Day | https://www.youtube.com/watch?v=qoq8B8ThgEM |
| 7 | `83pr5QLz6Bc.mp3` | Kiss Day | https://www.youtube.com/watch?v=83pr5QLz6Bc |
| 8 | `NRHIBKNNzAk.mp3` | Valentine's Day | https://www.youtube.com/watch?v=NRHIBKNNzAk |
| 9 | `zWEOx7TSM6I.mp3` | For You Forever (after YES) | https://www.youtube.com/watch?v=zWEOx7TSM6I |

---

## Main videos (save in `public/video/`)

| Save as filename | Description |
|------------------|-------------|
| `memory.mp4` | "Moments I Replay in My Heart" section (click to play). |
| `valentine.mp4` | Surprise video after YES; fallback when a day video is missing. |

---

## Per-day videos (Valentine Week — save in `public/video/`)

Each day card opens only its video in the popup. Use these exact filenames:

| # | Save as filename | Day |
|---|------------------|-----|
| 1 | `rose.mp4` | Rose Day |
| 2 | `propose.mp4` | Propose Day |
| 3 | `chocolate.mp4` | Chocolate Day |
| 4 | `teddy.mp4` | Teddy Day |
| 5 | `promise.mp4` | Promise Day |
| 6 | `hug.mp4` | Hug Day |
| 7 | `kiss.mp4` | Kiss Day |
| 8 | `valentines.mp4` | Valentine's Day |

If a day's file is missing, the popup falls back to `valentine.mp4`.

---

## Plain URL list (copy‑paste for yt-dlp)

```
https://www.youtube.com/watch?v=WWZxDA81JFk
https://www.youtube.com/watch?v=Qdz5n1Xe5Qo
https://www.youtube.com/watch?v=-7_MyOao-eE
https://www.youtube.com/watch?v=U2QNhsAgIIE
https://www.youtube.com/watch?v=kKljXVVkgS4
https://www.youtube.com/watch?v=qoq8B8ThgEM
https://www.youtube.com/watch?v=83pr5QLz6Bc
https://www.youtube.com/watch?v=NRHIBKNNzAk
https://www.youtube.com/watch?v=zWEOx7TSM6I
```

**Example (download all 9 as MP3 with correct filenames):**
```bash
cd public/audio
yt-dlp -x --audio-format mp3 -o "%(id)s.%(ext)s" "https://www.youtube.com/watch?v=WWZxDA81JFk" "https://www.youtube.com/watch?v=Qdz5n1Xe5Qo" "https://www.youtube.com/watch?v=-7_MyOao-eE" "https://www.youtube.com/watch?v=U2QNhsAgIIE" "https://www.youtube.com/watch?v=kKljXVVkgS4" "https://www.youtube.com/watch?v=qoq8B8ThgEM" "https://www.youtube.com/watch?v=83pr5QLz6Bc" "https://www.youtube.com/watch?v=NRHIBKNNzAk" "https://www.youtube.com/watch?v=zWEOx7TSM6I" "https://www.youtube.com/watch?v=zWEOx7TSM6I"
```
