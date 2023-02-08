@extends('backend.layouts.app')

@section('page-title', trans('app.dashboard'))
@section('page-heading', trans('app.dashboard'))

@section('content')

    <section class="content-header">
        @include('backend.partials.messages')
    </section>
<style>
        .bg-primary {
    color: #f4f3f9;
    background-color: #7266ba;
}
.bg-danger {
    color: #ffffff;
    background-color: #f05050;
}
.bg-info {
    color: #dcf2f8;
    background-color: #23b7e5;
}
.text-info {
    color: #f4f4f4;
}
.text-muted {
    color: #f5f5f5;
}
.bg-warning {
    color: #f4f3f9;
    background-color: #c3a911;
}
.table-responsive {
    height: 145px;
    overflow-x: auto;
}
    </style>
    <section class="content">

       <div class="row">
    <div class="col-md-5">
                        <div class="row row-sm text-center">
                            <div class="col-xs-6">
                                <div class="panel padder-v item bg-warning">
                                    <div class="h1 text-info font-thin h1">{{ number_format($stats['total']) }}</div>
                                    <span title="" data-original-title="Total active this month" class="text-muted text-xs">@lang('app.total_users')
                                    </span>
                                </div>
                            </div>
                            <div class="col-xs-6">
                                <div class="panel padder-v item bg-primary">
                                    <div class="h1 text-info font-thin h1">{{ number_format($stats['new']) }}</div>
                                    <span title="" data-original-title="Total active this month" class="text-muted text-xs">@lang('app.new_users_this_month')
                                    </span>
                                </div>
                            </div>
                            <div class="col-xs-6">
                                <div class="panel padder-v item bg-info">
                                    <div class="h1 text-white font-thin h1">{{ number_format($stats['games']) }}</div>
                                    <span title="" data-original-title="Total active this month" class="text-muted text-xs">@lang('app.games')
                                    </span>
                                </div>
                            </div>
                            <div class="col-xs-6">
                                <div class="panel padder-v item bg-danger">
                                    <div class="h1 text-info font-thin h1">{{ number_format($stats['banned']) }}</div>
                                    <span title="" data-original-title="Total active this month" class="text-muted text-xs">@lang('app.banned_users')
                                    </span>
                                </div>
                                
                            </div>
                            
                        </div>
                        
                    </div>
                    @permission('stats.game')
            <div class="col-md-7 xs-12">
                <div class="box box-warning">
                    <div class="box-header with-border">
                        <h3 class="box-title">@lang('app.latest_game_stats')</h3>
                    </div>

                    <div class="box-body">
                        <div class="table-responsive">

                            <table class="table table-striped">

                                <thead>
                                <tr>
                                    <th>@lang('app.game')</th>
                                    <th>@lang('app.user')</th>
                                    <th>@lang('app.balance')</th>
                                    <th>@lang('app.bet')</th>
                                    <th>@lang('app.win')</th>
                                    <th>@lang('app.date')</th>
                                </tr>
                                </thead>

                                <tbody>

                                @if (count($gamestat))
                                    @foreach ($gamestat as $stat)
                                        <tr>
                                            <td>
                                                <a href="{{ route('backend.game_stat', ['game' => $stat->game])  }}">
                                                    {{ $stat->game }}
                                                </a>
                                            </td>
                                            <td>
                                                <a href="{{ route('backend.game_stat', ['user' => $stat->user ? $stat->user->username : ''])  }}">
                                                    {{ $stat->user ? $stat->user->username : '' }}
                                                </a>
                                            </td>
                                            <td>{{ $stat->balance }}</td>
                                            <td>{{ $stat->bet }}</td>
                                            <td>{{ $stat->win }}</td>
                                            <td>{{ date(config('app.time_format'), strtotime($stat->date_time)) }}</td>
                                        </tr>
                                    @endforeach
                                @else
                                    <tr><td colspan="6">@lang('app.no_data')</td></tr>
                                @endif

                                </tbody>

                            </table>

                        </div>
                    </div>

                </div>
            </div>
            @endpermission
            @permission('shops.manage')
            <div class="col-xs-12">
                <div class="box box-success">

                    <div class="box-header with-border">
                        <h3 class="box-title">@lang('app.latest_shops')</h3>
                    </div>

                    <div class="box-body">
                        <div class="table-responsive">
                            <table class="table table-striped">
                                <thead>
                                <tr>
                                    <th>@lang('app.name')</th>
                                    <th>@lang('app.credit')</th>
                                    <th>@lang('app.percent')</th>
                                    <th>@lang('app.frontend')</th>
                                    <th>@lang('app.currency')</th>
                                    <th>@lang('app.status')</th>
                                </tr>
                                </thead>

                                <tbody>

                                @if (count($shops))
                                    @foreach ($shops as $shop)
                                        <tr>
                                            <td>
                                                <a href="{{ route('backend.shop.edit', $shop->id)  }}">
                                                    {{ $shop->name }}
                                                </a>
                                            </td>

                                            <td>{{ $shop->balance }}</td>
                                            <td>{{ $shop->get_percent_label($shop->percent) }}</td>
                                            <td>{{ $shop->frontend }}</td>

                                            <td>{{ $shop->currency }}</td>
                                            <td>
                                                @if($shop->is_blocked)
                                                    <small><i class="fa fa-circle text-red"></i></small>
                                                @else
                                                    <small><i class="fa fa-circle text-green"></i></small>
                                                @endif
                                            </td>
                                        </tr>
                                    @endforeach
                                @else
                                    <tr><td colspan="6">@lang('app.no_data')</td></tr>
                                @endif

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            @endpermission
        </div>

        <div class="row">
            @permission('stats.shift')
            <div class="col-xs-12">
                <div class="box box-success">

                    <div class="box-header with-border">
                        <h3 class="box-title">Latest @lang('app.shift_stats')</h3>
                    </div>

                    <div class="box-body">
                        <div class="table-responsive">
                            <table class="table table-striped">
                                <thead>
                                <tr>
                                    @if(!auth()->user()->hasRole('cashier'))
                                        <th>@lang('app.shift')</th>
                                    @endif
                                    <th>@lang('app.user')</th>
                                    <th>@lang('app.start')</th>
                                    <th>@lang('app.end')</th>
                                    @if(!auth()->user()->hasRole('cashier'))
                                        <th>@lang('app.credit')</th>
                                        <th>@lang('app.in')</th>
                                        <th>@lang('app.out')</th>
                                    @endif
                                    <th>@lang('app.total')</th>
                                    <th>@lang('app.money')</th>
                                    <th>@lang('app.in')</th>
                                    <th>@lang('app.out')</th>
                                    <th>@lang('app.total')</th>
                                    <th>@lang('app.transfers')</th>
                                    <th>@lang('app.payout')</th>
                                </tr>
                                </thead>

                                <tbody>

                                @if (count($open_shift))
                                    @foreach ($open_shift as $num=>$stat)
                                        <tr>
                                            @if(!auth()->user()->hasRole('cashier'))
                                                <td>{{ $stat->id }}</td>
                                            @endif
                                            <td>{{ $stat->user->username }}</td>
                                            <td>{{ date(config('app.date_time_format'), strtotime($stat->start_date)) }}</td>
                                            <td>{{ $stat->end_date ? date(config('app.date_time_format'), strtotime($stat->end_date)) : '' }}</td>
                                            @if(!auth()->user()->hasRole('cashier'))
                                                <td>{{ $stat->balance }}</td>
                                                <td>{{ $stat->balance_in }}</td>
                                                <td>{{ $stat->balance_out }}</td>
                                            @endif
                                            <td>{{ number_format ($stat->balance + $stat->balance_in - $stat->balance_out, 4, ".", "") }}</td>
                                            @php
                                                $money = $stat->users;
                                                if($stat->end_date == NULL){
                                                    $money = $stat->get_money();
                                                }
                                            @endphp

                                            <td>{{ $money }}</td>
                                            <td>{{ $stat->money_in }}</td>
                                            <td>{{ $stat->money_out }}</td>

                                            @php
                                                $total = $stat->money_in - $stat->money_out;
                                            @endphp

                                            <td>{{ number_format ($total, 4, ".", "") }}</td>
                                            <td>{{ $stat->transfers }}</td>

                                            @php
                                                $payout = $stat->money_in > 0 ? ($stat->money_out / $stat->money_in) * 100 : 0;
                                            @endphp
                                            <td>{{ number_format ($payout, 4, ".", "") }}</td>

                                        </tr>
                                    @endforeach
                                @else
                                    <tr><td colspan="17">@lang('app.no_data')</td></tr>
                                @endif

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            @endpermission
        </div>
          <div class="row">
            @permission('stats.pay')
            <div class="col-xs-12">
                <div class="box box-success">

                    <div class="box-header with-border">
                        <h3 class="box-title">@lang('app.latest_pay_stats')</h3>
                    </div>

                    <div class="box-body">
                        <div class="table-responsive">
                            <table class="table table-striped">
                                <thead>
                                <tr>
                                    <th>@lang('app.cashier')</th>
                                    <th>@lang('app.money_in')</th>
                                    <th>@lang('app.money_out')</th>
                                    <th>@lang('app.date')</th>
                                </tr>
                                </thead>

                                <tbody>

                                @if (count($statistics))
                                    @foreach ($statistics as $stat)
                                        <tr>
                                            <td>
                                            @if( $stat->payeer && $stat->payeer->hasRole(['cashier']))
                                                <a href="{{ route('backend.user.edit', $stat->payeer->id)  }}">
                                                    {{ $stat->payeer->username }}
                                                </a>
                                            @endif

                                            </td>
                                            <td>
                                                @if ($stat->add->money_in != NULL)
                                                    <span class="text-green">{{ $stat->add->money_in }}</span>
                                                @endif
                                            </td>
                                            <td>
                                                @if ($stat->add->money_out != NULL)
                                                    <span class="text-red">{{ $stat->add->money_out }}</span>
                                                @endif
                                            </td>
                                            <td>{{ $stat->created_at->format(config('app.time_format')) }}</td>
                                        </tr>
                                    @endforeach
                                @else
                                    <tr><td colspan="4">@lang('app.no_data')</td></tr>
                                @endif

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            @endpermission

            
        </div>

    </section>
    <!-- /.content -->

@stop

@section('scripts')
    {!! HTML::script('/back/dist/js/pages/dashboard.js') !!}
@stop
