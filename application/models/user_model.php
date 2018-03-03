<?php
defined('BASEPATH') or exit('No direct script access allowed');

class User_model extends CI_Model
{
    public function get_all($query = null)
    {
        if ($query != null) {
            if ($query['select']) {
				$this->db->select($query['select']);
            } else {
                $this->db->select('*');
            }

            if ($query['limit']) {
                if (!$query['offset']) {
                    $query['offset'] = 0;
                }
                $this->db->limit($query['limit'], $query['offset']);
            }

            if ($query['where']) {
                $this->db->where($query['where']);
			}
			
			// if ($query['join']) {
			// 	$query['join'] = explode(',',$query['join']);
			// 	foreach($query['join'] as $item){
			// 		if(strtolower($item) == 'article'){
			// 			$this->db->join('article','article.UserId=User.Id','left');
			// 		}else if()

			// 	}
			// 	if($query['join'])

            //     $this->db->join('article','article.UserId=User.Id','left');
            // }
        }

        $query = $this->db->get('user');
        // echo $this->db->last_query();
        return $query->result_array();	
    }

    public function get_by_id($id, $query = null)
    {
        // $this->db->select('*');

        if ($query != null) {
            if ($query['select']) {
                $this->db->select($query['select']);
            } else {
                $this->db->select('*');
            }

            if ($query['limit']) {
                if (!$query['offset']) {
                    $query['offset'] = 0;
                }
                $this->db->limit($query['limit'], $query['offset']);
            }

            if ($query['where']) {
                $this->db->where($query['where']);
			}
			
			// if ($query['join']) {
            //     $this->db->join($query['join']);
            // }
        }
        $this->db->where('Id =', $id);

        $queryResult = $this->db->get('user');

        // print $this->db->last_query();
        return $queryResult->row();
    }

    public function put($id, $data)
    {
        $this->db->where('Id', $id);
        $query = $this->db->set($data);
        if ($query->update('user')) {
            return $data;
        } else {
            return false;
        }
    }

    public function post($data)
    {
        $query = $this->db->set($data);
        if ($query->insert('user')) {
            return $data;
        } else {
            return false;
        }
    }

    public function delete($id)
    {
        if ($this->db->delete('user', array('Id' => $id))) {
            return true;
        } else {
            return false;
        }
	}
	
	public function changeOldPassword($id, $oldPasswordHash){
		$this->load->library('bcrypt');

        $this->db->where('Id =', $id);
		$query = $this->db->get('user');

        $result = $query->row_array();

        // print_r($result);
        // echo $this->bcrypt->hash_password($password);

        if ($this->bcrypt->check_password($oldPasswordHash, $result['Password'])) {
            //We're good
            return $result;
        }else{
			return false;
		}
	}
}
