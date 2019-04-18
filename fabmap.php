<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
    <title></title>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/p5.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/addons/p5.dom.min.js"></script>
    <link rel="stylesheet" href=css/fabmap.css type="text/css">

</head>
<body>
        <?php
        $dbh = new PDO(mysql:host=$HOST;dbname=$DBNAME, $USERNAME, $PASSWORD);
        ?>
    <p></p>
    <ol>
        <?php
        $stat = $dbh->prepare("select * from blobs");
        $stat->execute();
        while($row = $stat->fetch()){
          echo"<img src='data:".$row['mime'].";base64,".base64_encode($row['data'])."' width='50'/>";
        }
        ?>
    </ol>
<script type="text/javascript" src="js/createArray.js"></script>
<script type="text/javascript" src="js/fabmap.js"></script>
  </body>
