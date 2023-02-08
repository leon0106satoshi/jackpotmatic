<!doctype html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="/frontend/euroslots/js/jquery-3.4.1.min.js"></script>

    <title>@yield('page-title') - {{ settings('app_name') }}</title>
    <link rel="stylesheet" type="text/css" href="/frontend/euroslots/css/toastr.min.css">

    @yield('header-scripts')
</head>
<body class="auth">

    <div class="container">
        @yield('content')
    </div>

    @yield('scripts')
</body>
<script src="/frontend/euroslots/js/toastr.min.js"></script>
<script>
    @foreach ($errors->all() as $error)

    toastr.error("{{$error}}");

    @endforeach
</script>
</html>
