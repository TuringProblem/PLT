"""Series-wide visual language: colors, fonts, and small text helpers.

Tweak values here once and every video inherits them.
"""

from __future__ import annotations

from manim import DOWN, LEFT, Text, VGroup

# --- Palette -----------------------------------------------------------------
# One source of truth for color. Reference these instead of hard-coding hex.
PALETTE = {
    "bg": "#0d1117",       # background
    "fg": "#e6edf3",       # primary text
    "muted": "#8b949e",    # secondary text
    "accent": "#58a6ff",   # highlights / emphasis
    "good": "#3fb950",     # success / true branch
    "bad": "#f85149",      # error / false branch
    "keyword": "#ff7b72",  # code keywords
}

# --- Typography --------------------------------------------------------------
FONT = "JetBrains Mono"          # falls back to a system mono if missing
TITLE_SIZE = 56
BODY_SIZE = 36
CODE_SIZE = 32


def title(text: str, **kwargs) -> Text:
    """A consistent lesson/section title."""
    return Text(text, font=FONT, font_size=TITLE_SIZE, color=PALETTE["fg"], **kwargs)


def body(text: str, **kwargs) -> Text:
    """Standard body copy."""
    return Text(text, font=FONT, font_size=BODY_SIZE, color=PALETTE["fg"], **kwargs)


def caption(text: str, **kwargs) -> Text:
    """Muted secondary text."""
    return Text(text, font=FONT, font_size=BODY_SIZE * 0.7, color=PALETTE["muted"], **kwargs)


def bullets(*items: str, **kwargs) -> VGroup:
    """A left-aligned bullet list built from body text."""
    group = VGroup(*[body(f"•  {item}", **kwargs) for item in items])
    group.arrange(DOWN, aligned_edge=LEFT, buff=0.35)
    return group
