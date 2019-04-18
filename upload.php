<!DOCTYPE html>
<html>
<head>
  <!-- upload -->
    <meta charset="utf-8"/>
    <title></title>
<!--upload button image backgrounds-->
    <link rel="stylesheet" href=css/upload.css type="text/css">

  </head>
  <body>

<!--php upload code-->
        <?php
        $dbh = new PDO(mysql:host=$HOST;dbname=$DBNAME, $USERNAME, $PASSWORD);
        if (isset($_POST['btn'])){
          $name = $_FILES['myfile']['name'];
          $type = $_FILES['myfile']['type'];
          $data = file_get_contents($_FILES['myfile']['tmp_name']);
          $stmt = $dbh->prepare("insert into blobs values('',?,?,?)");
          $stmt->bindParam(1,$name);
          $stmt->bindParam(2,$type);
          $stmt->bindParam(3,$data);
          $stmt->execute();
        }
        ?>

<!--html that the upload php is referring to-->
    <form method="post" class="fabul" enctype="multipart/form-data">
      <input type="file" class="plants" name="myfile"/>
    </br>
      <button name='btn'>Upload</button>
    </form>
    <p></p>

<!--preview image, name, and id number once it's been uploaded and of everything in the database-->
  <ol>
      <?php
      $stat = $dbh->prepare("select * from blobs");
      $stat->execute();
      while($row = $stat->fetch()){
        echo"<li><a target='_blank' href='view.php?id=".$row['id']."'>".$row['name']."</a></br>
        <embed src='data:".$row['mime'].";base64,".base64_encode($row['data'])."' width='50'/></li>";
      }
      ?>
  </ol>
  </body>
