"""Variables — render with:  uv run manim variables/video.py Variables -pql"""

from manim import Write

from common.scene import LessonScene
from common.style import body


class Variables(LessonScene):
    lesson_title = "Variables"
    subtitle = "names for values"

    def body(self) -> None:
        # TODO: build the variables animation here.
        self.play(Write(body("x = 42")))
        self.wait(1)
