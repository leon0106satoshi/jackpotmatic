<?php if(isset($_GET['merchant_id'])):?>




<div class="modal" id="restore-password-success" style="display: block;">
    <header class="modal__header">
        <div class="span modal__title"> @lang('app.pay_ok_title')</div>
        <span ng-click="closeModal($event)" class="modal__icon icon icon_cancel js-close-popup"></span>
    </header>
    <div class="modal__content">
        <div id="restore-password-success-text" class="modal-text">@lang('app.pay_ok_desk')</div>
    </div>
    <div class="popup__footer">
        <input type="submit" ng-click="openModal($event, '#my-account')" value="OK <?php echo $_GET['merchant_id']; ?>"
            class="popup__button button" />
    </div>
</div>
<script>
    history.pushState('', '', '/');
</script>
<?php endif;?>
<!-- MENU MOBILE -->
@if (Auth::check())
    @include('frontend.partials.header_logged')
@else
    @include('frontend.partials.header_not_logged')
@endif
@include('frontend.partials.messages')
<!-- Games -->




 <style>
.swiper-container{
    overflow:hidden;
}
        /* Marquee  */
.mWrap {
    width: 100% !important;
}
.line {
    display: flex;
    overflow: hidden;
}
.line_name {
    width: 20%;
}
.line__inner {
    padding-left: 100px;
    width: 90%;
}
.line__subinner {
    display: flex;
    align-items: center;
}
 .line__inner, .line__inner .mItem,  .line__inner .mItem .mMove {
    display: flex !important;
 }
 .line__inner {
    height: 54px;
 }
 .line__winner {
    justify-content: center;
    display: flex;
    width: 400px;
    margin-right: 0 !important;
 }
