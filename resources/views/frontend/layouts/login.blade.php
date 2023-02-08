@extends('frontend.layouts.auth')

@section('page-title', trans('app.login'))

@section('content')

<form id="login-form" action="<?= route('frontend.auth.login.post') ?>" method="post" accept-charset="UTF-8">
  <input type="hidden" value="<?= csrf_token() ?>" name="_token">
    <div class="box">
		
        <div class="data col-xs-2">
            <label for="username">@lang('app.email_or_username'):</label>
            <input class="form-control text-center" type="text" name="username" id="username" autocomplete="username" value=""> <br>
            <label for="password">@lang('app.password'):</label>
            <input class="form-control text-center" type="password" name="password" id="password" autocomplete="current-password" value=""><br>

	
            <input class="btn btn-primary btn-block" style=" width: 304px;" type="submit" name="Submit" value="@lang('app.enterb_login')">
        </div>
    </div>
</form>

    @if(isset ($messages) && count($messages) > 0)

<script>console.log("{!!  $messages[array_rand($messages)];  !!}")</script>

    @endif


@if(isset ($errors) && count($errors) > 0)
        <script>
        @foreach($errors->all() as $error)
            console.log("xxx {{ $error }}")
        @endforeach
    </script>
@endif
@stop
