<?php

namespace VanguardLTE {
    class WithdrawTicket extends \Illuminate\Database\Eloquent\Model
    {
        protected $table = 'withdraw_ticket';
        protected $fillable = [
            'player_userhash',
            'player_name',
            'login',
            'player_id',
            'ticket_pin',
            'ticket_amount',
            'status',
        ];
        public $timestamps = false;
    }
}
