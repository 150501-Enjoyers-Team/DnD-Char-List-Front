#  Use Case Поток событий

## Зарегестрироваться
**Описание.** Позволяет посетителю зарегестрироваться и стать пользователем.   
**Предусловия.** Посетитель выбрал пункт "Зарегестрироваться".  

1. Приложение отображает страницу, на которой расположена форма для отправки регистрационных данных.
2. Пользователь заполняет необходимые поля.
3. Приложение проверяет правильность введенных данных, если данные введены некоррекстно выполняется альтернативный поток A1;
4. Данные проверяются на соответствие требованиям, если не удовлетворяют, то выполняется альтернативный поток А1.
5. Вариант использования завершается.

**Альтернативный поток А1.**
1. Пользователю отображаются ошибочно заполненные поля, выполняется основной поток с пункта 3.


## Авторизироваться
**Описание.** Позволяет пользователю войти в аккаунт.   
**Предусловия.** Посетитель попал на страницу авторизации.  

1. Приложение отображает страницу, на которой расположена форма для ввода логина и пароля.
2. Пользователь заполняет необходимые поля.
3. Приложение проверяет введенные данные, если пользователь с указанными данными не найден, выполняется альтернативный поток A1.
4. Приложение проверяет введенные данные, если указан неверный пароль, выполняется альтернативный поток A2.
5. Пользователь авторизируется и отправляется на страницу выбора персонажа.
6. Вариант использования завершается.

**Альтернативный поток А1.**
1. Пользователю на странице входа отображается сообщение об ошибке.
2. Выполняется основной поток начиная с пункта 2.

**Альтернативный поток А2.**
1. Пользователю на странице входа отображается сообщение об ошибке.
2. Выполняется основной поток начиная с пункта 2.


## Создать персонажа
**Описание.** Позволяет пользователю создать персонажа.    

1. По нажатию на кнопку "создать" пользователь перенаправляется на страницу персонажа с пустыми полями.
2. Вариант использования завершается.


## Выбрать персонажа
**Описание.** Позволяет пользователю выбрать персонажа для редактирования.   

1. Приложение отображает страницу, на которой расположена форма для ввода логина и пароля.
2. Нажав на определенного персонажа, пользователь производит выбор конкретного персонажа.
3. При нажатии на кнопку "Удалить", выполняется альтернативный поток A1.
4. Выбрав конкретного персонажа, пользователь попадает на страницу персонажа.
5. Вариант использования завершается.

**Альтернативный поток А1.**
1. Выбранный персонаж удаляется из списка.
2. Выполняется основной поток начиная с пункта 1.


## Редактировать персонажа
**Описание.** Позволяет пользователю редактировать выбранного персонажа.   

1. Приложение отображает страницу, на которой расположена форма для заполнения полей персонажа.
2. Пользователь заполняет необходимые поля.
3. Приложение проверяет введенные данные, данные не корректны, выполняется альтернативный поток A1.
4. Вариант использования завершается.

**Альтернативный поток А1.**
1. Пользователю на странице входа отображается сообщение об ошибке.
2. Выполняется основной поток начиная с пункта 2.