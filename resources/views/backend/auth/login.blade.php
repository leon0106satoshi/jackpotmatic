@extends('frontend.euroslots.layouts.auth')

@section('page-title', trans('app.login'))

@section('content')

  @include('backend.partials.messages')
            
  
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
              <span>REMEMBER ME</span>
              <input type="checkbox" name="rememberme" value="rememberme" checked="" class="form-control"><br>
              <input class="btn btn-primary btn-block" style=" width: 304px;" type="submit" name="Submit" value="ENTER">
          </div>
      </div>
  </form>
  




@stop

@section('scripts')
  {!! JsValidator::formRequest('VanguardLTE\Http\Requests\Auth\LoginRequest', '#login-form') !!}
@stop
