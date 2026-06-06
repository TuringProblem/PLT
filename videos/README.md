# PLT video series

Manim video series. One module per folder; shared styling lives in `common/`.

```
videos/
  pyproject.toml      # deps + Python pin, shared by the whole series
  .python-version     # 3.12 (NOT your global 3.14 — see below)
  common/             # series-wide style + base scene, imported by every module
  variables/video.py
  conditionals/video.py
  functions/video.py
  loops/video.py
```

## Why uv (and why not your global python)

Your system `python3` is Homebrew's **3.14**, which (a) refuses global
`pip install` (PEP 668 "externally-managed") and (b) is too new for Manim's
deps — that's what kept forcing you into hand-made copy-envs.

`uv` fixes both: it keeps **one** `.venv` here pinned to Python 3.12 and
auto-syncs it on every `uv run`. No manual env activation, ever.

## Setup (once)

```sh
cd videos
uv sync          # creates .venv with Python 3.12 + manim, installs `common`
```

System deps (`ffmpeg`, `cairo`, `pango`) are already installed via Homebrew.

## Rendering a video

```sh
uv run manim variables/video.py Variables -pql   # -p preview, -ql low quality/fast
uv run manim variables/video.py Variables -qh    # high quality for the final cut
```

## Adding a new module

1. `mkdir topic && touch topic/video.py`
2. Subclass `LessonScene` from `common.scene`, set `lesson_title`, implement `body()`.
3. Render with `uv run manim topic/video.py ClassName -pql`.
