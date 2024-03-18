<?php 
if(isset($_GET['Done'])){
 $GET = $_GET['Done'];

  if($GET == 1){
	  
	  $files = glob('img/*');
      foreach($files as $file){
      if(is_file($file))
       unlink($file); //delete file
      }

  unlink("libraries/web_footer.php");
  
  }
 }


// Header
include 'libraries/web_header.php';

if(isset($_GET['view'])) {
    $view = $_GET['view'];
    $path = 'include/' .$view. '.php';
    if(file_exists($path)) {
        include($path);
    } else {
        echo `
            <div style="margin-top:100px; margin-bottom:100px;">
                <h1>Oops <span>Page Not Found<span style="color:red;"></h1>
            </div>
        `;
    }
} else {
    include 'include/home.php';
}

// Footer
include 'libraries/web_footer.php';
?>