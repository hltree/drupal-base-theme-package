# Drupal Base Theme Package

## About

This is Drupal BaseTheme Package.

## Support

Drupal 8.x

## Installation

1: Run git clone
```
// Use SSH
$ git clone git@github.com:hltree/drupal-base-theme-package.git

// Use Https
$ git clone https://github.com/hltree/drupal-base-theme-package.git 
```

2: Make custom directory in themes
```
$ mkdir #{Drupal_Root}/themes/custom
```

3: Move base directory
```
$ mv base #{Drupal_Root}/themes/custom
``` 

4: Check!
```
// in Drupal root
$ cd #{Drupal_Root}/themes
$ tree

    #{root}
    |-- themes
        |-- custom 
            |-- base
                |-- base.info.yml
                |-- base.libraries.yml
                |-- readme.md
                ...etc

```

## Requirement

Drupal 8.x
<br />
PHP 7.x

## Develop

Requirement

Docker

```
$ cp .env-sample .env
$ docker-compose up -d
```
