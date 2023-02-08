<?php

namespace VanguardLTE\Listeners;

use VanguardLTE\Activity;
use VanguardLTE\Events\Refunds\RefundEdited;
use VanguardLTE\Events\Refunds\NewRefund;
use VanguardLTE\Events\Refunds\DeleteRefund;
use VanguardLTE\Events\User\UserEventContract;
use VanguardLTE\Services\Logging\UserActivity\Logger;

class RefundEventsSubscriber
{
    /**
     * @var UserActivityLogger
     */
    private $logger;

    public function __construct(Logger $logger)
    {
        $this->logger = $logger;
    }

    public function onNewRefund(NewRefund $event)
    {
        $refund = $event->getNewRefund();

        //$this->logger->log('New Refund / ' . $refund->id . ', Shop ' . $refund->shop_id, $type = 'system', 'refund', $refund->id);
    }

    public function onRefundEdited(RefundEdited $event)
    {
        $refund = $event->getEditedRefund();
        $original = $refund->getOriginal();
        $changes = $refund->getChanges();

        $text = 'Update Refund | ';
        $textOriginal = 'Update Refund | ';

        foreach(['min_pay' => 'Min Pay', 'max_pay' => 'Max Pay', 'percent' => 'Percent',
                   'min_balance' => 'Min Balance', 'status' => 'Status'] AS $column=>$title){

            if( isset($original[$column]) ){
                $textOriginal .= $this->template($column, $title, $original[$column]);
            } else{
                $textOriginal .= ' ' .$title. ' =  | ';
            }
            if( isset($changes[$column]) ){
                $changed = true;
                $text .= $this->template($column, $title, $changes[$column]);
            } else{
                if( isset($original[$column]) ){
                    $text .= $this->template($column, $title, $original[$column]);
                } else{
                    $text .= ' ' .$title. ' =  | ';
                }
            }
        }

        /*
        foreach(['min_pay', 'max_pay', 'percent', 'min_balance', 'status'] AS $column){
            switch ($column){
                case 'min_pay':
                    $originalText .= ' Min Pay = ' . $original[$column] . ' | ';
                    if( isset($changes[$column]) ){
                        $text .= ' Min Pay = ' . $changes[$column] . ' | ';
                    } else{
                        $text .= ' Min Pay = ' . $original[$column] . ' | ';
                    }
                    break;
                case 'max_pay':
                    $originalText .= ' Max Pay = ' . $original[$column] . ' | ';
                    if( isset($changes[$column]) ){
                        $text .= ' Max Pay = ' . $changes[$column] . ' | ';
                    } else{
                        $text .= ' Max Pay = ' . $original[$column] . ' | ';
                    }
                    break;
                case 'percent':
                    $originalText .= ' Percent = ' . $original[$column] . ' | ';
                    if( isset($changes[$column]) ){
                        $text .= ' Percent = ' . $changes[$column] . ' | ';
                    } else{
                        $text .= ' Percent = ' . $original[$column] . ' | ';
                    }
                    break;
                case 'min_balance':
                    $originalText .= ' Min Balance = ' . $original[$column] . ' | ';
                    if( isset($changes[$column]) ){
                        $text .= ' Min Balance = ' . $changes[$column] . ' | ';
                    } else{
                        $text .= ' Min Balance = ' . $original[$column] . ' | ';
                    }
                    break;
                case 'status':
                    $originalText .= ' Status = ' . ($original[$column] ? 'Active' : 'Disabled' );
                    if( isset($changes[$column]) ){
                        $text .= ' Status = ' . ($changes[$column] ? 'Active' : 'Disabled' );
                    } else{
                        $text .= ' Status = ' . ($original[$column] ? 'Active' : 'Disabled' );
                    }
                    break;
            }
        }
        */

        if(!$changed){
            return;
        }

        $this->logger->log($text, $textOriginal, $type = 'system', 'refund', $refund->id);
    }

    public function onDeleteRefund(DeleteRefund $event)
    {
        $refund = $event->getDeleteRefund();
        //$this->logger->log('Delete Refund / ' . $refund->id . ', Shop ' . $refund->shop_id, $type = 'system', 'refund', $refund->id);
    }

    public function template($key, $title, $value){
        $text = '';
        if($key == 'status'){
            $text .= ' ' .$title. ' = ' . ($value ? 'Active' : 'Disabled' ) . ' | ';
        } else {
            $text .= ' ' . $title. ' = ' . $value . ' | ';
        }
        return $text;
    }

    /**
     * Register the listeners for the subscriber.
     *
     * @param  \Illuminate\Events\Dispatcher  $events
     */
    public function subscribe($events)
    {
        $class = 'VanguardLTE\Listeners\RefundEventsSubscriber';

        $events->listen(NewRefund::class, "{$class}@onNewRefund");
        $events->listen(RefundEdited::class, "{$class}@onRefundEdited");
        $events->listen(DeleteRefund::class, "{$class}@onDeleteRefund");
    }
}
