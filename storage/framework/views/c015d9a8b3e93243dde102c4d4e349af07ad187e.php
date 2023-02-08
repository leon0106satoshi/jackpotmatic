<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title><?php echo $__env->yieldContent('page-title'); ?> - <?php echo e(settings('app_name')); ?></title>
    <meta name="description" content="<?php echo $__env->yieldContent('page-title'); ?> - <?php echo e(settings('app_name')); ?>">
   
     
    <link rel="stylesheet" href="/css/bootstrap.min.css">
    <link rel="stylesheet" href="/css/welcome.css">

</head>

<body>

<div class="wrapper">
<?php echo $__env->yieldContent('header'); ?>

<!-- MAIN -->
    <main class="main">
        <?php echo $__env->yieldContent('content'); ?>
    </main>
    <!-- /.MAIN -->

    <?php echo $__env->yieldContent('footer'); ?>
</div>
</body>
</html>
<?php /**PATH W:\domains\vladimir.com\resources\views/frontend/euroslots/layouts/auth.blade.php ENDPATH**/ ?>