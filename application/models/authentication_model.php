<?php
defined('BASEPATH') or exit('No direct script access allowed');

class authentication_model extends CI_Model
{
	public function check_user_exist($username, $password){
		$this->load->library('bcrypt');
		$query = $this->db->query("SELECT Id, FullName, UserName, Email, Password FROM users WHERE UserName = '$username';");

		$result = $query->row_array();

		if ($this->bcrypt->check_password($password, $result['password'])) {
			//We're good
			return $result;
		}
	}
}
