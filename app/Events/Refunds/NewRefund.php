<?php

namespace VanguardLTE\Events\Refunds;

use VanguardLTE\Refund;

class NewRefund
{
    /**
     * @var Refund
     */
    protected $NewRefund;

    public function __construct(Refund $NewRefund)
    {
        $this->NewRefund = $NewRefund;
    }

    /**
     * @return Refund
     */
    public function getNewRefund()
    {
        return $this->NewRefund;
    }
}
