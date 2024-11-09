## TeamCity API Test Framework with Playwright  

To run the tests run `npx playwright test` in terminal  

To see the report run `npx playwright show-report` in terminal  

Here are the list of API test cases that need to be automated  

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

Привет. Можно тут некоторые уточняющие вопросы? Я заранее извиняюсь если такие вопросы уже были

1. Приемлемо ли иметь ассершны в функциях Page Object-ов? Особенно когда эти функции используются в тестах как шаги к более глобальному тесту.
Например при логине, или создании проекта, которые много где будут использоваться в других тестах.

2. Когда смотрел курсы по автоматизации, Page Object-ы создавались по именам страниц а не по URL, оба best practice? Когда что лучше выбрать?
А как насчет nested url's? Page Object-ы создать тогда в сабпапках, или одна папка для всех подURL-ов хватит?

3. Как насчет иерархии в папке тестов? все тесты в одной папке? или опять по папкам как в Page Object-ах?

4. Насколько best practice сразу в тестах открывать URL? Ведь e2e подразумевает флоу енд юзера, от логина до конечного клика и таким образом возможен сценарий, что в одном месте что то сломалось и из за того, что мы пропустили этот степ на UI, мы не узнаем об этом. Это особенно актуально на начале проекта, когда пока что мало тест coverage-а.

5. Насколько будет best practice-ом автоматизацию TeamCity таким сценарием? Не e2e а более модульная наверно?
Test 1: Create Project (через UI)
Test 2: Create Project (через API) > Create Sub-project (через UI)
Test 3: Create Project (через API) > Create Sub-project (через API) > Create Build configuration (через UI)
То есть все что было протестировано через UI во всех других тестах будет делаться через API чтобы сохранить время и ресурсы

Эти вопросы идут из за того, что я не видел фреймворка на сотни или даже тысячи тестов. В начале все легко представить, мало файлов и папок. Поэтому и задал вопросы выше по лучшим практикам.

6. Насколько целесообразно учить второй ЯП и фреймворк на стороне, завышая вероятность в будущем найти работу с таким стэком. Или лучше выучить что то одно, но получше. Какой тут совет будет по опыту предидущих учеников?