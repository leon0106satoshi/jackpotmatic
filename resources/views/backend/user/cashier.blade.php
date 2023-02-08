

	<section class="content-header">
		@include('backend.partials.messages')
	</section>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="vwXnVpdRsqJFELE3QvgSjzLSVUTqvn8GM8fUCqNs">

    <title> Cashier </title>

    <link rel="stylesheet" href="/cashier/css/bootstrap.min.css?v=2.0">
    <link rel="stylesheet" href="/cashier/css/dataTables.bootstrap.min.css?v=2.0">
    <link rel="stylesheet" href="/cashier/css/alertify.css?v=2.0">
    <link rel="stylesheet" href="/cashier/css/pisoglentis.min.css?v=2.0">
    <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.18/themes/ui-lightness/jquery-ui.css">
    <link href="/cashier/css/jquery-ui-timepicker-addon.css?v=2.0" rel="stylesheet">
    <link href="/cashier/css/font-awesome.min.css?v=2.0" rel="stylesheet">

    <!-- Scripts -->
    <script>
        window.Laravel = {
           "csrfToken":"vwXnVpdRsqJFELE3QvgSjzLSVUTqvn8GM8fUCqNs"
        };
    </script>
    <style>
        table.shift tbody {
        display: block;
        max-height: 200px;
        overflow-y: scroll;
        }

        table.shift thead, table.shift tbody tr {
        display: table;
        width: 100%;
        table-layout: fixed;
        }
    </style>
</head>
@php
    $open_shift = \VanguardLTE\OpenShift::where(['shop_id' => auth()->user()->shop_id, 'end_date' => NULL])->first();
@endphp
<!-- LOADING -->
<div id="pleaseWait" class="centerPage">
    <div class="table">
        <div class="td">
            <div class="cont">
                <img src="/cashier/img/loading.gif" class="img-responsive logo-image" alt="GGshop">
            </div>
        </div>
    </div>
</div>

<!-- LOADING FULL PAGE ON LOAD  -->
<div id="loadingFullPage" class="centerPage" style="display: block;  position: fixed; top: 0; left: 0; width: 100%; height: 100%;z-index: 9999999; background-color: rgb(24, 24, 24);">
    <div class="table">
        <div class="td">
            <div class="cont">
                <img src="/cashier/img/200.gif" class="img-responsive logo-image" alt="GGshop">
            </div>
        </div>
    </div>
</div>
<script type="text/javascript">
    document.getElementById("loadingFullPage").style.display ="none";
</script>
<header>
    <nav class="navbar navbar-default navbar-default-top" id="topNavBar">
        <div class="container-fluid">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed nav-bar-top" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
                <button type="button" class="navbar-toggle pull-left top-nav-panic" onclick="panic();">
                Panic
            </button>
            </div>
            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right" style="margin-left: 10px;">
                    <li><a href="{{route('backend.cashier')}}"><strong>REFRESH</strong></a></li>
                    <li class="navbar-left hidden-xs"><a href="{{route('backend.cashier')}}"> Cashier </a></li>
                    <li class="dropdown navbar-right nav-bar-top">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{{auth()->user()->username}}<span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <!-- <li><a href="/cashier/profile">Profile</a></li> -->
                            <!-- <form action="/cashier/clear/transactions" id="clearLogsForm"></form> -->
                            <!-- <li><a id="clearlogs" href="#">Delete logs</a></li> -->
                            <li><a href="#" id="navnewplayer">New player</a></li>
                            @if($open_shift)
                            <li><a href="#" id="shiftnav" data-toggle="modal" data-target="#openShiftModal">Shifts</a></li>
                            @else
                            <li><a href="{{ route('backend.start_shift') }}"> @lang('app.start_shift')</a></li>
                            @endif
                            <!-- <li role="separator" class="divider"></li> -->
                            <!-- <li><a href="/cashier/history">History</a></li> -->

                            <li role="separator" class="divider"></li>
                            <li><a href="{{route('backend.auth.logout')}}">Logout</a></li>
                        </ul>
                    </li>
                    <!-- <li class="dropdown navbar-left nav-bar-top">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                        English
                        <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="/cashier/en"><img style="height: 15px;"
                                                             src="/cashier/images/uk.ico">English</a>
                            </li>
                            <li><a href="/cashier/gr"><img style="height: 15px;"
                                                             src="/cashier/images/gr.png">Greek</a></li>
                            <li><a href="/cashier/de"><img style="height: 15px;"
                                                             src="/cashier/images/de.png">German</a>
                            </li>
                            <li><a href="/cashier/it"><img style="height: 15px;"
                                                             src="/cashier/images/it.png">Italian</a>
                            </li>
                            <li><a href="/cashier/al"><img style="height: 15px;"
                                                             src="/cashier/images/al.png">Albanian</a>
                            </li>
                            <li><a href="/cashier/ba"><img style="height: 15px;"
                                                             src="/cashier/images/ba.png">Bosnia</a>
                            </li>
                            <li><a href="/cashier/ru"><img style="height: 15px;"
                                                             src="/cashier/images/ru.png">Russian</a>
                            </li>
                            <li><a href="/cashier/es"><img style="height: 15px;"
                                                             src="/cashier/images/es.png">Spanish</a>
                            </li>
                            <li><a href="/cashier/tr"><img style="height: 15px;"
                                                             src="/cashier/images/tr.png">Turkish</a>
                            </li>
                        </ul>
                    </li> -->
                    <!-- <li class="dropdown navbar-right nav-bar-top">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Cash <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="#" id="resetCashnav" data-toggle="modal" data-target="#resetmodal">Reset</a></li>
                            <li><a href="/cashier/cash">Cash</a></li>
                            <li>
                                <a href="/cashier/transactions"> Transactions</a>
                            </li>
                            <li>
                                <a href="/cashier/op/transactions"> Op Transactions</a>
                            </li>
                        </ul>
                    </li> -->
                    <!-- <li class="navbar-left nav-bar-top">
                        <a href="/cashier/support" data-toggle="tooltip" data-placement="bottom" title="Support" class="toggle">
                        <span class="glyphicon glyphicon-envelope"></span>
                        <span class="" id="ticketStatus" style="background-color:green;"></span>
                    </a>
                    </li>
                    <li class="navbar-left nav-bar-top">
                        <a href="/cashier/faq" data-toggle="tooltip" data-placement="bottom" title="Help" class="toggle">
                        <span class="glyphicon glyphicon-question-sign"></span>
                        <span class="" id="ticketStatus" style="background-color:green;"></span>
                    </a>
                    </li> -->
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container-fluid -->
    </nav>

