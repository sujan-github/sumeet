<?php
defined('BASEPATH') or exit('No direct script access allowed');

class authentication_model extends CI_Model
{
	public function check_user_exist($username, $password){
		$this->load->library('bcrypt');
		$query = $this->db->query("SELECT Id, FullName, UserName, Email, Password FROM User WHERE UserName = '$username';");

		$result = $query->row_array();

		// print_r($result);
		// echo $this->bcrypt->hash_password($password);

		if ($this->bcrypt->check_password($password, $result['Password'])) {
			//We're good
			return $result;
		}
	}
}
