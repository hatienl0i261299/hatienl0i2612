import { makeAutoObservable } from 'mobx';
import React from 'react';

export class AppStore {
    constructor() {
        makeAutoObservable(this)
        this.calculateAge();
    }

    facebookLink: string = 'https://www.fb.com/100011734236090';
    facebookName: string = 'hatienl0i261299';
    gmail: string = 'hatienloi261299@gmail.com';
    outlook: string = 'loiht.b17vt220@stu.ptit.edu.vn';
    githubLink: string = 'https://github.com/hatienl0i261299';
    phone: string = '932374845';
    displayText: string = 'View More Here';
    dataBlogs: any = [
        {
            "out": {
                "title": "KHAI THÁC API TỪ FPTPLAY"
            },
            "name": "Crawl data from website fptplay.vn",
            "slug": "fptplay"
        },
        {
            "out": {
                "title": "KHAI THÁC API TỪ ZINGMP3"
            },
            "name": "Crawl data from website zingmp3.vn",
            "slug": "zingmp3"
        },
        {
            "out": {
                "title": "KHAI THÁC API TỪ MIXCLOUD"
            },
            "name": "Tool crawl data from website Mixcloud",
            "slug": "mixcloud",
        },
    ];
    dataProjects: any = [
        {
            "name": "Device management",
            "period": "12/2022 - Present",
            "business": "Manage and analyze the status of IOT devices",
            "technology": [
                "ReactJS with Typescript",
                "ReactJS mobx",
                ".NET",
                "Microservices",
                "Redis",
                "Postgres",
                "Micro-frontend",
                "ThreeJS"
            ],
            "responsibility": "Frontend developer",
            "team_size": 40,
        },
        {
            "name": "Furniture",
            "period": "12/2022",
            "business": "Ecommerce",
            "technology": [
                "ReactJS with Typescript",
                "ReactJS mobx",
                "FastAPI",
                "Microservices",
                "Redis",
                "Postgres",
            ],
            "responsibility": "Full-stack developer",
            "team_size": 8,
        },
        {
            "name": "KPMG Japan Co. Ltd",
            "period": "05/2021 - 12/2022",
            "business": "Website knowledge management",
            "technology": [
                "ReactJS with Typescript",
                "Webpack",
                "ReactJS mobx",
                "Python Django",
                "Postgres",
                "Docker",
                "Unit test with JEST and cypress",
                "Git",
            ],
            "responsibility": "Full-stack developer",
            "team_size": 6,
        },
        {
            "name": "WASD",
            "period": "12/2021 - 01/2021",
            "business": "Realtime chat online",
            "technology": [
                "ReactJS with Typescript",
                "Python Django",
                "Django Channels",
                "Postgres",
                "Docker",
                "Git",
            ],
            "responsibility": "Back-end developer",
            "team_size": 5,
        },
        {
            "name": "Inventory management",
            "period": "08/2021 - 12/2021",
            "business": "Inventory management",
            "technology": [
                "Ruby",
                "Ruby on rails",
                "ReactJS",
                "Docker",
                "Postgres",
                "Git",
                "meilisearch",
            ],
            "responsibility": "Full-stack developer",
            "team_size": 4,
        },
        {
            "name": "Kript",
            "period": "05/2021 - 08/2021",
            "business": "Blockchain",
            "technology": [
                "ReactJS with Typescript",
                "Vite",
                "ReactJS zustand for state management",
                "EthersJS",
                "Solidity",
                "Docker",
                "Git",
            ],
            "responsibility": "Full-stack developer",
            "team_size": 7,
        },
        {
            "name": "Student management",
            "period": "09/2020 - 12/2020",
            "business": "Manage and create schedule for student and teacher",
            "technology": [
                "Python",
                "Django",
                "Django rest framework",
                "VueJS",
                "VueX",
                "Docker",
                "Postgres",
                "Git"
            ],
            "responsibility": "Full-stack developer",
            "team_size": 5,
        }
    ];
    dataSkill: any = [
        {
            "name": "Python",
            "value": "1 year",
            "img": "/python.png",
        },
        {
            "name": "Django",
            "value": '1 year',
            "img": "/django.png"
        },
        {
            "name": "Ruby",
            "value": '1 year',
            "img": "/ruby.png"
        },
        {
            "name": "Ruby On Rails",
            "value": '1 year',
            "img": "/ruby_on_rails.png"
        },
        {
            "name": "Reactjs",
            "value": '1 year',
            "img": "/react.png"
        },
        {
            "name": "Bootstrap",
            "value": '1 year',
            "img": "/bootstrap.png"
        },
        {
            "name": "Git",
            "value": '1 year',
            "img": "/git.png"
        },
        {
            "name": "Reactjs",
            "value": '1 year',
            "img": "/react.png"
        },
        {
            "name": "Svelte",
            "value": '9 month',
            "img": "/svelte.png"
        },
        {
            "name": "PostgreSQL",
            "value": '8 month',
            "img": "/postgresql.png"
        },
        {
            "name": "MySQL",
            "value": '8 month',
            "img": "/mysql.png"
        },
        {
            "name": "NestJS",
            "value": '6 month',
            "img": "/nestjs.svg"
        },
        {
            "name": "PyQt5",
            "value": '6 month',
            "img": "/qt.png"
        },
        {
            "name": "Solidity",
            "value": '6 month',
            "img": "/solidity.svg"
        },
        {
            "name": "Angular",
            "value": '4 month',
            "img": "/angular.png"
        },
        {
            "name": "Golang",
            "value": '3 month',
            "img": "/go.png"
        },
        {
            "name": "VueJs",
            "value": '3 month',
            "img": "/vuejs.png"
        },
    ]