</header>

<body>


    <!-- <noscript> -->
    <div class="row">
        <div class="container">
        </div>
    </div>

    <!-- FROM FOR CHECK STATUS -->
    <!-- <form action="/cashier/check/status" id="checkstatus"></form>
    <form action="/cashier/logout" id="logoutUrl"></form>
    <form action="/cashier/logout2" id="logoutUrl2"></form>
    <form action="/cashier/support/get/status" id="checkTicket"></form> -->
    <script>
        function timer(time, update, complete) {
            var start = new Date().getTime();
            var interval = setInterval(function() {
                var now = time - (new Date().getTime() - start);
                if (now <= 0) {
                    clearInterval(interval);
                    complete();
                } else update(Math.floor(now / 1000));
            }, 100); // the smaller this number, the more accurate the timer will be
        }

        function getTimer(seconds, divID) {

            timer(
                10 * 1000, // milliseconds
                function(timeleft) { // called every step to update the visible countdown
                    document.getElementById("timer_943").innerHTML = timeleft;
                },
                function() { // what to do after

                }
            );
        }
    </script>

    <!-- SHORT USERS FORM -->
    <!-- <form id="shortusers" style="display: none" action="/cashier/shortusers"></form> -->
    <!-- CHECK IF COOKIES IS SET -->
    <div class="container-fluid body-content" id="maintabledivH">
        <div class=" mainTable" id="cashinmaindiv">
            <div id="secondnav">
                <!-- <form action="/cashier/get/players" id="LoadUsers"></form> -->

                <div class="pull-right rightArrow hidden-xs">
                    <!-- BEGIN HIDE FOOTER -->

                    <a href="#" data-toggle="tooltip" id="showfooter" style='display:none; '><span class="glyphicon glyphicon-arrow-up" id="spanshowfooter"></span></a>

                    <a href="#" data-toggle="tooltip" id="hidefooter"><span class="glyphicon glyphicon-arrow-down" id="spanhidefooter"></></a>
                                

                                <!-- END HIDE FOOTER -->

                                    <!-- BEGIN HIDE LOGS DIV -->

                                    <!-- <a href="#" data-toggle="tooltip"
                                       id="hidestats"
                                                                              '><span class="glyphicon glyphicon-arrow-right" id="hideStats"></span>
                    </a> -->

                    <a href="#" data-toggle="tooltip" style='display:none; ' id="showstats"><span
                                                class="glyphicon glyphicon-arrow-left" id="ShowStats"></span>
                                    </a>
                    <!-- END HIDE LOGS DIV -->

                </div>
                <div id="gameserverstatus" class="pull-right hidden-xs"></div>
                <div id="pusherstatus" class="pull-right hidden-xs"></div>
                <div id="chatstatus" class="pull-right hidden-xs"></div>
                <!-- <div class="pull-right SeachDiv">
                    <form class="navbar-form" role="search">
                        <div class="input-group add-on" style="padding-top: 3px;">
                            <input class="form-control input-sm" id="search" style="height: 23px;" onchange="toggle(this)" placeholder="Search" name="srch-term" id="srch-term" type="text">
                            <div class="input-group-btn">
                                <button class="SerchButton btn-xs btn-default" id="SearchButton" onclick="toggle(this)" type="button"><i
                                                            class="glyphicon glyphicon-search"></i></button>
                            </div>
                        </div>
                    </form>
                </div> -->
                <div class="pull-left panicButton">
                    <button type="button" id="panicButton1" class="btn btn-danger btn-xs hidden-xs" onclick="panic();">Panic</button>
                </div>
                <!-- <div class="pull-left DisableButton">
                    <button type="button" id="DisableButton" class="btn btn-warning btn-xs hidden-xs">Disable all users</button>
                </div> -->
            </div>
            <table id="" class="table table-striped table-bordered table-hover whitetable" cellspacing="0" width="100%" style="margin-bottom: 50px;">
                <thead>
                    <tr class="mainTableColor">
                        <th class="text-center">NAME</th>
                        <th class="hidden-xs text-center">CREDITS</th>
                        <th class="hidden-xs text-center">REFUND</th>
                        <!-- <th class="hidden-xs text-center">GAME</th> -->
                        <th class="text-center">IN/OUT</th>
                        <th class="text-center hidden-xs">ACTIONS</th>
                        <th class="text-center">ON/OFF</th>
                    </tr>
                </thead>
                <tbody id="loadtable">
                    @if (count($users))
                        @foreach ($users as $user)
                        <tr>
                            <td class="text-center"><span class="hidden-xs"> <a href="#" ><strong style="color:black;">{{ $user->username ?: trans('app.n_a') }} <a href="#" class="" onclick="shortUsers({{ $user->username ?: trans('app.n_a') }} ,0,158992,1)">
                            <td class="text-center hidden-xs"><strong>{{ number_format(floatval($user->balance), 2, '.', '') }}</strong></td>
                            <td class="text-center hidden-xs"><strong>{{ number_format(floatval($user->count_refunds), 2, '.', '') }}</strong></td>
                            <!-- <td class="text-center hidden-xs"><strong>-</strong></td> -->
                            <td class="text-center" style="padding: 2px 0px;">
                                <button style="width: 45px; height: 35px;" type="button" 
                                        data-score-id="{{ number_format(floatval($user->balance), 2, '.', '') }}"
                                        data-player-id="{{ $user->id ?: trans('app.n_a') }}" data-name-id="{{ $user->username ?: trans('app.n_a') }}"
                                        data-toggle="modal" data-target=".inmodal"
                                        class="btn btn-primary btn-xs"><span class="glyphicon glyphicon-plus-sign"
                                                                            aria-hidden="true"></span></button>
                                <button style="width: 45px; height: 35px;" type="button" data-toggle="modal" data-target=".outmodal"
                                        data-name-id="{{ $user->username ?: trans('app.n_a') }}"
                                        data-player-id="{{ $user->id ?: trans('app.n_a') }}" data-score-id="{{ number_format(floatval($user->balance), 2, '.', '') }}"
                                        class="btn btn-danger btn-xs"><span
                                        class="glyphicon glyphicon-minus-sign" aria-hidden="true"></span></button>
                            </td>
                            <td class="text-center hidden-xs" style="padding: 2px 0px;">
                                <button id="" style="width: 45px; height: 35px;" data-id="{{ $user->id ?: trans('app.n_a') }}" data-name="{{ $user->username ?: trans('app.n_a') }}" data-target=".playerProfile"
                                        data-toggle="modal" class="success btn btn-warning playeridchangepass"><span
                                        class="glyphicon glyphicon-edit"></span></button>
                            </td>
                            <td class="text-center" style="padding: 2px 0px;">
                            @if ($user->status == "Active")
                                <button id="alarmbutton" style="width: 45px; height: 35px;"
                                    onclick="alarmOn({{ $user->id ?: trans('app.n_a') }},1, '{{$user->username}}')"
                                    class="success btn btn-success"><span class="glyphicon glyphicon-ok-circle"></span>
                                </button>
                            @else
                                <button id="alarmbutton" style="width: 45px; height: 35px;"
                                    onclick="alarmOn({{ $user->id ?: trans('app.n_a') }},0, '{{$user->username}}')"
                                    class="success btn btn-danger"><span class="glyphicon glyphicon-remove-circle"></span>
                                </button>
                            @endif
                            </td>
                        </tr>
                        @endforeach
                    @else
                        <tr><td colspan="15">@lang('app.no_data')</td></tr>
                    @endif
                    <!-- load table here from api -->
                </tbody>
            </table>
        </div>
        <!-- <div class="col-md-3 rightLogs" id="logdiv">
        </div> -->
    </div>
    </div>


    <div id="footer">
    <footer class="footer navbar-fixed-bottom" id="footerHide">

        <div class="table-responsive">
            <table class="table table-striped table-bordered table-list">
                <thead>
                <tr class="footerTr">
                    <th style="line-height:0px; border: 1px solid red"
                        class="text-center footerLines">IN</th>
                    <th style="line-height:0px; border: 1px solid red"
                        class="text-center footerLines">OUT</th>
                    <th style="line-height:0px; border: 1px solid red"
                        class="text-center footerLines">TOTAL</th>
                    <!-- <th style="line-height:0px; border: 1px solid red"
                        class="text-center footerLines">LIMIT</th> -->
                    <th style="line-height:0px; border: 1px solid red;"
                        class="text-center footerLines">CREDITS</th>
                </tr>
                </thead>
                <tbody>
                @if(auth()->user()->hasRole('cashier') &&
                $openshift = \VanguardLTE\OpenShift::where(['shop_id' => auth()->user()->shop_id, 'end_date' => NULL])->first())

                @php $summ = \VanguardLTE\User::where(['shop_id' => auth()->user()->shop_id, 'role_id' => 1])->sum('balance'); @endphp
                @php
                    $money = $openshift->users;
                    if($openshift->end_date == NULL){
                        $money = $summ;
                    }
                @endphp
                <tr class="footerTr2">
                    <td align="center" style="border: 1px solid red">
                        <strong id="FIn">{{ number_format($openshift->money_in, 2,".","") }}</strong>
                    </td>
                    <td align="center" style="border: 1px solid red">
                        <strong id="FOut">{{ number_format ($openshift->money_out, 2,".","") }}</strong>
                    </td>
                    @php
                        $total = $openshift->money_in - $openshift->money_out;
                    @endphp
                    <td align="center" style="border: 1px solid red">
                        <strong id="FTotal">{{ number_format ($total, 2,".","") }}</strong>
                    </td>
                    <!-- <td align="center" style="border: 1px solid red;">
                        <strong id="FLimit"></strong>
                    </td> -->
                    <td align="center"
                    style="border: 1px solid red; background-color: darkgreen;color: white;line-height: 25px;font: 12pt helvetica, arial, sans-serif;">
                        <strong id="FCredit">{{ number_format($money, 2,".","") }}</strong>
                    </td>
                </tr>
		        @endif
                </tbody>
            </table>
        </div>
    </footer>