.marquee {
    height: 48px;
    overflow: hidden;
    position: relative;
    background: #333;
    color: #333;
    border: 1px solid #4a4a4a;


}
.mItem{
    /*background: white;*/
}
.image {
    /* height: 50px; */
    width: overflow: hidden;
    position: absolute;
    background: #;
    background: -moz-linear-gradient(97deg, #e6c85d 0%, #c39232 100%);
    background: -webkit-gradient(linear, 97deg, color-stop(0%, #e6c85d), color-stop(100%, #c39232));
    background: -webkit-linear-gradient(97deg, #e6c85d 0%, #c39232 100%);
    background: -o-linear-gradient(97deg, #e6c85d 0%, #c39232 100%);
    background: -ms-linear-gradient(97deg, #e6c85d 0%, #c39232%);
    background: linear-gradient(97deg, #e6c85d 0%, #c39232 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#001c10', endColorstr='#00673c',GradientType=0 );
    z-index: 9;
    font-size: 26px;
    padding: 7px;
    text-transform: uppercase;
}
.marquee p:nth-child {
    color:red;
    transform: translateX(-50%);
    position: absolute;
    width: 100%;
    height: 100%;
    margin: 0;
    line-height: 50px;
    text-align: center;

    animation: scroll-left 25s linear infinite;
}

.marquee p {
    position: absolute;
    width: 100%;
    height: 100%;
    margin: 0;
    line-height: 50px;
    text-align: center;color:#999999; font-family:helvetica;

    animation: scroll-left 20s linear infinite;
}

@keyframes scroll-left {
    0% {
        transform: translateX(55%);
    }
    100% {
        transform: translateX(-55%);
    }

}
    </style>

        <style>
        .marq{
                border:none;
                background-color: #2a2a72;
                background-image: linear-gradient(315deg, #2a2a72 0%, #009ffd 74%);
                height:30px;
                padding:5px;
                border-radius:3px;
                font-size:16px;
                color: #ffffff;
                margin-top:5px;
                margin-left:2px;
                }
                        .marq2{
                border:none;
                background-color: #3bb78f;
                background-image: linear-gradient(315deg, #3bb78f 0%, #0bab64 74%);
                height:30px;
                padding:5px;
                border-radius:3px;
                font-size:16px;
                color: #ffffff;
                margin-top:5px;
                margin-left:2px;
                }
                .mlink {
                color: #ffffff;
                text-decoration: none !important;
                }
                .mimg {
                        padding:10px;
                        margin-top:-3px;
                        margin-bottom:7px;

                }
            .blink_me {
                        animation: blinker 1s linear infinite;
                }

                @keyframes blinker {
                50% { opacity: 0; }
                }

        }
        </style>
<section class="games__wrapper">
    <div class="line">
        <div class="line__name">@lang('app.latest_winner')</div>
            <div class="line__inner">
                <div style="width:100%;position:absolute;top:20%;left:0;height:60%;background-color:white;"></div>
                    <div class="line__subinner">
                        @if( isset(auth()->user()->username) )
                        <div class="line__winner">
                                <span>€196.1 </span><img class="mimg" src="/frontend/mimages/currentwinner4.png"></img> Samuel J. on.. <br> <a class="mlink" href="https://fidelitycasino.games/game/JumanjiNET?api_exit=/"><br><span > <button class="marq"> Jumanji</button></a></span>
                        </div>
                        <div class="line__winner">
                                <span>€232.2</span><img class="mimg" src="/frontend/mimages/currentwinner9.png"></img> Robert R . on.. <br> <a class="mlink" href="https://fidelitycasino.games/game/AncientEgyptPM?api_exit=/"><br><span > <button class="marq">Ancient Egypt</button></a></span>
                        </div>
                        <div class="line__winner">
                                <span>€150.3</span> <img class="mimg"src="/frontend/mimages/currentwinner7.png"></img>Macy L. on.. <br> <a class="mlink"href="https://fidelitycasino.games/game/WildCloverCT?api_exit=/"><br><span><button class="marq"> Wild Clover</button></a></span>
                        </div>
                        <div class="line__winner">
                                <span>€1027.4</span><img class="mimg"src="/frontend/mimages/currentwinner4.png"></img> Jimmy TM. on.. <br> <a class="mlink"href="https://fidelitycasino.games/game/EnchantedCleopatraAM?api_exit=/"><br><span class="blink_me" > <button class="marq2">Enchanted Cleopatra</button></a></span>
                        </div>
                        <div class="line__winner">
                                <span>€686.6</span><img class="mimg" src="/frontend/mimages/currentwinner3.png"></img> The Ace. on.. <br> <a class="mlink" href="https://fidelitycasino.games/game/BurningHot100EGT?api_exit=/"><br><span > <button class="marq">Burning Hot</button></a></span>
                        </div>
                        <div class="line__winner">
                                <span>€906.7</span> <img class="mimg"src="/frontend/mimages/currentwinner4.png"></img> Lenny L. on.. <br> <a class="mlink"href="https://fidelitycasino.games/game/WildApeISB?api_exit=/"><br><span class="blink_me" > <button class="marq2">Wild Ape</button></a></span>
                        </div>
                        <div class="line__winner">
                                <span>€700.8</span> <img class="mimg" src="/frontend/mimages/currentwinner7.png"></img>Killer Player. on.. <br><a class="mlink" href="https://fidelitycasino.games/game/FruitShopNET?api_exit=/"><br><span ><button class="marq"> Fruit Shop</button></a></span>
                        </div>
                        <div class="line__winner">
                                <span>€312.9</span><img class="mimg" src="/frontend/mimages/currentwinner4.png"></img> Margerie M. on.. <br> <a class="mlink" href="https://fidelitycasino.games/game/RacetrackRichesISB?api_exit=/"><br><span><button class="marq"> Race Track Riches</a></button></span>
                        </div>
                        <div class="line__winner">
                                <span>€456.10</span><img class="mimg" src="/frontend/mimages/currentwinner2.png"></img> Stiff T. on.. <br> <a class="mlink" href="https://fidelitycasino.games/game/WildCloverCT?api_exit=/"><br><span > <button class="marq">Wild Clover</button></a></span>
                        </div>
                        <div class="line__winner">
                                <span>€351.11</span><img class="mimg" src="/frontend/mimages/currentwinner4.png"></img> Pinnacle Gamer. on..<br> <a class="mlink" href="https://fidelitycasino.games/game/HighwayToHellDeluxeWD?api_exit=/"><br><span ><button class="marq"> Highway to Hell</button></a></span>
                        </div>
                        <div class="line__winner">
                                <span>€103.14</span><img class="mimg"src="/frontend/mimages/currentwinner5.png"></img>Jeanette P. on.. <br> <a class="mlink" href="https://fidelitycasino.games/game/AztecGoldMegawaysISB?api_exit=/"><br><span class="blink_me"> <button class="marq2">Aztec Gold</button></a></span>
                        </div>
                        <div class="line__winner">
                                <span>€4265.15</span> <img class="mimg"src="/frontend/mimages/currentwinner4.png"></img>Gordon R. on.. <br> <a class="mlink" href="https://fidelitycasino.games/game/AztecGoldMegawaysISB?api_exit=/"><br><span > <button class="marq">Dragons 888</button></a></span>
                        </div>
                        <div class="line__winner">
                                <span>€378.18</span> <img class="mimg"src="/frontend/mimages/currentwinner7.png"></img> Chew Bacca. on.. <br><a class="mlink" href="https://fidelitycasino.games/game/Dragons888PM?api_exit=/"><br><span > <button class="marq">The Wolves Bane</button></a></span>
                        </div>
                        @else
                        <div class="line__winner">
                                <span>€196.1 </span><img class="mimg" src="/frontend/mimages/currentwinner4.png"></img> Samuel J. on.. <br> <a class="mlink" href="javascript:;" ng-click="openModal($event, '#login-modal')" ><br><span > <button class="marq"> Jumanji</button></a></span>
                        </div>
                        <div class="line__winner">
                                <span>€232.2</span><img class="mimg" src="/frontend/mimages/currentwinner9.png"></img> Robert R . on.. <br> <a class="mlink" href="javascript:;" ng-click="openModal($event, '#login-modal')" ><br><span > <button class="marq">Ancient Egypt</button></a></span>
                        </div>
                        <div class="line__winner">
                                <span>€150.3</span> <img class="mimg"src="/frontend/mimages/currentwinner7.png"></img>Macy L. on.. <br> <a class="mlink"href="javascript:;" ng-click="openModal($event, '#login-modal')" ><br><span><button class="marq"> Wild Clover</button></a></span>
                        </div>
                        <div class="line__winner">
                                <span>€1027.4</span><img class="mimg"src="/frontend/mimages/currentwinner4.png"></img> Jimmy TM. on.. <br> <a class="mlink"href="javascript:;" ng-click="openModal($event, '#login-modal')" ><br><span class="blink_me" > <button class="marq2">Enchanted Cleopatra</button></a></span>
                        </div>
                        <div class="line__winner">
                                <span>€686.6</span><img class="mimg" src="/frontend/mimages/currentwinner3.png"></img> The Ace. on.. <br> <a class="mlink" href="javascript:;" ng-click="openModal($event, '#login-modal')" ><br><span > <button class="marq">Burning Hot</button></a></span>
                        </div>
                        <div class="line__winner">
                                <span>€906.7</span> <img class="mimg"src="/frontend/mimages/currentwinner4.png"></img> Lenny L. on.. <br> <a class="mlink"href="javascript:;" ng-click="openModal($event, '#login-modal')" ><br><span class="blink_me" > <button class="marq2">Wild Ape</button></a></span>
                        </div>
                        <div class="line__winner">
                                <span>€700.8</span> <img class="mimg" src="/frontend/mimages/currentwinner7.png"></img>Killer Player. on.. <br><a class="mlink" href="javascript:;" ng-click="openModal($event, '#login-modal')" ><br><span ><button class="marq"> Fruit Shop</button></a></span>
                        </div>
                        <div class="line__winner">
                                <span>€312.9</span><img class="mimg" src="/frontend/mimages/currentwinner4.png"></img> Margerie M. on.. <br> <a class="mlink" href="javascript:;" ng-click="openModal($event, '#login-modal')" ><br><span><button class="marq"> Race Track Riches</a></button></span>
                        </div>
                        <div class="line__winner">
                                <span>€456.10</span><img class="mimg" src="/frontend/mimages/currentwinner2.png"></img> Stiff T. on.. <br> <a class="mlink" href="javascript:;" ng-click="openModal($event, '#login-modal')" ><br><span > <button class="marq">Wild Clover</button></a></span>
                        </div>
                        <div class="line__winner">
                                <span>€351.11</span><img class="mimg" src="/frontend/mimages/currentwinner4.png"></img> Pinnacle Gamer. on..<br> <a class="mlink" href="javascript:;" ng-click="openModal($event, '#login-modal')" ><br><span ><button class="marq"> Highway to Hell</button></a></span>
                        </div>
                        <div class="line__winner">
                                <span>€103.14</span><img class="mimg"src="/frontend/mimages/currentwinner5.png"></img>Jeanette P. on.. <br> <a class="mlink" href="javascript:;" ng-click="openModal($event, '#login-modal')" ><br><span class="blink_me"> <button class="marq2">Aztec Gold</button></a></span>
                        </div>
                        <div class="line__winner">
                                <span>€4265.15</span> <img class="mimg"src="/frontend/mimages/currentwinner4.png"></img>Gordon R. on.. <br> <a class="mlink" href="javascript:;" ng-click="openModal($event, '#login-modal')" ><br><span > <button class="marq">Dragons 888</button></a></span>
                        </div>
                        <div class="line__winner">
                                <span>€378.18</span> <img class="mimg"src="/frontend/mimages/currentwinner7.png"></img> Chew Bacca. on.. <br><a class="mlink" href="javascript:;" ng-click="openModal($event, '#login-modal')" ><br><span > <button class="marq">The Wolves Bane</button></a></span>
                        </div>
                        @endif
                    </div>
                </div>
            </div>
            <div class="game__cat__header">
                <div class="container games-wrap">
                    <div class="grid">
                        @php
                            $current_cat = '';
                            $cat_level_2 = '';
                            $categories = VanguardLTE\Category::where('parent', 0)
                                ->orderBy('position')
                                ->get();
                            $route = Request::route()->getName();
                            if (in_array($route, ['frontend.game.list.category', 'frontend.game.list.category_level2'])) {
                                $current_params = Route::current()->parameters();
                                $current_cat = isset($current_params['category1']) ? $current_params['category1'] : '';
                                $cat_level_2 = isset($current_params['category2']) ? $current_params['category2'] : '';
                            }
                            if ($route == 'frontend.game.list') {
                                $category = VanguardLTE\Category::where('parent', 0)
                                    ->orderBy('position')
                                    ->first();
                                if ($category) {
                                    $current_cat = $category->href;
                                }
                            }
                        @endphp
                        <?php $i = 1; ?>
                        @foreach ($categories as $k=>$category)
                        {{-- @if(count($category->games) > 0 && $i < 7) --}}
                            <div class="col-1-8 ">
                                <div class="game__category @if ($category->href == $current_cat) game-cat-active @endif"
                                    data-href="{{ route('frontend.game.list.category', $category->href) }}">
                                    <div class="game_category__content">
                                        @if($k < 5)
                                        <img src="/assets/_new-style/images/top_{{$k+1}}.png" data-nsfw-filter-status="sfw" style="visibility: visible;">
                                        @endif
                                    <a href="{{ route('frontend.game.list.category', $category->href) }}">{{ $category->title }}</a>
                                    </div>
                                </div>
                            </div>
                            <?php $i++; ?>
                        {{-- @endif --}}
                        @endforeach

                        {{-- <div class="col-1-4 toggle-cat jackpot__container sign__up">
                            <div class="jp__inner">
                                <img src="/assets/_new-style/images/jp-img.png" />
                                <div class="jp__text">
                                    <span>@lang('app.jackpot_casino')</span>
                                    <h2 class="jackpot__value jackpot__value--title jackpot0">
                                        @if (count($jpgs) > 0)
                                            {{ number_format($jpgs[0]->balance, 2, '.', '') }}
                                        @endif
                                    </h2>
                                </div>
                            </div>
                        </div> --}}
                    </div>
                    <div id="mobile-bottom-menu" style="display: none;">
                        <?php $i = 1; ?>
                        @foreach ($categories as $k=>$category)
                            <div class="game__category @if ($category->href == $current_cat) game-cat-active @endif"
                                data-href="{{ route('frontend.game.list.category', $category->href) }}">
                                <div class="game_category__content">
                                    @if($k < 5)
                                    <img src="/assets/_new-style/images/top_{{$k+1}}.png" data-nsfw-filter-status="sfw" style="visibility: visible;">
                                    @endif
                                <a href="{{ route('frontend.game.list.category', $category->href) }}">{{ $category->title }}</a>
                                </div>
                            </div>
                            <?php $i++; ?>
                        @endforeach
                        <style>
                            #mobile-bottom-menu {
                                position: fixed;
                                bottom: 0px;
                                left: 0px;
                                display: grid;
                                width: 100%;
                                grid-template-columns: 20% 20% 20% 20%;
                                z-index: 9999;
                                background: black;
                                opacity: 0;
                                z-index: -1;
                                transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                                pointer-events: none;
                            }
                            @media screen and (min-width: 760px) {
                                #mobile-bottom-menu {
                                    opacity: 1;
                                    z-index: 99999;
                                    pointer-events: auto;
                                }
                                .games__footer__terms {
                                    margin-bottom: 120px;
                                }
                            }
                        </style>
                    </div>
                </div>
            </div>
            @if (count($category->inner) > 0)
                <div class="game__sub__cat__header">
                    <ul>
                        @foreach ($category->inner as $inner)
                            <li class="subnav__item">
                                <a class="@if ($inner->href == $cat_level_2 && $category->href ==
                                    $current_cat) game-cat-active @endif"
                                    href="{{ route('frontend.game.list.category_level2', [$category->href, $inner->href]) }}">
                                    {{ $inner->title }}
                                </a>
                            </li>
                        @endforeach
                    </ul>
                </div>
            @endif

    </div>
    <script>
        $(window).on('load',function(){
            $('.line__subinner').liMarquee();
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
        $(document).on('scroll', function() {
            if($(this).scrollTop() > 500) {
                $('#mobile-bottom-menu').show();
            } else {
                $('#mobile-bottom-menu').hide();
            }
        })
    </script>
