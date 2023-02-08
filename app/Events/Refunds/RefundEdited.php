<?php

namespace VanguardLTE\Events\Refunds;

use VanguardLTE\Refund;

class RefundEdited
{
    /**
     * @var Refund
     */
    protected $editedRefund;

    public function __construct(Refund $editedRefund)
    {
        $this->editedRefund = $editedRefund;
    }

    /**
     * @return Refund
     */
    public function getEditedRefund()
    {
        return $this->editedRefund;
    }
}