</div>

<!-- MODALS -->
@if (Auth::user()->hasRole(['cashier']))

    <div class="modal fade" id="openShiftModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-xl" role="document">
                <form action="{{ route('backend.start_shift') }}" method="GET" id="shiftForm">
                    <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span></button>
                        <h4 class="text-center HeaderText">@lang('app.start_shift')</h4>
                    </div>
                    <div class="modal-body">
					    @if($open_shift)
                        @php
                            $money = $open_shift->users;
                            if($open_shift->end_date == NULL){
                                $money = $open_shift->get_money();
                            }

                            $payout = $open_shift->money_in > 0 ? ($open_shift->money_out / $open_shift->money_in) * 100 : 0;
                            $date = \Carbon\Carbon::now()->format(config('app.date_time_format'));

                        @endphp
                        <table class="table shift" style="background-color:white">
                            <tr><td>Start:</td><td> {{ $open_shift->start_date }}</td></tr>
                            <tr><td>Money: </td><td> {{ $money }}</td></tr>
                            <tr><td>In:</td><td> {{ $open_shift->money_in }}</td></tr>
                            <tr><td>Out: </td><td>{{ $open_shift->money_out }}</td></tr>
                            <tr><td>Total: </td><td>{{ $open_shift->money_in - $open_shift->money_out }}</td></tr>
                            <tr><td>Transfers:</td><td> {{ $open_shift->transfers }}</td></tr>
                            <tr><td>Pay Out:</td><td> {{ $payout }}</td></tr>
                        </table>
                        @else
                            <p>@lang('app.shift_not_opened')</p>
                        @endif
                    </div>
                    </div>
                    <div class="modal-footer" style="width:100%">
                        <div class="col-xs-12">
                            <!-- <span class="input-group-btn pull-left"> -->
                            <button type="button" class="btn btn-default pull-left" data-dismiss="modal">@lang('app.close')</button>
                            <!-- </span> -->
                            <!-- <span class="input-group-btn"> -->
                            <a href="{{ route('backend.start_shift.print') }}" target="_blank" class="btn btn-success">@lang('app.print')</a>
                            <!-- </span> -->
                            <button type="submit" class="btn btn-primary">@lang('app.ok')</button>
                        </div>
                    </div>
                </form>
                </div>
            </div>
        </div>
    </div>

    @endif
    <div class="modal fade inmodal" id="in" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
    <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" style="font-size: 50px; color: black;" class="close" data-dismiss="modal">
                    <span aria-hidden="true">&times;</span><span
                            class="sr-only">Close</span></button>
                <h4 class="modal-title text-center">
                    <input type="hidden" name="dik" id="dik" value="0">
                    <input type="hidden" name="scoreIN" id="scoreIN" value="0">
                    <input type="hidden" name="PlayerID" id="PlayerID" value="0">
                    <input type="text" id="nameinput" disabled name="name" value=""/>
                    <input type="text" id="nameinput"
                           disabled name="score"
                           value=""/>
                </h4>
            </div>
            <div class="text-center" style="padding: 10px;" id="inmodalconten">
                <input id="in5" class="btn btn-lg btn-default" type="button" value="+1"/>
                <input id="in10" class="btn btn-lg btn-default" type="button" value="+5"/>
                <input id="in20" class="btn btn-lg btn-default" type="button" value="+20"/>
                <input id="in50" class="btn btn-lg btn-default" type="button" value="+50"/>
                <input id="in100" class="btn btn-lg btn-default" type="button" value="+100"/>
            </div>

            <!-- BONUS HERE -->
                    </div>
        <!-- FOOTER -->
        <div class="modal-footer">
            <div id="inmodalfooter">
                <form id="inForm" action="{{ route('backend.user.balance.update') }}" method="POST">
                    <input type="hidden" id="_token" value="{{ csrf_token() }}" />
                    <input type="hidden" id="DeletePlayerFrom" value="{{route('backend.user.delete', '123456')}}">
                    <input type="hidden" id="shop_id" value="{{ auth()->user()->shop_id }}" />
                    <input type="hidden" id="user_id" value="@if(isset($user)){{ $user->id }}@endif">
                    <div class="col-xs-3 text-left"></div>
                    <div class="col-xs-9">
                        <div class="input-group">
                            <input type="hidden" name="type" value="add">
                            <input type="text" name="summ" id="inamount" value="0" class="form-control inform text-center" disabled>
                            <span class="input-group-btn">
                            <button class="btn btn-primary InButton" id="inButton"
                                    type="button">IN</button>
                            </span>
                        </div>
                    </div>
                </form>
            </div>

            <!-- PASSWORD AREA FOR IN -->
                    </div>
    </div>