    dataTool: any = [
        "https://img.shields.io/badge/OS-Ubuntu-informational?style=social&logo=linux&cacheSeconds=3600",
        "https://img.shields.io/badge/Python Editor-Pycharm-informational?style=social&logo=pycharm&cacheSeconds=3600",
        "https://img.shields.io/badge/Web Editor-Webstorm-informational?style=social&logo=webstorm&cacheSeconds=3600",
        "https://img.shields.io/badge/Ruby Editor-Rubymine-informational?style=social&logo=ruby&cacheSeconds=3600",
        "https://img.shields.io/badge/Golang Editor-Goland-informational?style=social&logo=goland&cacheSeconds=3600",
        "https://img.shields.io/badge/Editor-VS_Code-informational?style=social&logo=visual-studio-code&cacheSeconds=3600",
        "https://img.shields.io/badge/Code-Python-informational?style=social&logo=python&cacheSeconds=3600",
        "https://img.shields.io/badge/Code-Ruby on rails-informational?style=social&logo=Ruby on Rails&cacheSeconds=3600",
        "https://img.shields.io/badge/Code-Solidity-informational?style=social&logo=Solidity&cacheSeconds=3600",
        "https://img.shields.io/badge/Code-JavaScript-informational?style=social&logo=javascript&cacheSeconds=3600",
        "https://img.shields.io/badge/Code-React-informational?style=social&logo=react&cacheSeconds=3600",
        "https://img.shields.io/badge/Code-Bootstrap-informational?style=social&logo=bootstrap&cacheSeconds=3600",
        "https://img.shields.io/badge/Tools-Git-informational?style=social&logo=github&cacheSeconds=3600",
        "https://img.shields.io/badge/Tools-Postman-informational?style=social&logo=postman&cacheSeconds=3600",
        "https://img.shields.io/badge/Database-PostgreSQL-informational?style=social&logo=postgresql&cacheSeconds=3600",
        "https://img.shields.io/badge/Database-MySql-informational?style=social&logo=MySql&cacheSeconds=3600",
        "https://img.shields.io/badge/Database-SQlite-informational?style=social&logo=SQlite&cacheSeconds=3600",
    ]

    age: string = '';
    setAge = (value: string) => {
        this.age = value;
    }

    calculateAge = () => {
        const dateString = '1999/12/26';
        const today = new Date();
        const birthDate = new Date(dateString);
        let age: any = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        this.setAge(age);
    }
}

export const appStore = new AppStore();
export const storeContext = React.createContext(appStore);
export const useAppStore = (): AppStore => React.useContext(storeContext);
