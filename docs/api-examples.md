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
