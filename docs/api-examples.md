# How to Use Nex-Cli

## Create Project

Create a new project with Nex CLI.

```
npx cli create <project_name>

```

## Add Model

Add a model to your project

```
npx cli add:model <model_name>

```

## Add Controller

Add a controller to your project

```
npx cli add:controller <controller_name>

```

## Add Route

Add a route to your project.

```
npx cli add:route <route_name>

```

## Add Service

Add a service to your project

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
  npx cli create <project_name> -ts
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
