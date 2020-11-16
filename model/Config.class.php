<?php

class Config{

    private static $dbName = "sen_news";
    private static $userName = "root";
    private static $password = "";
    private static $host = "localhost";
    protected static $bdd;
    static function getConnection(){
        $bddtemp = null;
        try {
            echo self::$dbName.' '.self::$userName;
            $bddtemp = new PDO('mysql:host='.self::$host.';dbname='.self::$dbName,self::$userName,self::$password);
        } catch (Exception $th) {
           echo 'Error de connexion : '.$th;
        }
        static::$bdd = $bddtemp;
        return static::$bdd;
    }
    
    static public function getdbConnection(){
        return static::getConnection();
    }
    static function prepareQuery($query){
        if(static::getdbConnection() != null){
            return static::$bdd->prepare($query);
        }
        else{
            return false;
        }
    }

    public static function get($tableName){
        $query = 'SELECT * FROM '.$tableName;
        return static::executeQuery($query);       
    }

    static function executeQuery($query, $data = null){
        if(static::getdbConnection() != null){
            if($data == null){
                return static::getdbConnection()->exec($query);
            }
            else{
                $prepared = static::prepareQuery($query);
                $prepared->execute($data);
                return $prepared;
            }
        }
        else{
            return false;
        }
    }
}
