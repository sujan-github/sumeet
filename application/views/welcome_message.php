<?php
defined('BASEPATH') or exit('No direct script access allowed');
?>

<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Angular</title>
  <base href="/sumeet/">

  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">

	<link rel="stylesheet" href="angular/dist/assets/css/navmenu/styles.css">
  <link rel="stylesheet" href="angular/dist/assets/css/portfolio.jquery.css">
  <link rel="stylesheet" href="angular/dist/assets/css/fonticons.css">
  <link rel="stylesheet" href="angular/dist/assets/css/style.css">
  <link rel="stylesheet" href="angular/dist/assets/fonts/stylesheet.css">
  <link rel="stylesheet" href="angular/dist/assets/css/font-awesome.min.css">
	<link rel="stylesheet" href="angular/dist/assets/css/bootstrap.min.css">
	

</head>
<body>
	<app-root></app-root>

	<script src="angular/dist/assets/js/vendor/jquery-1.11.2.min.js"></script>
  <script src="angular/dist/assets/js/vendor/bootstrap.min.js"></script>

  <script src="angular/dist/assets/js/jquery.easypiechart.min.js"></script>
	<script src="angular/dist/assets/js/portfolio.jquery.js"></script>
  <script src="angular/dist/assets/js/jquery.mixitup.min.js"></script>
  <script src="angular/dist/assets/js/jquery.easing.1.3.js"></script>
  <script src="angular/dist/assets/js/jquery.slicknav.min.js"></script>
  
	<!--This is link only for gmaps-->
  <script src="http://maps.google.com/maps/api/js"></script>
  <script src="angular/dist/assets/js/gmaps.min.js"></script>
  <script>
  	var map = new GMaps({
    	el: '.ourmaps',
      scrollwheel: false,
      lat: -12.043333,
			lng: -77.028333
    });
  </script>

	<script src="angular/dist/assets/js/plugins.js"></script>
  <script src="angular/dist/assets/js/main.js"></script>


  <script src="//cdn.ckeditor.com/4.7.1/full/ckeditor.js"></script>
	<script type="text/javascript" src="angular/dist/inline.bundle.js"></script>
	<script type="text/javascript" src="angular/dist/polyfills.bundle.js"></script>
	<script type="text/javascript" src="angular/dist/styles.bundle.js"></script>
	<script type="text/javascript" src="angular/dist/vendor.bundle.js"></script>
	<script type="text/javascript" src="angular/dist/main.bundle.js"></script>

</body>
</html>
