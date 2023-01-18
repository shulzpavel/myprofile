import React from 'react';
import git from '../../images/icons/git.svg'
import html from '../../images/icons/html.svg'
import css from '../../images/icons/css.svg'
import js from '../../images/icons/javascript.svg'
import github from '../../images/icons/github.svg'
import coding from '../../images/icons/coding.svg'

function Tech() {
    return (
        <div className='tech' id='tech'>
            <p className='tech__title-mode'>Стек технологий</p>
            <div className='tech__container'>
                <ul className='tech__list'>
                    <li className='tech__item'>
                        <p className='tech__title'>HTML</p>
                        <img className='tech__image' src={html} alt='html' />
                        <ul className='tech__text-list'>
                            <li className='tech__text-item'>Спектр основных тегов и атрибутов для создания секций сайта и корректной работы HTML-кода</li>
                            <li className='tech__text-item'>Использование семантики тегов</li>
                            <li className='tech__text-item'>Владение мета-тегами, работа с favicon, og-тегами, подключение шрифтов</li>
                            <li className='tech__text-item'>Владение компонентным подходом к созданию элементов проекта</li>
                            <li className='tech__text-item'>Умение создавать компоненты для переиспользования и избегать дублирования кода</li>
                        </ul>
                        {/* </p> */}
                    </li>
                    <li className='tech__item'>
                        <p className='tech__title'>CSS</p>
                        <img className='tech__image' src={css} alt='css' />
                        <ul className='tech__text-list'>
                            <li className='tech__text-item'>Основные концепции и технологии: типы элементов, позиционирование, flexbox, grid-вёрстка media queries, работа с формами, анимациями, трансформации</li>
                            <li className='tech__text-item'>Способы именования элементов/компонент — БЭМ</li>
                            <li className='tech__text-item'>adaptive/responsive подход, создание кросс-браузерных сайтов для всех популярных разрешений экрана, использование media queries</li>
                            <li className='tech__text-item'>Работа с префиксами, знание caniuse.com и особенностей браузеров</li>
                            {/* <li className='tech__text-item'>Умение создавать компоненты для переиспользования и избегать дублирования кода</li> */}
                        </ul>
                    </li>
                    <li className='tech__item'>
                        <p className='tech__title'>JAVASCRIPT</p>
                        <img className='tech__image' src={js} alt='js' />
                        <ul className='tech__text-list'>
                            <li className='tech__text-item'>Cинтаксис ES5</li>
                            <li className='tech__text-item'>Концепции: переменная, условие, цикл, функция</li>
                            <li className='tech__text-item'>Разные типы и структуры данных, умение осознанного (явно и неявно) приведения одного типа данных к другому</li>
                            <li className='tech__text-item'>Понимание лексической области видимости (функциональной и блочной), осознанное использование замыканий</li>
                            <li className='tech__text-item'>Работа с объектами браузера и событиями</li>
                            <li className='tech__text-item'>Чтение и анализ ошибок, умение «ловить» исключения</li>
                            <li className='tech__text-item'>Cпособы установки this, жесткая привязка и потеря контекста</li>
                            <li className='tech__text-item'>ООП парадигма</li>
                            <li className='tech__text-item'>Написание асинхронного кода, при использовании коллбеков, промисов, async/await</li>
                            <li className='tech__text-item'>Однопоточность, "main thread" и "event loop queue"</li>
                            <li className='tech__text-item'>AJAX, работа с запросами к API и обработка ответов</li>
                            <li className='tech__text-item'>Концепция модулей. ES6 модули</li>
                            <li className='tech__text-item'>Принципы работы с JS-фреймворком для создания интерфейсов</li>
                        </ul>
                    </li>
                    {/* <li className='tech__item'>
                        <p className='tech__title'>REACT</p>
                        <img className='tech__image' src={node} alt='node' />
                        <ul className='tech__text-list'>
                            <li className='tech__text-item'>Спектр основных тегов и атрибутов для создания секций сайта и корректной работы HTML-кода</li>
                            <li className='tech__text-item'>Использование семантики тегов</li>
                            <li className='tech__text-item'>Владение мета-тегами, работа с favicon, og-тегами, подключение шрифтов</li>
                            <li className='tech__text-item'>Владение компонентным подходом к созданию элементов проекта</li>
                            <li className='tech__text-item'>Умение создавать компоненты для переиспользования и избегать дублирования кода</li>
                        </ul>
                    </li> */}
                    <li className='tech__item'>
                        <p className='tech__title'>GIT</p>
                        <img className='tech__image' src={git} alt='git' />
                        <ul className='tech__text-list'>
                            <li className='tech__text-item'>Понимание принципа: сохранение версий, ветвление проекта</li>
                            <li className='tech__text-item'>Базовые команды: push, pull, add, commit, branch, merge</li>
                            <li className='tech__text-item'>Деплой на github pages</li>
                            <li className='tech__text-item'>Работа с github через приложение и терминал</li>
                            <li className='tech__text-item'>Совместная работа над проектом</li>
                            <li className='tech__text-item'>Навык чтения readme, создание issue и pull requests</li>
                        </ul>
                    </li>
                    <li className='tech__item'>
                        <p className='tech__title'>Рабочее окружение</p>
                        <img className='tech__image' src={github} alt='github' />
                        <ul className='tech__text-list'>
                            <li className='tech__text-item'>Основы bash (создание папки, перемещение, изменение файлов), основы PowerShell (windows)</li>
                            <li className='tech__text-item'>Создание окружения под проект (npm)</li>
                            <li className='tech__text-item'>Настройка сборки проекта (webpack)</li>
                            {/* <li className='tech__text-item'>Владение компонентным подходом к созданию элементов проекта</li>
                            <li className='tech__text-item'>Умение создавать компоненты для переиспользования и избегать дублирования кода</li> */}
                        </ul>
                    </li>
                    <li className='tech__item'>
                        <p className='tech__title'>CODING</p>
                        <img className='tech__image' src={coding} alt='code' />
                        <ul className='tech__text-list'>
                            <li className='tech__text-item'>Работа с Visual Studio Code</li>
                            <li className='tech__text-item'>Работа с макетом — основной инструмент Figma.com</li>
                            <li className='tech__text-item'>Работа с dev tools внутри браузера (Yandex-браузер, Chrome)</li>
                            <li className='tech__text-item'>Работа с дебаггингом в js-консоли</li>
                            {/* <li className='tech__text-item'>Умение создавать компоненты для переиспользования и избегать дублирования кода</li> */}
                        </ul>
                    </li>
                    {/* <li className='projects__item'>
                        <p className='projects__title'>HTML</p>
                        <img className='projects__image' src={html} alt='ul1' />
                        <p className='projects__text'>HTML</p>
                    </li> */}
                </ul>
            </div>
        </div>
    )
}

export default Tech;