</div>
    <div class="modal fade outmodal" id="out" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
    <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" style="font-size: 50px; color: black;" class="close" data-dismiss="modal">
                    <span aria-hidden="true">&times;</span><span
                            class="sr-only">Close</span></button>
                <h4 class="modal-title text-center">
                    <input type="hidden" name="scoreOUT" id="scoreOUT" value="0">
                    <input type="hidden" name="PlayerIDOUT" id="PlayerOUT" value="0">
                    <input name="keepScoreForOutAll" type="hidden" id="keepScoreForOutAll" value=""/>
                    <input type="text" id="nameinputOUT" disabled name="nameOUT" value=""/>
                    <input type="text" id="nameinputOUT"
                           disabled name="scoreOUT"
                           value=""/>
                </h4>
            </div>
            <div class="text-center" style="padding: 10px;" id="outmodalconten">
                                                            <input id="out5" class="btn btn-lg btn-default" type="button"
                               value="-1"/>
                                                                <input id="out10" class="btn btn-lg btn-default" type="button"
                               value="-5"/>
                                                                <input id="out20" class="btn btn-lg btn-default" type="button"
                               value="-20"/>
                                                                <input id="out50" class="btn btn-lg btn-default" type="button"
                               value="-50"/>
                                                                <input id="out100" class="btn btn-lg btn-default" type="button"
                               value="-100"/>
                                                    <input id="outALL" class="btn btn-lg btn-default" type="button" value="OUT ALL"/>

            </div>
        </div>
        <!-- FOOTER -->
        <div class="modal-footer">
            <div id="modaloutfooter">
                <form id="outForm" action="{{ route('backend.user.balance.update') }}">
                    <div class="col-xs-3 text-left">
                    </div>
                    <div class="col-xs-9">
                        <div class="input-group">
                            <input type="text" id="outamount" value="0" class="form-control inform text-center"
                                   disabled>
                            <span class="input-group-btn">
                        <button class="btn btn-primary OutButton" id="OutButton"
                                type="button">OUT</button>
                        </span>
                        </div>
                    </div>
                </form>
            </div>


            <!-- PASSWORD AREA FOR IN -->
                    </div>
    </div>
