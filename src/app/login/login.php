<?php
session_start();

// Database connection parameters
$servername = "localhost";
$db_username = "your_db_username";
$db_password = "your_db_password";
$dbname = "mydatabase";

// Create connection
$conn = new mysqli($servername, $db_username, $db_password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Fetch login details from POST request
$user = $_POST['username'];
$pass = $_POST['password'];

// Prevent SQL injection
$user = $conn->real_escape_string($user);

// Fetch user details from database using prepared statements
$stmt = $conn->prepare("SELECT * FROM users WHERE username = ?");
$stmt->bind_param("s", $user);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    // Fetch associative array of the first result row
    $row = $result->fetch_assoc();

    // Verify password
    if (password_verify($pass, $row['password'])) {
        // Password is correct, start a session
        $_SESSION['loggedin'] = true;
        $_SESSION['username'] = $user;
        echo "Login successful! Welcome " . $_SESSION['username'];
        // Redirect to a different page
        // header("Location: welcome.php");
    } else {
        echo "Invalid password.";
    }
} else {
    echo "Invalid username.";
}

$stmt->close();
$conn->close();
?>
