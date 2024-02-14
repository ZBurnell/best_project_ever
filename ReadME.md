# <br/>
<p align="center">
  <a href="https://github.com/ZBurnell/best_project_ever">
    <img src="client\sszm.jpg" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Zombie Survival AI</h3>

  <p align="center">
    In a destitute land full of decay and despair, you, along with this AI chatbot, are the last remaining survivors. With it, you may live to see another day.
    <br/>
    <br/>
  </p>
</p>

![Contributors](https://img.shields.io/github/contributors/ZBurnell/best_project_ever?color=dark-green) ![Issues](https://img.shields.io/github/issues/ZBurnell/best_project_ever) 

## Table Of Contents

* [About the Project](#about-the-project)
* [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Authors](#authors)

## About The Project

![Screen Shot](client\zmt.png)

It was decided that, seeing as the current technological trend is AI, it would be interesting and worthwhile to work with something that would be operated with said technology. Langchain, a framework that is for building applications based on large language models, makes it so that when used, it is provided trained and bound with certain context where it would allow the AI to only along the lines of the prompt that it has been given. In this case, the AI has been told it must be a survivor's helper in a zombie apocalypse and so it only answers as if this were entirely the case.

## Built With

LangChain, TailWind.css, MongoDB, OpenAi

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

NPM is needed for installation

* npm

```sh
npm install npm@latest -g
```

### Installation

1. Get a free API Key at [OpenAI](https://openai.com/)
2. Clone the repo
```sh
https://github.com/ZBurnell/best_project_ever
```
3. Install NPM packages
```sh
npm install
```
4. Enter your OpenAI API in `config.js`
```JS
const API_KEY = 'ENTER YOUR API';
```
5. Run NPM Build in Client
```sh
npm run build
```
6. Run NPM Start in Server
```sh
npm run start
```

## Usage

Ask any question that comes to mind, no matter how absurd. Although it may not be able to help with any zombified animal questions.
Apart from that, we highly recommend https://www.langchain.com/

## Authors

* **Zack Burnell** - *Student* - [Zack Burnell](https://github.com/ZBurnell) - *MongoDB and server side*
* **Joe Axe** - *Student* - [Joe Axe](https://github.com/jaxe93) - *Langchain, CSS and client side*
* **Maria Juan-Talledo** - *Student* - [Maria Juan-Talledo](https://github.com/MLauraJT) - *ReadME and server side*