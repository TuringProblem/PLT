# Illustration:

// video goes here

The flow from UI to domain model: the View binds `difficultyComboBox` and
`typeComboBox` directly to ViewModel properties; the ViewModel reads from and writes
to the immutable `Recipe` via the full constructor on save.


```
difficultyComboBox  ──bind──►  viewModel.difficultyProperty()
typeComboBox        ──bind──►  viewModel.typeProperty()
instructionsArea    ──bind──►  viewModel.notesProperty()
photoButton         ─────────► viewModel.photoPathProperty()

                    on save()
                        │
                        ▼
            new Recipe(id, title, servings, ingredients,
                       instructions, conversionRules,
                       notes, difficulty, type, photoPath)
                        │
                        ▼
               RecipeRepository.save(recipe)
```

The convenience constructor means the service layer never had to change — it
continues to construct `Recipe` objects with six arguments, and the new fields are
simply absent (null) in any recipe it creates. Only the Recipe Editor and Import
Interface ever populate them.
