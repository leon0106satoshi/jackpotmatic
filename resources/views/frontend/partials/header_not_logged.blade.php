<link rel="stylesheet" href="/frontend/Default/assets/liMarquee.css">
<link rel="stylesheet" href="/frontend/Default/assets/style.css">
<section class="games__hero__wrapper" style="padding-bottom: 0px !important;">
    <div class="top__section" id="tothetop" style="height: 115px;">
        <div>
            <div>
                <div id="navbar-mobile-overlay"></div>
                <div id="navbar-mobile">
                    <a href="/" class="close">
                        <img src="/assets/_new-style/images/icon_close.png"/>
                    </a>
                    <div class="navbar-mobile-logo sign__up">
                        <img src="/assets/_new-style/images/logo.png" alt="logo" class="logo"/>
                    </div>

                    <ul class="navbar-nav">
                        <li class="nav-item sign__up">
                            <a class="nav-link" href="index.html#">@lang('app.home')</a>
                        </li>
                    </ul>

                    <div>
                        <button class="games__button button-register spin-gradient sign__up sign__up">@lang('app.register')</button>

                    </div>
                    <div id="mobile-submenu">
                        <a href="index.html#" class="close">
                            <img src="/assets/_new-style/images/icon_close.png"/>
                        </a>
                        <div class="navbar-mobile-logo sign__up">
                            <a>
                                <img src="/assets/_new-style/images/logo.png"
                                     alt="logo" class="logo"/>
                            </a>
                        </div>
                        <a href="index.html#"><span class="back">
                        <img src="/assets/_new-style/images/left_chevron.png"/>@lang('app.back')</span></a>
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
                            <img src="/assets/_new-style/images/logo.png" alt="logo"/>
                        </a>
                            <ul class="games__button__mobile" style="display:flex;gap:2px;">
                                <li>
                                    <div class="language-select btn-info button-lang btn-collapsible lc">
                                        <?php
                                            $lang = [
                                                'es' => '<i data-lang-code="es" class="flag-icon flag-icon-es"></i>',
                                                'en' => '<i data-lang-code="en" class="flag-icon flag-icon-en"></i>'
                                            ];

                                            if (isset($_COOKIE['language'])) {
                                                $laut = htmlspecialchars($_COOKIE['language']);
                                                if ($laut == "es" || $laut == "en") {
                                                    $active_lang = $lang[$laut];
                                                } else {
                                                    $laut = 'es';
                                                    $active_lang = $lang['es'];
                                                }
                                            }else{
                                                $laut = 'es';
                                                $active_lang = $lang['es'];
                                            }
                                        ?>
                                        <?php echo $active_lang;?>
                                        <span style="display:none;opacity:1;">
                                            <?php foreach ($lang as $key => $dater):?>
                                                <?php if($key != $laut):?>
                                                    <?php echo $dater;?>
                                                <?php endif;?>
                                            <?php endforeach;?>
                                        </span>
                                    </div>
                                </li>

                                <li>
                                    <a href="#" class="games__button button-login sign__in" ng-click="openModal($event, '#login-modal')">
                                        @lang('app.login')                                   </a>
                                </li>
                                <li>
                                    <a class="games__button button-register spin-gradient sign__up" ng-click="openModal($event, '#registration-confirm')">
                                            @lang('app.register')                                        </a>
                                </li>
                            </ul>

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mr-auto"></ul>
                            <!-- START OF DESKTOP NAV -->
                            <div class="games__header__wrapper" style="padding: 0px; left: 0px;height: 115px;">
                                <ul class="container" style="height: 115px;padding: 0 15px;">
                                    <li class="brand sign__up" style="margin-top: 0px;">
                                        <a href="/" style="padding-left:20px;">
                                            <img src="/assets/_new-style/images/logo.png" style="height:115px;"/>
                                        </a>
                                    </li>
                                                                        <li>
                                        <a href="#" class="games__button button-login sign__in" ng-click="openModal($event, '#login-modal')">
                                            @lang('app.login')                                        </a>
                                    </li>
                                    <li>
                                        <a class="games__button button-register spin-gradient sign__up" ng-click="openModal($event, '#registration-confirm')">
                                            @lang('app.register')                                        </a>
                                    </li>
                                        <li>
                                       <div class="language-select btn-info button-lang btn-collapsible lc">
                                            <?php
                                                $lang = [
                                                    'es' => '<i data-lang-code="es" class="flag-icon flag-icon-es"></i>',
                                                    'en' => '<i data-lang-code="en" class="flag-icon flag-icon-en"></i>'
                                                ];

                                                if (isset($_COOKIE['language'])) {
                                                    $laut = htmlspecialchars($_COOKIE['language']);
                                                    if ($laut == "es" || $laut == "en") {
                                                        $active_lang = $lang[$laut];
                                                    } else {
                                                        $laut = 'es';
                                                        $active_lang = $lang['es'];
                                                    }
                                                }else{
                                                    $laut = 'es';
                                                    $active_lang = $lang['es'];
                                                }
                                            ?>
                                            <?php echo $active_lang;?>
                                            <span>
                                                <?php foreach ($lang as $key => $dater):?>
                                                    <?php if($key != $laut):?>
                                                        <?php echo $dater;?>
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
    $('.games__button__mobile .btn-collapsible.button-lang').click(function(){
        $(this).find('span').toggle('slide')
    })
    $(document).ready(() => {
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
        $('.line__subinner').liMarquee();
        $('.line__subinner').style('width', $('.line__winner').children().length);
    })
</script>
</section>