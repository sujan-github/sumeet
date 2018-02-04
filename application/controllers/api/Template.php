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
class Template extends REST_Controller
{

    public function __construct()
    {
        // Construct the parent class
        parent::__construct();

        // Configure limits on our controller methods
        // Ensure you have created the 'limits' table and enabled 'limits' within application/config/rest.php
        $this->methods['template_get']['limit'] = 500; // 500 requests per hour per user/key
        $this->methods['template_post']['limit'] = 100; // 100 requests per hour per user/key
        $this->methods['template_delete']['limit'] = 50; // 50 requests per hour per user/key
    }

    public function template_get()
    {
        // Users from a data store e.g. database
        $this->load->model('template_model');

        $id = $this->get('id');
        // If the id parameter doesn't exist return all the users

        //Query parameters
        $query = array();
        if ($this->get('limit') != null) {
            $query['limit'] = $this->get('limit');
        } else {
            $query['limit'] = null;
        }

        if ($this->get('offset') != null) {
            $query['offset'] = $this->get('offset');
        } else {
            $query['offset'] = null;
        }

        if ($this->get('select') != null) {
            $query['select'] = $this->get('select');
        } else {
            $query['select'] = null;
        }

        if ($this->get('where') != null) {
            $query['where'] = $this->get('where');
        } else {
            $query['where'] = null;
        }

        if ($this->get('join') != null) {
            $query['join'] = $this->get('join');
        } else {
            $query['join'] = null;
        }

        if ($id === null) {
            $templateArray = $this->template_model->get_all($query);

            // Check if the users data store contains users (in case the database result returns NULL)
            if ($templateArray) {
                // Set the response and exit
                $this->response($templateArray, REST_Controller::HTTP_OK); // OK (200) being the HTTP response code
            } else {
                // Set the response and exit
                $this->response([
                    'status' => false,
                    'message' => 'No template were found',
                ], REST_Controller::HTTP_NOT_FOUND); // NOT_FOUND (404) being the HTTP response code
            }
        }

        // Find and return a single record for a particular user.

        $id = (int) $id;

        // Validate the id.
        if ($id <= 0) {
            // Invalid id, set the response and exit.
            $this->response(null, REST_Controller::HTTP_BAD_REQUEST); // BAD_REQUEST (400) being the HTTP response code
        }
        $this->load->model('template_model');

        $templateObject = $this->template_model->get_by_id($id, $query);

        if (!empty($templateObject)) {
            $this->set_response($templateObject, REST_Controller::HTTP_OK); // OK (200) being the HTTP response code
        } else {
            $this->set_response([
                'status' => false,
                'message' => 'template could not be found',
            ], REST_Controller::HTTP_NOT_FOUND); // NOT_FOUND (404) being the HTTP response code
        }
    }

    public function template_post()
    {
        $this->load->model('template_model');

        if ($this->post('Id')) {
            $data = [
                'Id' => $this->post('Id'),
                'Name' => $this->post('Heading'),
                'InnerHtml' => $this->post('Content'),
                'IsBlog' => $this->post('PageId'),
            ];

            if ($this->template_model->put($this->post('Id'), $data)) {
                $message = [
                    'message' => 'The update request was completed successfully.',
					'inserted_id' => $this->db->insert_id()
				];
                $this->set_response($message, REST_Controller::HTTP_OK); // CREATED (200) being the HTTP response code
            } else {
                $message = [
                    'message' => 'The update request could not be completed successfully.',
                ];
                $this->set_response($message, REST_Controller::HTTP_BAD_REQUEST); // BAD_REQUEST (400) being the HTTP response code
            }
        } else {
            $data = [
                'Name' => $this->post('Heading'),
                'InnerHtml' => $this->post('Content'),
                'IsBlog' => $this->post('PageId'),
            ];

            if ($this->template_model->post($data)) {
                $message = [
                    'message' => 'The insert request was completed successfully.',
					'inserted_id' => $this->db->insert_id()
				];
                $this->set_response($message, REST_Controller::HTTP_CREATED); // CREATED (201) being the HTTP response code
            } else {
                $message = [
                    'message' => 'The insert request could not be completed successfully.',
                ];
                $this->set_response($message, REST_Controller::HTTP_BAD_REQUEST); // BAD_REQUEST (400) being the HTTP response code
            }
        }
    }

    public function template_delete()
    {
        $id = (int) $this->get('id');

        // Validate the id.
        if ($id <= 0) {
            // Set the response and exit
            $this->response(null, REST_Controller::HTTP_BAD_REQUEST); // BAD_REQUEST (400) being the HTTP response code
        }

        $this->load->model('template_model');
        $this->template_model->delete($id);

        $message = [
            'id' => $id,
            'message' => 'Deleted the resource',
        ];

        $this->set_response($message, REST_Controller::HTTP_NO_CONTENT); // NO_CONTENT (204) being the HTTP response code
    }

}
