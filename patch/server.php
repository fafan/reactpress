<?php
// execute with : php -S 127.0.0.1:8000 /your/full/path/server.php

$resource = __DIR__. $_SERVER['REQUEST_URI'];
$resource = rtrim(explode('?', $resource)[0], '/');
if (file_exists($resource)) {
    if (is_dir($resource)) {
        if (!file_exists($resource. '/index.php')) {
            return false;
        }
        require_once $resource. '/index.php';
    } else {
        return false;
    }
} else {
    $uri = explode('/', $_SERVER['REQUEST_URI']);
    if ($uri[1] == 'wp-content') {
        return false;
    }
    elseif ($uri[1] == 'api') {
        require_once __DIR__. '/index.php';
    }
    elseif (in_array($uri[1], ['theme-pressroom'])) {
        header('Location: /wp-content/themes/lc-blank/themes'.$_SERVER['REQUEST_URI']);
    }
    elseif (in_array($uri[2], ['theme-pressroom'])) {
        header('Location: /wp-content/themes/lc-blank/themes'. str_replace($uri[1], '', $_SERVER['REQUEST_URI']));
    }
    elseif (count($uri) > 3) {
        header("HTTP/1.0 404 Not Found");
    }
    else {
        require_once __DIR__. '/index.php';
    }
}
