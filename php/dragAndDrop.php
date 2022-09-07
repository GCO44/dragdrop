<?php

if ($_FILES["file"]["error"] === 0 ){

    $extends = $_POST['type']== "" ? "[a-zA-Z]{3,4}" : str_replace( ",", "|",$_POST['type']);

    if(!preg_match('/\.('.$extends.')$/',$_FILES['file']['name'])){

        $error = true;
        $errorType = 'Erreur extention fichier !'; 
        $target = null;

    }else{

        move_uploaded_file($_FILES["file"]["tmp_name"], $_POST['target'].basename($_FILES["file"]["name"])); 
        $error = false;
        $errorType = false; 
        $target = $_POST['target'].basename($_FILES["file"]["name"]);
    }

}else{
    $errorType = 'Erreur de chargement !'; 
    $error = true; 
    $target = null;
}

unset($_FILES['file']) ; 

echo json_encode(array('error'=>$error,'error_type'=>$errorType,'target_save'=>$target));


?>