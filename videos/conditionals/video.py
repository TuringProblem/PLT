"""Conditionals — render with:  uv run manim conditionals/video.py Conditionals -pql"""

from manim import Write

from common.scene import LessonScene
from common.style import body


class Conditionals(LessonScene):
    lesson_title = "Conditionals"
    subtitle = "choosing a path"

    def body(self) -> None:
        # TODO: build the conditionals animation here.
        self.play(Write(body("if x > 0: ...")))
        self.wait(1)
