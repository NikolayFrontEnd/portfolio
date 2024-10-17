import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Определяем переводы
const resources = {
    en: {
      translation: {
        "PROJ":"PROJECTS",
        // Общие переводы для навигации и кнопки смены языка
        "nav_home": "Home",
        "nav_projects": "Projects",
        "nav_skills": "Skills",
        "language_button": "en",
  
        // Основной компонент Main
        "greeting": "I'm",
        "name": "Nikolay,",
        "profession": "Web-developer",
        "description1": "I'm a full-stack and MERN stack developer,",
        "description2": "proficient in React, Nest.js  ,Node.js, Django and",
        "description3": "databases like MongoDB, SQL Server, PostgreSQL.",
        "description4": "I also build mobile applications using React Native.",
        "description5": "Also, I have B2 English level.",
        "see_projects": "See Projects",
        "download_resume": "Download Resume",
  
        // Компонент Project
        "projects_header": "Projects",
        "sport_site": "Sport Website",
        "portfolio_card": "Portfolio Card Website",
        "dictionary_app": "Dictionary Web Application",
        "hospital_app": "Hospital Web Application",
        "student_app": "Web Application for Students",
        "see": "View",

        //skill

        "skill_react_title": "React",
        "skill_react_desc": "After learning HTML, CSS, and JavaScript, I decided to deepen my knowledge and started learning a new frontend development library - React. With this library, I have created over 5 different web applications and numerous single-page landing sites.",
        "skill_node_title": "Node JS",
        "skill_node_desc": "After mastering frontend, I decided to study backend development to be able to create my own web applications independently and become a full-stack developer. I learned the main backend concepts and widely applied them in my own projects.",
        "skill_native_title": "React Native",
        "skill_native_desc": "I also studied React Native to create mobile applications and developed several simple apps, such as a calendar, a Todo List, and an achievement list.",
        "skill_mongo_title": "Mongo DB",
        "skill_mongo_desc": "To create full-fledged web applications, I studied a non-relational database to store data within it. This database provides flexibility in storing unstructured data and ensures scalability and high performance.",
        "skill_sql_title": "Microsoft SQL Server",
        "skill_sql_desc": "I also learned SQL and Microsoft SQL Server to store data in a relational database and become a more effective developer.",
        "skill_three_title": "Three.JS",
        "skill_three_desc": "I have experience in creating interactive 3D animations and websites using Three.js, including data visualization, effects, and complete 3D scenes. This allows me to add unique visual elements to websites, enhancing user experience and making projects more impressive and interactive.",
        "skill_tailwind_title": "TailWind",
        "skill_tailwind_desc": "Experience with TailwindCSS allows me to quickly and efficiently style interfaces, creating adaptive and modern designs. Using utility classes speeds up development and ensures style consistency, making projects flexible and easy to maintain.",
        "skill_bootstrap_title": "Bootstrap",
        "skill_bootstrap_desc": "I also know Bootstrap, which allows me to create adaptive and cross-browser interfaces very quickly and efficiently.",
        "skill_redux_title": "Redux",
        "skill_redux_desc": "Experience with Redux helps me manage state effectively in complex applications, creating scalable architecture, ensuring predictability, and easy debugging.",
        "skill_typescript_title": "TypeScript",
        "skill_typescript_desc": "Experience with TypeScript helps me write safe and predictable code using strong typing. Using TypeScript makes my projects more reliable and helps to work more efficiently in a team due to autocompletion and static type checking.",
        "skill_django_title": "Django",
        "skill_nest_desc":"I have experience working with Nest.js, creating server-side applications and REST APIs. I am skilled in designing server-side architecture and effectively implementing functionality to support modern web applications.",
        "skill_django_desc": "I have also learned Python and Django, allowing me to create full-fledged backend solutions not only with Node.js but also with this platform, integrating them with frontend and ensuring the reliability and security of applications.",
      "skill_postgresql":"I have basic knowledge of working with PostgreSQL, including creating tables, executing queries, and managing data. I am capable of using SQL to implement CRUD operations and optimize data handling.",
      "sport":"During development, I used modern responsive design to create an intuitive and visually appealing interface. This project helped me not only improve my React skills but also understand the principles of good user experience (UX) and adapting content for various devices. Although the site is built only with React, it gave me valuable experience in creating an interactive frontend and using a component-based approach.",
      "sport1":"After completing React courses, I decided to start testing my skills and creating different websites. I really love sports, and for this reason, I decided to practice by making my own website where you can see famous athletes, their training routines, and diets. This project fascinated me so much that I completed it quickly and was able to reinforce my React knowledge in practice.",
"see":"See it:",
"ex":"Go back",
"port":"In this project, I created a simple yet elegant website that showcases my web development skills. Using React, I developed an interface that features a visually appealing profile with a clean and modern design.",
"dict1":"I created my first full-stack web application using React, Node.js, Express, and MongoDB, which provides users with a unique way to learn foreign languages. The application allows users to record foreign words and their translations, save grammar rules, and other important notes. In addition, users can search for other players, view their progress, compare results, and compete.",
    "dict2":"One of the main features of the application is the game 'Write the correct translation of the word', which helps users memorize words in a fun and interactive way. Users can track their progress and results, making learning more motivating and enjoyable.", 
"dict3":"This project was my first step in creating full-stack applications and gave me basic knowledge of full-cycle development. I learned how the frontend and backend interact, how to build a REST API using Express, and how to work with MongoDB to store information. This experience helped me truly enjoy full-stack development, appreciate the entire process of creating a web application, and understand how components of different technologies work in a single application.",
// страницы
"hos":"I participated in an international project at university, where I worked with a team of students from India and was the lead frontend developer. We developed a website for a hospital that allowed patients to schedule doctor appointments and maintained a calendar with appointments. In this project, I also worked a bit on the backend with Django, which helped me deepen my knowledge in server-side development.",
     "hos1": "Participating in this project gave me valuable experience working in an international team and strengthened my skills in developing complex interfaces using React. I learned how to interact with a Django backend and gained more confidence in creating full-featured and functional web applications intended for real users.",
"uni":"I developed a full-stack web application using React, Nest.js, and PostgreSQL, which allows organizing the educational process. On this website, both students and class leaders can register. Class leaders can create lessons and organize lab submissions, which students can sign up for and form a queue based on time.",
"uni2":"While working on this project, I created a user-friendly and intuitive interface, ensuring easy registration and interaction with the website's functionality. Class leaders can easily manage lessons and lab submissions, while students can select a convenient time for submissions.",
"uni3":"I particularly enjoyed working on the backend with Nest.js, and this project allowed me to significantly improve my skills with this framework. I became more confident in designing server architecture and developing REST APIs. This experience also gave me a deeper understanding of how the frontend and backend interact and improved my skills in working with PostgreSQL databases.",
}
    },
    ru: {
      translation: {
        "PROJ":"ПРОЕКТЫ",
        // Общие переводы для навигации и кнопки смены языка
        "nav_home": "Главная",
        "nav_projects": "Проекты",
        "nav_skills": "Навыки",
        "language_button": "ru",
  
        // Основной компонент Main
        "greeting": "Я",
        "name": "Николай,",
        "profession": "Веб-разработчик",
        "description1": "Я full-stack и MERN stack разработчик,",
        "description2": "владею React, Nest.js ,Node.js, Django и",
        "description3": "базами данных, такими как MongoDB, SQL Server, PostgreSQL",
        "description4": "Также создаю мобильные приложения на React Native.",
        "description5": "У меня уровень английского B2.",
        "see_projects": "Смотреть проекты",
        "download_resume": "Скачать резюме",
  
        // Компонент Project
        "projects_header": "Проекты",
        "sport_site": "Сайт спортсменов",
        "portfolio_card": "Сайт-карточка портфолио",
        "dictionary_app": "Веб-приложение словарь слов",
        "hospital_app": "Веб-приложение больница",
        "student_app": "Веб-приложение для студентов",
        "see": "Смотреть!",

        //skill

     "skill_react_title": "React",
      "skill_react_desc": "После изучения HTML, CSS и JavaScript, я решил углубить свои знания и начал изучать новую библиотеку для Frontend разработки - React. С помощью этой библиотеки я создал более 5 разных веб-приложений и множество одностраничных лендингов.",
      "skill_node_title": "Node JS",
      "skill_node_desc": "После изучения Frontend, я решил начать изучать Backend, чтобы самостоятельно создавать собственные веб-приложения и считать себя Full-stack разработчиком. Я изучил основные концепции Backend и широко их применял в своих проектах.",
      "skill_native_title": "React Native",
      "skill_native_desc": "Также я изучил React Native для создания мобильных приложений и создал несколько простых приложений, таких как календарь, Todo List и список достижений.",
      "skill_mongo_title": "Mongo DB",
      "skill_mongo_desc": "Для создания полноценных веб-приложений я изучил нереляционную базу данных, чтобы хранить данные в ней. Эта база данных обеспечивает гибкость в хранении неструктурированных данных, а также масштабируемость и высокую производительность.",
      "skill_sql_title": "Microsoft SQL Server",
      "skill_sql_desc": "Я также изучил язык SQL и базу данных Microsoft SQL Server, чтобы иметь возможность хранить данные в реляционной базе данных и быть более эффективным разработчиком.",
      "skill_three_title": "Three.JS",
      "skill_three_desc": "У меня есть опыт создания интерактивных 3D-анимаций и сайтов с использованием Three.js, включая визуализацию данных, эффекты и полные 3D-сцены. Это позволяет мне добавлять уникальные визуальные элементы на сайты.",
      "skill_tailwind_title": "TailWind",
      "skill_tailwind_desc": "Опыт работы с TailwindCSS позволяет мне быстро и эффективно стилизовать интерфейсы, создавая адаптивные и современные дизайны. Использование утилитарных классов ускоряет разработку и обеспечивает единообразие стилей.",
      "skill_bootstrap_title": "Bootstrap",
      "skill_bootstrap_desc": "Я также знаком с Bootstrap, что позволяет мне быстро создавать адаптивные и кроссбраузерные интерфейсы.",
      "skill_redux_title": "Redux",
      "skill_redux_desc": "Опыт работы с Redux помогает мне эффективно управлять состоянием в сложных приложениях, создавать масштабируемую архитектуру, обеспечивать предсказуемость и упрощать отладку.",
      "skill_typescript_title": "TypeScript",
      "skill_typescript_desc": "Опыт работы с TypeScript помогает мне писать безопасный и предсказуемый код с использованием строгой типизации. Использование TypeScript делает мои проекты более надежными.",
      "skill_django_title": "Django",
      "skill_nest_desc": "Я обладаю опытом работы с Nest.js, создавая серверные приложения и REST API. Умею проектировать архитектуру серверной части и эффективно реализовывать функционал для поддержки современных веб-приложений.",
      "skill_django_desc": "Также я изучил Python и Django, что позволяет мне создавать полноценные backend-решения не только на Node.js, но и на этой платформе, интегрируя их с фронтендом и обеспечивая надежность и безопасность приложений.",
      "skill_postgresql":"Я обладаю базовыми знаниями работы с базой данных PostgreSQL, включая создание таблиц, выполнение запросов и управление данными. Умею использовать SQL для реализации CRUD-операций и оптимизации работы с данными.",
      "sport1":"  После прохождения курсов по React, я решил начать пробовать свои силы и создавать разные веб-сайты. Я очень люблю спорт и, по этой причине, решил потренироваться и сделать свой собственный сайт, на котором можно увидеть известных спортсменов, их виды тренировок и режим питания. Этот проект меня так захватил, что я быстро его завершил и смог закрепить свои знания React на практике.",
      "sport":"При разработке я использовал современный адаптивный дизайн, чтобы создать интуитивно понятный и визуально привлекательный интерфейс. Этот проект помог мне не только улучшить навыки работы с React, но и понять принципы хорошего пользовательского опыта (UX) и адаптации контента для различных устройств. Хоть сайт и написан только на React, он дал мне ценный опыт по созданию интерактивного фронтенда и использованию компонентного подхода.",
       "see":"Смотри:",
       "ex":"Назад",
       "port":"В этом проекте я создал простой, но элегантный сайт, который демонстрирует мои навыки в веб-разработке. Используя React, я разработал интерфейс, который включает в себя визуально привлекательный профиль с использованием чистого и современного дизайна.",
    "dict1":"Я создал свое первое фулстек веб-приложение с использованием React, Node.js, Express и MongoDB, которое предоставляет пользователям уникальный способ изучения иностранных языков. Приложение позволяет записывать иностранные слова и их переводы, сохранять грамматические правила и другие важные заметки. Помимо этого, пользователи могут искать других игроков, смотреть их прогресс, сравнивать результаты и соревноваться.",
      "dict2":"Одной из главных функций приложения является игра 'Напиши правильный перевод слова', которая помогает запоминать слова в увлекательной и интерактивной форме. Пользователи могут отслеживать свой прогресс и результаты, что делает изучение более мотивирующим и увлекательным.",
  "dict3":"Этот проект стал для меня первым шагом в создании фулстек приложений и дал мне базовые знания о разработке полного цикла. Я изучил, как взаимодействуют фронтенд и бэкенд, как строить REST API с помощью Express, а также как работать с базой данных MongoDB для хранения информации. Этот опыт помог мне по-настоящему полюбить фулстек разработку, оценить весь процесс создания веб-приложения и позволил понять, как компоненты разных технологий работают в едином приложении.",
    "hos":"Я участвовал в международном проекте в университете, где работал в команде со студентами из Индии, и был главным фронтенд-разработчиком. Мы разрабатывали веб-сайт для больницы, который позволял пациентам записываться на прием к врачу, а также вел календарь с записями. В этом проекте я также немного работал с бэкендом на Django, что позволило мне углубить свои знания в серверной разработке.",
"hos1":"Участие в этом проекте позволило мне получить ценный опыт работы в международной команде, а также укрепило мои навыки в разработке сложных интерфейсов с использованием React. Я узнал, как взаимодействовать с серверной частью на Django, и получил больше уверенности в создании полноценных и функциональных веб-приложений, предназначенных для реальных пользователей.",
"uni":"Я разработал полноценное фулстек веб-приложение с использованием React, Nest.js и PostgreSQL, которое позволяет организовать учебный процесс. На этом сайте могут регистрироваться как ученики, так и старосты. Старосты имеют возможность создавать уроки, а также организовывать сдачу лабораторных работ, на которые ученики могут записываться и формировать очередь по времени.",
"uni2":"Работая над этим проектом, я создал удобный и понятный интерфейс для пользователей, обеспечивая простую регистрацию и взаимодействие с функционалом сайта. Старосты могут легко управлять уроками и сдачей лабораторных, а ученики — выбирать удобное время для сдачи.",
"uni3":"Мне особенно понравилось работать с бэкендом на Nest.js, и этот проект позволил мне значительно улучшить свои навыки работы с этим фреймворком. Я стал более уверенным в проектировании серверной архитектуры и разработке REST API. Этот опыт также позволил мне глубже понять, как взаимодействуют фронтенд и бэкенд, и развил мои навыки работы с базами данных на PostgreSQL.",
}
    }
  };
  
  i18n
    .use(initReactI18next)
    .init({
      resources,
      lng: "ru",
      interpolation: {
        escapeValue: false
      }
    });


export default i18n;