</div>
    <div class="modal fade playerProfile" id="playerProfile" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" style="font-size: 50px; color: black;" class="close" data-dismiss="modal">
                    <span aria-hidden="true">&times;</span><span
                            class="sr-only">Close</span></button>
                <h2 class="text-center HeaderText">Profile</h2>
                <h4 class="modal-title text-center">
                    <input type="hidden" name="PlayerProfileID" id="PlayerProfileID" value="0">
                </h4>
            </div>
            
            <div class="text-center" style="padding: 10px;">
                <form>
                    <div id="username-2" class="form-group has-success has-feedback">
                        <div class="input-group">
                            <span class="input-group-addon"><span class="glyphicon glyphicon-user"></span></span>
                            <input type="text" class="form-control" id="PlayerProfileName" name="PlayerProfileName"
                                   autocomplete="off">
                        </div>
                        <div class="input-group PlayerProfilePassowrd">
                            <span class="input-group-addon"><span class="glyphicon glyphicon-lock"></span></span>
                            <input type="text" class="form-control" id="PlayerProfilePassword"
                                   name="PlayerProfilePassword" autocomplete="off">
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <!-- FOOTER -->
        <div class="modal-footer">
            <form id="PlayerProfileForm" action="{{route('backend.user.update.details', '123456')}}">
                <div class="col-xs-12">
                    <div class="input-group">
                            <span class="input-group-btn pull-left">
                            <button class="btn btn-danger OutButton" id="DeletePlayer"
                                    type="button">Delete</button>
                            </span>
                            <span class="input-group-btn">
                            <button class="btn btn-primary OutButton" id="SavePlayerProfile"
                                    type="button">Save</button>
                            </span>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>

