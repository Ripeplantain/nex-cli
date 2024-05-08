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
  npx cli add:controller <controller_name>
  ```

Add route

* This command allows you to add a route to your project

  ```
  npx cli add:route <route_name>
  ```

Add service

* This command allows you to add a service to your project

  ```
  npx cli add:service <service_name>
  ```

## Using flags

* Create project with ejs

  ```
  npx cli create <project_name> -e
  ```
  ```
  npx cli create <project_name> --ejs
  ```

* Create project for javascript backend 

  ```
  npx cli create <project_name> -js
  ```
  ```
  npx cli create <project_name> --javascript
  ```

* Create project for typescript backend 
  ```
  npx cli create <project_name> -t
  ```
  ```
  npx cli create <project_name> --typescript
  ```

* Opening man page for any of our commands
  ```
  npx cli add -h
  ```
  ```
  npx cli add --help
  ```

## Authors

Emmanuel Gyang [LinkedIn Account](https://www.linkedin.com/in/emmanuel-gyang/) <irvingmanny@gmail.com>
