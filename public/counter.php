<?php
// Get the value of the 'is_active' query parameter
$is_add = isset($_GET['add']) ? filter_var($_GET['add'], FILTER_VALIDATE_BOOLEAN) : false;

// Define the file where the counter will be stored
$counter_file = 'counter.txt';

// Check if the counter file exists. If not, create it and initialize the count.
if (!file_exists($counter_file)) {
    file_put_contents($counter_file, '0');
}

// Read the current count from the file
$count = (int)file_get_contents($counter_file);

if ($is_add) {
  // Increment the count by 1
  $count++;
  // Save the new count back to the file
  file_put_contents($counter_file, $count);
}

// header('Content-type: application/json');
// echo json_encode(array("message"=>"Button clicked $count times!"));
// Display the current click count
// echo "Button clicked $count times!";
echo $count;
?>