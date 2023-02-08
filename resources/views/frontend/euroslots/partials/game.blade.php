<div class="games_content">
    <div class="games_hover">


        <a href="{{ route('frontend.game.go', [$game->name]) }}?api_exit=/" class="play_link">

            <span class="play_btn">

                Play now

            </span>

        </a>

        <div class="game_icon">

            <img class="game-item__img" src="{{ $game->name ? '/frontend/euroslots/ico/' . $game->name . '.jpg' : '' }}" casino-lazy-src="{{ $game->name ? '/frontend/euroslots/ico/' . $game->name . '.jpg' : '' }}" alt="{{ $game->title }}" loading="true" style="opacity: 1;">

        </div>
        <!--<div class="game_name">{{ $game->title }}</div>-->
    </div>
{{--    <img src="{{ $game->name ? '/frontend/Jackpotmatic/ico/'. $game->category . '/' . $game->name . '.jpg' : '' }}"
         alt="{{ $game->title }}">
    @if($game->label)
        <span
            class="label @if($game->label == 'New')label-b @elseif($game->label == 'Hot')label-g @else label-d @endif">{{ mb_strtoupper($game->label) }}</span>
    @endif
    <a href="{{ route('frontend.game.go', [$game->category, $game->name]) }}?api_exit=/" class="play-btn btn">Play</a>
    <span class="game-name">{{ $game->name }}</span>--}}
</div>
