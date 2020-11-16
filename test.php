<?php
 require 'persistances/dto/UserDTO.class.php';
 require 'model/Config.class.php';
 $userManagement = new UserDTO();
 $result = $userManagement->getSpecifiqueParams(2,['name','type','login']);
 
?>