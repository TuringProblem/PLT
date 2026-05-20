#!/bin/bash
# Author: { @Override } -> <a href="https://github.com/turingProblem">GitHub Profile</a>
# Since: 20260520 : @11:50


# Command ./run-typst-test.sh --main

if [[ "$1" == "--main" ]]; then
    typst compile --root . class/engw-3302/lib/utils/title.typ
fi


#
#
