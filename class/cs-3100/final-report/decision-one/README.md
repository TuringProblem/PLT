# Illustration
<img width="800" height="444" alt="Screen Recording 2026-04-18 at 7 41 19 PM" src="https://github.com/user-attachments/assets/e3fa3b9d-8c9d-452d-8995-1ea293844686" />

> Showing the relationship/scalability for containing all of the data inside of one .css folder. My main reasoning for this is from only intending to use 4 services.
>
> Sure, if we want to scale and add more then we can still add services inside of the same .css file - unlike if we were to have separate files inside of each module :

				/fxml/–
				          \--- editor.fxml
				           \--- editor.css
					\--- library.fxml
					 \--- library.css

> This would cause tons of verbose rewriting of the same colors, patterns, etc… Also,  because this is not normal html, this is FXML, we can’t do a lot of the neat features like @import , or @media - the “at rules”, but we still made sure we kept the codebase clean.
