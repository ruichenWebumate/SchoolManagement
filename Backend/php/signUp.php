<?php

header('Content-Type', 'application/json');

header('Access-Control-Allow-Origin: ' . $_SERVER['HTTP_ORIGIN']);
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

$servername = "localhost";
$username = "ruichen";
$password = "12345678";
$dbname = "school";

// 创建连接
$conn = new mysqli($servername, $username, $password, $dbname);
// 检测连接
if ($conn->connect_error) {
    die("连接失败: " . $conn ->connect_error);
}

$postData = file_get_contents("php://input");
$signUpInformation = json_decode($postData);

// $studentId = '9999';
// $name = 'test';
// $email = 'a@a.com';
// $classEnrolled = '';
// $username = 'test';
// $password = 'test';

$studentId = $signUpInformation->student->StudentId;
$name = $signUpInformation->student->Name;
$email = $signUpInformation->student->Email;
$classEnrolled = '';
$username = $signUpInformation->loginInformation->username;
$password = $signUpInformation->loginInformation->password;


$sql = "CREATE TABLE IF NOT EXISTS Student (
    StudentId VARCHAR(50) PRIMARY KEY, 
    Name VARCHAR(50) NOT NULL,
    Email VARCHAR(50) NOT NULL,
    ClassEnrolled VARCHAR(254)
    )";

if ($conn->query($sql) === TRUE) {
    // echo "Table Student created successfully";
} else {
    echo "创建数据表 student 错误: " . $conn->error;
}

$sql = "CREATE TABLE IF NOT EXISTS Login (
    username VARCHAR(50) PRIMARY KEY, 
    password VARCHAR(254),
    StudentId VARCHAR(50)
    )";

if ($conn->query($sql) === TRUE) {
    // echo "Table Login created successfully";
} else {
    echo "创建数据表 login 错误: " . $conn->error;
}

$stmt = $conn->prepare("INSERT INTO Student (StudentId, Name, Email, ClassEnrolled) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $studentId, $name, $email, $classEnrolled);
$stmt->execute();

$stmt = $conn->prepare("INSERT INTO Login (username, password, StudentId) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $username, $password, $studentId);
$stmt->execute();

echo json_encode(array(
    "status" => true,
    "message" => "insert succeed"
));

$conn->close();