<div class="modal fade newplayer" id="newplayer" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" style="font-size: 50px; color: black;" class="close" data-dismiss="modal">
                    <span aria-hidden="true">&times;</span><span
                            class="sr-only">Close</span></button>
                <h2 class="modal-title text-center HeaderText">
                    Create new player
                </h2>
            </div>
            <div class="text-center HeaderText" style="padding: 10px;">
                <div class="alert alert-warning" id="newplayerWarning">
                    <strong><small> Username field accepts only english characters</small></strong>
                </div>
                <div class="alert alert-danger" id="errorEmail" style="display: none;">
                  <strong> This username already exist!</strong>
                </div>
                <div class="alert alert-success" id="successEmail" style="display: none;">
                  <strong> Success</strong>
                </div>
                <!-- <form action="/cashier/check/email" id="checkEmail"></form> -->
                <div class="input-group PlayerProfilePassowrd" id="usernamediv">
                    <span class="input-group-addon"><span class="glyphicon glyphicon-envelope"></span></span>
                    <input type="text" class="form-control" onchange="CheckEmail()" id="username" placeholder="Username" name="username" autocomplete="off">
                </div>
                <div class="input-group PlayerProfilePassowrd">
                    <span class="input-group-addon"><span class="glyphicon glyphicon-lock"></span></span>
                    <input type="text" class="form-control" id="password" placeholder="Password" name="password" autocomplete="off">
                </div>
            </div>
        </div>
        <!-- FOOTER -->
        <div class="modal-footer">
            <form id="newPlayerForm" action="{{route('backend.user.store')}}">
                <div class="col-xs-12">
                    <div class="input-group">
                        <span class="input-group-btn">
                        <button class="btn btn-primary InButton" id="newPlayer" type="button">Create</button>
                        </span>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
<!-- <form action="/cashier/get/reset" id="getResetStatsForm"></form> -->
<div class="modal fade reset" id="resetmodal" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" style="font-size: 50px; color: black;" class="close" data-dismiss="modal">
                    <span aria-hidden="true">&times;</span><span
                            class="sr-only">Close</span></button>
                <h2 class="modal-title text-center HeaderText">
                    Reset Cash
                </h2>
            </div>
            <div class="text-center HeaderText" style="padding: 10px;">
                <table class="table">
                    <thead>
                    <tr>
                        <th class="text-center">IN</th>
                        <th class="text-center">OUT</th>
                        <th class="text-center">SUM</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><strong id="resetIN"></strong></td>
                        <td><strong id="resetOUT"></strong></td>
                        <td><strong id="resetSUM"></strong></td>
                    </tr>
                </table>
            </div>
        </div>
        <!-- FOOTER -->
        <div class="modal-footer">
            <form id="resetFormCashModal" action="/cashier/shop/reset">
                <div class="col-xs-12">
                    <div class="input-group">
                        <span class="input-group-btn">
                        <button class="btn btn-primary InButton" id="ResetCashButton"
                                type="button">Reset</button>
                        </span>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
<div class="modal fade setpin" id="setpin" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" style="font-size: 50px; color: black;" class="close" data-dismiss="modal">
                    <span aria-hidden="true">&times;</span><span
                            class="sr-only">Close</span></button>
                <h2 class="modal-title text-center HeaderText">
                    Enter your pin
                </h2>
            </div>
            <div class="text-center HeaderText" style="padding: 10px;">
                <form>
                    <div id="pinSudiv" class="form-group has-feedback">
                        <div class="input-group pinDiv">
                            <span class="input-group-addon"><span class="glyphicon glyphicon-lock"></span></span>
                            <input type="text" class="form-control" id="pinmodal"
                                   name="pinmodal" autocomplete="off">
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <!-- FOOTER -->
        <div class="modal-footer">
            <form id="setPinForm" action="/cashier/setpin">
                <div class="col-xs-12">
                    <div class="input-group">
                        <span class="input-group-btn">
                        <button class="btn btn-primary" id="setpinButton"
                                type="button">Save</button>
                        </span>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
<div class="modal fade newplayer" id="changepinModal" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" style="font-size: 50px; color: black;" class="close" data-dismiss="modal">
                    <span aria-hidden="true">&times;</span><span
                            class="sr-only">Close</span></button>
                <h2 class="modal-title text-center HeaderText">
                    Change Pin
                </h2>
            </div>
            <div class="text-center HeaderText" style="padding: 10px;">
                <h4>Pin accept only numbers</h4>
                <!-- <form action="/cashier/check/email" id="checkEmail"></form> -->
                <div class="input-group" id="usernamediv">
                    <span class="input-group-addon"><span class="glyphicon glyphicon-lock"></span></span>
                    <input type="text" class="form-control"  id="oldpin" placeholder="Enter your pin" name="oldpin" autocomplete="off">
                </div>
                <div class="input-group PlayerProfilePassowrd">
                    <span class="input-group-addon"><span class="glyphicon glyphicon-lock"></span></span>
                    <input type="text" class="form-control" id="newpin" placeholder="Enter new pin" name="newpin" autocomplete="off">
                </div>
            </div>
        </div>
        <!-- FOOTER -->
        <div class="modal-footer">
            <form id="changepinformAction" action="/cashier/change/pin">
                <div class="col-xs-12">
                    <div class="input-group">
                        <span class="input-group-btn">
                        <button class="btn btn-primary InButton" id="savenewpin" type="button">Save</button>
                        </span>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
