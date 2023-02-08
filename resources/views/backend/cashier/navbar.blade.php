<!-- Header Navbar: style can be found in header.less -->
<nav class="navbar navbar-expand-lg">
    <!-- Sidebar toggle button-->
    <a href="{{ url('/') }}" class="navbar-brand" style="font-size:36px;" data-toggle="push-menu" role="button">
        <span class="logo-mini"><b>G</b></span>
        <span class="logo-lg"><b>{{ settings('app_name') }}</b></span>
    </a>
    {{-- <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navb">
        <span class="navbar-toggler-icon"><i class="fa fa-navicon"></i></span>
    </button> --}}

    <div class="collapse navbar-collapse" id="navb" style="display:flex !important;">
        <ul class="navbar-nav" style="margin-right:auto;">

        </ul>
        <ul class="navbar-nav">
            {{-- <li class="nav-item">
                <a class="nav-link" href="javascript:void(0)">cashier123</a>
            </li> --}}
            <div class="user-panel" style="display: flex; align-items:center;">
                <div class="pull-left image">
                    <img src="/back/img/12.png" class="img-circle">

                    <!--<img src="/back/img/{{ auth()->user()->present()->role_id }}.png" class="img-circle">-->
                </div>
                <div class="pull-left info">
                    <p>Balance: <span class="activeBalance">

                            @if( auth()->user()->hasRole(['cashier', 'manager']) )
                            @php
                            $shop = \VanguardLTE\Shop::find( auth()->user()->present()->shop_id );
                            echo $shop?number_format($shop->balance,2,".",""):0;
                            @endphp
                            @if( auth()->user()->present()->shop )
                            {{ auth()->user()->present()->shop->currency }}
                            @endif
                            @else
                            {{ number_format(auth()->user()->present()->balance,2,".","") }}
                            @if( auth()->user()->present()->shop )
                            {{ auth()->user()->present()->shop->currency }}
                            @endif
                            @endif
                        </span>
                    </p>

                    <a href="javascript:;" style="color:white;">
                        <span id="date-part"></span>
                        <span id="time-part"></span>
                    </a>

                </div>
            </div>


            {{-- <li class="nav-item">
                <div class="dropdown">
                    <a class="nav-link dropdown-toggle" data-toggle="dropdown">
                        <img src="/cashier/en.png">
                    </a>
                    <div class="dropdown-menu">
                        <a class="dropdown-item flex items-center" href="#"><img src="/cashier/en.png">
                            &nbsp;English</a>
                        <a class="dropdown-item flex items-center" href="#"><img src="/cashier/fr.png"> &nbsp;Franch</a>
                        <a class="dropdown-item flex items-center" href="#"><img src="/cashier/ru.png"> &nbsp;Russia</a>
                    </div>
                </div>
            </li>
            <li class="nav-item">
                <a class="nav-link btn-blue" href="javascript:void(0)"><i class="fa fa-question"></i></a>
            </li>
            <li class="nav-item">
                <a class="nav-link btn-blue" href="javascript:void(0)"><i class="fa fa-print"></i></a>
            </li>
            <li class="nav-item">
                <a class="nav-link btn-blue" href="javascript:void(0)"><i class="fa fa-gear"></i></a>
            </li>
            <li class="nav-item">
                <button class="btn btn-white flex pr-6" href="javascript:void(0)"><span class="fa fa-power-off"></span>
                    &nbsp;&nbsp;Logout</button>
            </li> --}}
            <li class="nav-item">
                <a href="javascript:;" data-toggle="modal" data-target="#openChangeModal" class="nav-link btn-blue">
                    <i class="fa fa-circle text-success"></i>&nbsp;&nbsp;
                    @if(auth()->user()->shop) {{ auth()->user()->shop->name }} @else @lang('app.no_shop') @endif
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link btn-blue" href="/backend/user/create">
                    <i class="fa fa-plus"></i>
                    &nbsp;&nbsp;New Player
                </a>
            </li>

            @if( auth()->user()->shop )
            @if( auth()->user()->shop->is_blocked )
            @permission('shops.unblock')
            <li class="nav-item">
                <a href="{{ route('backend.settings.shop_unblock') }}" class="nav-link btn-blue" data-method="PUT"
                    data-confirm-title="@lang('app.please_confirm')"
                    data-confirm-text="@lang('app.are_you_sure_unblock_shop')"
                    data-confirm-delete="@lang('app.unblock')">
                    UnBlock Shop</a>
            </li>
            @endpermission
            @else
            @permission('shops.block')
            <li class="nav-item">
                <a href="{{ route('backend.settings.shop_block') }}" class="nav-link btn-blue" data-method="PUT"
                    data-confirm-title="@lang('app.please_confirm')"
                    data-confirm-text="@lang('app.are_you_sure_block_shop')" data-confirm-delete="@lang('app.block')">
                    Block Shop</a>
            </li>
            @endpermission
            @endif
            @endif

            {{-- <ul> --}}
                <li class="nav-item">
                    
                </li>
                {{--
            </ul> --}}
            <li class="nav-item">
                <a href="#" class="nav-link btn-blue" data-toggle="modal" data-target="#openShiftModal">
                    @lang('app.start_shift')</a>
            </li>

            @if (session()->exists('beforeUser'))
            <li class="nav-item">
                <div class="dropdown">
                    <a href="#" class="nav-link dropdown-toggle btn-blue" data-toggle="dropdown">
                        <i class="fa fa-repeat"></i>
                    </a>
                    <ul class="dropdown-menu">
                        <li class="dropdown-item header"><b>{{ auth()->user()->username }}</b></li>
                        <li class="dropdown-item">
                            <ul class="menu">
                                <li><a href="{{ route('backend.user.back_login') }}"> Back Login</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </li>
            @endif

            @php
            $open_shift = \VanguardLTE\OpenShift::where(['shop_id' => auth()->user()->shop_id, 'end_date' =>
            NULL])->first();
            @endphp

            @if (Auth::user()->hasRole(['cashier']))
            <li class="nav-item">
                <div class="dropdown">
                    <a href="#" class="nav-link dropdown-toggle btn-blue" data-toggle="dropdown">
                        <i class="fa fa-clock-o"></i></a>
                    <ul class="dropdown-menu">
                        <li class="dropdown-item header"><b>{{ auth()->user()->username }}</b></li>
                        <li class="dropdown-item">
                            <ul class="menu">
                                @if($open_shift)
                                <li><a href="#" data-toggle="modal" data-target="#openShiftModal">
                                        @lang('app.start_shift')</a></li>
                                @else
                                <li><a href="{{ route('backend.start_shift') }}"> @lang('app.start_shift')</a></li>
                                @endif
                            </ul>
                        </li>
                    </ul>
                </div>
            </li>
            @endif

            <li class="nav-item">
                <div class="dropdown">
                    <a href="#" class="nav-link dropdown-toggle btn-blue" data-toggle="dropdown">
                        <i class="fa fa-power-off"></i></a>
                    <ul class="dropdown-menu dropdown-menu-right">
                        <li class="dropdown-item header"><b>{{ auth()->user()->username }}</b></li>
                        <li class="dropdown-item ">
                            <ul class="menu">

                                @if (config('session.driver') == 'database')
                                <li><a href="{{ route('backend.profile.sessions') }}"> @lang('app.active_sessions')</a>
                                </li>
                                @endif

                                <li><a href="{{ route('backend.user.edit', auth()->user()->present()->id) }}">
                                        @lang('app.my_profile')</a></li>
                                <li><a href="{{ route('backend.auth.logout') }}"> @lang('app.logout')</a></li>

                            </ul>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>

