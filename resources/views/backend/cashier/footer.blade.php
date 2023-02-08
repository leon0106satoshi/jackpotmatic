<!-- sidebar: style can be found in sidebar.less -->
<section class="footer">
    <!-- Sidebar user panel -->


    {{-- <button class="btn btn-white flex" href="javascript:void(0)"><span class="fa fa-user"></span>Users</button>
    --}}
    <ul class="footer-menu">

        {{-- <li class="header">@lang('app.main_navigation')</li> --}}

        @permission('dashboard')
        <li class="{{ Request::is('backend') ? 'active' : ''  }}">
            <a href="{{ route('backend.dashboard') }}">
                <span class="fa fa-home"></span>
                <span>@lang('app.dashboard')</span>
            </a>
        </li>
        @endpermission

        @permission('users.manage')
        <li class="{{ Request::is('backend/user*') ? 'active' : ''  }}">
            <a href="{{ route('backend.user.list') }}">
                <span class="fa fa-user"></span>
                <span>@lang('app.users')</span>
            </a>
        </li>
        @endpermission

        @permission('users.manage')
        <li class="{{ Request::is('backend/terminal*') ? 'active' : ''  }}">
            <a href="{{ url('/backend/terminal') }}">
                <span class='fa fa-desktop' style='color:red'></span>
                <span>@lang('app.terminal')</span>
            </a>
        </li>
        @endpermission


        @permission('users.manage')
        <li class="{{ Request::is('backend/atm*') ? 'active' : ''  }}">
            <a href="{{ url('/backend/atm') }}">
                <span class="fa fa-credit-card"></span>
                <span>@lang('app.atm')</span>
            </a>
        </li>
        @endpermission

        @permission('users.tree')
        <li class="{{ Request::is('backend/tree*') ? 'active' : ''  }}">
            <a href="{{ route('backend.user.tree') }}">
                <span class="fa fa-tree"></span>
                <span>{{ \VanguardLTE\Role::where('id', auth()->user()->role_id - 1)->first()->name }}
                    @lang('app.tree')</span>
            </a>
        </li>
        @endpermission

        @permission('shops.manage')
        <li class="{{ Request::is('backend/shops*') ? 'active' : ''  }}">
            <a href="{{ route('backend.shop.list') }}">
                <span class="fa fa-bank"></span>
                <span>@lang('app.shops')</span>
            </a>
        </li>
        @endpermission

        @permission('tournaments.manage')
        @if( !(auth()->check() && auth()->user()->shop_id == 0 ) )
        <li class="{{ Request::is('backend/tournaments*') ? 'active' : ''  }}">
            <a href="{{ route('backend.tournament.list') }}">
                <span class="fa fa-trophy"></span>
                <span>@lang('app.tournaments')</span>
            </a>
        </li>
        @endif
        @endpermission


        @if (
        auth()->user()->hasPermission('happyhours.manage') ||
        auth()->user()->hasPermission('progress.manage') ||
        auth()->user()->hasPermission('invite.manage') ||
        auth()->user()->hasPermission('sms_bonuses.manage') ||
        auth()->user()->hasPermission('welcome_bonuses.manage') ||
        auth()->user()->hasPermission('wheelfortune.manage')
        )
        @if( !(auth()->check() && auth()->user()->shop_id == 0 && auth()->user()->role_id < 6 ) ) <li
            class="treeview {{ Request::is('backend/happyhours*') || Request::is('backend/progress*') || Request::is('backend/invite*') || Request::is('backend/welcome_bonuses*') || Request::is('backend/smsbonuses*') || Request::is('backend/wheelfortune*') ? 'active' : '' }}">
            <div class="dropup">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                    <span class="fa fa-diamond"></span>
                    <span>Bonuses</span>
                    <span class="pull-right-container">
                        <span class="fa fa-angle-left pull-right"></span>
                    </span>
                </a>
                <ul class="dropdown-menu" id="bonuses-dropdown">

                    @permission('happyhours.manage')
                    <li class="{{ Request::is('backend/happyhours*') ? 'active' : ''  }}">
                        <a href="{{ route('backend.happyhour.list') }}">
                            <span class="fa fa-circle-o"></span>
                            <span>@lang('app.happyhours')</span>
                        </a>
                    </li>
                    @endpermission

                    @permission('progress.manage')
                    <li class="{{ Request::is('backend/progress*') ? 'active' : ''  }}">
                        <a href="{{ route('backend.progress.list') }}">
                            <span class="fa fa-circle-o"></span>
                            <span>@lang('app.progress')</span>
                        </a>
                    </li>
                    @endpermission

                    @permission('invite.manage')
                    <li class="{{ Request::is('backend/invite*') ? 'active' : ''  }}">
                        <a href="{{ route('backend.invites') }}">
                            <span class="fa  fa-circle-o"></span>
                            <span>@lang('app.invite')</span>
                        </a>
                    </li>
                    @endpermission

                    @permission('welcome_bonuses.manage')
                    <li class="{{ Request::is('backend/welcome_bonuses*') ? 'active' : ''  }}">
                        <a href="{{ route('backend.welcome_bonus.list') }}">
                            <span class="fa  fa-circle-o"></span>
                            <span>@lang('app.welcome_bonuses')</span>
                        </a>
                    </li>
                    @endpermission

                    @permission('sms_bonuses.manage')
                    <li class="{{ Request::is('backend/smsbonuses*') ? 'active' : ''  }}">
                        <a href="{{ route('backend.sms_bonus.list') }}">
                            <span class="fa  fa-circle-o"></span>
                            <span>@lang('app.sms_bonuses')</span>
                        </a>
                    </li>
                    @endpermission

                    @permission('wheelfortune.manage')
                    <li class="{{ Request::is('backend/wheelfortune*') ? 'active' : ''  }}">
                        <a href="{{ route('backend.wheelfortune') }}">
                            <span class="fa  fa-circle-o"></span>
                            <span>@lang('app.wheelfortune')</span>
                        </a>
                    </li>
                    @endpermission

                </ul>
            </div>
            </li>
            @endif
            @endif



            @permission('jpgame.manage')
            @if( !(auth()->check() && auth()->user()->shop_id == 0 && auth()->user()->role_id < 6) ) <li
                class="{{ Request::is('backend/jpgame*') ? 'active' : ''  }}">
                <a href="{{ route('backend.jpgame.list') }}">
                    <span class="fa  fa-heartbeat"></span>
                    <span>@lang('app.jpg')</span>
                </a>
                </li>
                @endif
                @endpermission



                @permission('pincodes.manage')
                @if( !(auth()->check() && auth()->user()->shop_id == 0 ) )
                <li class="{{ Request::is('backend/pincodes*') ? 'active' : ''  }}">
                    <a href="{{ route('backend.pincode.list') }}">
                        <span class="fa fa-qrcode"></span>
                        <span>@lang('app.pincodes')</span>
                    </a>
                </li>
                @endif
                @endpermission

                @permission('games.manage')
                @if( !(auth()->check() && auth()->user()->shop_id == 0 && auth()->user()->role_id < 6 ) ) <li
                    class="{{ (Request::is('backend/game') || Request::is('backend/game/*')) ? 'active' : ''  }}">
                    <a href="{{ route('backend.game.list') }}">
                        <span class="fa fa-gamepad"></span>
                        <span>@lang('app.games')</span>
                    </a>
                    </li>
                    @endif
                    @endpermission

                    @if (
                    auth()->user()->hasPermission('stats.pay') ||
                    auth()->user()->hasPermission('stats.game') ||
                    auth()->user()->hasPermission('stats.shift')
                    )
                    <li
                        class=" {{ Request::is('backend/transactions*') || Request::is('backend/game_stat*') || Request::is('backend/shift_stat') ? 'active' : '' }}">
                        <div class="dropup">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                                <i></i>
                                <span class="fa fa-area-chart"></span>
                                <span>Stats</span>
                                {{-- <span class="pull-right-container">
                                    <span class="fa fa-angle-left pull-right"></span>
                                </span> --}}
                            </a>
                            <ul class="dropdown-menu" id="stats-dropdown">

                                @permission('stats.pay')
                                <li class="{{ Request::is('backend/transactions*') ? 'active' : ''  }}">
                                    <a href="{{ route('backend.transactions') }}">
                                        <span class="fa fa-circle-o"></span>
                                        @lang('app.statistics')
                                    </a>
                                </li>
                                @endpermission

                                @permission('stats.game')
                                <li class="{{ Request::is('backend/game_stat') ? 'active' : ''  }}">
                                    <a href="{{ route('backend.game_stat') }}">
                                        <span class="fa fa-circle-o"></span>
                                        @lang('app.game_stats')
                                    </a>
                                </li>
                                @endpermission

                                @permission('stats.shift')
                                <li class="{{ Request::is('backend/shift_stat') ? 'active' : ''  }}">
                                    <a href="{{ route('backend.shift_stat') }}">
                                        <span class="fa fa-circle-o"></span>
                                        @lang('app.shift_stats')
                                    </a>
                                </li>
                                @endpermission
                            </ul>
                        </div>
                    </li>

                    @endif

                    @if (
                    auth()->user()->hasPermission('activity.system') ||
                    auth()->user()->hasPermission('activity.user')
                    )
                    <li class="{{ Request::is('backend/activity*') ? 'active' : '' }}">
                        <div class="dropup">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                <span class="fa fa-bar-chart"></span>
                                <span>@lang('app.activity_log')</span>
                                <span class="pull-right-container">
                                    <span class="fa fa-angle-left pull-right"></span>
                                </span>
                            </a>
                            <ul class="dropdown-menu" id="stats-dropdown">
                                <li class="{{ Request::is('backend/activity') ? 'active' : ''  }}">
                                    <a href="{{ route('backend.activity.index') }}">
                                        <span class="fa fa-circle-o"></span>
                                        <span>@lang('app.all')</span>
                                    </a>
                                </li>
                                @permission('activity.system')
                                <li class="{{ Request::is('backend/activity/system') ? 'active' : ''  }}">
                                    <a href="{{ route('backend.activity.system', 'system') }}">
                                        <span class="fa fa-circle-o"></span>
                                        <span>@lang('app.system_data')</span>
                                    </a>
                                </li>
                                @endpermission
                                @permission('activity.user')
                                <li class="{{ Request::is('backend/activity/user') ? 'active' : ''  }}">
                                    <a href="{{ route('backend.activity.user', 'user') }}">
                                        <span class="fa fa-circle-o"></span>
                                        <span>@lang('app.user_data')</span>
                                    </a>
                                </li>
                                @endpermission
                            </ul>
                        </div>
                    </li>
                    @endif

                    @permission('api.manage')
                    @if( !(auth()->check() && auth()->user()->shop_id == 0 ) )
                    <li class="{{ Request::is('backend/api*') ? 'active' : ''  }}">
                        <a href="{{ route('backend.api.list') }}">
                            <span class="fa fa-key"></span>
                            <span>@lang('app.api_keys')</span>
                        </a>
                    </li>
                    @endif
                    @endpermission

                    @permission('tickets.manage')
                    <li class="{{ Request::is('backend/support*') ? 'active' : ''  }}">
                        <a href="{{ route('backend.support.index') }}">
                            <span class="fa fa-support"></span>
                            <span>Support</span>

                        </a>
                    </li>
                    @endpermission

                    @if (auth()->user()->hasPermission('settings.payment'))
                    <li class=" {{
    Request::is('backend/settings/general') || Request::is('backend/settings/securities') ||
    Request::is('backend/settings/sms') || Request::is('backend/settings/payment') ||
    Request::is('backend/settings/banks') || Request::is('backend/settings/categories') ||
    Request::is('backend/settings/games') || Request::is('backend/settings/auth') ||
    Request::is('backend/settings/bonuses')
  ? 'active' : '' }}">
                        <div class="dropup">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                <span class="fa fa-cog fa-spin fa-fw" style='font-size:16px;color:red'></span>
                                <span>@lang('app.settings')</span>
                                <span class="pull-right-container">
                                    <span class="fa fa-angle-left pull-right"></span>
                                </span>
                            </a>
                            <ul class="dropdown-menu" id="stats-dropdown">

                                @permission('settings.payment')
                                <li class="{{ Request::is('backend/settings/payment') ? 'active' : ''  }}">
                                    <a href="{{ route('backend.settings.list', 'payment') }}">
                                        <span class="fa fa-circle-o"></span>
                                        @lang('app.payment')
                                    </a>
                                </li>
                                @endpermission

                            </ul>
                        </div>
                    </li>
                    @endif



    </ul>


</section>

<div class="modal fade" id="openChangeModal" role="dialog" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <form action="{{ route('backend.profile.setshop') }}" method="POST">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">@lang('app.shops')</h4>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        {!! Form::select('shop_id',
                        (auth()->user()->hasRole(['admin','agent']) ? [0 => __('app.no_shop')] : [])
                        +
                        auth()->user()->shops_array(), auth()->user()->shop_id, ['class' => 'form-control select2',
                        'style' => 'width: 100%;']) !!}
                        <spannput type="hidden" name="_token" value="{{ csrf_token() }}">
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">@lang('app.close')</button>
                    <button type="submit" class="btn btn-primary">@lang('app.change')</button>
                </div>
            </form>

        </div>
    </div>
</div>