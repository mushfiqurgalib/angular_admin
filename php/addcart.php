<?php

include_once("database.php");
$postdata = file_get_contents("php://input");



  
$request = json_decode($postdata);
$Id = trim($request->UserId);
$mobile = mysqli_real_escape_string($mysqli, trim($request->Phone_Number));
$cart = mysqli_real_escape_string($mysqli, trim($request->Cart));







$sql = "INSERT INTO cart (UserId,Phone_Number,Cart) VALUES ('$Id','$mobile','$cart')";
if ($mysqli->query($sql) === TRUE) {
$authdata = [
'Id' => $Id,
'Phone_Number' => $mobile,
'Cart' => $cart,

];
echo json_encode($authdata);
}

else{
    echo "error";
}

?>