<div class="modal fade" id="ChangeNameModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">

    <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" style="font-size: 50px; color: black;" class="close" data-dismiss="modal">
                    <span aria-hidden="true">&times;</span><span
                            class="sr-only">Close</span></button>
                <h2 class="modal-title text-center HeaderText">
                    Change Terminal Name
                </h2>
            </div>
            <div class="text-center HeaderText" style="padding: 10px;">
                <div class="alert alert-warning" id="newplayerWarning">
                    <strong>Example PC_01</strong>
                </div>
                <!-- <form action="/cashier/change/pc/name" id="changePCNameForm"></form> -->
                <input type="hidden" name="userIDChangeName" id="userIDChangeName" value="0">
                <div class="input-group" id="usernamediv">
                    <span class="input-group-addon"><span class="glyphicon glyphicon-user"></span></span>
                    <input type="text" class="form-control"  id="inputplayername" placeholder="NAME" name="oldpin" autocomplete="off">
                </div>
            </div>
        </div>
        <!-- FOOTER -->
        <div class="modal-footer">
            <form id="changepinform" action="/cashier/change/pin">
                <div class="col-xs-12">
                    <div class="input-group">
                        <span class="input-group-btn">
                        <button class="btn btn-primary InButton" id="SaveUserName" type="button">Save</button>
                        </span>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
<div class="modal fade printmodal" id="printmodal" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-xl printModalClass" role="document">
        <div class="modal-content">
            <div class="modal-header hidden-xs">
                <button type="button" style="font-size: 50px; color: black;" class="close" data-dismiss="modal">
                    <span aria-hidden="true">&times;</span><span
                            class="sr-only">Close</span></button>
                <h2 class="modal-title text-center HeaderText">
                    User balance has been changed
                </h2>
            </div>
            <div class="text-center HeaderText" id="printableDiv" style="padding: 10px;">
                <p class="pstyle">
                    **************************************
                </p>
                <p class="pstyle">
                    DEPOSIT TICKET RECEIPT
                </p>
                <p class="pstyle">
                    **************************************
                </p>
                <p class="pstyle">
                    Terminal ID: XXX-98349-<span id="TerminaIDForPrinting"></span>
                </p>
                <p class="pstyle">
                    Date
                    : 2022-10-28
                </p>
                <p class="pstyle">
                    Time: 01:25:41
                </p>
                <p class="pstyle">
                    User ID: XXX-4453-<span id="TerminaIDForPrinting2"></span>
                </p>
                <p class="pstyle">
                    Ticket ID: 1028012541
                </p>
                <p class="pstyle">
                    Amount Awarded: <span id="printScore"></span>
                </p>
                <p class="pstyle">
                    Hall ID: 4355-34693
                </p>
                <p class="pstyle">
                    Operator ID: 2323-34692
                </p>
                <p class="pstyle">
                    ____________________
                </p>
                <p class="pstyle">
                    Customer Signature
                </p>
                <p class="pstyle">
                    **************************************
                </p>
                <p class="pstyle">
                    DEPOSIT TICKET RECEIPT
                </p>
                <p class="pstyle">
                    **************************************
                </p>
            </div>
        </div>
        <!-- FOOTER -->
        <div class="modal-footer" style="width: 100%;">
            <div class="col-xs-12">
                <div class="input-group">
                        <span class="input-group-btn text-left">
                            <button class="btn btn-primary InButton" id="PrintButonClose"
                                    type="button">Close</button>
                        </span>
                    <span class="input-group-btn text-right">
                            <button class="btn btn-primary InButton" id="PrintButton"
                                        type="button">Print</button>
                        </span>
                </div>
            </div>
        </div>
    </div>
