<?php

include_once("database.php");
$postdata = file_get_contents("php://input");



  
$request = json_decode($postdata);
$lname = trim($request->lname);
$ram = mysqli_real_escape_string($mysqli, trim($request->ram));
$ssd = mysqli_real_escape_string($mysqli, trim($request->ssd));
$image=mysqli_real_escape_string($mysqli, trim($request->imag));







$sql = "INSERT INTO laptop (lname,ram,ssd,image) VALUES ('$lname','$ram','$ssd','$image')";
if ($mysqli->query($sql) === TRUE) {
$authdata = [
'lname' => $lname,
'ram' => $ram,
'ssd' => $ssd,
'image' => $image,
'Id' => mysqli_insert_id($mysqli)
];
echo json_encode($authdata);
}

else{
    echo "error";
}

?>