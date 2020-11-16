<?php
    
    class UserDTO {

        protected $type;
        protected $user_id;
        protected $login;
        protected $name;
        protected $password;
        protected $lastname;
        const TABLE_NAME = "utilisateur";


        /*----------------------------------------------------------
                         GET
        -------------------------------------------------------------*/

        public function getUsers(){
            return Config::get($this->getTableName());
        }

        public function getSpecifiqueParams($id, $paramsList){
            $query = "SELECT ";
            $compteur = 0;
            foreach ($paramsList as $param) {
                if($compteur++ == 0)
                    $query .= $param;
                else
                    $query .= ', '.$param;
            }
            $query .= ' FROM '.$this->getTableName().' WHERE user_id = :id';
            $toExecute = array(
                'id' => $id
            );
            echo $query;
            $state = Config::executeQuery($query, $toExecute);
            return $state;

        }

        public function getTableName(){
            return static::TABLE_NAME;
        }

        /*-------------------------------------------------- 
                        ADD
        ---------------------------------------------------*/
        public function insertUser($type,$identifier,$name,$login,$password){
           $bdd = Config::getConnection();
            $query = 'INSERT INTO '.$this->getTableName().'(type, identifier, name, login, password) values(:type,:identifier,:name,:login,:password)';
            $preparedQuery = $bdd->prepare($query);
            $preparedQuery->execute(array(
                'type' => $type,
                'identifier' => $identifier,
                'name' => $name,
                'login' => $login,
                'password' => md5($password)
            ));

           
        }

        /*---------------------------------------------------
                        UPDATE
        ----------------------------------------------------*/
        public function updateUser($id, $data){
            $query = 'UPDATE '.$this->getTableName().' SET';
            $sep = " ";
            foreach($data as $key => $val) {
                if( ! empty($val)) {
                    $query .= $sep . $key . " = '" .trim($val). "'";
                    $sep = ", ";
                }
            }

            $query = $query . "WHERE user_id = :id";
            $toExecute = array(
                'id' => $id
            );
            $state = Config::executeQuery($query,$toExecute);
            return $state;
        }
         /*---------------------------------------------------
                        Delete
        ----------------------------------------------------*/
        public function deleteUser($id){
            $query = 'DELETE FROM '.$this->getTableName().' WHERE user_id = :id';
            $toExecute = array(
                'id' => $id
            );
            $state = Config::executeQuery($query,$toExecute);
            return $state;
        }

    }