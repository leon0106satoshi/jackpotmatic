<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Vltcash</title>
</head>
<body>

<style>
    td{padding: 10px; background: #9dc1d3;
	margin:15px;
	font-family:roboto;
	font-weight:bold;}
	th { font-family:roboto}
</style>

<h1 style="text-align: center; font-family:roboto;">Shop: {{$shop->name}}</h1>
<div id="current_date"></p>
<script>
document.getElementById("current_date").innerHTML = Date();
</script>
<h2 style="text-align: center; font-family:roboto;">User: <span style="color:blue">{{$user->username}}</span></h2>
<hr style="height:2px; width:100%; border-width:0; color:red; background-color:black">
<table style="margin: auto; width:750px; text-align:center;">
    <thead>
    <tr>
        <th>TOTAL IN</th>
        <th>TOTAL OUT</th>
        <th>PROFIT</th>
    </tr>
    </thead>
    <tbody>
    <td>{{$user->total_in}}</td>

    <td>{{$user->total_out}}</td>

    <td>{{$user->total_in - $user->total_out}}</td>

    </tbody>
</table>
<hr style="height:2px; width:100%; border-width:0; color:red; background-color:black">
</body>
</html>
