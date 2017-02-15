<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title><?php echo get_bloginfo( 'name' ); ?></title>
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />
    <meta name="viewport" content="width=device-width" />
    <meta name="description" content="<?php echo get_bloginfo( 'description' ); ?>" />
		<meta name="keywords" content="" />
		<meta name="author" content="" />
		<!-- <link rel="shortcut icon" href="<?php bloginfo('template_directory');?>/favicon.ico"> -->
		<% if (typeof DEBUG == 'undefined') { %><link href="<?php bloginfo('template_directory');?>/assets/css/bundle.css?<%= DIST_TIMESTAMP %>" rel="stylesheet" /><% } %>

    <?php wp_head();?>
	</head>
<body>
