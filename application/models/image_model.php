<?php
defined('BASEPATH') or exit('No direct script access allowed');

class image_model extends CI_Model
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
        }

        $query = $this->db->get('image');
        // echo $this->db->last_query() ;
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
        }
        $this->db->where('Id =', $id);

        $queryResult = $this->db->get('image');

        // print $this->db->last_query();
        return $queryResult->result_array();
    }

    public function put($id, $data)
    {
        $this->db->where('Id', $id);
        $query = $this->db->set($data);
        if ($query->insert('image')) {
            return $data;
        } else {
            return false;
        }
    }

    public function post($data)
    {
        $query = $this->db->set($data);
        if ($query->insert('image')) {
            return $data;
        } else {
            return false;
        }
    }

    public function delete($id)
    {
        if ($this->db->delete('image', array('Id' => $id))) {
            return true;
        } else {
            return false;
        }
    }
}
