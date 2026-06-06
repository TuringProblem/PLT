"""Base scene every lesson builds on, so intros/outros stay consistent."""

from __future__ import annotations

from manim import DOWN, Scene, FadeIn, FadeOut, Write

from common.style import PALETTE, title, caption


class LessonScene(Scene):
    """A Scene preset with the series background and reusable intro/outro.

    Subclasses set `lesson_title` and implement `body()`:

        class Variables(LessonScene):
            lesson_title = "Variables"

            def body(self):
                self.play(Write(some_mobject))
    """

    lesson_title: str = ""
    subtitle: str = ""

    def construct(self) -> None:
        self.camera.background_color = PALETTE["bg"]
        if self.lesson_title:
            self.intro()
        self.body()
        self.outro()

    # --- override this in each lesson ---------------------------------------
    def body(self) -> None:  # pragma: no cover - overridden by subclasses
        raise NotImplementedError("Each lesson must implement body().")

    # --- shared bookends -----------------------------------------------------
    def intro(self) -> None:
        card = title(self.lesson_title)
        self.play(Write(card))
        if self.subtitle:
            sub = caption(self.subtitle).next_to(card, DOWN, buff=0.4)
            self.play(FadeIn(sub, shift=0.2))
            self.wait(1)
            self.play(FadeOut(card), FadeOut(sub))
        else:
            self.wait(1)
            self.play(FadeOut(card))

    def outro(self) -> None:
        self.wait(1)
        self.play(*[FadeOut(m) for m in self.mobjects])
