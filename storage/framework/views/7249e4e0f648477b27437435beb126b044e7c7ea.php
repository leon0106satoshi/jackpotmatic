<?php $__env->startSection('page-title', trans('app.login')); ?>

<?php $__env->startSection('content'); ?>

  <?php echo $__env->make('backend.partials.messages', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
            
  
 <style>
 
button{
    background-color:  #ff7675;
    color:#2d3436;
    padding:5px;
    border:2px #d63031 solid;
    font-size:1.5em;
    border-radius: 5px;
    float: center;
}
</style>

  <form id="login" action="<?= route('frontend.auth.login.post') ?>" method="post" accept-charset="UTF-8">
      <div class="box">
          <div class="data col-xs-2">
              <input type="hidden" value="<?= csrf_token() ?>" name="_token">
              <label for="username">Username:</label><input class="form-control text-center" type="text" name="username" id="username" autocomplete="username" value=""> <br>
              <label for="password">Password:</label><input class="form-control text-center" type="password" name="password" id="password" autocomplete="current-password" value=""><br>
              
              <input class="btn btn-primary btn-block" style=" width: 304px;" type="submit" name="Submit" value="ENTER">
          </div>
      </div>
  </form>
 
 

<?php $__env->stopSection(); ?>

<?php $__env->startSection('scripts'); ?>
  <?php echo JsValidator::formRequest('VanguardLTE\Http\Requests\Auth\LoginRequest', '#login-form'); ?>

<?php $__env->stopSection(); ?>

<?php echo $__env->make('frontend.euroslots.layouts.auth', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH W:\domains\vladimir.com\resources\views/frontend//auth/login.blade.php ENDPATH**/ ?>