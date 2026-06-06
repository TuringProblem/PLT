"""Functions — render with:  uv run manim functions/video.py Functions -pql"""

from manim import Write

from common.scene import LessonScene
from common.style import body


class Functions(LessonScene):
    lesson_title = "Functions"
    subtitle = "inputs to outputs"

    def body(self) -> None:
        # TODO: build the functions animation here.
        self.play(Write(body("f(x) = x + 1")))
        self.wait(1)
