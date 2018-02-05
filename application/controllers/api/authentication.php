<?php

defined('BASEPATH') or exit('No direct script access allowed');

// This can be removed if you use __autoload() in config.php OR use Modular Extensions
/** @noinspection PhpIncludeInspection */
require APPPATH . 'libraries/REST_Controller.php';

/**
 * This is an example of a few basic user interaction methods you could use
 * all done with a hardcoded array
 *
 * @package         CodeIgniter
 * @subpackage      Rest Server
 * @category        Controller
 * @author          Phil Sturgeon, Chris Kacerguis
 * @license         MIT
 * @link            https://github.com/chriskacerguis/codeigniter-restserver
 */
class Authentication extends REST_Controller
{

    public function __construct()
    {
        // Construct the parent class
        parent::__construct();

        // Configure limits on our controller methods
        // Ensure you have created the 'limits' table and enabled 'limits' within application/config/rest.php
        $this->methods['authentication_post']['limit'] = 100; // 100 requests per hour per user/key
    }

    public function authentication_post()
    {
        $this->load->model('authentication_model');
		$user = $this->authentication_model->check_user_exist($this->post('UserName'), $this->post('Password'));
        if ($user != null) {
            $this->set_response($user, REST_Controller::HTTP_OK); // Ok (200) being the HTTP response code
        } else {
            $message = [
                'message' => 'Login failed.',
            ];
            $this->set_response($message, REST_Controller::HTTP_BAD_REQUEST); // BAD_REQUEST (400) being the HTTP response code
        }
    }

}
