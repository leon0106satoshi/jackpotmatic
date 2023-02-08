<link rel="stylesheet" href="/frontend/Default/assets/liMarquee.css">
<link rel="stylesheet" href="/frontend/Default/assets/style.css">
<link rel="stylesheet" href="/frontend/Default/css/payment.css">
<script src="https://kit.fontawesome.com/c5d347dc24.js" crossorigin="anonymous"></script>
<section class="games__hero__wrapper" style="padding-bottom: 0px !important;">
    <div class="top__section" id="tothetop" style="height: 115px;">
        <div>
            <div>
                <div id="navbar-mobile-overlay"></div>
                <div id="navbar-mobile">
                    <a href="/" class="close">
                        <img src="/assets/_new-style/images/icon_close.png">
                    </a>
                    <div class="navbar-mobile-logo sign__up">
                        <img src="/assets/_new-style/images/logo.png" alt="logo" class="logo">
                    </div>

                    <ul class="navbar-nav">
                        <li class="nav-item sign__up">
                            <a class="nav-link" href="index.html#">@lang('app.home')</a>
                        </li>
                    </ul>

                    <div>
                        <button class="games__button button-register spin-gradient sign__up"
                            style="cursor: pointer;">@lang('app.register')</button>

                    </div>
                    <div id="mobile-submenu">
                        <a href="index.html#" class="close">
                            <img src="/assets/_new-style/images/icon_close.png">
                        </a>
                        <div class="navbar-mobile-logo sign__up">
                            <a>
                                <img src="/assets/_new-style/images/logo.png" alt="logo" class="logo">
                            </a>
                        </div>
                        <a href="index.html#"><span class="back">
                                <img src="/assets/_new-style/images/left_chevron.png">BACK</span></a>
                    </div>
                </div>


                <nav class="navbar navbar-toggleable-md navbar-inverse" id="navbar-main">
                    <div class="container">

                        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <a href="/" class="navbar-brand sign__up">
                            <img src="/assets/_new-style/images/logo.png" alt="logo">
                        </a>
                        <ul class="games__button__mobile" style="display:flex;gap:2px;">
                            <li>
                                <div class="language-select btn-info button-lang btn-collapsible lc">
                                    <?php
                                    $lang = [
                                        'es' => '<i data-lang-code="es" class="flag-icon flag-icon-es"></i>',
                                        'en' => '<i data-lang-code="en" class="flag-icon flag-icon-en"></i>',
                                    ];

                                    if (isset($_COOKIE['language'])) {
                                        $laut = htmlspecialchars($_COOKIE['language']);
                                        $active_lang = $lang[$laut];
                                    } else {
                                        $laut = 'es';
                                        $active_lang = $lang['es'];
                                    }
                                    ?>
                                    <?php echo $active_lang; ?>
                                    <span style="display: none;opacity:1;">
                                        <?php foreach ($lang as $key => $dater):?>
                                        <?php if($key != $laut):?>
                                        <?php echo $dater; ?>
                                        <?php endif;?>
                                        <?php endforeach;?>
                                    </span>
                                </div>
                            </li>
                            <li>
                                <a href="#" ng-click="openModal($event, '#my-account')"
                                    class="games__button button-pay">@lang('app.pay_button')</a>
                            </li>
                            <li>
                                <a href="#" ng-click="openModal($event, '#my-account')"
                                    class="games__button  button-my-profile">
                                    @lang('app.my_profile') </a>
                            </li>
                            <li class="last">
                                <a href="/logout" class="games__button  button-logout ">
                                    <span><i class="fas fa-sign-out-alt"></i></span>
                                    {{-- @lang('app.logout') --}}
                                </a>
                            </li>
                        </ul>

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mr-auto"></ul>
                            <!-- START OF DESKTOP NAV -->
                            <div class="games__header__wrapper">
                                <ul class="container">
                                    <li class="brand sign__up">
                                        <a href="/">
                                            <img src="/assets/_new-style/images/logo.png">
                                        </a>
                                    </li>

                                    <li>
                                        <a href="/logout" class="games__button  button-logout ">
                                            <span><i class="fas fa-sign-out-alt"></i></span>
                                            {{-- @lang('app.logout') --}}
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" ng-click="openModal($event, '#my-account')"
                                            class="games__button button-my-profile">
                                            @lang('app.my_profile') </a>
                                    </li>
                                    <li>
                                        <a href="#" ng-click="openModal($event, '#my-account')"
                                            class="games__button button-pay">@lang('app.pay_button')</a>
                                    </li>
                                    <li>
                                        <div class="language-select btn-info button-lang btn-collapsible lc">
                                            <?php
                                            $lang = [
                                                'es' => '<i data-lang-code="es" class="flag-icon flag-icon-es"></i>',
                                                'en' => '<i data-lang-code="en" class="flag-icon flag-icon-en"></i>',
                                            ];

                                            if (isset($_COOKIE['language'])) {
                                                $laut = htmlspecialchars($_COOKIE['language']);
                                                $active_lang = $lang[$laut];
                                            } else {
                                                $laut = 'es';
                                                $active_lang = $lang['es'];
                                            }
                                            ?>
                                            <?php echo $active_lang; ?>
                                            <span>
                                                <?php foreach ($lang as $key => $dater):?>
                                                <?php if($key != $laut):?>
                                                <?php echo $dater; ?>
                                                <?php endif;?>
                                                <?php endforeach;?>
                                            </span>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </nav>
            </div>

        </div>
    </div>
    <div class="slider">
        <div class="container">
            <div class="swiper-container slider">
                <div class="swiper-wrapper">
                    <div class="swiper-slide slider__slide">
                        <img src="/frontend/Default/assets/images/slide1.jpeg" alt="" class="slider__img">
                        <div class="slider__inner">
                            <div class="slider__cont">
                                <a href="" class="slider__link">@lang('app.this_is_link')</a>
                                <div class="slider__text">Jack Pot Jim
                                    <span>@lang('app.enter_here_to_win')</span>
                                </div>
                                <a href="" class="slider__btn">@lang('app.more_info')</a>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide slider__slide">
                        <img src="/frontend/Default/assets/images/slide2.jpeg" alt="" class="slider__img">
                        <div class="slider__inner">
                            <div class="slider__cont">
                                <a href="" class="slider__link">@lang('app.this_is_link')</a>
                                <div class="slider__text">@lang('app.bonus_20_sign_up')
                                    <span>@lang('app.register_now_get_bonus')</span>
                                </div>
                                <a href="" class="slider__btn">@lang('app.more_info')</a>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide slider__slide">
                        <img src="/frontend/Default/assets/images/slide3.jpeg" alt="" class="slider__img">
                        <div class="slider__inner">
                            <div class="slider__cont">
                                <a href="" class="slider__link">@lang('app.huge_wins_payed_out_daily')!!</a>
                                <div class="slider__text">@lang('app.slots_riches')
                                    <span>@lang('app.all_new_games')</span>
                                </div>
                                <a href="" class="slider__btn">@lang('app.more_info')</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="slider__prev"></div>
                <button class="slider__next"></button>
                <div class="swiper-pagination"></div>
            </div>
        </div>
    </div>
    <script src="/frontend/Default/assets/js/jquery.liMarquee.js"></script>

    <script>
        $(function () {

            $('.line__subinner').style('width', $('.line__winner').children().length);
            $(document).ready(() => {
                $('.line__subinner').liMarquee();
            })
            const swiper = new Swiper('.slider', {
                loop: true,
                autoplay: {
                    delay: 5500,
                    disableOnInteraction: false,
                },
                speed: 700,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },

                navigation: {
                    nextEl: '.slider__next',
                    prevEl: '.slider__prev',
                },

            });
        })
    </script>


    <!--style-->
    <style>
        .font-white {
            color: white;
            font-size: calc(0.90vw + 0.5rem);
            margin-left: calc(0.90vw + 5rem);
            line-height: 2;
        }

        .tabs__content.active {
            display: block;
        }
    </style>

    <div class="modal" id="my-account" style="display: none;max-height: 100%;">
        <header class="modal__header">
            <span ng-click="closeModal($event)" class="modal__icon icon icon_cancel js-close-popup"></span>
        </header>
        <div class="popup" style="top: 0px;">
            <div class="popup__body">
                <div class="popup__menu">
                    <div data-href="#profile" class="popup__link">@lang('app.my_profile')</div>
                    <div id="document-tab" data-href="#document" class="popup__link">@lang('app.document')</div>
                    <div data-href="#history" class="popup__link">@lang('app.history')</div>
                    <div data-href="#balance" class="popup__link active">@lang('app.deposit')</div>
                    <div data-href="#withdraw" class="popup__link">@lang('app.withdrawal')</div>
                </div>
                <div class="popup__cont " id="div_profile">
                    <h2>@lang('app.welcome_to_profile_page') {{ auth()->user()->username }}</h2>
                    <br><br>
                    <form class="popup__form">
                        <div class="profile">
                            <div class="profile__field">
                                <div class="profile__field-name">@lang('app.first_name')</div>
                                <input type="text" class="profile__field-input">
                            </div>
                            <div class="profile__field">
                                <div class="profile__field-name">@lang('app.last_name')</div>
                                <input type="text" class="profile__field-input">
                            </div>
                            <div class="profile__field">
                                <div class="profile__field-name">@lang('app.date_of_birth')</div>
                                <input type="text" class="profile__field-input profile__field-input--date">
                            </div>
                            <div class="profile__field">
                                <div class="profile__field-name">@lang('app.gender')</div>
                                <select class="profile__field-input profile__field-input--select">
                                    <option value="" style="display: none;">-</option>
                                    <option value="">@lang('app.male')</option>
                                    <option value="">@lang('app.female')</option>
                                </select>
                            </div>
                            <div class="profile__field">
                                <div class="profile__field-name">@lang('app.country')</div>
                                <input type="text" disabled="" class="profile__field-input" value="Spain">
                            </div>
                            <div class="profile__field">
                                <div class="profile__field-name">@lang('app.lang')</div>
                                <select class="profile__field-input profile__field-input--select">
                                    <option value="">Elglish</option>
                                    <option value="">French</option>
                                    <option value="">Spanish</option>
                                    <option value="">Norwegian</option>
                                    <option value="">German</option>
                                    <option value="">Italian</option>
                                </select>
                            </div>
                            <div class="profile__field">
                                <div class="profile__field-name">@lang('app.city')</div>
                                <input type="text" class="profile__field-input">
                            </div>
                            <div class="profile__field">
                                <div class="profile__field-name">@lang('app.address')</div>
                                <input type="text" class="profile__field-input">
                            </div>
                            <div class="profile__field">
                                <div class="profile__field-name">@lang('app.postcode')</div>
                                <input type="text" class="profile__field-input">
                            </div>
                            <ul class="col-6 footer__item-acc-info" style="padding: 5px 0px;">
                                @lang('app.current_balances')!
                                <li style="font-black"><span class="info-name">@lang('app.your_balance'):</span> <span
                                        class="info-value balanceValue">{{ number_format(auth()->user()->balance, 2,
                                        '.', '') }}
                                        {{ isset($currency) ? $currency : 'EUR' }}</span></li>
                                <li class="font-black"><span class="info-name">@lang('app.your_bonus'):</span> <span
                                        class="info-value bonusValue">{{ number_format(auth()->user()->bonus, 2, '.',
                                        '') }}
                                        {{ isset($currency) ? $currency : 'EUR' }}</span></li>
                                <li class="font-black"><span class="info-name">@lang('app.your_wager'):</span> <span
                                        class="info-value wager">{{ number_format(auth()->user()->wager, 2, '.', '') }}
                                        {{ isset($currency) ? $currency : 'EUR' }}</span></li>
                                <!-- class disabled -->
                                @if (isset($refund) &&
                                $refund &&
                                auth()->user()->present()->count_refund > 0 &&
                                auth()->user()->present()->balance <= $refund->min_balance)
                                    <li class="font-black refunds-icon"><span class="info-name">@lang('app.refunds'):</span>
                                        <span class="info-value count_refund" id="refunds">{{
                                            number_format(auth()->user()->count_refund, 2, '.', '') }}
                                            {{ isset($currency) ? $currency : 'EUR' }}</span>
                                    </li>
                                    @else
                                    <li class="font-black refunds-icon disabled">
                                        <span class="info-name">@lang('app.refunds'):</span>
                                        <span class="info-value count_refund">{{
                                            number_format(auth()->user()->count_refund, 2, '.', '') }}
                                            {{ isset($currency) ? $currency : 'EUR' }}</span>
                                    </li>
                                    @endif

                            </ul>
                        </div>
                        <button class="popup__btn">@lang('app.update')</button>
                    </form>
                </div>
                <div class="popup__cont " id="div_document">
                    @php
                        $disable = true;
                        $status = trans('app.Unconfirmed');
                        if(auth()->user()->is_approved_license == '1'):
                            $status = trans('app.activated');
                        elseif(auth()->user()->is_approved_license == '-1'):
                            $status = trans('app.Banned');
                        endif;
                    @endphp
                    @if(auth()->user()->is_approved_license != '1')
                    <div class="notification">
                        <img src="/assets/icon_notification.png" class="notification__icon">
                        <p class="notification__text">
                        @php
                        if(auth()->user()->update_license_at > 0):
                            if(auth()->user()->is_approved_license == 0):
                                echo "Your Documents are waiting Approval please allow 48 hours.<br><b>{{ date('Y/m/d H:i:s') }}</b>";
                            else:
                                $disable = false;
                                echo "We are sorry but your documents were not approved.<br> Please try again with new documents.";
                            endif;
                        else:
                            $disable = false;
                            echo trans('app.please_upload_jpg_format_file').':';
                        endif;
                        @endphp
                    </div>
                    @elseif(auth()->user()->update_license_at > strtotime(auth()->user()->last_login))
                    <div class="notification">
                        <img src="/assets/icon_notification.png" class="notification__icon">
                        <p class="notification__text">
                        Thank you, your documents have been approved!
                    </div>
                    @endif
                    @if(!$disable)
                    <form action="{{route('frontend.document.post')}}" method="post" enctype="multipart/form-data" name="document-form">
                        @csrf
                    @endif
                        <table class="table">
                            <thead>
                                <tr>
                                    <td class="table__num">#</td>
                                    <td class="table__name">@lang('app.document_request_list')</td>
                                    <td class="table__files">@lang('app.files')</td>
                                    <td class="table__status">@lang('app.status')</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td class="table__doc">
                                        <div class="table__doc-name">@lang('app.id_passport_driving_licence_front')</div>
                                        <div class="table__help table__help--front"></div>
                                    </td>
                                    <td class="table__add">
                                        <div class="file">
                                            <input type="file" name="license_front" class="file__input" {{ $disable ? 'disabled' : '' }} accept="image/*" required>
                                            <div class="table__add-btn">@lang('app.add')</div>
                                        </div>

                                    </td>
                                    <td style="padding:10px">{{ $status }}</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td class="table__doc">
                                        <div class="table__doc-name">@lang('app.id_passport_driving_licence_back')</div>
                                        <div class="table__help table__help--back"></div>
                                    </td>
                                    <td class="table__add">
                                        <div class="file">
                                            <input type="file" name="license_back" class="file__input" {{ $disable ? 'disabled' : '' }} accept="image/*" required>
                                            <div class="table__add-btn">@lang('app.add')</div>
                                        </div>
                                    </td>
                                    <td style="padding:10px">{{ $status }}</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td class="table__doc">

                                        <div class="table__doc-name">@lang('app.utility_bill')</div>
                                        <div class="table__wrap">
                                            <div class="table__help table__help--front"></div>
                                            <div class="table__tooltip">@lang('app.you_can_upload_doc_pdf_as_well')
                                            </div>
                                        </div>
                                    </td>
                                    <td class="table__add">
                                        <div class="file">
                                            <input type="file" name="bill_doc" class="file__input" {{ $disable ? 'disabled' : '' }}  accept="application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,image/x-png,image/gif,image/jpeg" required>
                                            <div class="table__add-btn">@lang('app.add')</div>
                                        </div>
                                    </td>
                                    <td style="padding:10px">{{ $status }}</td>
                                </tr>
                                <tr>
                                    <td colspan="4">
                                        @if(!$disable)
                                        <input type="submit" value="Submit" class="popup__button button btn btng">
                                        @endif
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    @if(!$disable)
                        <div style="display:flex; grid-template-columns: repeat(3, 1fr); min-height: 100px;gap: 20px">
                            <img id="license_front" src="" alt="" style="width: calc(100% / 3 - 20px);">
                            <img id="license_back" src="" alt="" style="width: calc(100% / 3 - 20px);">
                            <img id="bill_doc" src="" alt="" style="width: calc(100% / 3 - 20px);">
                        </div>
                    </form>
                    @endif
                </div>
                <div class="popup__cont " id="div_history">
                    <div class="history__filter" style="display: none;">
                        <form action="https://casino-sr.surge.sh/" class="history__form">
                            <div class="history__field">
                                <div class="history__field-name">@lang('app.from_date'):</div>
                                <input type="text" class="history__field-input" maxlength="10">
                            </div>
                            <div class="history__field">
                                <div class="history__field-name">@lang('app.to_date'):</div>
                                <input type="text" class="history__field-input" maxlength="10">
                            </div>
                            <button class="history__btn">@lang('app.go')</button>
                        </form>
                    </div>
                    <div class="history__box">
                        <div class="history__item">
                            <div class="history__name">@lang('app.games')</div>
                            <div class="history__cont">
                                <table class="table table--history">
                                    <thead>
                                        <tr>
                                            <td class="table__num">#</td>
                                            <th class="table__date">@lang('app.date')</th>
                                            <th class="table__game">@lang('app.game')</th>
                                            <th class="table__bet">@lang('app.bet')</th>
                                            <th class="table__win">@lang('app.win')</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        @if (isset($gamestat) && count($gamestat))
                                        @foreach ($gamestat as $k=>$stat)
                                        <tr>
                                            <td>{{ $k+1 }}</td>
                                            <td>{{ date('Y-m-d H:i', strtotime($stat->date_time)) }}</td>
                                            <td>
                                                <a href="{{ route('frontend.game.go', $game->name) }}?api_exit=/">
                                                    {{ $stat->game }}
                                                </a>
                                            </td>
                                            <td>{{ $stat->bet }}</td>
                                            <td>{{ $stat->win }}</td>
                                        </tr>
                                        @endforeach
                                        @else
                                        <tr>
                                            <td colspan="6">@lang('app.no_data')</td>
                                        </tr>
                                        @endif
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="history__item">
                            <div class="history__name">@lang('app.deposits')</div>
                            <div class="history__cont">
                                <table class="table table--history">
                                    <thead>
                                        <tr>
                                            <td class="table__num">#</td>
                                            <td class="table__date">@lang('app.date')</td>
                                            <td class="table__game">@lang('app.transaction')</td>
                                            <td class="table__deposit">@lang('app.deposit')</td>
                                            <td class="table__status">@lang('app.status')</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        @if (isset($depositlist) && count($depositlist))
                                        @foreach ($depositlist as $k=>$row)
                                        <tr>
                                            <td>{{ $k+1 }}</td>
                                            <td>{{ date('Y-m-d H:i', strtotime($row->created_at)) }}</td>
                                            <td>{{ $row->id }}</td>
                                            <td>{{ $row->sum }} {{ $row->currency }}</td>
                                            <td>{{ $row->status }}</td>
                                        </tr>
                                        @endforeach
                                        @else
                                        <tr>
                                            <td colspan="6">@lang('app.no_data')</td>
                                        </tr>
                                        @endif
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="history__item">
                            <div class="history__name">@lang('app.withdrawals')</div>
                            <div class="history__cont">
                                <div class="history__empty">@lang('app.no_withdrawals_yet')</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="popup__cont active" id="div_balance">
                    <!-- <div class="bonus">
                        <div class="bonus__inner">
                            <div class="bonus__title">Welcome bonus</div>
                            <div class="bonus__text">Double your funds and your fun with our outstanding welcome bonus! <br>
                                Following your first deposit, we will give you A MATCHING BONUS of 100% of the amount you
                                deposit, up to €200.</div>
                        </div>
                    </div>-->

                    <div class="deposit">
                        <style>
                            .hotpay_inp {
                                width: 100% !important;
                                display: block;
                                text-align: center;
                                letter-spacing: 2px;
                                display: none;
                            }
                            .pay__header {
                                height: 40px;
                            }

                            .pay__title {
                                text-align: left;
                                font-size: 17px;
                                padding: 9px;
                                cursor: pointer;
                            }

                            .masterbutton {
                                margin: 0 !important;
                                margin-left: 13px !important;
                                margin-top: 9px !important;
                                width: 100%;
                                margin: 0 !important;
                            }

                            .masterbutton2 {
                                width: 100%;
                                margin: 0 !important
                            }

                            .tabs__content {
                                background: #fff;
                                display: none
                            }
                        </style>
                        @if(false)
                        <div class="deposit__item">
                            <div class="deposit__box">
                                <div class="deposit__name">Deposit by HotPay</div>
                                <div class="deposit__payments">
                                    <img src="/frontend/Default/img/visa.png" alt="" class="deposit__payments-img">
                                </div>
                            </div>
                            <div class="deposit__cont" style="overflow: hidden; display: none;">
                                <form name="valform" action="/hotpay.php" target="_blank" method="POST">
                                    <input type="hidden" name="uid" value="{{ auth()->user()->id }}">
                                    <input type="hidden" name="email" value="{{ auth()->user()->email }}">
                                    <div class="modal__content contentpay">
                                        <div class="deposit__inner">
                                            <center>
                                                <table style="display:block; width:300px; margin:0 auto;">
                                                    <tr>
                                                        <td colspan="2"> <input type="text" name="amount"
                                                                placeholder="Enter Amount"
                                                                class="modal__input-inner input__inner hotpay_inp"
                                                                style="font-weight:bold;" required></td>
                                                    </tr>
                                                    <tr>
                                                        <td colspan="2"> <input type="text" name="card_no"
                                                                placeholder="Enter Card Number"
                                                                class="modal__input-inner input__inner hotpay_inp"
                                                                required></td>
                                                    </tr>
                                                    <tr>
                                                        <td><input type="text" name="card_exp"
                                                                placeholder="Enter Ex.Date"
                                                                class="modal__input-inner input__inner hotpay_inp"
                                                                required></td>
                                                        <td><input type="text" name="card_cvv" placeholder="Enter CVV"
                                                                class="modal__input-inner input__inner hotpay_inp"
                                                                required></td>
                                                    </tr>
                                                    <tr>
                                                        <td colspan="2"><input type="text" name="card_holder"
                                                                placeholder="Enter CardHolder Name"
                                                                class="modal__input-inner input__inner hotpay_inp"
                                                                required></td>
                                                    </tr>
                                                </table>
                                            </center>
                                            <script type="text/javascript"
                                                src="https://cdnjs.cloudflare.com/ajax/libs/jquery.maskedinput/1.4.1/jquery.maskedinput.js"></script>
                                            <script type="text/javascript">



                                                jQuery(function ($) {
                                                    $("input[name=card_no]").mask("9999 9999 9999 9999");
                                                    $("input[name=card_exp]").mask("99/99");
                                                    $("input[name=card_cvv]").mask("999");
                                                });
                                            </script>

                                        </div>
                                        <div class="modal__error" style="display: none"></div>
                                        <input type="submit" name="submit" value="Pay Now"
                                            class="popup__button button btn btng masterbutton2">
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="deposit__item">
                            <div class="deposit__box">
                                <div class="deposit__name">Deposit crypto by Paykassa</div>
                                <div class="deposit__payments">
                                    <img src="/frontend/Default/img/visa.png" alt="" class="deposit__payments-img">
                                </div>
                            </div>
                            <div class="deposit__cont" style="overflow: hidden; display: none;max-height:50vh;overflow:auto;">
                            @php
                            $systems = [
                                2=>['key'=>"perfectmoney" ,'currency'=> ['USD']],
                                7=>['key'=>"berty" ,'currency'=> ['RUB', 'USD']],
                                11=>['key'=>"bitcoin" ,'currency'=> ['BTC']],
                                12=>['key'=>"ethereum" ,'currency'=> ['ETH']],
                                14=>['key'=>"litecoin" ,'currency'=> ['LTC']],
                                15=>['key'=>"dogecoin" ,'currency'=> ['DOGE']],
                                16=>['key'=>"dash" ,'currency'=> ['DASH']],
                                18=>['key'=>"bitcoincash" ,'currency'=> ['BCH']],
                                19=>['key'=>"zcash" ,'currency'=> ['ZEC']],
                                22=>['key'=>"ripple" ,'currency'=> ['XRP']],
                                27=>['key'=>"tron" ,'currency'=> ['TRX']],
                                28=>['key'=>"stellar" ,'currency'=> ['XLM']],
                                29=>['key'=>"binancecoin" ,'currency'=> ['BNB']],
                                30=>['key'=>"tron_trc20" ,'currency'=> ['USDT']],
                                31=>['key'=>"binancesmartchain_bep20" ,'currency'=> ['USDT', 'BUSD', 'USDC', 'ADA', 'EOS', 'BTC', 'ETH', 'DOGE']],
                                32=>['key'=>"ethereum_erc20" ,'currency'=> ['USDT']]
                            ];
                            @endphp
                            <div class="modal__content">
                                @foreach ($systems as $id => $row)
                                    {!! Form::open(['route' => 'frontend.balance.post', 'method' => 'POST']) !!}

                                        <div class="deposit__inner" style="grid-template-columns: 20% 20% 30% 20%;margin: 5px 0px;">
                                            <div class="modal__input input">
                                                <img src="/frontend/Default/img/_src/logo-{{ $row['key'] }}.png" class="modal__input-inner input__inner" alt="" style="max-width:100%;padding:0px;display:contents;">
                                            </div>
                                            <div class="modal__input input" style="margin-left:0px;padding-top:10px;">
                                                @if(count($row['currency']) == 1)
                                                {!! Form::hidden('currency', $row['currency'][0]) !!}
                                                <input class="popup__button button btn btng masterbutton2" value="{{ $row['currency'][0] }}" type="button" />
                                                @else
                                                <select name="currency" class="popup__button button btn btng masterbutton2" style="margin-top: 0px;min-width: 100%;">
                                                    @foreach($row['currency'] as $c)
                                                        <option value="{{ $c }}">{{ $c }}</option>
                                                    @endforeach
                                                </select>
                                                @endif
                                            </div>
                                            <div class="modal__input input" style="margin-left:0px;">
                                                <input type="number" class="modal__input-inner input__inner" step="0.01" placeholder="Enter Amount" name="summ" style="width:100%;height:40px;" required>
                                            </div>
                                            <div class="modal__input input" style="margin-left:0px;padding-top:10px;">
                                                {!! Form::hidden('system', $id) !!}
                                                <button class="popup__button button btn btng masterbutton2">Pay</button>
                                            </div>
                                        </div>
                                    {!! Form::close() !!}
                                @endforeach
                            </div>
                            </div>
                        </div>


                        <div class="deposit__item">
                            <div class="deposit__box">
                                <div class="deposit__name">@lang('app.deposit_by_zetpay')</div>
                                <div class="deposit__payments">
                                    <img src="/frontend/Default/img/visa.png" alt="" class="deposit__payments-img">
                                </div>
                            </div>
                            <div class="deposit__cont" style="overflow: hidden; display: none;">
                                <!--<form name="Pay" method="post" action="/send.php" accept-charset="UTF-8" class="modal__content">
                                    <div class="modal__input input2">
                                        <input type="text" name="amount" class="modal__input-inner input__inner"
                                            placeholder="Enter Amount" required style="width:100%">
                                    </div>
                                    <input type="hidden" name="currency" value="643">
                                    <input type="hidden" name="payway" value="card_eur">
                                    <input type="hidden" name="shop_id" value="133">
                                    <input type="hidden" name="shop_order_id" value="101">
                                    <input type="submit" type="hidden" name="description" value="Pay Balance"
                                        class="button masterbutton">
                                </form> -->
                                <form name="Pay" method="post" action=" https://pay.zetpay.io/ru/pay" accept-charset="UTF-8" class="modal__content">
                                    <div class="modal__input input2">
                                        <input type="text" name="amount" class="modal__input-inner input__inner" placeholder="Enter Amount" required style="width:100%">
                                    </div>
                                    <input type="hidden" name="currency" value="643" input type="hidden">
                                    <input name="shop_id" value="133" type="hidden">
                                    <input type="hidden" name="sign" value="7daaf7e7d574d3b259c367974b0cb244c8506140332bc65a814d7a917f7ce590">
                                    <input type="hidden" name="shop_order_id" value="user_{{ auth()->user()->id }}">
                                    <input type="submit" input type="hidden" name="description" value="Pay balance" class="button masterbutton">
                                </form>
                            </div>
                        </div>
                        @endif
                        <div class="deposit__item active">
                            <div class="deposit__box">
                                <div class="deposit__name">@lang('app.deposit_by_credit_card') (Stripe)</div>
                                <div class="deposit__payments">
                                    <img src="/frontend/Default/img/visa.png" alt="" class="deposit__payments-img">
                                </div>
                            </div>
                            <div class="deposit__cont" style="overflow: hidden; display: block;">
                                <form name="stripe-form" action="{{ route('payment.creditcard.result') }}" method="POST">
                                    <div class="modal__content contentpay">
                                        @csrf
                                        <div class="deposit__inner">
                                            <div class="modal__input input">
                                                <input type="text" name="amount"
                                                    placeholder="Enter Amount" class="modal__input-inner input__inner"
                                                    required>
                                            </div>
                                            <!--
                                            <div class="modal__input input">
                                                <select name="currency"
                                                    class="modal__input-inner input__inner" style="width: 170px">
                                                    <option value="eur">EUR</option>
                                                    <option value="aud">AUD</option>
                                                    <option value="bgn">BGN</option>
                                                    <option value="brl">BRL</option>
                                                    <option value="cad">CAD</option>
                                                    <option value="chf">CHF</option>
                                                    <option value="cny">CNY</option>
                                                    <option value="czk">CZK</option>
                                                    <option value="dkk">DKK</option>
                                                    <option value="gbp">GBP</option>
                                                    <option value="hkd">HKD</option>
                                                    <option value="hrk">HRK</option>
                                                    <option value="huf">HUF</option>
                                                    <option value="idr">IDR</option>
                                                    <option value="ils">ILS</option>
                                                    <option value="inr">INR</option>
                                                    <option value="isk">ISK</option>
                                                    <option value="jpy">JPY</option>
                                                    <option value="krw">KRW</option>
                                                    <option value="mxn">MXN</option>
                                                    <option value="myr">MYR</option>
                                                    <option value="nok">NOK</option>
                                                    <option value="nzd">NZD</option>
                                                    <option value="php">PHP</option>
                                                    <option value="pln">PLN</option>
                                                    <option value="ron">RON</option>
                                                    <option value="rub">RUB</option>
                                                    <option value="sek">SEK</option>
                                                    <option value="sgd">SGD</option>
                                                    <option value="thb">THB</option>
                                                    <option value="try">TRY</option>
                                                    <option value="usd">USD</option>
                                                </select>
                                            </div>
                                            -->
                                            <div class="modal__input input">
                                                <input type="text" name="currency" class="modal__input-inner input__inner" readonly style="width: 170px" value="{{ auth()->user()->shop->currency }}"/>
                                            </div>
                                        </div>
                                        <div class="modal__error" style="display: none"></div>
                                        <input type="submit"
                                            value="@lang('app.verify_credit_card')"
                                            class="popup__button button btn btng masterbutton2">
                                    </div>
                                </form>
                            </div>
                        </div>
                        @if(false)
                        <div class="deposit__item active">
                            <div class="deposit__box">
                                <div class="deposit__name">@lang('app.deposit_by_credit_card')</div>
                                <div class="deposit__payments">
                                    <img src="/frontend/Default/img/visa.png" alt="" class="deposit__payments-img">
                                </div>
                            </div>
                            <div class="deposit__cont" style="overflow: hidden; display: block;">
                                <form name="valform" action="" method="POST">
                                    <div class="modal__content contentpay">
                                        <div class="deposit__inner">
                                            <div class="modal__input input">
                                                <input type="text" id="cctextboxid" name="cctextbox"
                                                    placeholder="Enter Amount" class="modal__input-inner input__inner"
                                                    required>
                                            </div>
                                            <div class="modal__input input">
                                                <select name="currency" id="currency"
                                                    class="modal__input-inner input__inner" style="width: 170px">
                                                    <option value="EUR">EUR</option>
                                                    <option value="AUD">AUD</option>
                                                    <option value="BGN">BGN</option>
                                                    <option value="BRL">BRL</option>
                                                    <option value="CAD">CAD</option>
                                                    <option value="CHF">CHF</option>
                                                    <option value="CNY">CNY</option>
                                                    <option value="CZK">CZK</option>
                                                    <option value="DKK">DKK</option>
                                                    <option value="GBP">GBP</option>
                                                    <option value="HKD">HKD</option>
                                                    <option value="HRK">HRK</option>
                                                    <option value="HUF">HUF</option>
                                                    <option value="IDR">IDR</option>
                                                    <option value="ILS">ILS</option>
                                                    <option value="INR">INR</option>
                                                    <option value="ISK">ISK</option>
                                                    <option value="JPY">JPY</option>
                                                    <option value="KRW">KRW</option>
                                                    <option value="MXN">MXN</option>
                                                    <option value="MYR">MYR</option>
                                                    <option value="NOK">NOK</option>
                                                    <option value="NZD">NZD</option>
                                                    <option value="PHP">PHP</option>
                                                    <option value="PLN">PLN</option>
                                                    <option value="RON">RON</option>
                                                    <option value="RUB">RUB</option>
                                                    <option value="SEK">SEK</option>
                                                    <option value="SGD">SGD</option>
                                                    <option value="THB">THB</option>
                                                    <option value="TRY">TRY</option>
                                                    <option value="USD">USD</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="modal__error" style="display: none"></div>
                                        <input id="elem" type="button" name="submit"
                                            value="@lang('app.verify_credit_card')"
                                            class="popup__button button btn btng masterbutton2">
                                    </div>
                                </form>
                            </div>
                        </div>
                        @endif
                    </div>
                </div>

                <div class="popup__cont" id="div_withdraw">
                    <?php $pass = true;?>
                    @if(auth()->user()->status != 'Active')
                    <?php $pass = false;?>
                    <div class="notification">
                        <img src="/assets/icon_notification.png" class="notification__icon">
                        <p class="notification__text">
                            Your email address has not been verified. Please complete it on the status tab.</p>
                    </div>
                    @endif
                    @if(auth()->user()->phone_verified != 1 && false)
                    <?php $pass = false;?>
                    <div class="notification">
                        <img src="/assets/icon_notification.png" class="notification__icon">
                        <p class="notification__text">
                            Your phone number has not been verified. Please complete it on the status tab.</p>
                    </div>
                    @endif
                    @if(auth()->user()->is_approved_license != 1)
                    <?php $pass = false;?>
                    <div class="notification">
                        <img src="/assets/icon_notification.png" class="notification__icon">
                        <p class="notification__text">
                            We cannot process your withdrawal request because you either have not provided all the necessary documentation or you account is still waiting approval. Please <a href="javascript:document.getElementById('document-tab').click()" class="notification__link">click here</a> to check your status or to update your documents.</p>
                    </div>
                    @endif
                    @if($pass)
                    <p style="color: #ff0000;font-size: 16px;font-weight:normal;"><img
                            src="/assets/icons8-support-60.png"
                            style=" float: left; position: relative;top: -13px;margin-right: 12px;" />@lang('app.to_remove_funds_casino_chat')</p>

                    <br><br>
                    <header class="modal__header">
                        <div class="span modal__title">@lang('app.withdraw_money')</div>
                    </header>
                    <form name="valform1" action="{{route('frontend.profile.withdraw')}}" method="POST"
                        id="withdra_form">
                        @csrf
                        <div class="modal__content">

                            <div class="deposit__inner">
                                <div class="modal__input input">
                                    <input type="text" id="cctextboxid1" name="txtamount" placeholder="Enter Amount"
                                        class="modal__input-inner input__inner" style="">
                                </div>
                                <div class="modal__input input">
                                    <select name="txtcurrency" id="currency1" class="modal__input-inner input__inner"
                                        style="width: 200px;">
                                        <option value="EUR">EUR</option>
                                        <option value="USD">USD</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="popup__footer">
                            <input type="submit" name="submit" value="@lang('app.save')"
                                class="popup__button button btn btng">
                        </div>
                        <div class="popup__warn" style="font-size:16px; align:center; ">***@lang('app.please_note_for_minimum_withdrawal_amount')</div>
                        <div style="font-grey"><span class="info-name">@lang('app.your_current_balance'):</span> <span class="info-value balanceValue">{{ number_format(auth()->user()->balance, 2, '.', '') }}{{ isset($currency) ? $currency : 'EUR' }}</span></div>
                    </form>
                    @endif
                </div>
            </div>
        </div>
    </div>
