<?php 
namespace VanguardLTE
{
    class Refund extends \Illuminate\Database\Eloquent\Model
    {
        protected $table = 'refunds';
        protected $fillable = [
            'min_pay', 
            'max_pay', 
            'percent', 
            'min_balance', 
            'status', 
            'shop_id'
        ];
        public static $values = [
            'percent' => [
                1, 
                5, 
                10, 
                20, 
                30, 
                40, 
                50
            ]
        ];
        public $timestamps = false;
        public static function boot()
        {
            parent::boot();
            self::updated(function($model)
            {
                event(new Events\Refunds\RefundEdited($model));
            });
        }
    }

}
