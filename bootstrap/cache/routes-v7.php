<?php

/*
|--------------------------------------------------------------------------
| Load The Cached Routes
|--------------------------------------------------------------------------
|
| Here we will decode and unserialize the RouteCollection instance that
| holds all of the route information for an application. This allows
| us to instantaneously load the entire route map into the router.
|
*/

app('router')->setCompiledRoutes(
    array (
  'compiled' => 
  array (
    0 => false,
    1 => 
    array (
      '/_debugbar/open' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'debugbar.openhandler',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/_debugbar/assets/stylesheets' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'debugbar.assets.css',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/_debugbar/assets/javascript' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'debugbar.assets.js',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/coinpayment/make' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'coinpayment.make.store',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/coinpayment/ajax/payload' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'coinpayment.encrypt.payload',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/coinpayment/ajax/create' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'coinpayment.create.transaction',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/coinpayment/ipn' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'coinpayment.ipn',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/api/demo' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'generated::83knmig3MCIfwYF9',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/api/agent/trial' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'generated::qeXqwbXwHDRiyPOu',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/api/login' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'generated::ugVj3VU1xVYEQVbg',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/api/logout' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'generated::srEwGFykwBiuJ4sJ',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/api/me' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'generated::QEKfXQnMtLpBeyUz',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/api/me/details' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'generated::tGvqj8A9tfeKZWA4',
          ),
          1 => NULL,
          2 => 
          array (
            'PATCH' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/api/me/refund' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'generated::SKhis9dj8nzu3NzN',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/api/pincodes/check' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'generated::NI5cz7s2K160WXkn',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/api/sms' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'generated::sKLfMjtHDZSQwH8Z',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/api/me/balance' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'generated::yNs8ZRKaDjmaFSre',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/api/users' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'users.index',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'users.store',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/api/shops' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'generated::Pyp8TK5pJIyijJu2',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/api/shops/currency' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'generated::9HPeDkTg8NoUiPs3',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/api/shops/block' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'generated::W2KXGGIrGfKFTT87',
          ),
          1 => NULL,
          2 => 
          array (
            'PUT' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/api/shops/unblock' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'generated::M3MYPs8oSObHCsbE',
          ),
          1 => NULL,
          2 => 
          array (
            'PUT' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/api/shops/create' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'generated::vhG6UeM6ZJi0ZXIg',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/api/shops/admin' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'generated::EDs0nqtGQOOehnpB',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/api/pincodes' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'generated::aAxbS1CXZjDxOuL3',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/api/pincodes/store' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'generated::04Wu3rNjsizQrYm9',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/api/pincodes/mass' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'generated::DKGDxo9QrofvMJUk',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/api/games' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'generated::COw4mNibE62vT6AS',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/api/category' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'generated::5r0jbfdQa9bYQtqP',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/api/jackpots' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'generated::rkmFkQiw2BKiCGsM',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/api/stats/pay' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'generated::zVTwuPBR9Jw34x1o',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/api/stats/game' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'generated::jwltXb8edRySqmyk',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/api/stats/shift' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'generated::euDRE4o5ovAWGfr2',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/api/shifts/start' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'generated::PkGO7Fg2hsHMr4Kx',
          ),
          1 => NULL,
          2 => 
          array (
            'PUT' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/api/shifts/info' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'generated::7C4iS5F0prpRcv4a',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/api/happyhours' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'generated::KyEZ7lOXgValUAIh',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/api/paysystems' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'generated::mfKAlUSha7xg4qxE',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/api/player/getlic' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'generated::9JbskfmqQfct3kgJ',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/api/player/licsaved' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'generated::cpK8cJgF2G7ScGgL',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/api/player/isonline' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'generated::T44CiCa3XDtBErem',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/api/player/check-user-login' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'generated::79oirZb5H7iDK0TG',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/api/player/testlogin' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'generated::K8LoZcvcjAXgkLLe',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/api/player/read' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'generated::sqcQDVVvUoVuPhKa',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/api/player/score' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'generated::prXwSXJB6ygBdaqH',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/api/player/withdrawticket' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'generated::fu7ZIEthLAuLBAHw',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/api/credits' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'generated::TV1sv10pjHRd5ZBJ',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/api/credits/depositusb' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'generated::YbZMXiFGS9qEbOAK',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/api/credits/pending-depositusb' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'generated::R9URMWVQsWKHTKF2',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/api/cashier/readbalance' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'generated::HKjFNybawdrAqk7R',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/api/cashier/readinamounts' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'generated::TAn79ip3NUnEv0NH',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/api/ipoint' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'generated::3MKjeDRdIsklDOru',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/api/vlt' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'generated::DrKfgqQhQB4Zqi1D',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
            'POST' => 2,
            'PUT' => 3,
            'PATCH' => 4,
            'DELETE' => 5,
            'OPTIONS' => 6,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/api/V2' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'generated::ZNjmQhO3VMg8kGrG',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/login' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'frontend.auth.login',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'frontend.auth.login.post',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/refresh-csrf' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'generated::BJhrQVhw4eEZ8JqN',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/logout' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'frontend.auth.logout',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/new-license' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'frontend.new_license',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'frontend.new_license.post',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/license-error' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'frontend.page.error_license',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/jpstv.json' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'frontend.jpstv_json',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/subsession' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'frontend.subsession',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/profile' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'frontend.profile',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/profile/activity' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'frontend.profile.activity',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/profile/details/update' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'frontend.profile.update.details',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/profile/password/update' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'frontend.profile.update.password',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/profile/avatar/update' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'frontend.profile.update.avatar',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/profile/avatar/update/external' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'frontend.profile.update.avatar-external',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/profile/clear_phone' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'frontend.clear_phone',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/profile/contact' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'frontend.profile.contact',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/profile/login-details/update' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'frontend.profile.update.login-details',
          ),
          1 => NULL,
          2 => 
          array (
            'PUT' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/profile/two-factor/enable' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'frontend.profile.two-factor.enable',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/profile/two-factor/disable' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'frontend.profile.two-factor.disable',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/profile/sessions' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'frontend.profile.sessions',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/profile/refunds' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'frontend.profile.refunds',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/profile/ajax' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'frontend.profile.ajax',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/profile/message' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'frontend.profile.message',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/profile/pincode' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'frontend.profile.pincode',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/profile/daily_entry' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'frontend.profile.daily_entry',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/profile/phone' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'frontend.profile.phone',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/profile/code' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'frontend.profile.code',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/profile/agree' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'frontend.profile.agree',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/profile/reward' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'frontend.profile.reward',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/profile/sms' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'frontend.profile.sms',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'generated::lKXml6SFEy6N4gFH',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/faq' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'frontend.faq',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/bonuses' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'frontend.bonuses',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/bonus-conditions' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'frontend.bonus.conditions',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/progress' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'frontend.progress',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/search' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'frontend.game.search',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/search.json' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'frontend.search.json',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/balance' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'frontend.balance.post',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/setpage.json' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'frontend.category.setpage',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/game_stat' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'frontend.game_stat',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/tournaments' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'frontend.tournaments',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/payment/interkassa/result' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'payment.interkassa.result',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/payment/interkassa/success' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'payment.interkassa.success',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/payment/interkassa/fail' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'payment.interkassa.fail',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/payment/interkassa/wait' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'payment.interkassa.wait',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/payment/coinbase/result' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'payment.coinbase.result',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/payment/coinbase/success' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'payment.coinbase.success',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/payment/coinbase/fail' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'payment.coinbase.fail',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/payment/btcpayserver/result' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'payment.btcpayserver.result',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/payment/btcpayserver/redirect' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'payment.btcpayserver.redirect',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/sms/callback' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'sms.callback',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/login' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.auth.login',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'backend.auth.login.post',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/logout' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.auth.logout',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/2fa' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => '2fa',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/terminal' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'generated::le9r6nIT3veErUls',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/terminal/create' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'generated::DM05v5MrvQkUievL',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/terminal/balance/add' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'generated::YAcyoS0WWOu5VGQr',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/terminal/balance/out' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'generated::muuWkZIln4Uj6BX9',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/terminal/ajax/pay-tickets' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'generated::JqkqSuDrUaPzF4er',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/atm' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'generated::duzdZqHtZPCIIbJX',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/atm/create' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'generated::RkCqfsW28da11Clg',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/atm/reset' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'generated::grRDuZVd7XNuzQP8',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/netpos' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'netpos',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/search' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.search',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.dashboard',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/game_stat' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.game_stat',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/shift_stat' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.shift_stat',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/ticket_stat' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.ticket_stat',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/live' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.live_stat',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/transactions' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.transactions',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/start_shift' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.start_shift',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/start_shift/print' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.start_shift.print',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/invite' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.invites',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'backend.invites.update',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/wheelfortune' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.wheelfortune',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'backend.wheelfortune.update',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/banks' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.banks',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'backend.banks.update',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/banks/update' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.banks.update.do',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/profile' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.profile',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/balance' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.balance',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/profile/activity' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.profile.activity',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/profile/details/update' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.profile.update.details',
          ),
          1 => NULL,
          2 => 
          array (
            'PUT' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/profile/avatar/update' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.profile.update.avatar',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/profile/avatar/update/external' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.profile.update.avatar-external',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/profile/login-details/update' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.profile.update.login-details',
          ),
          1 => NULL,
          2 => 
          array (
            'PUT' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/profile/two-factor/enable' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.profile.two-factor.enable',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/profile/two-factor/disable' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.profile.two-factor.disable',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/profile/sessions' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.profile.sessions',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/profile/setshop' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.profile.setshop',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'POST' => 1,
            'HEAD' => 2,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/user' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.user.list',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/cashier' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.cashier',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/tree' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.user.tree',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/user/balances' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.user.balance.get',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/profile/balance/update' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.user.balance.update',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/profile/limit/update' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.user.limit.update',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/user/create' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.user.create',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'backend.user.store',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/user/back_login' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.user.back_login',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/user/send_phone_code' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.profile.send_phone_code',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/user/mass' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.user.massadd',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/game' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.game.list',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/games.json' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.game.list.json',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/game/create' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.game.create',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'backend.game.store',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/game/update/mass' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.game.mass',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/game/update/view' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.game.view',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/category' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.category.list',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/category/create' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.category.create',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'backend.category.store',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/shops' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.shop.list',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/shops/create' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.shop.create',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'backend.shop.store',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/shops/admin/create' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.shop.admin_create',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'backend.shop.admin_store',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/shops/get_demo' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.shop.get_demo',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/shops/fast_shop' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.shop.fast_shop',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/shops/balance' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.shop.balance',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/pincodes' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.pincode.list',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/pincodes/create' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.pincode.create',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'backend.pincode.store',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/pincodes/mass/create' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.pincode.massadd',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/pincodes/balance' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.pincode.balance',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/credits' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.credit.list',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/credits/create' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.credit.create',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'backend.credit.store',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/happyhours' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.happyhour.list',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/happyhours/create' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.happyhour.create',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'backend.happyhour.store',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/welcome_bonuses' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.welcome_bonus.list',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/info' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.info.list',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/info/create' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.info.create',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'backend.info.store',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/info/balance' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.info.balance',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/api' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.api.list',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/api/create' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.api.create',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'backend.api.store',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/api/generate' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.api.generate',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/api/json' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.api.json',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/api/balance' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.api.balance',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/tournaments' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.tournament.list',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/tournaments/create' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.tournament.create',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'backend.tournament.store',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/tournaments/games.json' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.tournament.games',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/smsbonuses' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.sms_bonus.list',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/smsbonuses/create' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.sms_bonus.create',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'backend.sms_bonus.store',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/articles' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.article.list',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/articles/create' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.article.create',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'backend.article.store',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/refunds' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.refunds.list',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/refunds/create' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.refunds.create',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'backend.refunds.store',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/rules' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.rule.list',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/faq' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.faq.list',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/faq/create' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.faq.create',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'backend.faq.store',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/jpgame' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.jpgame.list',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/jpgame/global' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.jpgame.global',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/jpgame/global_update' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.jpgame.global_update',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/progress' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.progress.list',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/role' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.role.index',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/role/create' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.role.create',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/role/store' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.role.store',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/permission' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.permission.index',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/permission/save' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.permission.save',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/securities' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.securities',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/generator' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.settings.generator',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'backend.settings.generator.post',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/shops/block' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.settings.shop_block',
          ),
          1 => NULL,
          2 => 
          array (
            'PUT' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/shops/unblock' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.settings.shop_unblock',
          ),
          1 => NULL,
          2 => 
          array (
            'PUT' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/settings/delete/stat/game' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.settings.gelete_stat',
          ),
          1 => NULL,
          2 => 
          array (
            'PUT' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/settings/delete/log/game' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.settings.gelete_log',
          ),
          1 => NULL,
          2 => 
          array (
            'PUT' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/settings/delete/pay/stats' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.settings.gelete_pay',
          ),
          1 => NULL,
          2 => 
          array (
            'PUT' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/activity' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.activity.index',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/activity/system' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.activity.system',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/activity/user' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.activity.user',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/activity/clear' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.activity.clear',
          ),
          1 => NULL,
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/sms_mailings' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.sms_mailing.list',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/sms_mailings/create' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.sms_mailing.create',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'backend.sms_mailing.store',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/support' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.support.index',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/backend/support/create' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.support.create',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'backend.support.store',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
    ),
    2 => 
    array (
      0 => '{^(?|/_debugbar/(?|c(?|lockwork/([^/]++)(*:42)|ache/([^/]++)(?:/([^/]++))?(*:76))|telescope/([^/]++)(*:102))|/c(?|oinpayment/(?|make/([^/]++)(*:143)|ajax/rates/([^/]++)(*:170))|ategories/([^/]++)(?|(*:200)|/([^/]++)(*:217)))|/api/(?|users/(?|([^/]++)(?|(*:255)|/edit(*:268)|(*:276))|mass(*:289)|([^/]++)/balance/([^/]++)(*:322))|shops/([^/]++)/(?|balance/([^/]++)(*:365)|view(*:377)|update(*:391)|destroy(*:406))|p(?|incodes/([^/]++)/(?|update(*:445)|destroy(*:460))|layer/apilogin/([^/]++)(*:492)))|/launcher/([^/]++)/([^/]++)(*:529)|/s(?|pecauth/([^/]++)(*:558)|etlang/([^/]++)(*:581))|/register/confirmation/([^/]++)(*:621)|/jpstv(?:/([^/]++))?(*:649)|/profile/sessions/([^/]++)/invalidate(*:694)|/vltcash/([^/]++)(*:719)|/game/([^/]++)(?|(*:744)|/(?|server(*:762)|([^/]++)/merkur/([^/]++)(*:794)))|/tournaments/([^/]++)(*:825)|/backend/(?|t(?|erminal/details/([^/]++)(?|(*:876))|ournaments/([^/]++)/(?|edit(*:912)|update(*:926)|delete(*:940)))|a(?|tm/(?|status/([^/]++)(*:975)|newkey/([^/]++)(*:998)|delete/([^/]++)/([^/]++)(*:1030))|pi/([^/]++)/(?|edit(*:1059)|update(*:1074)|delete(*:1089))|rticles/([^/]++)/(?|edit(*:1123)|update(*:1138)|delete(*:1153))|ctivity/user/([^/]++)/log(*:1188))|in(?|vite/status/([^/]++)(*:1223)|fo/([^/]++)/(?|edit(*:1251)|update(*:1266)|delete(*:1281)))|w(?|heelfortune/status/([^/]++)(*:1323)|elcome_bonuses/(?|([^/]++)/(?|edit(*:1366)|update(*:1381))|status/([^/]++)(*:1406)))|p(?|ro(?|file/sessions/([^/]++)/invalidate(*:1459)|gress/(?|([^/]++)/(?|edit(*:1493)|update(*:1508))|status/([^/]++)(*:1533)))|incodes/([^/]++)/(?|edit(*:1568)|update(*:1583)|delete(*:1598)))|user/(?|([^/]++)/(?|s(?|tat(*:1636)|pecauth(*:1652)|how(*:1664)|essions(?|(*:1683)|/([^/]++)/invalidate(*:1712)))|profile(*:1730)|update/(?|details(*:1756)|login\\-details(*:1779)|avatar(?|(*:1797)|/external(*:1815)))|delete(*:1832)|hard_delete(*:1852)|two\\-factor/(?|enable(*:1882)|disable(*:1898)))|action/([^/]++)(*:1924))|game/(?|([^/]++)(?|/(?|s(?|how(*:1964)|erver(*:1978))|edit(*:1992)|update(*:2007)|delete(*:2022))|(*:2032))|c(?|ategories(*:2055)|lear(*:2068)))|c(?|ategory/([^/]++)/(?|edit(*:2107)|update(*:2122)|delete(*:2137))|redits/([^/]++)/(?|edit(*:2170)|update(*:2185)|delete(*:2200)|buy(?|(*:2215)|/([^/]++)(*:2233))))|s(?|hops/([^/]++)/(?|edit(*:2270)|update(*:2285)|delete(*:2300)|hard_delete(*:2320)|action/([^/]++)(*:2344))|ms(?|bonuses/(?|([^/]++)/(?|edit(*:2386)|update(*:2401)|delete(*:2416))|status/([^/]++)(*:2441))|_mailings/([^/]++)/(?|edit(*:2477)|update(*:2492)|delete(*:2507)))|e(?|ttings/(?|([^/]++)(?|(*:2543))|sync(*:2557))|curities/([^/]++)/(?|block(*:2593)|delete(*:2608)))|upport/([^/]++)(?|/(?|answer(*:2647)|close(*:2661))|(*:2671)))|happyhours/(?|([^/]++)/(?|edit(*:2712)|update(*:2727)|delete(*:2742))|status/([^/]++)(*:2767))|r(?|efunds/([^/]++)/(?|edit(*:2804)|update(*:2819)|delete(*:2834))|ules/([^/]++)/(?|edit(*:2865)|update(*:2880))|ole/([^/]++)/(?|edit(*:2910)|update(*:2925)|delete(*:2940)))|faq/([^/]++)/(?|edit(*:2971)|update(*:2986)|delete(*:3001))|jpgame/([^/]++)/(?|edit(*:3034)|update(*:3049))))/?$}sDu',
    ),
    3 => 
    array (
      42 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'debugbar.clockwork',
          ),
          1 => 
          array (
            0 => 'id',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      76 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'debugbar.cache.delete',
            'tags' => NULL,
          ),
          1 => 
          array (
            0 => 'key',
            1 => 'tags',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      102 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'debugbar.telescope',
          ),
          1 => 
          array (
            0 => 'id',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      143 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'coinpayment.make.show',
          ),
          1 => 
          array (
            0 => 'make',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      170 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'coinpayment.rates',
          ),
          1 => 
          array (
            0 => 'usd',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      200 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'frontend.game.list.category',
          ),
          1 => 
          array (
            0 => 'category1',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      217 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'frontend.game.list.category_level2',
          ),
          1 => 
          array (
            0 => 'category1',
            1 => 'category2',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      255 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'users.show',
          ),
          1 => 
          array (
            0 => 'user',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      268 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'users.edit',
          ),
          1 => 
          array (
            0 => 'user',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      276 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'users.update',
          ),
          1 => 
          array (
            0 => 'user',
          ),
          2 => 
          array (
            'PUT' => 0,
            'PATCH' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'users.destroy',
          ),
          1 => 
          array (
            0 => 'user',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      289 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'generated::U9bJwIb861OQjZXQ',
          ),
          1 => 
          array (
          ),
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      322 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'generated::8cN0wPvHMRlnIx1P',
          ),
          1 => 
          array (
            0 => 'user',
            1 => 'type',
          ),
          2 => 
          array (
            'PUT' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      365 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'generated::73O7X5tOkPstdjRQ',
          ),
          1 => 
          array (
            0 => 'shop',
            1 => 'type',
          ),
          2 => 
          array (
            'PUT' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      377 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'generated::6pHkznFH6vz9I6eF',
          ),
          1 => 
          array (
            0 => 'id',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      391 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'generated::WwWP8gDkalyb4oIg',
          ),
          1 => 
          array (
            0 => 'shop',
          ),
          2 => 
          array (
            'PUT' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      406 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'generated::yQzk324L6ML0F6cj',
          ),
          1 => 
          array (
            0 => 'id',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      445 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'generated::0aU3yNlF6zYummBt',
          ),
          1 => 
          array (
            0 => 'pincode',
          ),
          2 => 
          array (
            'PUT' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      460 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'generated::4OMVVmPcooCenOms',
          ),
          1 => 
          array (
            0 => 'pincode',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      492 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'generated::ofsNnvpB5MMfQ1M8',
          ),
          1 => 
          array (
            0 => 'token',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      529 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'generated::UTn5RfdTxYqncEB7',
          ),
          1 => 
          array (
            0 => 'game',
            1 => 'token',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      558 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'frontend.user.specauth',
          ),
          1 => 
          array (
            0 => 'user',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      581 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'frontend.setlang',
          ),
          1 => 
          array (
            0 => 'lang',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      621 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'frontend.register.confirm-email',
          ),
          1 => 
          array (
            0 => 'token',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      649 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'frontend.jpstv',
            'id' => NULL,
          ),
          1 => 
          array (
            0 => 'id',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      694 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'frontend.profile.sessions.invalidate',
          ),
          1 => 
          array (
            0 => 'session',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      719 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'frontend.vltcash.userhash',
          ),
          1 => 
          array (
            0 => 'userhash',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      744 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'frontend.game.go',
          ),
          1 => 
          array (
            0 => 'game',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      762 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'frontend.game.server',
          ),
          1 => 
          array (
            0 => 'game',
          ),
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      794 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'frontend.game.mercuryServer',
          ),
          1 => 
          array (
            0 => 'category',
            1 => 'game',
            2 => 'command',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
            'POST' => 2,
            'PUT' => 3,
            'PATCH' => 4,
            'DELETE' => 5,
            'OPTIONS' => 6,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      825 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'frontend.tournaments.view',
          ),
          1 => 
          array (
            0 => 'tournament',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      876 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'generated::ue1cjBd48S93eDb5',
          ),
          1 => 
          array (
            0 => 'id',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'generated::qeEbloe5gUcpjSAd',
          ),
          1 => 
          array (
            0 => 'id',
          ),
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      912 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.tournament.edit',
          ),
          1 => 
          array (
            0 => 'tournament',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      926 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.tournament.update',
          ),
          1 => 
          array (
            0 => 'tournament',
          ),
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      940 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.tournament.delete',
          ),
          1 => 
          array (
            0 => 'tournament',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      975 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'generated::pcOcCt7N6HAxlqbe',
          ),
          1 => 
          array (
            0 => 'status',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      998 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'generated::8XHYYl5CXxoXwdrj',
          ),
          1 => 
          array (
            0 => 'api_id',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      1030 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'generated::Isfvw0OF32QBCBRT',
          ),
          1 => 
          array (
            0 => 'id',
            1 => 'api_id',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      1059 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.api.edit',
          ),
          1 => 
          array (
            0 => 'api',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      1074 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.api.update',
          ),
          1 => 
          array (
            0 => 'api',
          ),
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      1089 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.api.delete',
          ),
          1 => 
          array (
            0 => 'api',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      1123 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.article.edit',
          ),
          1 => 
          array (
            0 => 'article',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      1138 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.article.update',
          ),
          1 => 
          array (
            0 => 'article',
          ),
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      1153 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.article.delete',
          ),
          1 => 
          array (
            0 => 'article',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      1188 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.activity.user.log',
          ),
          1 => 
          array (
            0 => 'user',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      1223 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.invite.status',
          ),
          1 => 
          array (
            0 => 'status',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      1251 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.info.edit',
          ),
          1 => 
          array (
            0 => 'info',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      1266 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.info.update',
          ),
          1 => 
          array (
            0 => 'info',
          ),
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      1281 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.info.delete',
          ),
          1 => 
          array (
            0 => 'info',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      1323 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.wheelfortune.status',
          ),
          1 => 
          array (
            0 => 'status',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      1366 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.welcome_bonus.edit',
          ),
          1 => 
          array (
            0 => 'welcome_bonus',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      1381 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.welcome_bonus.update',
          ),
          1 => 
          array (
            0 => 'welcome_bonus',
          ),
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      1406 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.welcome_bonus.status',
          ),
          1 => 
          array (
            0 => 'status',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      1459 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.profile.sessions.invalidate',
          ),
          1 => 
          array (
            0 => 'session',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      1493 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.progress.edit',
          ),
          1 => 
          array (
            0 => 'progress',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      1508 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.progress.update',
          ),
          1 => 
          array (
            0 => 'progress',
          ),
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      1533 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.progress.status',
          ),
          1 => 
          array (
            0 => 'status',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      1568 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.pincode.edit',
          ),
          1 => 
          array (
            0 => 'pincode',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      1583 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.pincode.update',
          ),
          1 => 
          array (
            0 => 'pincode',
          ),
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      1598 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.pincode.delete',
          ),
          1 => 
          array (
            0 => 'pincode',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      1636 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.user.stat',
          ),
          1 => 
          array (
            0 => 'user',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      1652 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.user.specauth',
          ),
          1 => 
          array (
            0 => 'user',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      1664 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.user.show',
          ),
          1 => 
          array (
            0 => 'user',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      1683 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.user.sessions',
          ),
          1 => 
          array (
            0 => 'user',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      1712 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.user.sessions.invalidate',
          ),
          1 => 
          array (
            0 => 'user',
            1 => 'session',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      1730 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.user.edit',
          ),
          1 => 
          array (
            0 => 'user',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      1756 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.user.update.details',
          ),
          1 => 
          array (
            0 => 'user',
          ),
          2 => 
          array (
            'PUT' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      1779 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.user.update.login-details',
          ),
          1 => 
          array (
            0 => 'user',
          ),
          2 => 
          array (
            'PUT' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      1797 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.user.update.avatar',
          ),
          1 => 
          array (
            0 => 'user',
          ),
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      1815 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.user.update.avatar.external',
          ),
          1 => 
          array (
            0 => 'user',
          ),
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      1832 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.user.delete',
          ),
          1 => 
          array (
            0 => 'user',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      1852 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.user.hard_delete',
          ),
          1 => 
          array (
            0 => 'user',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      1882 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.user.two-factor.enable',
          ),
          1 => 
          array (
            0 => 'user',
          ),
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      1898 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.user.two-factor.disable',
          ),
          1 => 
          array (
            0 => 'user',
          ),
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      1924 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.user.action',
          ),
          1 => 
          array (
            0 => 'action',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      1964 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.game.show',
          ),
          1 => 
          array (
            0 => 'game',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      1978 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.game.server',
          ),
          1 => 
          array (
            0 => 'game',
          ),
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      1992 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.game.edit',
          ),
          1 => 
          array (
            0 => 'game',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      2007 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.game.update',
          ),
          1 => 
          array (
            0 => 'game',
          ),
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      2022 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.game.delete',
          ),
          1 => 
          array (
            0 => 'game',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      2032 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.game.go',
          ),
          1 => 
          array (
            0 => 'game',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      2055 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.game.categories',
          ),
          1 => 
          array (
          ),
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      2068 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.game.clear',
          ),
          1 => 
          array (
          ),
          2 => 
          array (
            'PUT' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      2107 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.category.edit',
          ),
          1 => 
          array (
            0 => 'category',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      2122 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.category.update',
          ),
          1 => 
          array (
            0 => 'category',
          ),
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      2137 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.category.delete',
          ),
          1 => 
          array (
            0 => 'category',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      2170 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.credit.edit',
          ),
          1 => 
          array (
            0 => 'credit',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      2185 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.credit.update',
          ),
          1 => 
          array (
            0 => 'credit',
          ),
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      2200 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.credit.delete',
          ),
          1 => 
          array (
            0 => 'credit',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      2215 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.credit.buy',
          ),
          1 => 
          array (
            0 => 'credit',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      2233 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.credit.payment',
          ),
          1 => 
          array (
            0 => 'credit',
            1 => 'system',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      2270 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.shop.edit',
          ),
          1 => 
          array (
            0 => 'shop',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      2285 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.shop.update',
          ),
          1 => 
          array (
            0 => 'shop',
          ),
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      2300 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.shop.delete',
          ),
          1 => 
          array (
            0 => 'shop',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      2320 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.shop.hard_delete',
          ),
          1 => 
          array (
            0 => 'shop',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      2344 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.shop.action',
          ),
          1 => 
          array (
            0 => 'shop',
            1 => 'action',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      2386 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.sms_bonus.edit',
          ),
          1 => 
          array (
            0 => 'sms_bonus',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      2401 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.sms_bonus.update',
          ),
          1 => 
          array (
            0 => 'sms_bonus',
          ),
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      2416 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.sms_bonus.delete',
          ),
          1 => 
          array (
            0 => 'sms_bonus',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      2441 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.sms_bonus.status',
          ),
          1 => 
          array (
            0 => 'status',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      2477 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.sms_mailing.edit',
          ),
          1 => 
          array (
            0 => 'mailing',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      2492 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.sms_mailing.update',
          ),
          1 => 
          array (
            0 => 'mailing',
          ),
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      2507 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.sms_mailing.delete',
          ),
          1 => 
          array (
            0 => 'mailing',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      2543 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.settings.list',
          ),
          1 => 
          array (
            0 => 'tab',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'backend.settings.list.update',
          ),
          1 => 
          array (
            0 => 'tab',
          ),
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      2557 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.settings.sync',
          ),
          1 => 
          array (
          ),
          2 => 
          array (
            'PUT' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      2593 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.securities.block',
          ),
          1 => 
          array (
            0 => 'item',
          ),
          2 => 
          array (
            'PUT' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      2608 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.securities.delete',
          ),
          1 => 
          array (
            0 => 'item',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      2647 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.support.answer',
          ),
          1 => 
          array (
            0 => 'ticket',
          ),
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      2661 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.support.close',
          ),
          1 => 
          array (
            0 => 'ticket',
          ),
          2 => 
          array (
            'PUT' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      2671 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.support.view',
          ),
          1 => 
          array (
            0 => 'ticket',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      2712 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.happyhour.edit',
          ),
          1 => 
          array (
            0 => 'happyhour',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      2727 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.happyhour.update',
          ),
          1 => 
          array (
            0 => 'happyhour',
          ),
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      2742 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.happyhour.delete',
          ),
          1 => 
          array (
            0 => 'happyhour',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      2767 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.happyhour.status',
          ),
          1 => 
          array (
            0 => 'status',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      2804 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.refunds.edit',
          ),
          1 => 
          array (
            0 => 'refund',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      2819 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.refunds.update',
          ),
          1 => 
          array (
            0 => 'refund',
          ),
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      2834 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.refunds.delete',
          ),
          1 => 
          array (
            0 => 'refund',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      2865 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.rule.edit',
          ),
          1 => 
          array (
            0 => 'rule',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      2880 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.rule.update',
          ),
          1 => 
          array (
            0 => 'rule',
          ),
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      2910 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.role.edit',
          ),
          1 => 
          array (
            0 => 'role',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      2925 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.role.update',
          ),
          1 => 
          array (
            0 => 'role',
          ),
          2 => 
          array (
            'PUT' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      2940 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.role.delete',
          ),
          1 => 
          array (
            0 => 'role',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      2971 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.faq.edit',
          ),
          1 => 
          array (
            0 => 'faq',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      2986 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.faq.update',
          ),
          1 => 
          array (
            0 => 'faq',
          ),
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      3001 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.faq.delete',
          ),
          1 => 
          array (
            0 => 'faq',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      3034 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.jpgame.edit',
          ),
          1 => 
          array (
            0 => 'jackpot',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      3049 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'backend.jpgame.update',
          ),
          1 => 
          array (
            0 => 'jackpot',
          ),
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => NULL,
          1 => NULL,
          2 => NULL,
          3 => NULL,
          4 => false,
          5 => false,
          6 => 0,
        ),
      ),
    ),
    4 => NULL,
  ),
  'attributes' => 
  array (
    'debugbar.openhandler' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => '_debugbar/open',
      'action' => 
      array (
        'domain' => NULL,
        'middleware' => 
        array (
          0 => 'Barryvdh\\Debugbar\\Middleware\\DebugbarEnabled',
        ),
        'uses' => 'Barryvdh\\Debugbar\\Controllers\\OpenHandlerController@handle',
        'as' => 'debugbar.openhandler',
        'controller' => 'Barryvdh\\Debugbar\\Controllers\\OpenHandlerController@handle',
        'namespace' => 'Barryvdh\\Debugbar\\Controllers',
        'prefix' => '_debugbar',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'debugbar.clockwork' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => '_debugbar/clockwork/{id}',
      'action' => 
      array (
        'domain' => NULL,
        'middleware' => 
        array (
          0 => 'Barryvdh\\Debugbar\\Middleware\\DebugbarEnabled',
        ),
        'uses' => 'Barryvdh\\Debugbar\\Controllers\\OpenHandlerController@clockwork',
        'as' => 'debugbar.clockwork',
        'controller' => 'Barryvdh\\Debugbar\\Controllers\\OpenHandlerController@clockwork',
        'namespace' => 'Barryvdh\\Debugbar\\Controllers',
        'prefix' => '_debugbar',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'debugbar.telescope' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => '_debugbar/telescope/{id}',
      'action' => 
      array (
        'domain' => NULL,
        'middleware' => 
        array (
          0 => 'Barryvdh\\Debugbar\\Middleware\\DebugbarEnabled',
        ),
        'uses' => 'Barryvdh\\Debugbar\\Controllers\\TelescopeController@show',
        'as' => 'debugbar.telescope',
        'controller' => 'Barryvdh\\Debugbar\\Controllers\\TelescopeController@show',
        'namespace' => 'Barryvdh\\Debugbar\\Controllers',
        'prefix' => '_debugbar',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'debugbar.assets.css' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => '_debugbar/assets/stylesheets',
      'action' => 
      array (
        'domain' => NULL,
        'middleware' => 
        array (
          0 => 'Barryvdh\\Debugbar\\Middleware\\DebugbarEnabled',
        ),
        'uses' => 'Barryvdh\\Debugbar\\Controllers\\AssetController@css',
        'as' => 'debugbar.assets.css',
        'controller' => 'Barryvdh\\Debugbar\\Controllers\\AssetController@css',
        'namespace' => 'Barryvdh\\Debugbar\\Controllers',
        'prefix' => '_debugbar',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'debugbar.assets.js' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => '_debugbar/assets/javascript',
      'action' => 
      array (
        'domain' => NULL,
        'middleware' => 
        array (
          0 => 'Barryvdh\\Debugbar\\Middleware\\DebugbarEnabled',
        ),
        'uses' => 'Barryvdh\\Debugbar\\Controllers\\AssetController@js',
        'as' => 'debugbar.assets.js',
        'controller' => 'Barryvdh\\Debugbar\\Controllers\\AssetController@js',
        'namespace' => 'Barryvdh\\Debugbar\\Controllers',
        'prefix' => '_debugbar',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'debugbar.cache.delete' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => '_debugbar/cache/{key}/{tags?}',
      'action' => 
      array (
        'domain' => NULL,
        'middleware' => 
        array (
          0 => 'Barryvdh\\Debugbar\\Middleware\\DebugbarEnabled',
        ),
        'uses' => 'Barryvdh\\Debugbar\\Controllers\\CacheController@delete',
        'as' => 'debugbar.cache.delete',
        'controller' => 'Barryvdh\\Debugbar\\Controllers\\CacheController@delete',
        'namespace' => 'Barryvdh\\Debugbar\\Controllers',
        'prefix' => '_debugbar',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'coinpayment.make.store' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'coinpayment/make',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
        ),
        'as' => 'coinpayment.make.store',
        'uses' => 'Hexters\\CoinPayment\\Http\\Controllers\\MakeTransactionController@store',
        'controller' => 'Hexters\\CoinPayment\\Http\\Controllers\\MakeTransactionController@store',
        'namespace' => 'Hexters\\CoinPayment\\Http\\Controllers',
        'prefix' => 'coinpayment/',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'coinpayment.make.show' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'coinpayment/make/{make}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
        ),
        'as' => 'coinpayment.make.show',
        'uses' => 'Hexters\\CoinPayment\\Http\\Controllers\\MakeTransactionController@show',
        'controller' => 'Hexters\\CoinPayment\\Http\\Controllers\\MakeTransactionController@show',
        'namespace' => 'Hexters\\CoinPayment\\Http\\Controllers',
        'prefix' => 'coinpayment/',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'coinpayment.rates' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'coinpayment/ajax/rates/{usd}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
        ),
        'uses' => 'Hexters\\CoinPayment\\Http\\Controllers\\AjaxController@rates',
        'controller' => 'Hexters\\CoinPayment\\Http\\Controllers\\AjaxController@rates',
        'as' => 'coinpayment.rates',
        'namespace' => 'Hexters\\CoinPayment\\Http\\Controllers',
        'prefix' => 'coinpayment/ajax',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'coinpayment.encrypt.payload' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'coinpayment/ajax/payload',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
        ),
        'uses' => 'Hexters\\CoinPayment\\Http\\Controllers\\AjaxController@encrypt_payload',
        'controller' => 'Hexters\\CoinPayment\\Http\\Controllers\\AjaxController@encrypt_payload',
        'as' => 'coinpayment.encrypt.payload',
        'namespace' => 'Hexters\\CoinPayment\\Http\\Controllers',
        'prefix' => 'coinpayment/ajax',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'coinpayment.create.transaction' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'coinpayment/ajax/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
        ),
        'uses' => 'Hexters\\CoinPayment\\Http\\Controllers\\AjaxController@create_transaction',
        'controller' => 'Hexters\\CoinPayment\\Http\\Controllers\\AjaxController@create_transaction',
        'as' => 'coinpayment.create.transaction',
        'namespace' => 'Hexters\\CoinPayment\\Http\\Controllers',
        'prefix' => 'coinpayment/ajax',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'coinpayment.ipn' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'coinpayment/ipn',
      'action' => 
      array (
        'uses' => 'Hexters\\CoinPayment\\Http\\Controllers\\IPNController@__invoke',
        'controller' => 'Hexters\\CoinPayment\\Http\\Controllers\\IPNController',
        'as' => 'coinpayment.ipn',
        'namespace' => 'Hexters\\CoinPayment\\Http\\Controllers',
        'prefix' => '/coinpayment',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'generated::83knmig3MCIfwYF9' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'api/demo',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'api',
          1 => 'ipcheck',
        ),
        'uses' => 'VanguardLTE\\Http\\Controllers\\Api\\BasicController@index',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Api\\BasicController@index',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Api',
        'prefix' => 'api',
        'where' => 
        array (
        ),
        'as' => 'generated::83knmig3MCIfwYF9',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'generated::qeXqwbXwHDRiyPOu' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'api/agent/trial',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'api',
          1 => 'ipcheck',
        ),
        'uses' => 'VanguardLTE\\Http\\Controllers\\Api\\BasicController@agent',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Api\\BasicController@agent',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Api',
        'prefix' => 'api',
        'where' => 
        array (
        ),
        'as' => 'generated::qeXqwbXwHDRiyPOu',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'generated::ugVj3VU1xVYEQVbg' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'api/login',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'api',
          1 => 'ipcheck',
        ),
        'uses' => 'VanguardLTE\\Http\\Controllers\\Api\\Auth\\AuthController@login',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Api\\Auth\\AuthController@login',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Api',
        'prefix' => 'api',
        'where' => 
        array (
        ),
        'as' => 'generated::ugVj3VU1xVYEQVbg',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'generated::srEwGFykwBiuJ4sJ' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'api/logout',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'api',
          1 => 'ipcheck',
        ),
        'uses' => 'VanguardLTE\\Http\\Controllers\\Api\\Auth\\AuthController@logout',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Api\\Auth\\AuthController@logout',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Api',
        'prefix' => 'api',
        'where' => 
        array (
        ),
        'as' => 'generated::srEwGFykwBiuJ4sJ',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'generated::QEKfXQnMtLpBeyUz' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'api/me',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'api',
          1 => 'ipcheck',
        ),
        'uses' => 'VanguardLTE\\Http\\Controllers\\Api\\Profile\\DetailsController@index',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Api\\Profile\\DetailsController@index',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Api',
        'prefix' => 'api',
        'where' => 
        array (
        ),
        'as' => 'generated::QEKfXQnMtLpBeyUz',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'generated::tGvqj8A9tfeKZWA4' => 
    array (
      'methods' => 
      array (
        0 => 'PATCH',
      ),
      'uri' => 'api/me/details',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'api',
          1 => 'ipcheck',
        ),
        'uses' => 'VanguardLTE\\Http\\Controllers\\Api\\Profile\\DetailsController@update',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Api\\Profile\\DetailsController@update',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Api',
        'prefix' => 'api',
        'where' => 
        array (
        ),
        'as' => 'generated::tGvqj8A9tfeKZWA4',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'generated::SKhis9dj8nzu3NzN' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'api/me/refund',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'api',
          1 => 'ipcheck',
        ),
        'uses' => 'VanguardLTE\\Http\\Controllers\\Api\\Profile\\DetailsController@refunds',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Api\\Profile\\DetailsController@refunds',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Api',
        'prefix' => 'api',
        'where' => 
        array (
        ),
        'as' => 'generated::SKhis9dj8nzu3NzN',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'generated::NI5cz7s2K160WXkn' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'api/pincodes/check',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'api',
          1 => 'ipcheck',
        ),
        'uses' => 'VanguardLTE\\Http\\Controllers\\Api\\Profile\\DetailsController@check',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Api\\Profile\\DetailsController@check',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Api',
        'prefix' => 'api',
        'where' => 
        array (
        ),
        'as' => 'generated::NI5cz7s2K160WXkn',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'generated::sKLfMjtHDZSQwH8Z' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'api/sms',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'api',
          1 => 'ipcheck',
        ),
        'uses' => 'VanguardLTE\\Http\\Controllers\\Api\\Profile\\DetailsController@sms',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Api\\Profile\\DetailsController@sms',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Api',
        'prefix' => 'api',
        'where' => 
        array (
        ),
        'as' => 'generated::sKLfMjtHDZSQwH8Z',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'generated::yNs8ZRKaDjmaFSre' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'api/me/balance',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'api',
          1 => 'ipcheck',
        ),
        'uses' => 'VanguardLTE\\Http\\Controllers\\Api\\Profile\\DetailsController@balance',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Api\\Profile\\DetailsController@balance',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Api',
        'prefix' => 'api',
        'where' => 
        array (
        ),
        'as' => 'generated::yNs8ZRKaDjmaFSre',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'users.index' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'api/users',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'api',
          1 => 'ipcheck',
        ),
        'as' => 'users.index',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Api\\Users\\UsersController@index',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Api\\Users\\UsersController@index',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Api',
        'prefix' => 'api',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'users.store' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'api/users',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'api',
          1 => 'ipcheck',
        ),
        'as' => 'users.store',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Api\\Users\\UsersController@store',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Api\\Users\\UsersController@store',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Api',
        'prefix' => 'api',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'users.show' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'api/users/{user}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'api',
          1 => 'ipcheck',
        ),
        'as' => 'users.show',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Api\\Users\\UsersController@show',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Api\\Users\\UsersController@show',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Api',
        'prefix' => 'api',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'users.edit' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'api/users/{user}/edit',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'api',
          1 => 'ipcheck',
        ),
        'as' => 'users.edit',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Api\\Users\\UsersController@edit',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Api\\Users\\UsersController@edit',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Api',
        'prefix' => 'api',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'users.update' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
        1 => 'PATCH',
      ),
      'uri' => 'api/users/{user}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'api',
          1 => 'ipcheck',
        ),
        'as' => 'users.update',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Api\\Users\\UsersController@update',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Api\\Users\\UsersController@update',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Api',
        'prefix' => 'api',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'users.destroy' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'api/users/{user}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'api',
          1 => 'ipcheck',
        ),
        'as' => 'users.destroy',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Api\\Users\\UsersController@destroy',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Api\\Users\\UsersController@destroy',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Api',
        'prefix' => 'api',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'generated::U9bJwIb861OQjZXQ' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'api/users/mass',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'api',
          1 => 'ipcheck',
        ),
        'uses' => 'VanguardLTE\\Http\\Controllers\\Api\\Users\\UsersController@mass',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Api\\Users\\UsersController@mass',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Api',
        'prefix' => 'api',
        'where' => 
        array (
        ),
        'as' => 'generated::U9bJwIb861OQjZXQ',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'generated::8cN0wPvHMRlnIx1P' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
      ),
      'uri' => 'api/users/{user}/balance/{type}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'api',
          1 => 'ipcheck',
        ),
        'uses' => 'VanguardLTE\\Http\\Controllers\\Api\\Users\\BalanceController@balance',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Api\\Users\\BalanceController@balance',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Api',
        'prefix' => 'api',
        'where' => 
        array (
        ),
        'as' => 'generated::8cN0wPvHMRlnIx1P',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'generated::Pyp8TK5pJIyijJu2' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'api/shops',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'api',
          1 => 'ipcheck',
        ),
        'uses' => 'VanguardLTE\\Http\\Controllers\\Api\\ShopController@index',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Api\\ShopController@index',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Api',
        'prefix' => 'api',
        'where' => 
        array (
        ),
        'as' => 'generated::Pyp8TK5pJIyijJu2',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'generated::9HPeDkTg8NoUiPs3' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'api/shops/currency',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'api',
          1 => 'ipcheck',
        ),
        'uses' => 'VanguardLTE\\Http\\Controllers\\Api\\ShopController@currency',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Api\\ShopController@currency',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Api',
        'prefix' => 'api',
        'where' => 
        array (
        ),
        'as' => 'generated::9HPeDkTg8NoUiPs3',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'generated::73O7X5tOkPstdjRQ' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
      ),
      'uri' => 'api/shops/{shop}/balance/{type}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'api',
          1 => 'ipcheck',
        ),
        'uses' => 'VanguardLTE\\Http\\Controllers\\Api\\ShopController@balance',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Api\\ShopController@balance',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Api',
        'prefix' => 'api',
        'where' => 
        array (
        ),
        'as' => 'generated::73O7X5tOkPstdjRQ',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'generated::W2KXGGIrGfKFTT87' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
      ),
      'uri' => 'api/shops/block',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'api',
          1 => 'ipcheck',
          2 => 'permission_api:shops.block',
        ),
        'uses' => 'VanguardLTE\\Http\\Controllers\\Api\\ShopController@shop_block',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Api\\ShopController@shop_block',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Api',
        'prefix' => 'api',
        'where' => 
        array (
        ),
        'as' => 'generated::W2KXGGIrGfKFTT87',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'generated::M3MYPs8oSObHCsbE' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
      ),
      'uri' => 'api/shops/unblock',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'api',
          1 => 'ipcheck',
          2 => 'permission_api:shops.unblock',
        ),
        'uses' => 'VanguardLTE\\Http\\Controllers\\Api\\ShopController@shop_unblock',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Api\\ShopController@shop_unblock',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Api',
        'prefix' => 'api',
        'where' => 
        array (
        ),
        'as' => 'generated::M3MYPs8oSObHCsbE',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'generated::6pHkznFH6vz9I6eF' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'api/shops/{id}/view',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'api',
          1 => 'ipcheck',
        ),
        'uses' => 'VanguardLTE\\Http\\Controllers\\Api\\ShopController@view',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Api\\ShopController@view',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Api',
        'prefix' => 'api',
        'where' => 
        array (
        ),
        'as' => 'generated::6pHkznFH6vz9I6eF',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'generated::vhG6UeM6ZJi0ZXIg' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'api/shops/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'api',
          1 => 'ipcheck',
        ),
        'uses' => 'VanguardLTE\\Http\\Controllers\\Api\\ShopController@store',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Api\\ShopController@store',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Api',
        'prefix' => 'api',
        'where' => 
        array (
        ),
        'as' => 'generated::vhG6UeM6ZJi0ZXIg',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'generated::WwWP8gDkalyb4oIg' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
      ),
      'uri' => 'api/shops/{shop}/update',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'api',
          1 => 'ipcheck',
        ),
        'uses' => 'VanguardLTE\\Http\\Controllers\\Api\\ShopController@update',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Api\\ShopController@update',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Api',
        'prefix' => 'api',
        'where' => 
        array (
        ),
        'as' => 'generated::WwWP8gDkalyb4oIg',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'generated::EDs0nqtGQOOehnpB' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'api/shops/admin',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'api',
          1 => 'ipcheck',
        ),
        'uses' => 'VanguardLTE\\Http\\Controllers\\Api\\ShopController@admin',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Api\\ShopController@admin',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Api',
        'prefix' => 'api',
        'where' => 
        array (
        ),
        'as' => 'generated::EDs0nqtGQOOehnpB',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'generated::yQzk324L6ML0F6cj' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'api/shops/{id}/destroy',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'api',
          1 => 'ipcheck',
        ),
        'uses' => 'VanguardLTE\\Http\\Controllers\\Api\\ShopController@destroy',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Api\\ShopController@destroy',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Api',
        'prefix' => 'api',
        'where' => 
        array (
        ),
        'as' => 'generated::yQzk324L6ML0F6cj',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'generated::aAxbS1CXZjDxOuL3' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'api/pincodes',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'api',
          1 => 'ipcheck',
        ),
        'uses' => 'VanguardLTE\\Http\\Controllers\\Api\\PincodessController@index',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Api\\PincodessController@index',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Api',
        'prefix' => 'api',
        'where' => 
        array (
        ),
        'as' => 'generated::aAxbS1CXZjDxOuL3',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'generated::04Wu3rNjsizQrYm9' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'api/pincodes/store',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'api',
          1 => 'ipcheck',
        ),
        'uses' => 'VanguardLTE\\Http\\Controllers\\Api\\PincodessController@store',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Api\\PincodessController@store',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Api',
        'prefix' => 'api',
        'where' => 
        array (
        ),
        'as' => 'generated::04Wu3rNjsizQrYm9',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'generated::DKGDxo9QrofvMJUk' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'api/pincodes/mass',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'api',
          1 => 'ipcheck',
        ),
        'uses' => 'VanguardLTE\\Http\\Controllers\\Api\\PincodessController@mass',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Api\\PincodessController@mass',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Api',
        'prefix' => 'api',
        'where' => 
        array (
        ),
        'as' => 'generated::DKGDxo9QrofvMJUk',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'generated::0aU3yNlF6zYummBt' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
      ),
      'uri' => 'api/pincodes/{pincode}/update',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'api',
          1 => 'ipcheck',
        ),
        'uses' => 'VanguardLTE\\Http\\Controllers\\Api\\PincodessController@update',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Api\\PincodessController@update',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Api',
        'prefix' => 'api',
        'where' => 
        array (
        ),
        'as' => 'generated::0aU3yNlF6zYummBt',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'generated::4OMVVmPcooCenOms' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'api/pincodes/{pincode}/destroy',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'api',
          1 => 'ipcheck',
        ),
        'uses' => 'VanguardLTE\\Http\\Controllers\\Api\\PincodessController@destroy',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Api\\PincodessController@destroy',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Api',
        'prefix' => 'api',
        'where' => 
        array (
        ),
        'as' => 'generated::4OMVVmPcooCenOms',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'generated::COw4mNibE62vT6AS' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'api/games',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'api',
          1 => 'ipcheck',
        ),
        'uses' => 'VanguardLTE\\Http\\Controllers\\Api\\Games\\GamesController@index',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Api\\Games\\GamesController@index',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Api',
        'prefix' => 'api',
        'where' => 
        array (
        ),
        'as' => 'generated::COw4mNibE62vT6AS',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'generated::5r0jbfdQa9bYQtqP' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'api/category',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'api',
          1 => 'ipcheck',
        ),
        'uses' => 'VanguardLTE\\Http\\Controllers\\Api\\Categories\\CategoriesController@index',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Api\\Categories\\CategoriesController@index',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Api',
        'prefix' => 'api',
        'where' => 
        array (
        ),
        'as' => 'generated::5r0jbfdQa9bYQtqP',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'generated::rkmFkQiw2BKiCGsM' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'api/jackpots',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'api',
          1 => 'ipcheck',
        ),
        'uses' => 'VanguardLTE\\Http\\Controllers\\Api\\Jackpots\\JackpotsController@index',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Api\\Jackpots\\JackpotsController@index',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Api',
        'prefix' => 'api',
        'where' => 
        array (
        ),
        'as' => 'generated::rkmFkQiw2BKiCGsM',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'generated::zVTwuPBR9Jw34x1o' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'api/stats/pay',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'api',
          1 => 'ipcheck',
        ),
        'uses' => 'VanguardLTE\\Http\\Controllers\\Api\\GameStats\\GameStatsController@pay',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Api\\GameStats\\GameStatsController@pay',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Api',
        'prefix' => 'api',
        'where' => 
        array (
        ),
        'as' => 'generated::zVTwuPBR9Jw34x1o',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'generated::jwltXb8edRySqmyk' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'api/stats/game',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'api',
          1 => 'ipcheck',
        ),
        'uses' => 'VanguardLTE\\Http\\Controllers\\Api\\GameStats\\GameStatsController@game',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Api\\GameStats\\GameStatsController@game',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Api',
        'prefix' => 'api',
        'where' => 
        array (
        ),
        'as' => 'generated::jwltXb8edRySqmyk',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'generated::euDRE4o5ovAWGfr2' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'api/stats/shift',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'api',
          1 => 'ipcheck',
        ),
        'uses' => 'VanguardLTE\\Http\\Controllers\\Api\\GameStats\\GameStatsController@shift',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Api\\GameStats\\GameStatsController@shift',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Api',
        'prefix' => 'api',
        'where' => 
        array (
        ),
        'as' => 'generated::euDRE4o5ovAWGfr2',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'generated::PkGO7Fg2hsHMr4Kx' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
      ),
      'uri' => 'api/shifts/start',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'api',
          1 => 'ipcheck',
        ),
        'uses' => 'VanguardLTE\\Http\\Controllers\\Api\\OpenShiftController@start_shift',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Api\\OpenShiftController@start_shift',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Api',
        'prefix' => 'api',
        'where' => 
        array (
        ),
        'as' => 'generated::PkGO7Fg2hsHMr4Kx',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'generated::7C4iS5F0prpRcv4a' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'api/shifts/info',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'api',
          1 => 'ipcheck',
        ),
        'uses' => 'VanguardLTE\\Http\\Controllers\\Api\\OpenShiftController@info',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Api\\OpenShiftController@info',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Api',
        'prefix' => 'api',
        'where' => 
        array (
        ),
        'as' => 'generated::7C4iS5F0prpRcv4a',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'generated::KyEZ7lOXgValUAIh' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'api/happyhours',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'api',
          1 => 'ipcheck',
        ),
        'uses' => 'VanguardLTE\\Http\\Controllers\\Api\\HappyHourController@index',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Api\\HappyHourController@index',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Api',
        'prefix' => 'api',
        'where' => 
        array (
        ),
        'as' => 'generated::KyEZ7lOXgValUAIh',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'generated::mfKAlUSha7xg4qxE' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'api/paysystems',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'api',
          1 => 'ipcheck',
        ),
        'uses' => 'VanguardLTE\\Http\\Controllers\\Api\\GeneralController@paysystems',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Api\\GeneralController@paysystems',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Api',
        'prefix' => 'api',
        'where' => 
        array (
        ),
        'as' => 'generated::mfKAlUSha7xg4qxE',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'generated::9JbskfmqQfct3kgJ' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'api/player/getlic',
      'action' => 
      array (
        'middleware' => 'api',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Api\\Player\\LicenseController@AskForLicense',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Api\\Player\\LicenseController@AskForLicense',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Api',
        'prefix' => 'api',
        'where' => 
        array (
        ),
        'as' => 'generated::9JbskfmqQfct3kgJ',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'generated::cpK8cJgF2G7ScGgL' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'api/player/licsaved',
      'action' => 
      array (
        'middleware' => 'api',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Api\\Player\\LicenseController@LicSaved',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Api\\Player\\LicenseController@LicSaved',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Api',
        'prefix' => 'api',
        'where' => 
        array (
        ),
        'as' => 'generated::cpK8cJgF2G7ScGgL',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'generated::T44CiCa3XDtBErem' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'api/player/isonline',
      'action' => 
      array (
        'middleware' => 'api',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Api\\Player\\StatusController@checkUsecheckUserOnline',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Api\\Player\\StatusController@checkUsecheckUserOnline',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Api',
        'prefix' => 'api',
        'where' => 
        array (
        ),
        'as' => 'generated::T44CiCa3XDtBErem',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'generated::79oirZb5H7iDK0TG' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'api/player/check-user-login',
      'action' => 
      array (
        'middleware' => 'api',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Api\\Player\\StatusController@checkUserLogin',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Api\\Player\\StatusController@checkUserLogin',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Api',
        'prefix' => 'api',
        'where' => 
        array (
        ),
        'as' => 'generated::79oirZb5H7iDK0TG',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'generated::K8LoZcvcjAXgkLLe' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'api/player/testlogin',
      'action' => 
      array (
        'middleware' => 'api',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Api\\Player\\StatusController@checkUserLoginSyn',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Api\\Player\\StatusController@checkUserLoginSyn',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Api',
        'prefix' => 'api',
        'where' => 
        array (
        ),
        'as' => 'generated::K8LoZcvcjAXgkLLe',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'generated::ofsNnvpB5MMfQ1M8' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'api/player/apilogin/{token}',
      'action' => 
      array (
        'middleware' => 'api',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Api\\Player\\StatusController@apiLogin',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Api\\Player\\StatusController@apiLogin',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Api',
        'prefix' => 'api',
        'where' => 
        array (
        ),
        'as' => 'generated::ofsNnvpB5MMfQ1M8',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'generated::sqcQDVVvUoVuPhKa' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'api/player/read',
      'action' => 
      array (
        'middleware' => 'api',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Api\\Player\\StatusController@getUserData',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Api\\Player\\StatusController@getUserData',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Api',
        'prefix' => 'api',
        'where' => 
        array (
        ),
        'as' => 'generated::sqcQDVVvUoVuPhKa',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'generated::prXwSXJB6ygBdaqH' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'api/player/score',
      'action' => 
      array (
        'middleware' => 'api',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Api\\Player\\StatusController@checkUserScore',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Api\\Player\\StatusController@checkUserScore',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Api',
        'prefix' => 'api',
        'where' => 
        array (
        ),
        'as' => 'generated::prXwSXJB6ygBdaqH',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'generated::fu7ZIEthLAuLBAHw' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'api/player/withdrawticket',
      'action' => 
      array (
        'middleware' => 'api',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Api\\Player\\TicketController@payoutTicket',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Api\\Player\\TicketController@payoutTicket',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Api',
        'prefix' => 'api',
        'where' => 
        array (
        ),
        'as' => 'generated::fu7ZIEthLAuLBAHw',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'generated::TV1sv10pjHRd5ZBJ' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'api/credits',
      'action' => 
      array (
        'middleware' => 'api',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Api\\Player\\CreditController@index',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Api\\Player\\CreditController@index',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Api',
        'prefix' => 'api',
        'where' => 
        array (
        ),
        'as' => 'generated::TV1sv10pjHRd5ZBJ',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'generated::YbZMXiFGS9qEbOAK' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'api/credits/depositusb',
      'action' => 
      array (
        'middleware' => 'api',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Api\\Player\\CreditController@creditsDeposit',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Api\\Player\\CreditController@creditsDeposit',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Api',
        'prefix' => 'api',
        'where' => 
        array (
        ),
        'as' => 'generated::YbZMXiFGS9qEbOAK',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'generated::R9URMWVQsWKHTKF2' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'api/credits/pending-depositusb',
      'action' => 
      array (
        'middleware' => 'api',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Api\\Player\\CreditController@pendingCashIN',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Api\\Player\\CreditController@pendingCashIN',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Api',
        'prefix' => 'api',
        'where' => 
        array (
        ),
        'as' => 'generated::R9URMWVQsWKHTKF2',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'generated::HKjFNybawdrAqk7R' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'api/cashier/readbalance',
      'action' => 
      array (
        'middleware' => 'api',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Api\\Player\\StatusController@loadShopBalance',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Api\\Player\\StatusController@loadShopBalance',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Api',
        'prefix' => 'api',
        'where' => 
        array (
        ),
        'as' => 'generated::HKjFNybawdrAqk7R',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'generated::TAn79ip3NUnEv0NH' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'api/cashier/readinamounts',
      'action' => 
      array (
        'middleware' => 'api',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Api\\Player\\StatusController@loadInAmounts',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Api\\Player\\StatusController@loadInAmounts',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Api',
        'prefix' => 'api',
        'where' => 
        array (
        ),
        'as' => 'generated::TAn79ip3NUnEv0NH',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'generated::3MKjeDRdIsklDOru' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'api/ipoint',
      'action' => 
      array (
        'middleware' => 'api',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Api\\IpointAPI\\NV10IpointController@setTester',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Api\\IpointAPI\\NV10IpointController@setTester',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Api',
        'prefix' => 'api',
        'where' => 
        array (
        ),
        'as' => 'generated::3MKjeDRdIsklDOru',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'generated::DrKfgqQhQB4Zqi1D' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
        2 => 'POST',
        3 => 'PUT',
        4 => 'PATCH',
        5 => 'DELETE',
        6 => 'OPTIONS',
      ),
      'uri' => 'api/vlt',
      'action' => 
      array (
        'middleware' => 'api',
        'uses' => 'C:32:"Opis\\Closure\\SerializableClosure":258:{@th8U5lOUYWlSGTvQOYLjy+TE91G2O+S2wFUvRt2Ak+A=.a:5:{s:3:"use";a:0:{}s:8:"function";s:41:"function () {
    return \'Hello World\';
}";s:5:"scope";s:42:"VanguardLTE\\Providers\\RouteServiceProvider";s:4:"this";N;s:4:"self";s:32:"0000000030dce094000000006f34cd6e";}}',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Api',
        'prefix' => 'api',
        'where' => 
        array (
        ),
        'as' => 'generated::DrKfgqQhQB4Zqi1D',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'generated::ZNjmQhO3VMg8kGrG' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'api/V2',
      'action' => 
      array (
        'middleware' => 'api',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Api\\V2\\AtmController@index',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Api\\V2\\AtmController@index',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Api',
        'prefix' => 'api',
        'where' => 
        array (
        ),
        'as' => 'generated::ZNjmQhO3VMg8kGrG',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'frontend.auth.login' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'login',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'siteisclosed',
          2 => 'checker',
        ),
        'as' => 'frontend.auth.login',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\Auth\\AuthController@getLogin',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\Auth\\AuthController@getLogin',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend',
        'prefix' => NULL,
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'generated::UTn5RfdTxYqncEB7' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'launcher/{game}/{token}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'siteisclosed',
          2 => 'checker',
        ),
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\Auth\\AuthController@apiLogin',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\Auth\\AuthController@apiLogin',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend',
        'prefix' => NULL,
        'where' => 
        array (
        ),
        'as' => 'generated::UTn5RfdTxYqncEB7',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'generated::BJhrQVhw4eEZ8JqN' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'refresh-csrf',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'siteisclosed',
          2 => 'checker',
        ),
        'uses' => 'C:32:"Opis\\Closure\\SerializableClosure":264:{@cD0x0swlTmVFaNCRp1v4bq0zbeRQGhkYu5gCwDsUJv4=.a:5:{s:3:"use";a:0:{}s:8:"function";s:47:"function(){
        return \\csrf_token();
    }";s:5:"scope";s:42:"VanguardLTE\\Providers\\RouteServiceProvider";s:4:"this";N;s:4:"self";s:32:"0000000030dce0ab000000006f34cd6e";}}',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend',
        'prefix' => NULL,
        'where' => 
        array (
        ),
        'as' => 'generated::BJhrQVhw4eEZ8JqN',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'frontend.auth.login.post' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'login',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'siteisclosed',
          2 => 'checker',
        ),
        'as' => 'frontend.auth.login.post',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\Auth\\AuthController@postLogin',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\Auth\\AuthController@postLogin',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend',
        'prefix' => NULL,
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'frontend.auth.logout' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'logout',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'siteisclosed',
          2 => 'checker',
        ),
        'as' => 'frontend.auth.logout',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\Auth\\AuthController@getLogout',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\Auth\\AuthController@getLogout',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend',
        'prefix' => NULL,
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'frontend.user.specauth' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'specauth/{user}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'siteisclosed',
          2 => 'checker',
        ),
        'as' => 'frontend.user.specauth',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\Auth\\AuthController@specauth',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\Auth\\AuthController@specauth',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend',
        'prefix' => NULL,
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'frontend.register.confirm-email' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'register/confirmation/{token}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'siteisclosed',
          2 => 'checker',
        ),
        'as' => 'frontend.register.confirm-email',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\Auth\\AuthController@confirmEmail',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\Auth\\AuthController@confirmEmail',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend',
        'prefix' => NULL,
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'frontend.new_license' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'new-license',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'siteisclosed',
          2 => 'checker',
        ),
        'as' => 'frontend.new_license',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\PagesController@new_license',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\PagesController@new_license',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend',
        'prefix' => NULL,
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'frontend.new_license.post' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'new-license',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'siteisclosed',
          2 => 'checker',
        ),
        'as' => 'frontend.new_license.post',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\PagesController@new_license_post',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\PagesController@new_license_post',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend',
        'prefix' => NULL,
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'frontend.page.error_license' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'license-error',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'siteisclosed',
          2 => 'checker',
        ),
        'as' => 'frontend.page.error_license',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\PagesController@error_license',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\PagesController@error_license',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend',
        'prefix' => NULL,
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'frontend.jpstv' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'jpstv/{id?}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'siteisclosed',
          2 => 'checker',
        ),
        'as' => 'frontend.jpstv',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\PagesController@jpstv',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\PagesController@jpstv',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend',
        'prefix' => NULL,
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'frontend.jpstv_json' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'jpstv.json',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'siteisclosed',
          2 => 'checker',
        ),
        'as' => 'frontend.jpstv_json',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\PagesController@jpstv_json',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\PagesController@jpstv_json',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend',
        'prefix' => NULL,
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'frontend.subsession' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'subsession',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'siteisclosed',
          2 => 'checker',
        ),
        'as' => 'frontend.subsession',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\GamesController@subsession',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\GamesController@subsession',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend',
        'prefix' => NULL,
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'frontend.profile' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'profile',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'siteisclosed',
          2 => 'checker',
        ),
        'as' => 'frontend.profile',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\ProfileController@index',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\ProfileController@index',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend',
        'prefix' => NULL,
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'frontend.profile.activity' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'profile/activity',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'siteisclosed',
          2 => 'checker',
        ),
        'as' => 'frontend.profile.activity',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\ProfileController@activity',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\ProfileController@activity',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend',
        'prefix' => NULL,
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'frontend.profile.update.details' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'profile/details/update',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'siteisclosed',
          2 => 'checker',
        ),
        'as' => 'frontend.profile.update.details',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\ProfileController@updateDetails',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\ProfileController@updateDetails',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend',
        'prefix' => NULL,
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'frontend.profile.update.password' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'profile/password/update',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'siteisclosed',
          2 => 'checker',
        ),
        'as' => 'frontend.profile.update.password',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\ProfileController@updatePassword',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\ProfileController@updatePassword',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend',
        'prefix' => NULL,
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'frontend.profile.update.avatar' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'profile/avatar/update',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'siteisclosed',
          2 => 'checker',
        ),
        'as' => 'frontend.profile.update.avatar',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\ProfileController@updateAvatar',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\ProfileController@updateAvatar',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend',
        'prefix' => NULL,
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'frontend.profile.update.avatar-external' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'profile/avatar/update/external',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'siteisclosed',
          2 => 'checker',
        ),
        'as' => 'frontend.profile.update.avatar-external',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\ProfileController@updateAvatarExternal',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\ProfileController@updateAvatarExternal',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend',
        'prefix' => NULL,
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'frontend.clear_phone' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'profile/clear_phone',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'siteisclosed',
          2 => 'checker',
        ),
        'as' => 'frontend.clear_phone',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\ProfileController@clear_phone',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\ProfileController@clear_phone',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend',
        'prefix' => NULL,
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'frontend.profile.contact' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'profile/contact',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'siteisclosed',
          2 => 'checker',
        ),
        'as' => 'frontend.profile.contact',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\ProfileController@contact_form',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\ProfileController@contact_form',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend',
        'prefix' => NULL,
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'frontend.profile.update.login-details' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
      ),
      'uri' => 'profile/login-details/update',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'siteisclosed',
          2 => 'checker',
        ),
        'as' => 'frontend.profile.update.login-details',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\ProfileController@updateLoginDetails',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\ProfileController@updateLoginDetails',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend',
        'prefix' => NULL,
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'frontend.profile.two-factor.enable' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'profile/two-factor/enable',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'siteisclosed',
          2 => 'checker',
        ),
        'as' => 'frontend.profile.two-factor.enable',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\ProfileController@enableTwoFactorAuth',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\ProfileController@enableTwoFactorAuth',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend',
        'prefix' => NULL,
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'frontend.profile.two-factor.disable' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'profile/two-factor/disable',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'siteisclosed',
          2 => 'checker',
        ),
        'as' => 'frontend.profile.two-factor.disable',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\ProfileController@disableTwoFactorAuth',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\ProfileController@disableTwoFactorAuth',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend',
        'prefix' => NULL,
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'frontend.profile.sessions' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'profile/sessions',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'siteisclosed',
          2 => 'checker',
        ),
        'as' => 'frontend.profile.sessions',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\ProfileController@sessions',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\ProfileController@sessions',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend',
        'prefix' => NULL,
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'frontend.profile.sessions.invalidate' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'profile/sessions/{session}/invalidate',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'siteisclosed',
          2 => 'checker',
        ),
        'as' => 'frontend.profile.sessions.invalidate',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\ProfileController@invalidateSession',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\ProfileController@invalidateSession',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend',
        'prefix' => NULL,
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'frontend.profile.refunds' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'profile/refunds',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'siteisclosed',
          2 => 'checker',
        ),
        'as' => 'frontend.profile.refunds',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\ProfileController@refunds',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\ProfileController@refunds',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend',
        'prefix' => NULL,
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'frontend.profile.ajax' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'profile/ajax',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'siteisclosed',
          2 => 'checker',
        ),
        'as' => 'frontend.profile.ajax',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\ProfileController@ajax',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\ProfileController@ajax',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend',
        'prefix' => NULL,
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'frontend.profile.message' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'profile/message',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'siteisclosed',
          2 => 'checker',
        ),
        'as' => 'frontend.profile.message',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\ProfileController@message',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\ProfileController@message',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend',
        'prefix' => NULL,
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'frontend.profile.pincode' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'profile/pincode',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'siteisclosed',
          2 => 'checker',
        ),
        'as' => 'frontend.profile.pincode',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\ProfileController@pincode',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\ProfileController@pincode',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend',
        'prefix' => NULL,
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'frontend.profile.daily_entry' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'profile/daily_entry',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'siteisclosed',
          2 => 'checker',
        ),
        'as' => 'frontend.profile.daily_entry',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\ProfileController@daily_entry',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\ProfileController@daily_entry',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend',
        'prefix' => NULL,
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'frontend.profile.phone' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'profile/phone',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'siteisclosed',
          2 => 'checker',
        ),
        'as' => 'frontend.profile.phone',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\ProfileController@phone',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\ProfileController@phone',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend',
        'prefix' => NULL,
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'frontend.profile.code' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'profile/code',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'siteisclosed',
          2 => 'checker',
        ),
        'as' => 'frontend.profile.code',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\ProfileController@code',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\ProfileController@code',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend',
        'prefix' => NULL,
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'frontend.profile.agree' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'profile/agree',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'siteisclosed',
          2 => 'checker',
        ),
        'as' => 'frontend.profile.agree',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\ProfileController@agree',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\ProfileController@agree',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend',
        'prefix' => NULL,
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'frontend.profile.reward' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'profile/reward',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'siteisclosed',
          2 => 'checker',
        ),
        'as' => 'frontend.profile.reward',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\ProfileController@reward',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\ProfileController@reward',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend',
        'prefix' => NULL,
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'frontend.profile.sms' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'profile/sms',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'siteisclosed',
          2 => 'checker',
        ),
        'as' => 'frontend.profile.sms',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\ProfileController@sms',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\ProfileController@sms',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend',
        'prefix' => NULL,
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'frontend.setlang' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'setlang/{lang}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'siteisclosed',
          2 => 'checker',
        ),
        'as' => 'frontend.setlang',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\ProfileController@setlang',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\ProfileController@setlang',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend',
        'prefix' => NULL,
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'generated::lKXml6SFEy6N4gFH' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => '/',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'siteisclosed',
          2 => 'checker',
        ),
        'uses' => 'C:32:"Opis\\Closure\\SerializableClosure":460:{@AtmiZn0heWKyjsA1o+v0Jh1tQrZR/AimzUi+zJKT6D0=.a:5:{s:3:"use";a:0:{}s:8:"function";s:242:"function() {
        echo \'<iframe id="frame"  style="position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;" src="/categories/pragmatic"></iframe>\';
    }";s:5:"scope";s:42:"VanguardLTE\\Providers\\RouteServiceProvider";s:4:"this";N;s:4:"self";s:32:"0000000030dce058000000006f34cd6e";}}',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend',
        'prefix' => NULL,
        'where' => 
        array (
        ),
        'as' => 'generated::lKXml6SFEy6N4gFH',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'frontend.faq' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'faq',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'siteisclosed',
          2 => 'checker',
        ),
        'as' => 'frontend.faq',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\GamesController@faq',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\GamesController@faq',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend',
        'prefix' => NULL,
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'frontend.bonuses' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'bonuses',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'siteisclosed',
          2 => 'checker',
        ),
        'as' => 'frontend.bonuses',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\GamesController@bonuses',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\GamesController@bonuses',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend',
        'prefix' => NULL,
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'frontend.bonus.conditions' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'bonus-conditions',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'siteisclosed',
          2 => 'checker',
        ),
        'as' => 'frontend.bonus.conditions',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\GamesController@bonus_conditions',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\GamesController@bonus_conditions',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend',
        'prefix' => NULL,
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'frontend.progress' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'progress',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'siteisclosed',
          2 => 'checker',
        ),
        'as' => 'frontend.progress',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\GamesController@progress',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\GamesController@progress',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend',
        'prefix' => NULL,
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'frontend.game.search' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'search',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'siteisclosed',
          2 => 'checker',
        ),
        'as' => 'frontend.game.search',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\GamesController@search',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\GamesController@search',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend',
        'prefix' => NULL,
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'frontend.search.json' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'search.json',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'siteisclosed',
          2 => 'checker',
        ),
        'as' => 'frontend.search.json',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\GamesController@search_json',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\GamesController@search_json',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend',
        'prefix' => NULL,
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'frontend.balance.post' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'balance',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'siteisclosed',
          2 => 'checker',
        ),
        'as' => 'frontend.balance.post',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\GamesController@balanceAdd',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\GamesController@balanceAdd',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend',
        'prefix' => NULL,
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'frontend.vltcash.userhash' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'vltcash/{userhash}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'siteisclosed',
          2 => 'checker',
        ),
        'as' => 'frontend.vltcash.userhash',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\ProfileController@vltcash',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\ProfileController@vltcash',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend',
        'prefix' => NULL,
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'frontend.game.list.category' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'categories/{category1}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'siteisclosed',
          2 => 'checker',
        ),
        'as' => 'frontend.game.list.category',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\GamesController@index',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\GamesController@index',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend',
        'prefix' => NULL,
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'frontend.game.list.category_level2' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'categories/{category1}/{category2}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'siteisclosed',
          2 => 'checker',
        ),
        'as' => 'frontend.game.list.category_level2',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\GamesController@index',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\GamesController@index',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend',
        'prefix' => NULL,
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'frontend.category.setpage' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'setpage.json',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'siteisclosed',
          2 => 'checker',
        ),
        'as' => 'frontend.category.setpage',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\GamesController@setpage',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\GamesController@setpage',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend',
        'prefix' => NULL,
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'frontend.game.go' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'game/{game}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'siteisclosed',
          2 => 'checker',
        ),
        'as' => 'frontend.game.go',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\GamesController@go',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\GamesController@go',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend',
        'prefix' => NULL,
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'frontend.game.server' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'game/{game}/server',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'siteisclosed',
          2 => 'checker',
        ),
        'as' => 'frontend.game.server',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\GamesController@server',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\GamesController@server',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend',
        'prefix' => NULL,
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'frontend.game_stat' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'game_stat',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'siteisclosed',
          2 => 'checker',
        ),
        'as' => 'frontend.game_stat',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\GamesController@game_stat',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\GamesController@game_stat',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend',
        'prefix' => NULL,
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'frontend.game.mercuryServer' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
        2 => 'POST',
        3 => 'PUT',
        4 => 'PATCH',
        5 => 'DELETE',
        6 => 'OPTIONS',
      ),
      'uri' => 'game/{category}/{game}/merkur/{command}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'siteisclosed',
          2 => 'checker',
        ),
        'as' => 'frontend.game.mercuryServer',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\GamesController@merkur',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\GamesController@merkur',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend',
        'prefix' => NULL,
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'frontend.tournaments' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'tournaments',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'siteisclosed',
          2 => 'checker',
        ),
        'as' => 'frontend.tournaments',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\TournamentsController@index',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\TournamentsController@index',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend',
        'prefix' => NULL,
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'frontend.tournaments.view' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'tournaments/{tournament}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'siteisclosed',
          2 => 'checker',
        ),
        'as' => 'frontend.tournaments.view',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\TournamentsController@view',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\TournamentsController@view',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend',
        'prefix' => NULL,
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'payment.interkassa.result' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'payment/interkassa/result',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'siteisclosed',
          2 => 'checker',
        ),
        'as' => 'payment.interkassa.result',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\Payment\\InterkassaController@index',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\Payment\\InterkassaController@index',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend',
        'prefix' => '/payment',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'payment.interkassa.success' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'payment/interkassa/success',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'siteisclosed',
          2 => 'checker',
        ),
        'as' => 'payment.interkassa.success',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\Payment\\InterkassaController@success',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\Payment\\InterkassaController@success',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend',
        'prefix' => '/payment',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'payment.interkassa.fail' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'payment/interkassa/fail',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'siteisclosed',
          2 => 'checker',
        ),
        'as' => 'payment.interkassa.fail',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\Payment\\InterkassaController@fail',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\Payment\\InterkassaController@fail',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend',
        'prefix' => '/payment',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'payment.interkassa.wait' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'payment/interkassa/wait',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'siteisclosed',
          2 => 'checker',
        ),
        'as' => 'payment.interkassa.wait',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\Payment\\InterkassaController@wait',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\Payment\\InterkassaController@wait',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend',
        'prefix' => '/payment',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'payment.coinbase.result' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'payment/coinbase/result',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'siteisclosed',
          2 => 'checker',
        ),
        'as' => 'payment.coinbase.result',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\Payment\\CoinbaseController@index',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\Payment\\CoinbaseController@index',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend',
        'prefix' => '/payment',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'payment.coinbase.success' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'payment/coinbase/success',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'siteisclosed',
          2 => 'checker',
        ),
        'as' => 'payment.coinbase.success',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\Payment\\CoinbaseController@success',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\Payment\\CoinbaseController@success',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend',
        'prefix' => '/payment',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'payment.coinbase.fail' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'payment/coinbase/fail',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'siteisclosed',
          2 => 'checker',
        ),
        'as' => 'payment.coinbase.fail',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\Payment\\CoinbaseController@fail',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\Payment\\CoinbaseController@fail',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend',
        'prefix' => '/payment',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'payment.btcpayserver.result' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'payment/btcpayserver/result',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'siteisclosed',
          2 => 'checker',
        ),
        'as' => 'payment.btcpayserver.result',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\Payment\\BtcPayServerController@index',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\Payment\\BtcPayServerController@index',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend',
        'prefix' => '/payment',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'payment.btcpayserver.redirect' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'payment/btcpayserver/redirect',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'siteisclosed',
          2 => 'checker',
        ),
        'as' => 'payment.btcpayserver.redirect',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\Payment\\BtcPayServerController@redirect',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\Payment\\BtcPayServerController@redirect',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend',
        'prefix' => '/payment',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'sms.callback' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'sms/callback',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'siteisclosed',
          2 => 'checker',
        ),
        'as' => 'sms.callback',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\SMSController@index',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend\\SMSController@index',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Frontend',
        'prefix' => NULL,
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.auth.login' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/login',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'checker',
        ),
        'as' => 'backend.auth.login',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\Auth\\AuthController@getLogin',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\Auth\\AuthController@getLogin',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.auth.login.post' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'backend/login',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'checker',
        ),
        'as' => 'backend.auth.login.post',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\Auth\\AuthController@postLogin',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\Auth\\AuthController@postLogin',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.auth.logout' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/logout',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'as' => 'backend.auth.logout',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\Auth\\AuthController@getLogout',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\Auth\\AuthController@getLogout',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    '2fa' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'backend/2fa',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => '2fa',
        ),
        'uses' => 'C:32:"Opis\\Closure\\SerializableClosure":290:{@NaJbWakNLlEil5D03d7LZxO9Bmj7qDY6T9BsGATA+Jo=.a:5:{s:3:"use";a:0:{}s:8:"function";s:73:"function () {
            return \\redirect(\\URL()->previous());
        }";s:5:"scope";s:42:"VanguardLTE\\Providers\\RouteServiceProvider";s:4:"this";N;s:4:"self";s:32:"0000000030dce062000000006f34cd6e";}}',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
        'as' => '2fa',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'generated::le9r6nIT3veErUls' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/terminal',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\TerminalController@index',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\TerminalController@index',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
        'as' => 'generated::le9r6nIT3veErUls',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'generated::DM05v5MrvQkUievL' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'backend/terminal/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\TerminalController@craeteTerminal',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\TerminalController@craeteTerminal',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
        'as' => 'generated::DM05v5MrvQkUievL',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'generated::ue1cjBd48S93eDb5' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/terminal/details/{id}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\TerminalController@detailsTerminal',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\TerminalController@detailsTerminal',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
        'as' => 'generated::ue1cjBd48S93eDb5',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'generated::qeEbloe5gUcpjSAd' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'backend/terminal/details/{id}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\TerminalController@terminalUpdate',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\TerminalController@terminalUpdate',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
        'as' => 'generated::qeEbloe5gUcpjSAd',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'generated::YAcyoS0WWOu5VGQr' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'backend/terminal/balance/add',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\TerminalController@balanceAdd',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\TerminalController@balanceAdd',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
        'as' => 'generated::YAcyoS0WWOu5VGQr',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'generated::muuWkZIln4Uj6BX9' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'backend/terminal/balance/out',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\TerminalController@balanceOut',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\TerminalController@balanceOut',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
        'as' => 'generated::muuWkZIln4Uj6BX9',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'generated::JqkqSuDrUaPzF4er' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'backend/terminal/ajax/pay-tickets',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\TerminalController@ajaxPayTickets',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\TerminalController@ajaxPayTickets',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
        'as' => 'generated::JqkqSuDrUaPzF4er',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'generated::duzdZqHtZPCIIbJX' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/atm',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\AtmController@index',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\AtmController@index',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
        'as' => 'generated::duzdZqHtZPCIIbJX',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'generated::RkCqfsW28da11Clg' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/atm/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\AtmController@createNewAtm',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\AtmController@createNewAtm',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
        'as' => 'generated::RkCqfsW28da11Clg',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'generated::grRDuZVd7XNuzQP8' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/atm/reset',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\AtmController@resetAtm',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\AtmController@resetAtm',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
        'as' => 'generated::grRDuZVd7XNuzQP8',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'generated::pcOcCt7N6HAxlqbe' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/atm/status/{status}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\AtmController@statusUpdate',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\AtmController@statusUpdate',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
        'as' => 'generated::pcOcCt7N6HAxlqbe',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'generated::8XHYYl5CXxoXwdrj' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/atm/newkey/{api_id}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\AtmController@newApiKey',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\AtmController@newApiKey',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
        'as' => 'generated::8XHYYl5CXxoXwdrj',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'generated::Isfvw0OF32QBCBRT' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/atm/delete/{id}/{api_id}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\AtmController@deleteATM',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\AtmController@deleteATM',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
        'as' => 'generated::Isfvw0OF32QBCBRT',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'netpos' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/netpos',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'as' => 'netpos',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\DashboardController@shopIndex',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\DashboardController@shopIndex',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.search' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/search',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'as' => 'backend.search',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\DashboardController@search',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\DashboardController@search',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.dashboard' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'as' => 'backend.dashboard',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\DashboardController@index',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\DashboardController@index',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.game_stat' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/game_stat',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'permission:stats.game',
        ),
        'as' => 'backend.game_stat',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\DashboardController@game_stat',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\DashboardController@game_stat',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.shift_stat' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/shift_stat',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'permission:stats.shift',
        ),
        'as' => 'backend.shift_stat',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\DashboardController@shift_stat',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\DashboardController@shift_stat',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.ticket_stat' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/ticket_stat',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'as' => 'backend.ticket_stat',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\DashboardController@ticket_stat',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\DashboardController@ticket_stat',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.live_stat' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/live',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'permission:stats.live',
        ),
        'as' => 'backend.live_stat',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\DashboardController@live_stat',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\DashboardController@live_stat',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.transactions' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/transactions',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'permission:stats.pay',
        ),
        'as' => 'backend.transactions',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\DashboardController@transactions',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\DashboardController@transactions',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.start_shift' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/start_shift',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'as' => 'backend.start_shift',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\DashboardController@start_shift',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\DashboardController@start_shift',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.start_shift.print' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/start_shift/print',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'as' => 'backend.start_shift.print',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\DashboardController@start_shift_print',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\DashboardController@start_shift_print',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.invites' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/invite',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'permission:invite.manage',
          4 => 'shopzero',
        ),
        'as' => 'backend.invites',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\DashboardController@invites',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\DashboardController@invites',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.invite.status' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/invite/status/{status}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'permission:invite.edit',
          4 => 'shopzero',
        ),
        'as' => 'backend.invite.status',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\DashboardController@invite_status',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\DashboardController@invite_status',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.invites.update' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'backend/invite',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'permission:invite.edit',
          4 => 'shopzero',
        ),
        'as' => 'backend.invites.update',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\DashboardController@invite_update',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\DashboardController@invite_update',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.wheelfortune' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/wheelfortune',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'permission:wheelfortune.manage',
          4 => 'shopzero',
        ),
        'as' => 'backend.wheelfortune',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\DashboardController@wheelfortune',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\DashboardController@wheelfortune',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.wheelfortune.status' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/wheelfortune/status/{status}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'permission:wheelfortune.manage',
          4 => 'shopzero',
        ),
        'as' => 'backend.wheelfortune.status',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\DashboardController@wheelfortune_status',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\DashboardController@wheelfortune_status',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.wheelfortune.update' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'backend/wheelfortune',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'permission:wheelfortune.manage',
          4 => 'shopzero',
        ),
        'as' => 'backend.wheelfortune.update',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\DashboardController@wheelfortune_update',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\DashboardController@wheelfortune_update',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.banks' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/banks',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'shopzero',
          4 => 'only_for_admin',
        ),
        'as' => 'backend.banks',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\DashboardController@banks',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\DashboardController@banks',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.banks.update' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'backend/banks',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'only_for_admin',
        ),
        'as' => 'backend.banks.update',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\DashboardController@banks_update',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\DashboardController@banks_update',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.banks.update.do' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'backend/banks/update',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'only_for_admin',
        ),
        'as' => 'backend.banks.update.do',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\DashboardController@do_banks_update',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\DashboardController@do_banks_update',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.profile' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/profile',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'as' => 'backend.profile',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ProfileController@index',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ProfileController@index',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.balance' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/balance',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'as' => 'backend.balance',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ProfileController@balance',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ProfileController@balance',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.profile.activity' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/profile/activity',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'as' => 'backend.profile.activity',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ProfileController@activity',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ProfileController@activity',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.profile.update.details' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
      ),
      'uri' => 'backend/profile/details/update',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'as' => 'backend.profile.update.details',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ProfileController@updateDetails',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ProfileController@updateDetails',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.profile.update.avatar' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'backend/profile/avatar/update',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'as' => 'backend.profile.update.avatar',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ProfileController@updateAvatar',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ProfileController@updateAvatar',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.profile.update.avatar-external' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'backend/profile/avatar/update/external',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'as' => 'backend.profile.update.avatar-external',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ProfileController@updateAvatarExternal',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ProfileController@updateAvatarExternal',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.profile.update.login-details' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
      ),
      'uri' => 'backend/profile/login-details/update',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'as' => 'backend.profile.update.login-details',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ProfileController@updateLoginDetails',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ProfileController@updateLoginDetails',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.profile.two-factor.enable' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'backend/profile/two-factor/enable',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'as' => 'backend.profile.two-factor.enable',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ProfileController@enableTwoFactorAuth',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ProfileController@enableTwoFactorAuth',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.profile.two-factor.disable' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'backend/profile/two-factor/disable',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'as' => 'backend.profile.two-factor.disable',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ProfileController@disableTwoFactorAuth',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ProfileController@disableTwoFactorAuth',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.profile.sessions' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/profile/sessions',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'as' => 'backend.profile.sessions',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ProfileController@sessions',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ProfileController@sessions',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.profile.sessions.invalidate' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'backend/profile/sessions/{session}/invalidate',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'as' => 'backend.profile.sessions.invalidate',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ProfileController@invalidateSession',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ProfileController@invalidateSession',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.profile.setshop' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'POST',
        2 => 'HEAD',
      ),
      'uri' => 'backend/profile/setshop',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'as' => 'backend.profile.setshop',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ProfileController@setshop',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ProfileController@setshop',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.user.list' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/user',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'permission:users.manage',
        ),
        'as' => 'backend.user.list',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\UsersController@index',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\UsersController@index',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.cashier' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/cashier',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'as' => 'backend.cashier',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\UsersController@cashier',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\UsersController@cashier',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.user.tree' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/tree',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'permission:users.tree',
        ),
        'as' => 'backend.user.tree',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\UsersController@tree',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\UsersController@tree',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.user.balance.get' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/user/balances',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\UsersController@get_balance',
        'as' => 'backend.user.balance.get',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\UsersController@get_balance',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.user.balance.update' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'backend/profile/balance/update',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\UsersController@updateBalance',
        'as' => 'backend.user.balance.update',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\UsersController@updateBalance',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.user.limit.update' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'backend/profile/limit/update',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\UsersController@updateLimit',
        'as' => 'backend.user.limit.update',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\UsersController@updateLimit',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.user.create' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/user/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'permission:users.add',
        ),
        'as' => 'backend.user.create',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\UsersController@create',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\UsersController@create',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.user.store' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'backend/user/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'permission:users.add',
        ),
        'as' => 'backend.user.store',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\UsersController@store',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\UsersController@store',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.user.stat' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/user/{user}/stat',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'as' => 'backend.user.stat',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\UsersController@statistics',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\UsersController@statistics',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.user.specauth' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/user/{user}/specauth',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'as' => 'backend.user.specauth',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\UsersController@specauth',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\UsersController@specauth',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.user.back_login' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/user/back_login',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'as' => 'backend.user.back_login',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\UsersController@back_login',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\UsersController@back_login',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.profile.send_phone_code' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/user/send_phone_code',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'as' => 'backend.profile.send_phone_code',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\UsersController@send_phone_code',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\UsersController@send_phone_code',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.user.massadd' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'backend/user/mass',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'permission:users.add',
        ),
        'as' => 'backend.user.massadd',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\UsersController@massadd',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\UsersController@massadd',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.user.show' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/user/{user}/show',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'as' => 'backend.user.show',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\UsersController@view',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\UsersController@view',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.user.edit' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/user/{user}/profile',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'permission:users.edit',
        ),
        'as' => 'backend.user.edit',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\UsersController@edit',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\UsersController@edit',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.user.update.details' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
      ),
      'uri' => 'backend/user/{user}/update/details',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'permission:users.edit',
        ),
        'as' => 'backend.user.update.details',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\UsersController@updateDetails',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\UsersController@updateDetails',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.user.update.login-details' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
      ),
      'uri' => 'backend/user/{user}/update/login-details',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'permission:users.edit',
        ),
        'as' => 'backend.user.update.login-details',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\UsersController@updateLoginDetails',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\UsersController@updateLoginDetails',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.user.delete' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'backend/user/{user}/delete',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'permission:users.delete',
        ),
        'as' => 'backend.user.delete',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\UsersController@delete',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\UsersController@delete',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.user.hard_delete' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'backend/user/{user}/hard_delete',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'permission:users.delete',
        ),
        'as' => 'backend.user.hard_delete',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\UsersController@hard_delete',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\UsersController@hard_delete',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.user.update.avatar' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'backend/user/{user}/update/avatar',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'as' => 'backend.user.update.avatar',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\UsersController@updateAvatar',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\UsersController@updateAvatar',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.user.update.avatar.external' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'backend/user/{user}/update/avatar/external',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'as' => 'backend.user.update.avatar.external',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\UsersController@updateAvatarExternal',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\UsersController@updateAvatarExternal',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.user.sessions' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/user/{user}/sessions',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'as' => 'backend.user.sessions',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\UsersController@sessions',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\UsersController@sessions',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.user.sessions.invalidate' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'backend/user/{user}/sessions/{session}/invalidate',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'as' => 'backend.user.sessions.invalidate',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\UsersController@invalidateSession',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\UsersController@invalidateSession',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.user.two-factor.enable' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'backend/user/{user}/two-factor/enable',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'as' => 'backend.user.two-factor.enable',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\UsersController@enableTwoFactorAuth',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\UsersController@enableTwoFactorAuth',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.user.two-factor.disable' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'backend/user/{user}/two-factor/disable',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'as' => 'backend.user.two-factor.disable',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\UsersController@disableTwoFactorAuth',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\UsersController@disableTwoFactorAuth',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.user.action' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'backend/user/action/{action}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'as' => 'backend.user.action',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\UsersController@action',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\UsersController@action',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.game.list' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/game',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'permission:games.manage',
        ),
        'as' => 'backend.game.list',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\GamesController@index',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\GamesController@index',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.game.list.json' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/games.json',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'as' => 'backend.game.list.json',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\GamesController@index_json',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\GamesController@index_json',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.game.create' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/game/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'as' => 'backend.game.create',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\GamesController@create',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\GamesController@create',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.game.store' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'backend/game/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'as' => 'backend.game.store',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\GamesController@store',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\GamesController@store',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.game.show' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/game/{game}/show',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'as' => 'backend.game.show',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\GamesController@view',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\GamesController@view',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.game.go' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/game/{game}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'as' => 'backend.game.go',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\GamesController@go',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\GamesController@go',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.game.server' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'backend/game/{game}/server',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'as' => 'backend.game.server',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\GamesController@server',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\GamesController@server',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.game.edit' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/game/{game}/edit',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'as' => 'backend.game.edit',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\GamesController@edit',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\GamesController@edit',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.game.update' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'backend/game/{game}/update',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'as' => 'backend.game.update',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\GamesController@update',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\GamesController@update',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.game.delete' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'backend/game/{game}/delete',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'as' => 'backend.game.delete',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\GamesController@delete',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\GamesController@delete',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.game.categories' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'backend/game/categories',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'as' => 'backend.game.categories',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\GamesController@categories',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\GamesController@categories',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.game.mass' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'backend/game/update/mass',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'as' => 'backend.game.mass',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\GamesController@mass',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\GamesController@mass',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.game.view' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'backend/game/update/view',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'as' => 'backend.game.view',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\GamesController@views',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\GamesController@views',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.game.clear' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
      ),
      'uri' => 'backend/game/clear',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'as' => 'backend.game.clear',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\GamesController@clear_games',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\GamesController@clear_games',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.category.list' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/category',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'only_for_admin',
        ),
        'as' => 'backend.category.list',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\CategoriesController@index',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\CategoriesController@index',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.category.create' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/category/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'only_for_admin',
        ),
        'as' => 'backend.category.create',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\CategoriesController@create',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\CategoriesController@create',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.category.store' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'backend/category/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'only_for_admin',
        ),
        'as' => 'backend.category.store',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\CategoriesController@store',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\CategoriesController@store',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.category.edit' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/category/{category}/edit',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'only_for_admin',
        ),
        'as' => 'backend.category.edit',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\CategoriesController@edit',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\CategoriesController@edit',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.category.update' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'backend/category/{category}/update',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'only_for_admin',
        ),
        'as' => 'backend.category.update',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\CategoriesController@update',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\CategoriesController@update',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.category.delete' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'backend/category/{category}/delete',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'only_for_admin',
        ),
        'as' => 'backend.category.delete',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\CategoriesController@delete',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\CategoriesController@delete',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.shop.list' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/shops',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'permission:shops.manage',
        ),
        'as' => 'backend.shop.list',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ShopsController@index',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ShopsController@index',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.shop.create' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/shops/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'permission:shops.add',
        ),
        'as' => 'backend.shop.create',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ShopsController@create',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ShopsController@create',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.shop.store' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'backend/shops/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'permission:shops.add',
        ),
        'as' => 'backend.shop.store',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ShopsController@store',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ShopsController@store',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.shop.admin_create' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/shops/admin/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'permission:shops.manage',
        ),
        'as' => 'backend.shop.admin_create',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ShopsController@admin_create',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ShopsController@admin_create',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.shop.admin_store' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'backend/shops/admin/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'permission:shops.manage',
        ),
        'as' => 'backend.shop.admin_store',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ShopsController@admin_store',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ShopsController@admin_store',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.shop.get_demo' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/shops/get_demo',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'permission:shops.free_demo',
        ),
        'as' => 'backend.shop.get_demo',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ShopsController@get_demo',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ShopsController@get_demo',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.shop.fast_shop' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/shops/fast_shop',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'permission:shops.manage',
        ),
        'as' => 'backend.shop.fast_shop',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ShopsController@fast_shop',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ShopsController@fast_shop',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.shop.edit' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/shops/{shop}/edit',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'permission:shops.manage',
        ),
        'as' => 'backend.shop.edit',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ShopsController@edit',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ShopsController@edit',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.shop.update' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'backend/shops/{shop}/update',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'permission:shops.manage',
        ),
        'as' => 'backend.shop.update',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ShopsController@update',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ShopsController@update',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.shop.balance' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'backend/shops/balance',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'permission:shops.manage',
        ),
        'as' => 'backend.shop.balance',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ShopsController@balance',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ShopsController@balance',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.shop.delete' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'backend/shops/{shop}/delete',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'permission:shops.delete',
        ),
        'as' => 'backend.shop.delete',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ShopsController@delete',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ShopsController@delete',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.shop.hard_delete' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'backend/shops/{shop}/hard_delete',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'permission:shops.hard_delete',
        ),
        'as' => 'backend.shop.hard_delete',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ShopsController@hard_delete',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ShopsController@hard_delete',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.shop.action' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'backend/shops/{shop}/action/{action}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'permission:shops.manage',
        ),
        'as' => 'backend.shop.action',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ShopsController@action',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ShopsController@action',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.pincode.list' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/pincodes',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'permission:pincodes.manage',
        ),
        'as' => 'backend.pincode.list',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\PincodeController@index',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\PincodeController@index',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.pincode.create' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/pincodes/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'permission:pincodes.add',
        ),
        'as' => 'backend.pincode.create',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\PincodeController@create',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\PincodeController@create',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.pincode.store' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'backend/pincodes/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'permission:pincodes.add',
        ),
        'as' => 'backend.pincode.store',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\PincodeController@store',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\PincodeController@store',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.pincode.massadd' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'backend/pincodes/mass/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'permission:pincodes.add',
        ),
        'as' => 'backend.pincode.massadd',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\PincodeController@massadd',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\PincodeController@massadd',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.pincode.edit' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/pincodes/{pincode}/edit',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'permission:pincodes.edit',
        ),
        'as' => 'backend.pincode.edit',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\PincodeController@edit',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\PincodeController@edit',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.pincode.update' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'backend/pincodes/{pincode}/update',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'permission:pincodes.edit',
        ),
        'as' => 'backend.pincode.update',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\PincodeController@update',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\PincodeController@update',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.pincode.balance' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'backend/pincodes/balance',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'as' => 'backend.pincode.balance',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\PincodeController@balance',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\PincodeController@balance',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.pincode.delete' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'backend/pincodes/{pincode}/delete',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'permission:pincodes.delete',
        ),
        'as' => 'backend.pincode.delete',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\PincodeController@delete',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\PincodeController@delete',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.credit.list' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/credits',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'as' => 'backend.credit.list',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\CreditController@index',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\CreditController@index',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.credit.create' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/credits/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'as' => 'backend.credit.create',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\CreditController@create',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\CreditController@create',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.credit.store' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'backend/credits/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'as' => 'backend.credit.store',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\CreditController@store',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\CreditController@store',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.credit.edit' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/credits/{credit}/edit',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'as' => 'backend.credit.edit',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\CreditController@edit',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\CreditController@edit',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.credit.update' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'backend/credits/{credit}/update',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'as' => 'backend.credit.update',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\CreditController@update',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\CreditController@update',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.credit.delete' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'backend/credits/{credit}/delete',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'as' => 'backend.credit.delete',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\CreditController@delete',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\CreditController@delete',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.credit.buy' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/credits/{credit}/buy',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'as' => 'backend.credit.buy',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\CreditController@buy',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\CreditController@buy',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.credit.payment' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/credits/{credit}/buy/{system}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'as' => 'backend.credit.payment',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\CreditController@payment',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\CreditController@payment',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.happyhour.list' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/happyhours',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'permission:happyhours.manage',
        ),
        'as' => 'backend.happyhour.list',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\HappyHourController@index',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\HappyHourController@index',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.happyhour.create' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/happyhours/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'permission:happyhours.add',
        ),
        'as' => 'backend.happyhour.create',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\HappyHourController@create',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\HappyHourController@create',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.happyhour.store' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'backend/happyhours/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'permission:happyhours.add',
        ),
        'as' => 'backend.happyhour.store',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\HappyHourController@store',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\HappyHourController@store',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.happyhour.edit' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/happyhours/{happyhour}/edit',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'as' => 'backend.happyhour.edit',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\HappyHourController@edit',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\HappyHourController@edit',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.happyhour.update' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'backend/happyhours/{happyhour}/update',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'as' => 'backend.happyhour.update',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\HappyHourController@update',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\HappyHourController@update',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.happyhour.delete' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'backend/happyhours/{happyhour}/delete',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'permission:happyhours.delete',
        ),
        'as' => 'backend.happyhour.delete',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\HappyHourController@delete',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\HappyHourController@delete',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.happyhour.status' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/happyhours/status/{status}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'as' => 'backend.happyhour.status',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\HappyHourController@status',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\HappyHourController@status',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.welcome_bonus.list' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/welcome_bonuses',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'permission:welcome_bonuses.manage',
        ),
        'as' => 'backend.welcome_bonus.list',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\WelcomeBonusController@index',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\WelcomeBonusController@index',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.welcome_bonus.edit' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/welcome_bonuses/{welcome_bonus}/edit',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'permission:welcome_bonuses.edit',
        ),
        'as' => 'backend.welcome_bonus.edit',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\WelcomeBonusController@edit',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\WelcomeBonusController@edit',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.welcome_bonus.update' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'backend/welcome_bonuses/{welcome_bonus}/update',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'permission:welcome_bonuses.edit',
        ),
        'as' => 'backend.welcome_bonus.update',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\WelcomeBonusController@update',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\WelcomeBonusController@update',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.welcome_bonus.status' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/welcome_bonuses/status/{status}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'as' => 'backend.welcome_bonus.status',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\WelcomeBonusController@status',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\WelcomeBonusController@status',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.info.list' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/info',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'only_for_admin',
        ),
        'as' => 'backend.info.list',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\InfoController@index',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\InfoController@index',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.info.create' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/info/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'only_for_admin',
        ),
        'as' => 'backend.info.create',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\InfoController@create',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\InfoController@create',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.info.store' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'backend/info/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'only_for_admin',
        ),
        'as' => 'backend.info.store',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\InfoController@store',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\InfoController@store',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.info.edit' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/info/{info}/edit',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'only_for_admin',
        ),
        'as' => 'backend.info.edit',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\InfoController@edit',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\InfoController@edit',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.info.update' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'backend/info/{info}/update',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'only_for_admin',
        ),
        'as' => 'backend.info.update',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\InfoController@update',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\InfoController@update',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.info.balance' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'backend/info/balance',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'only_for_admin',
        ),
        'as' => 'backend.info.balance',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\InfoController@balance',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\InfoController@balance',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.info.delete' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'backend/info/{info}/delete',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'only_for_admin',
        ),
        'as' => 'backend.info.delete',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\InfoController@delete',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\InfoController@delete',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.api.list' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/api',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'permission:api.manage',
        ),
        'as' => 'backend.api.list',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ApiController@index',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ApiController@index',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.api.create' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/api/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'permission:api.add',
        ),
        'as' => 'backend.api.create',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ApiController@create',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ApiController@create',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.api.store' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'backend/api/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'permission:api.add',
        ),
        'as' => 'backend.api.store',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ApiController@store',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ApiController@store',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.api.generate' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/api/generate',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'as' => 'backend.api.generate',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ApiController@generate',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ApiController@generate',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.api.json' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/api/json',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'as' => 'backend.api.json',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ApiController@json',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ApiController@json',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.api.edit' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/api/{api}/edit',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'permission:api.edit',
        ),
        'as' => 'backend.api.edit',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ApiController@edit',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ApiController@edit',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.api.update' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'backend/api/{api}/update',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'permission:api.edit',
        ),
        'as' => 'backend.api.update',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ApiController@update',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ApiController@update',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.api.balance' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'backend/api/balance',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'as' => 'backend.api.balance',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ApiController@balance',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ApiController@balance',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.api.delete' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'backend/api/{api}/delete',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'permission:api.delete',
        ),
        'as' => 'backend.api.delete',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ApiController@delete',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ApiController@delete',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.tournament.list' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/tournaments',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'permission:tournaments.manage',
        ),
        'as' => 'backend.tournament.list',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\TournamentController@index',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\TournamentController@index',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.tournament.create' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/tournaments/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'permission:tournaments.add',
        ),
        'as' => 'backend.tournament.create',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\TournamentController@create',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\TournamentController@create',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.tournament.store' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'backend/tournaments/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'permission:tournaments.add',
        ),
        'as' => 'backend.tournament.store',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\TournamentController@store',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\TournamentController@store',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.tournament.edit' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/tournaments/{tournament}/edit',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'permission:tournaments.edit',
        ),
        'as' => 'backend.tournament.edit',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\TournamentController@edit',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\TournamentController@edit',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.tournament.update' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'backend/tournaments/{tournament}/update',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'permission:tournaments.edit',
        ),
        'as' => 'backend.tournament.update',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\TournamentController@update',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\TournamentController@update',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.tournament.delete' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'backend/tournaments/{tournament}/delete',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'permission:tournaments.delete',
        ),
        'as' => 'backend.tournament.delete',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\TournamentController@delete',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\TournamentController@delete',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.tournament.games' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/tournaments/games.json',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'permission:tournaments.manage',
        ),
        'as' => 'backend.tournament.games',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\TournamentController@games',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\TournamentController@games',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.sms_bonus.list' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/smsbonuses',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'permission:sms_bonuses.manage',
        ),
        'as' => 'backend.sms_bonus.list',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\SMSBonusController@index',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\SMSBonusController@index',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.sms_bonus.create' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/smsbonuses/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'permission:sms_bonuses.add',
        ),
        'as' => 'backend.sms_bonus.create',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\SMSBonusController@create',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\SMSBonusController@create',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.sms_bonus.store' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'backend/smsbonuses/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'permission:sms_bonuses.add',
        ),
        'as' => 'backend.sms_bonus.store',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\SMSBonusController@store',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\SMSBonusController@store',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.sms_bonus.edit' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/smsbonuses/{sms_bonus}/edit',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'permission:sms_bonuses.edit',
        ),
        'as' => 'backend.sms_bonus.edit',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\SMSBonusController@edit',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\SMSBonusController@edit',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.sms_bonus.update' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'backend/smsbonuses/{sms_bonus}/update',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'permission:sms_bonuses.edit',
        ),
        'as' => 'backend.sms_bonus.update',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\SMSBonusController@update',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\SMSBonusController@update',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.sms_bonus.delete' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'backend/smsbonuses/{sms_bonus}/delete',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'permission:sms_bonuses.delete',
        ),
        'as' => 'backend.sms_bonus.delete',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\SMSBonusController@delete',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\SMSBonusController@delete',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.sms_bonus.status' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/smsbonuses/status/{status}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'as' => 'backend.sms_bonus.status',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\SMSBonusController@status',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\SMSBonusController@status',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.article.list' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/articles',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'only_for_admin',
        ),
        'as' => 'backend.article.list',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ArticlesController@index',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ArticlesController@index',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.article.create' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/articles/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'only_for_admin',
        ),
        'as' => 'backend.article.create',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ArticlesController@create',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ArticlesController@create',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.article.store' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'backend/articles/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'only_for_admin',
        ),
        'as' => 'backend.article.store',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ArticlesController@store',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ArticlesController@store',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.article.edit' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/articles/{article}/edit',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'only_for_admin',
        ),
        'as' => 'backend.article.edit',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ArticlesController@edit',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ArticlesController@edit',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.article.update' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'backend/articles/{article}/update',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'only_for_admin',
        ),
        'as' => 'backend.article.update',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ArticlesController@update',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ArticlesController@update',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.article.delete' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'backend/articles/{article}/delete',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'only_for_admin',
        ),
        'as' => 'backend.article.delete',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ArticlesController@delete',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ArticlesController@delete',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.refunds.list' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/refunds',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'permission:refunds.manage',
        ),
        'as' => 'backend.refunds.list',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\RefundsController@index',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\RefundsController@index',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.refunds.create' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/refunds/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'permission:refunds.add',
        ),
        'as' => 'backend.refunds.create',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\RefundsController@create',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\RefundsController@create',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.refunds.store' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'backend/refunds/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'permission:refunds.add',
        ),
        'as' => 'backend.refunds.store',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\RefundsController@store',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\RefundsController@store',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.refunds.edit' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/refunds/{refund}/edit',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'as' => 'backend.refunds.edit',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\RefundsController@edit',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\RefundsController@edit',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.refunds.update' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'backend/refunds/{refund}/update',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'as' => 'backend.refunds.update',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\RefundsController@update',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\RefundsController@update',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.refunds.delete' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'backend/refunds/{refund}/delete',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'permission:refunds.delete',
        ),
        'as' => 'backend.refunds.delete',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\RefundsController@delete',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\RefundsController@delete',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.rule.list' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/rules',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'only_for_admin',
        ),
        'as' => 'backend.rule.list',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\RulesController@index',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\RulesController@index',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.rule.edit' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/rules/{rule}/edit',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'only_for_admin',
        ),
        'as' => 'backend.rule.edit',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\RulesController@edit',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\RulesController@edit',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.rule.update' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'backend/rules/{rule}/update',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'only_for_admin',
        ),
        'as' => 'backend.rule.update',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\RulesController@update',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\RulesController@update',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.faq.list' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/faq',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'only_for_admin',
        ),
        'as' => 'backend.faq.list',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\FaqsController@index',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\FaqsController@index',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.faq.create' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/faq/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'only_for_admin',
        ),
        'as' => 'backend.faq.create',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\FaqsController@create',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\FaqsController@create',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.faq.store' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'backend/faq/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'only_for_admin',
        ),
        'as' => 'backend.faq.store',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\FaqsController@store',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\FaqsController@store',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.faq.edit' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/faq/{faq}/edit',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'only_for_admin',
        ),
        'as' => 'backend.faq.edit',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\FaqsController@edit',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\FaqsController@edit',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.faq.update' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'backend/faq/{faq}/update',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'only_for_admin',
        ),
        'as' => 'backend.faq.update',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\FaqsController@update',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\FaqsController@update',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.faq.delete' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'backend/faq/{faq}/delete',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'only_for_admin',
        ),
        'as' => 'backend.faq.delete',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\FaqsController@delete',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\FaqsController@delete',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.jpgame.list' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/jpgame',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'as' => 'backend.jpgame.list',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\JPGController@index',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\JPGController@index',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.jpgame.edit' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/jpgame/{jackpot}/edit',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'permission:jpgame.manage',
        ),
        'as' => 'backend.jpgame.edit',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\JPGController@edit',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\JPGController@edit',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.jpgame.update' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'backend/jpgame/{jackpot}/update',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'permission:jpgame.edit',
        ),
        'as' => 'backend.jpgame.update',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\JPGController@update',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\JPGController@update',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.jpgame.global' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'backend/jpgame/global',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'as' => 'backend.jpgame.global',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\JPGController@global',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\JPGController@global',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.jpgame.global_update' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'backend/jpgame/global_update',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'as' => 'backend.jpgame.global_update',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\JPGController@global_update',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\JPGController@global_update',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.progress.list' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/progress',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'permission:progress.manage',
        ),
        'as' => 'backend.progress.list',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ProgressController@index',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ProgressController@index',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.progress.edit' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/progress/{progress}/edit',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'permission:progress.edit',
        ),
        'as' => 'backend.progress.edit',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ProgressController@edit',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ProgressController@edit',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.progress.update' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'backend/progress/{progress}/update',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'permission:progress.edit',
        ),
        'as' => 'backend.progress.update',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ProgressController@update',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ProgressController@update',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.progress.status' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/progress/status/{status}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'permission:progress.manage',
        ),
        'as' => 'backend.progress.status',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ProgressController@status',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ProgressController@status',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.role.index' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/role',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'as' => 'backend.role.index',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\RolesController@index',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\RolesController@index',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.role.create' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/role/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'as' => 'backend.role.create',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\RolesController@create',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\RolesController@create',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.role.store' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'backend/role/store',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'as' => 'backend.role.store',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\RolesController@store',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\RolesController@store',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.role.edit' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/role/{role}/edit',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'as' => 'backend.role.edit',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\RolesController@edit',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\RolesController@edit',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.role.update' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
      ),
      'uri' => 'backend/role/{role}/update',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'as' => 'backend.role.update',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\RolesController@update',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\RolesController@update',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.role.delete' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'backend/role/{role}/delete',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'as' => 'backend.role.delete',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\RolesController@delete',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\RolesController@delete',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.permission.index' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/permission',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'only_for_admin',
        ),
        'as' => 'backend.permission.index',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\PermissionsController@index',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\PermissionsController@index',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.permission.save' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'backend/permission/save',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'only_for_admin',
        ),
        'as' => 'backend.permission.save',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\PermissionsController@saveRolePermissions',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\PermissionsController@saveRolePermissions',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.settings.list' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/settings/{tab}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'as' => 'backend.settings.list',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\SettingsController@general',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\SettingsController@general',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.settings.list.update' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'backend/settings/{tab}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'as' => 'backend.settings.list.update',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\SettingsController@update',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\SettingsController@update',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.securities' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/securities',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'only_for_admin',
        ),
        'as' => 'backend.securities',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\DashboardController@securities',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\DashboardController@securities',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.securities.block' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
      ),
      'uri' => 'backend/securities/{item}/block',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'only_for_admin',
        ),
        'as' => 'backend.securities.block',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\DashboardController@securities_block',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\DashboardController@securities_block',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.securities.delete' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'backend/securities/{item}/delete',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'only_for_admin',
        ),
        'as' => 'backend.securities.delete',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\DashboardController@securities_delete',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\DashboardController@securities_delete',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.settings.generator' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/generator',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'as' => 'backend.settings.generator',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\DashboardController@generator',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\DashboardController@generator',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.settings.generator.post' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'backend/generator',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'as' => 'backend.settings.generator.post',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\DashboardController@generator',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\DashboardController@generator',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.settings.shop_block' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
      ),
      'uri' => 'backend/shops/block',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'permission:shops.block',
        ),
        'as' => 'backend.settings.shop_block',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\SettingsController@shop_block',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\SettingsController@shop_block',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.settings.shop_unblock' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
      ),
      'uri' => 'backend/shops/unblock',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'permission:shops.unblock',
        ),
        'as' => 'backend.settings.shop_unblock',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\SettingsController@shop_unblock',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\SettingsController@shop_unblock',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.settings.sync' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
      ),
      'uri' => 'backend/settings/sync',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'as' => 'backend.settings.sync',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\SettingsController@sync',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\SettingsController@sync',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.settings.gelete_stat' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
      ),
      'uri' => 'backend/settings/delete/stat/game',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'only_for_admin',
        ),
        'as' => 'backend.settings.gelete_stat',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\SettingsController@gelete_stat',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\SettingsController@gelete_stat',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.settings.gelete_log' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
      ),
      'uri' => 'backend/settings/delete/log/game',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'only_for_admin',
        ),
        'as' => 'backend.settings.gelete_log',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\SettingsController@gelete_log',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\SettingsController@gelete_log',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.settings.gelete_pay' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
      ),
      'uri' => 'backend/settings/delete/pay/stats',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'only_for_admin',
        ),
        'as' => 'backend.settings.gelete_pay',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\SettingsController@gelete_pay',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\SettingsController@gelete_pay',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.activity.index' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/activity',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'permission:activity.system',
        ),
        'as' => 'backend.activity.index',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ActivityController@index',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ActivityController@index',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.activity.system' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/activity/system',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'permission:activity.system',
        ),
        'as' => 'backend.activity.system',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ActivityController@system',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ActivityController@system',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.activity.user' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/activity/user',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'permission:activity.user',
        ),
        'as' => 'backend.activity.user',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ActivityController@user',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ActivityController@user',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.activity.user.log' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/activity/user/{user}/log',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'as' => 'backend.activity.user.log',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ActivityController@userActivity',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ActivityController@userActivity',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.activity.clear' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'backend/activity/clear',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'as' => 'backend.activity.clear',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ActivityController@clear',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\ActivityController@clear',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.sms_mailing.list' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/sms_mailings',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'only_for_admin',
        ),
        'as' => 'backend.sms_mailing.list',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\SMSMailingController@index',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\SMSMailingController@index',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.sms_mailing.create' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/sms_mailings/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'only_for_admin',
        ),
        'as' => 'backend.sms_mailing.create',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\SMSMailingController@create',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\SMSMailingController@create',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.sms_mailing.store' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'backend/sms_mailings/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'only_for_admin',
        ),
        'as' => 'backend.sms_mailing.store',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\SMSMailingController@store',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\SMSMailingController@store',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.sms_mailing.edit' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/sms_mailings/{mailing}/edit',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'only_for_admin',
        ),
        'as' => 'backend.sms_mailing.edit',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\SMSMailingController@edit',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\SMSMailingController@edit',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.sms_mailing.update' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'backend/sms_mailings/{mailing}/update',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'only_for_admin',
        ),
        'as' => 'backend.sms_mailing.update',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\SMSMailingController@update',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\SMSMailingController@update',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.sms_mailing.delete' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'backend/sms_mailings/{mailing}/delete',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'only_for_admin',
        ),
        'as' => 'backend.sms_mailing.delete',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\SMSMailingController@delete',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\SMSMailingController@delete',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.support.index' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/support',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'permission:tickets.manage',
        ),
        'as' => 'backend.support.index',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\SupportController@index',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\SupportController@index',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.support.create' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/support/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'permission:tickets.add',
        ),
        'as' => 'backend.support.create',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\SupportController@create',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\SupportController@create',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.support.store' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'backend/support/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
          3 => 'permission:tickets.add',
        ),
        'as' => 'backend.support.store',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\SupportController@store',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\SupportController@store',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.support.answer' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'backend/support/{ticket}/answer',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'as' => 'backend.support.answer',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\SupportController@answer',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\SupportController@answer',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.support.view' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'backend/support/{ticket}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'as' => 'backend.support.view',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\SupportController@view',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\SupportController@view',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
    'backend.support.close' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
      ),
      'uri' => 'backend/support/{ticket}/close',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth',
          2 => 'checker',
        ),
        'as' => 'backend.support.close',
        'uses' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\SupportController@close',
        'controller' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend\\SupportController@close',
        'namespace' => 'VanguardLTE\\Http\\Controllers\\Web\\Backend',
        'prefix' => '/backend',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
    ),
  ),
)
);