<!--
    <div class="modal" id="my-account-old" style="display: none;">

        <div class="row">
            <div class="game__cat__header">
                <div class="container1 games-wrap1">
                    <div class="grid">
                        <div class="col-1-8 ">
                            <div class="game__category pay_modal balance game-cat-active" data-href="#balance">
                                <div class="game_category__content">
                                    <h1>@lang('app.top_up')</h1>
                                </div>
                            </div>
                        </div>
                        <div class="col-1-8 ">
                            <div class="game__category pay_modal withdraw" data-href="#withdraw">
                                <div class="game_category__content">
                                    <h1>@lang('app.withdraw')</h1>
                                </div>
                            </div>
                        </div>
                        <span ng-click="closeModal($event)"
                            class="modal__icon icon icon_cancel js-close-popup close-popup"></span>
                    </div>
                </div>
            </div>
        </div>
        <script>
            (function ($) {
                $(function () {

                    $('.paymaster .pay__title').click(function () {
                        if ($(".contentmaster").hasClass("active")) {
                            $('.contentmaster').removeClass('active');
                        } else {
                            $('.contentmaster').removeClass('active');
                            $('.contentmaster').addClass('active');
                        }
                    });

                    $('.payvisa .pay__title').click(function () {
                        if ($(".contentpay").hasClass("active")) {
                            $('.contentpay').removeClass('active');
                        } else {
                            $('.contentpay').removeClass('active');
                            $('.contentpay').addClass('active');
                        }
                    });

                });
            })(jQuery);


        </script>

        <div id="div_balance">
            <header class="modal__header">
                <div class="span modal__title">@lang('app.add_balance')</div>
                {{-- <span ng-click="closeModal($event)" class="modal__icon icon icon_cancel js-close-popup"></span>
                --}}
            </header>
            <header class="modal__header pay__header paymaster">
                <div class="span modal__title pay__title">@lang('app.master_card')</div>
                {{-- <span ng-click="closeModal($event)" class="modal__icon icon icon_cancel js-close-popup"></span>
                --}}
            </header>
            <div class="tabs">
                <div class="modal__content tabs__content contentmaster">
                    <form name="Pay" method="post" action="/send.php" accept-charset="UTF-8">
                        <div class="modal__input input2">
                            <input type="text" name="amount" class="modal__input-inner input__inner"
                                placeholder="Enter Amount" required style="width:100%">
                        </div>
                        <input type="hidden" name="currency" value="978">
                        <input type="hidden" name="payway" value="card_eur">
                        <input type="hidden" name="shop_id" value="133">
                        <input type="hidden" name="shop_order_id" value="user_{{ auth()->user()->id }}">
                        <input type="submit" type="hidden" name="description" value="Verify Credit Card"
                            class="button masterbutton">
                    </form>
                </div>
                <header class="modal__header pay__header payvisa">
                    <div class="span modal__title pay__title">Visa</div>
                    {{-- <span ng-click="closeModal($event)" class="modal__icon icon icon_cancel js-close-popup"></span>
                    --}}
                </header>
                <form name="valform" action="" method="POST">
                    <div class="modal__content tabs__content contentpay">

                        <div class="row">

                            <div class="modal__input input">

                                <input type="text" id="cctextboxid" name="cctextbox" placeholder="Enter Amount"
                                    class="modal__input-inner input__inner" required>
                            </div>
                            <div class="modal__input input">
                                <select name="currency" id="currency" class="modal__input-inner input__inner">
                                    <option value="EUR">EUR</option>
                                    <option value="AUD">AUD</option>
                                    <option value="BGN">BGN</option>
                                    <option value="BRL">BRL</option>
                                    <option value="CAD">CAD</option>
                                    <option value="CHF">CHF</option>
                                    <option value="CNY">CNY</option>
                                    <option value="CZK">CZK</option>
                                    <option value="DKK">DKK</option>
                                    <option value="GBP">GBP</option>
                                    <option value="HKD">HKD</option>
                                    <option value="HRK">HRK</option>
                                    <option value="HUF">HUF</option>
                                    <option value="IDR">IDR</option>
                                    <option value="ILS">ILS</option>
                                    <option value="INR">INR</option>
                                    <option value="ISK">ISK</option>
                                    <option value="JPY">JPY</option>
                                    <option value="KRW">KRW</option>
                                    <option value="MXN">MXN</option>
                                    <option value="MYR">MYR</option>
                                    <option value="NOK">NOK</option>
                                    <option value="NZD">NZD</option>
                                    <option value="PHP">PHP</option>
                                    <option value="PLN">PLN</option>
                                    <option value="RON">RON</option>
                                    <option value="RUB">RUB</option>
                                    <option value="SEK">SEK</option>
                                    <option value="SGD">SGD</option>
                                    <option value="THB">THB</option>
                                    <option value="TRY">TRY</option>
                                    <option value="USD">USD</option>
                                </select>
                            </div>
                        </div>
                        <div class="modal__error" style="display: none"></div>
                        <input id="elem" type="button" name="submit" value="@lang('app.verify_credit_card')"
                            class="popup__button button btn btng masterbutton2">
                    </div>
                    <div class="popup__footer">

                    </div>
                </form>
            </div>
        </div>
        <div id="div_withdraw" style="display: none">
            <header class="modal__header">
                <div class="span modal__title">@lang('app.withdraw_money')</div>
            </header>

            <form name="valform1" action="{{route('frontend.profile.withdraw')}}" method="POST">
                @csrf
                <div class="modal__content">

                    <div class="row">
                        <div class="modal__input input">
                            <input type="text" id="cctextboxid1" name="txtamount" placeholder="Enter Amount"
                                class="modal__input-inner input__inner"
                                style="background-color: rgba(255, 255, 255, 0.3);color:#a5a3bd">
                        </div>
                        <div class="modal__input input">
                            <select name="txtcurrency" id="currency1" class="modal__input-inner input__inner"
                                style="background-color: rgba(255, 255, 255, 0.3);">
                                <option value="USD">USD</option>
                                <option value="EUR">EUR</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="popup__footer">
                    <input type="submit" name="submit" value="@lang('app.save')" class="popup__button button btn btng">
                </div>
            </form>
        </div>
        <div class="modal-preloader" style="display:none"></div>
    </div>
