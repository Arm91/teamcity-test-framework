## TeamCity API Test Framework with Playwright

To run the tests run `npx playwright test` in terminal

To see the report run `npx playwright show-report` in terminal

Here are the list of test cases that need to be automated

[parentProject]
[Done] [Positive] Create new project with valid parentProject as \_Root
[Done] [Positive] Create new project with valid parentProject as \_Root and create a nested project in it
[Done] [Negative] Create new project with non-existing parentProject
(JSON String, Number, Array, Object or token 'null', 'true' or 'false')
[ToDo] [Positive] Create new project with valid locator as a string
[ToDo] [Positive] Create new project with valid locator as a number
[ToDo] [Positive] Create new project with valid locator as a boolean
[ToDo] [Negative] Create new project with valid locator as null
[ToDo] [Positive] Create new project with valid locator as the true
[ToDo] [Positive] Create new project with valid locator as the string false
[ToDo] [Negative] Create new project with invalid locator type as array
[ToDo] [Negative] Create new project with invalid locator type as object

[name]
[ToDo] [Positive] Create new project with valid name
[ToDo] [Negative] Create new project with empty name
(JSON String, Number, Array, Object or token 'null', 'true' or 'false')
[ToDo] [Positive] Create new project with valid name as a string
[ToDo] [Positive] Create new project with valid name as a number
[ToDo] [Positive] Create new project with valid name as a boolean
[ToDo] [Positive] Create new project with valid name as true
[ToDo] [Positive] Create new project with valid name as false
[ToDo] [Negative] Create new project with invalid name type as array
[ToDo] [Negative] Create new project with invalid name type as object

[id] ID should start with a latin letter and contain only latin letters, digits and underscores (at most 225 characters)
[ToDo] [Positive] Create new project with valid ID - starting with latin letters, containing digits and underscores
[ToDo] [Positive] Create new project with valid ID with 225 characters
[ToDo] [Negative] Create new project with valid ID with 226 characters
[ToDo] [Negative] Create new project with invalid ID - starting with numbers
[ToDo] [Negative] Create new project with invalid ID - starting with symbols
[ToDo] [Negative] Create new project with empty ID
(JSON String, Number, Array, Object or token 'null', 'true' or 'false')
[ToDo] [Negative] Create new project with id as a boolean
[ToDo] [Negative] Create new project with id as true
[ToDo] [Negative] Create new project with id as false
[ToDo] [Negative] Create new project with id type as array
[ToDo] [Negative] Create new project with id type as object

[copyAllAssociatedSettings]
[ToDo] [Positive] Create new project with copyAllAssociatedSettings as true
[ToDo] [Positive] Create new project with copyAllAssociatedSettings as false
[ToDo] [Negative] Create new project with copyAllAssociatedSettings as string
[ToDo] [Negative] Create new project with copyAllAssociatedSettings int
[ToDo] [Negative] Create new project with copyAllAssociatedSettings as bool(1,0)
[ToDo] [Negative] Create new project with empty copyAllAssociatedSettings
[ToDo] [Negative] Create new project with copyAllAssociatedSettings as an object
