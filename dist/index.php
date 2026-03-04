<?php require __DIR__ . '/functions.php'; ?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Vite + PHP</title>
    <?php 
      // echo vite_asset('main.js'); 
      ?>
    <script type="module" src="../../src/main.js"></script>
</head>
<body>
    <?php
      require __DIR__ . '/components/header/header.php';
    ?>
    <main>

    </main>
    <h1>Hello from PHP + Vite!</h1>
    <h2>
        this is the home page
    </h2>
    <?php
      require __DIR__ . '/components/footer/footer.php';
    ?>
</body>
</html>
