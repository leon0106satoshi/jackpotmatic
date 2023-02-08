<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>@yield('page-title') - {{ settings('app_name') }}</title>
    <meta name="description" content="@yield('page-title') - {{ settings('app_name') }}">
   
     
    <link rel="stylesheet" href="/css/bootstrap.min.css">
    <link rel="stylesheet" href="/css/welcome.css">

</head>

<body>

<div class="wrapper">
@yield('header')

<!-- MAIN -->
    <main class="main">
        @yield('content')
    </main>
    <!-- /.MAIN -->

    @yield('footer')
</div>
</body>
</html>
