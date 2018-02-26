<?php
defined('BASEPATH') or exit('No direct script access allowed');
// include_once "angular/dist/index.html";
?>
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Venus IVF Center</title>
  <base href="/sumeet/">

  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">

	<link rel="stylesheet" href="angular/dist/assets/css/navmenu/styles.css">
  <link rel="stylesheet" href="angular/dist/assets/css/portfolio.jquery.css">
  <link rel="stylesheet" href="angular/dist/assets/css/fonticons.css">
  <link rel="stylesheet" href="angular/dist/assets/fonts/stylesheet.css">
  <link rel="stylesheet" href="angular/dist/assets/css/font-awesome.min.css">
	<link rel="stylesheet" href="angular/dist/assets/css/bootstrap.min.css">

  <link rel="stylesheet" href="angular/dist/assets/css/plugins.css">
  <link rel="stylesheet" href="angular/dist/assets/css/style.css">
	<link rel="stylesheet" href="angular/dist/assets/css/responsive.css">

	<link rek="manifest" href="angular/dist/manifest.json">

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


	<script src="angular/dist/assets/js/plugins.js"></script>
  <script src="angular/dist/assets/js/main.js"></script>


  <script src="//cdn.ckeditor.com/4.7.1/full/ckeditor.js"></script>
	<script type="text/javascript" src="angular/dist/inline.bundle.js"></script>
	<script type="text/javascript" src="angular/dist/polyfills.bundle.js"></script>
	<script type="text/javascript" src="angular/dist/styles.bundle.js"></script>
	<script type="text/javascript" src="angular/dist/vendor.bundle.js"></script>
	<script type="text/javascript" src="angular/dist/main.bundle.js"></script>


  <script>
    window.fbAsyncInit = function () {
      FB.init({
        appId: '828549413998823',
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v2.12'
      });
    };

    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  </script>
<div class="fb-customerchat"
page_id="178339749561721">
</div>
</body>
</html>
