<?php return array (
  'VanguardLTE\\Providers\\EventServiceProvider' => 
  array (
    'VanguardLTE\\Events\\User\\Registered' => 
    array (
      0 => 'VanguardLTE\\Listeners\\Registration\\SendConfirmationEmail',
    ),
    'VanguardLTE\\Events\\User\\LoggedIn' => 
    array (
      0 => 'VanguardLTE\\Listeners\\Login\\UpdateLastLoginTimestamp',
    ),
    'VanguardLTE\\Events\\User\\Banned' => 
    array (
      0 => 'VanguardLTE\\Listeners\\Users\\InvalidateSessionsAndTokens',
    ),
  ),
);