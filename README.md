# Nex-cli by Codetanna

This is a cli tool to help you when building your node applications

* Installation
* Quick Start
* Commands

## Installation

```
npm i @codetanna/nex-cli
```

## Quick Start

1. Create a new project

```
  npx cli create <project_name>
```

2. CD into project directory

   ```
   cd <project_name>
   ```
3. Install packages

   ```
   npm i
   ```
4. Start project

   ```
   npm start
   ```

## Commands

Create

* This command is used to create a new project

```
npx cli create <project_name>
```

Add model

* This command allows you to add a model to your project

  ```
  npx cli add:model <project_name>

  ```

Add controller

* This command allows you  to add a controller to your project

  ```
  cli add:controller <controller_name>
  ```

Add route

* This command allows you to add a route to your project

  ```
  cli add:route <route_name>
  ```

Add service

* This command allows you to add a service to your project

  ```
  cli add:service <service_name>
  ```

## Using flags

* Create project with ejs

  ```
  cli create <project_name> -e
  ```
  ```
  cli create <project_name> --ejs
  ```

* Create project for javascript backend 

  ```
  cli create <project_name> -j
  ```
  ```
  cli create <project_name> -js
  ```

* Create project for typescript backend 
  ```
  cli create <project_name> -t
  ```
  ```
  cli create <project_name> -ts
  ```

* Opening man page for any of our commands
  ```
  cli add -h
  ```
  ```
  cli add --help
  ```

## Authors

Emmanuel Gyang [LinkedIn Account](https://www.linkedin.com/in/emmanuel-gyang/) <irvingmanny@gmail.com>