</div>
</body>
<script>

    // SHOP CONFIGS //
    var ssl = false;
    var WShost ="";
    var PUSHERhost ="";
    var CHAThost ="";
    var PrintTicket ="0";

            
    var appURL ="/cashier/";
    ssl = true;
    var WShost ="";
    var PUSHERhost ="";
    var CHAThost ="";
                var userHash ="4089265c2f886e00d26e4ed0e8e7f67a";
    var shopID ="34693";
    var timezone ="UTC";
    var currency ="EUR";
    var alarm ="1";
    var edituser ="1";
    var allowinout ="1";
    var vlt ="0";
    var bonus ="1";
    var free ="0";
    var Vbonus ="0";
    var VbonusTime ="0";
    var Vfooter ="1";
    var ShopAlarmOn = false;
    var ShopRiderct = false;
    var ShopURL = false;
    var DisableUsersUrl ="/cashier/disable/all";
    var AlrmUserUrl ="{{route('backend.user.update.details', '123456')}}";
    var HomeUrl ="1";
    var AccountLimits ="9";
    var language ="en";
    var CashierPasswordForInOut ="0";
    var CountUsers ="13";

            ShopURL = 'http://www.google.at';
    
                    ShopAlarmOn = true;
    var ShopAlarmUrl ="/cashier/alarmon";
            ShopRiderct = true;
                        
    var msg01 ="Error";
    var msg02 ="Success";
    var msg03 ="Game Server Online";
    var msg04 ="Game Server Offline";
    var msg05 ="Pusher Server Online";
    var msg06 ="Pusher Server Offline";
    var msg07 ="Chat Server Online";
    var msg08 ="Chat Server Offline";
    var msg09 ="Player password is too small";
    var msg10 ="Are you sure? This player will deleted";
    var msg11 ="Cancel";
    var msg12 ="Delete logs";
    var msg13 ="You have reached your accounts limit, please contact your operator!";
    var msg14 ="Pin is empty please set pin";
    var msg15 ="Pin accept only numbers";
    var msg16 ="This shop is on PANIC. Please contact your Operator!";
    var msg17 ="Wrong user password";
    var msg18 ="Session reseted from operator please login again";

    // TRANSALATE DATATABLE //
    var emptyTable ="No data available in table";
    var info ="Showing _START_ to _END_ of _TOTAL_ entries";
    var infoEmpty ="Showing 0 to 0 of 0 entries";
    var infoFiltered ="filtered from _MAX_ total entries";
    var lengthMenu ="Show _MENU_ entries";
    var loadingRecords ="Loading...";
    var processing ="Processing...";
    var vsearch ="Search";
    var zeroRecords ="No matching records found";
    var first ="First";
    var vlast ="Last";
    var vnext ="Next";
    var previous ="Previous";
    var sortAscending ="activate to sort column ascending";
    var sortDescending ="activate to sort column descending";
    var rows1 ="You have selected %d rows";
    var rows2 ="Click a row to select it";
    var rows3 ="Only 1 row selected";
    var Languege ="en"
    var logoutCashierUrl ="/cashier/logout"


    var showTimer = false;
    // For Panic
    function preventBack() {
        window.history.forward();
    }

    setTimeout("preventBack()", 0);
    window.onunload = function () {
        null
    };


    function moveRect() {
        if (window.history && window.history.pushState) {
            window.history.pushState('forward', null, 'https://www.google.de');
            window.location.href = "https://google.de";
        }
    }

    let socket1 = new WebSocket("wss://{{ config('app.hostname') }}:6788/shop={{ auth()->user()->shop_id }}");

    socket1.onopen = function(e) {
        console.log("[open] Соединение установлено");
        console.log("Отправляем данные на сервер");
        socket1.send("panic WS active {{ auth()->user()->shop_id }}");
    };

    socket1.onmessage = function(event) {
        console.log(`[message] Данные получены с сервера: ${event.data}`);
        if (event.data === 'Panic!') {
            moveRect();
        }
    };

    socket1.onclose = function(event) {
        if (event.wasClean) {
            console.log(`[close] Соединение закрыто чисто, код=${event.code} причина=${event.reason}`);
        } else {
            // например, сервер убил процесс или сеть недоступна
            // обычно в этом случае event.code 1006
            console.log('[close] Соединение прервано');
        }
    };

    socket1.onerror = function(error) {
        console.log(`[error] ${error.message}`);
    };

    function panic(){
        console.log("!!!!!")
        socket1.send("15987615|{{ auth()->user()->shop_id }}");
    }
    

</script>


<script src="/cashier/js/jquery.min.js?v=2.0"></script>
<script type="text/javascript">
    console.log('!!!!1')
    jQuery.readyException = function(err){
        console.error(err)
    }
    $(document).ready(function(){
        console.log('!!!!2')
    })
</script>
<script src="/cashier/js/jquery-ui.min.js?v=2.0"></script>
<script src="/cashier/js/tether.min.js?v=2.0"></script>
<script src="/cashier/js/jquery.dataTables.min.js?v=2.0"></script>
<script src="/cashier/js/dataTables.bootstrap.min.js?v=2.0"></script>
<script src="/cashier/js/alertify.js?v=2.0"></script>
<script src="/cashier/js/cookies.js?v=2.0"></script>
<script src="/cashier/js/bootstrap.min.js?v=2.0"></script>
<script src="/cashier/js/datapicker/jquery-ui-timepicker-addon.js?v=2.0"></script>

<script src="/cashier/js/pisoglentis.min.js?v=2.0"></script>
<script src="/cashier/js/printticket.min.js?v=2.0"></script>
<link rel="stylesheet" href="/cashier/js/summernote/summernote.css">
<script src="/cashier/js/summernote/summernote.js"></script>


<script>
window.onload = function () {
    document.getElementById("loadingFullPage").style.display ="none";
}

$("#cashinmaindiv").scroll(function() {
    setTimeout(function(){
        // This hides the address bar:
        window.scrollTo(0, 1);
    }, 0);
});

</script>
</html>