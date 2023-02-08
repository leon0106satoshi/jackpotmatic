<?php

namespace VanguardLTE\Events\Refunds;

use VanguardLTE\Refund;

class DeleteRefund
{
    /**
     * @var Refund
     */
    protected $DeleteRefund;

    public function __construct(Refund $DeleteRefund)
    {
        $this->DeleteRefund = $DeleteRefund;
    }

    /**
     * @return Refund
     */
    public function getDeleteRefund()
    {
        return $this->DeleteRefund;
    }
}