</nav>

<!-- Left side column. contains the logo and sidebar -->

@if (Auth::user()->hasRole(['cashier']))

<div class="modal fade" id="openShiftModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <form action="{{ route('backend.start_shift') }}" method="GET" id="outForm">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">@lang('app.start_shift')</h4>
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
                    <table class="table table-striped">
                        <tr>
                            <td>Start:</td>
                            <td> {{ $open_shift->start_date }}</td>
                        </tr>
                        <tr>
                            <td>Money: </td>
                            <td> {{ $money }}</td>
                        </tr>
                        <tr>
                            <td>In:</td>
                            <td> {{ $open_shift->money_in }}</td>
                        </tr>
                        <tr>
                            <td>Out: </td>
                            <td>{{ $open_shift->money_out }}</td>
                        </tr>
                        <tr>
                            <td>Total: </td>
                            <td>{{ $open_shift->money_in - $open_shift->money_out }}</td>
                        </tr>
                        <tr>
                            <td>Transfers:</td>
                            <td> {{ $open_shift->transfers }}</td>
                        </tr>
                        <tr>
                            <td>Pay Out:</td>
                            <td> {{ $payout }}</td>
                        </tr>
                    </table>
                    @else
                    <p>@lang('app.shift_not_opened')</p>
                    @endif
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default pull-left"
                        data-dismiss="modal">@lang('app.close')</button>
                    <a href="{{ route('backend.start_shift.print') }}" target="_blank"
                        class="btn btn-success">@lang('app.print')</a>
                    <button type="submit" class="btn btn-primary">@lang('app.ok')</button>
                </div>
            </form>
        </div>
    </div>
</div>

@endif