-->
    <div class="modal" id="my-profile" style="display: none;">
        <header class="modal__header">
            <div class="span modal__title">@lang('app.my_profile')</div>
            <span ng-click="closeModal($event)" class="modal__icon icon icon_cancel js-close-popup"></span>
        </header>
        <div class="modal__body">
            <div class="modal__content">
                <p class="text-center" style="
                    text-align: center;
                    font-size: calc(0.90vw + 1rem);
                    color: white;
                ">Welcome {{ auth()->user()->username }}</p>
                <p data-nsfw-filter-status="swf" style="text-align: center;">
                    <img src="/frontend/Default/img/user1.png" data-nsfw-filter-status="sfw"
                        style="visibility: visible;">
                </p>
                <p class="text-center" style="text-align: center;font-size: calc(0.90vw + 0.3rem);color: white;">These
                    are your current Playing stats and Balance</p>
                <hr>
                <br>
                <div class="modal__table" style="width: 100%; height: auto;">
                    <div>
                        <ul class="col-6 footer__item-acc-info" style="padding: 5px 0px;">
                            <li class="font-white"><span class="info-name"></span> <span
                                    class="info-value balanceValue">{{ number_format(auth()->user()->balance, 2, '.',
                                    '') }}
                                    {{ isset($currency) ? $currency : 'USD' }}</span></li>
                            <li class="font-white"><span class="info-name">Bonus:</span> <span
                                    class="info-value bonusValue">{{ number_format(auth()->user()->bonus, 2, '.', '') }}
                                    {{ isset($currency) ? $currency : 'USD' }}</span></li>
                            <li class="font-white"><span class="info-name">Wager:</span> <span
                                    class="info-value wager">{{ number_format(auth()->user()->wager, 2, '.', '') }}
                                    {{ isset($currency) ? $currency : 'USD' }}</span></li>
                            <!-- class disabled -->
                            @if (isset($refund) &&
                            $refund &&
                            auth()->user()->present()->count_refund > 0 &&
                            auth()->user()->present()->balance <= $refund->min_balance)
                                <li class="font-white refunds-icon"><span class="info-name">Refunds:</span>
                                    <span class="info-value count_refund" id="refunds">{{
                                        number_format(auth()->user()->count_refund, 2, '.', '') }}
                                        {{ isset($currency) ? $currency : 'USD' }}</span>
                                </li>
                                @else
                                <li class="font-white refunds-icon disabled">
                                    <span class="info-name">Refunds:</span>
                                    <span class="info-value count_refund">{{ number_format(auth()->user()->count_refund,
                                        2, '.', '') }}
                                        {{ isset($currency) ? $currency : 'USD' }}</span>
                                </li>
                                @endif

                        </ul>
                        <div class="col-6" style="padding: 30px;"><img src="/frontend/Default/img/casino1.jpg"
                                style="visibility: visible; width: 50%;float: right;"></div>
                    </div>
                </div>
                <div class="modal__error" style="display: none"></div>
            </div>
            <div class="modal-preloader" style="display:none"></div>
        </div>
    </div>
    <script>
        $('.games__button__mobile .btn-collapsible.button-lang').click(function(){
            $(this).find('span').toggle('slide')
        })
        /*
        var elem = document.getElementById('elem');
        elem.onclick = function () {

            var currency_val = $("#currency").val();

            fetch('https://api.cards2cards.com/v2/payment-pages', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    key: 'pk_live_4eHDu3NcsQ3XEG3bvWfLW6epJnsR5HgcwwERaER7mMmnj4MhiPfR1bJ1',
                    items: [{
                        name: 'Payment',
                        description: 'Optional description',
                        images: ['https://example.com/t-shirt.jpg'],
                        amount: (document.getElementById('cctextboxid').value * 100),
                        currency: currency_val,
                    }],
                    success_url: 'https://fidelitycasino.games/?success=true',
                    cancel_url: 'https://fidelitycasino.games/?cancel=true',
                    metadata: {
                        userId: "{{ auth()->user()->id }}",
                    },
                }),
            })
                .then(res => res.json())
                .then(res => window.location = res.data.url)
        };
        */

        $('.file__input').change(function(){
            var target = this.name;
            console.log(target)
            var file = new FileReader;
            file.onload = function() {
                $('#'+target).attr('src', this.result)
            }

            file.readAsDataURL(this.files[0]);
        })

        $(".pay_modal").click(function () {
            var pay_modal = $(this).attr('data-href');
            if (pay_modal == "#balance") {
                $("#div_balance").css('display', 'block');
                $("#div_withdraw").css('display', 'none');
            } else {
                $("#div_withdraw").css('display', 'block');
                $("#div_balance").css('display', 'none');
            }
            $(".pay_modal").removeClass('game-cat-active');
            $(this).addClass('game-cat-active');
        });
        $('.popup__menu').on('click', '.popup__link:not(.active)', function (event) {
            event.preventDefault();
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('.popup__body').find('.popup__cont').removeClass('active')
                .eq($(this).index()).addClass('active');
        });

        $('.deposit__box').click(function () {
            $(this).closest('.deposit__item').find('.deposit__cont').slideToggle();
            $(this).closest('.deposit__item').toggleClass('active');
            $(this).parent().siblings('.deposit__item').removeClass('active');
            $(this).parent().siblings().children().next().slideUp();
        });
        $('#withdra_form').submit(function () {
            //         alert('Thank you for the withdraw request can you please contact support via the live chat');
        });
        $('.history__name').click(function () {
            $(this).closest('.history__item').find('.history__cont').slideToggle();
            $(this).closest('.history__item').toggleClass('active');
            $(this).parent().siblings('.history__item').removeClass('active');
            $(this).parent().siblings().children().next().slideUp();
        });
        $(function () {
            try {
                $('.table--history').eq(0).dataTable({
                    "autoWidth": false, "columns": [{ "width": "10%" }, { "width": "25%" }, { "width": "25%" }, { "width": "20%" }, { "width": "20%" }], "language": {
                        "paginate": {
                            "previous": "Prev"
                        }
                    }
                });
            } catch (e) { }
            try {
                $('.table--history').eq(1).dataTable();
            } catch (e) { }
        })
        $('.button-my-profile').click(function () { $('.popup__link').eq(0).click() });
        $('.button-pay').click(function () { $('.popup__link').eq(3).click() });

    </script>

</section>
