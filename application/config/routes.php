<?php
defined('BASEPATH') or exit('No direct script access allowed');

/*
| -------------------------------------------------------------------------
| URI ROUTING
| -------------------------------------------------------------------------
| This file lets you re-map URI requests to specific controller functions.
|
| Typically there is a one-to-one relationship between a URL string
| and its corresponding controller class/method. The segments in a
| URL normally follow this pattern:
|
| example.com/class/method/id/
|
| In some instances, however, you may want to remap this relationship
| so that a different class/function is called than the one
| corresponding to the URL.
|
| Please see the user guide for complete details:
|
| https://codeigniter.com/user_guide/general/routing.html
|
| -------------------------------------------------------------------------
| RESERVED ROUTES
| -------------------------------------------------------------------------
|
| There are three reserved routes:
|
| $route['default_controller'] = 'welcome';
|
| This route indicates which controller class should be loaded if the
| URI contains no data. In the above example, the "welcome" class
| would be loaded.
|
| $route['404_override'] = 'errors/page_missing';
|
| This route will tell the Router which controller/method to use if those
| provided in the URL cannot be matched to a valid route.
|
| $route['translate_uri_dashes'] = FALSE;
|
| This is not exactly a route, but allows you to automatically route
| controller and method names that contain dashes. '-' isn't a valid
| class or method name character, so it requires translation.
| When you set this option to TRUE, it will replace ALL dashes in the
| controller and method URI segments.
|
| Examples: my-controller/index -> my_controller/index
|   my-controller/my-method -> my_controller/my_method
 */
$route['default_controller'] = 'welcome';
$route['404_override'] = '';
$route['translate_uri_dashes'] = true;

/*
| -------------------------------------------------------------------------
| Sample REST API Routes
| -------------------------------------------------------------------------
 */
$route['api/example/users/(:num)'] = 'api/example/users/id/$1'; // Example 4
$route['api/example/users/(:num)(\.)([a-zA-Z0-9_-]+)(.*)'] = 'api/example/users/id/$1/format/$3$4'; // Example 8

$route['api/menu'] = 'api/menu/menu'; // Example 4
$route['api/menu/(:num)'] = 'api/menu/menu/id/$1'; // Example 4
$route['api/menu/(:num)(\.)([a-zA-Z0-9_-]+)(.*)'] = 'api/menu/menu/id/$1/format/$3$4'; // Example 8

$route['api/blog'] = 'api/blog/blog'; // Example 4
$route['api/blog/(:num)'] = 'api/blog/blog/id/$1'; // Example 4
$route['api/blog/(:num)(\.)([a-zA-Z0-9_-]+)(.*)'] = 'api/blog/blog/id/$1/format/$3$4'; // Example 8

$route['api/image'] = 'api/image/image'; // Example 4
$route['api/image/(:num)'] = 'api/image/image/id/$1'; // Example 4
$route['api/image/(:num)(\.)([a-zA-Z0-9_-]+)(.*)'] = 'api/image/image/id/$1/format/$3$4'; // Example 8

$route['api/page'] = 'api/page/page'; // Example 4
$route['api/page/(:num)'] = 'api/page/page/id/$1'; // Example 4
$route['api/page/(:num)(\.)([a-zA-Z0-9_-]+)(.*)'] = 'api/page/page/id/$1/format/$3$4'; // Example 8

$route['api/template'] = 'api/template/template'; // Example 4
$route['api/template/(:num)'] = 'api/template/template/id/$1'; // Example 4
$route['api/template/(:num)(\.)([a-zA-Z0-9_-]+)(.*)'] = 'api/template/template/id/$1/format/$3$4'; // Example 8

$route['api/user'] = 'api/user/user'; // Example 4
$route['api/user/(:num)'] = 'api/user/user/id/$1'; // Example 4
$route['api/user/(:num)(\.)([a-zA-Z0-9_-]+)(.*)'] = 'api/user/user/id/$1/format/$3$4'; // Example 8

$route['api/setup'] = 'api/setup/setup'; // Example 4
$route['api/setup/(:num)'] = 'api/setup/setup/id/$1'; // Example 4
$route['api/setup/(:num)(\.)([a-zA-Z0-9_-]+)(.*)'] = 'api/setup/setup/id/$1/format/$3$4'; // Example 8

$route['api/authentication'] = 'api/authentication/authentication'; // Example 4
