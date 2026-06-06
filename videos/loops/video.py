"""Loops — render with:  uv run manim loops/video.py Loops -pql"""

from manim import Write

from common.scene import LessonScene
from common.style import body


class Loops(LessonScene):
    lesson_title = "Loops"
    subtitle = "doing it again"

    def body(self) -> None:
        # TODO: build the loops animation here.
        self.play(Write(body("for i in range(n): ...")))
        self.wait(1)
