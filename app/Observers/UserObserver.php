<?php
namespace VanguardLTE\Observers;
use VanguardLTE\User;
 
class UserObserver
{
    /**
     * Listen to the User created event.
     *
     * @param  \App\User  $user
     * @return void
     */
    public function created(User $user)
    {
        //
    }
 
    /**
     * Listen to the User deleting event.
     *
     * @param  \VanguardLTE\User  $user
     * @return void
     */
    public function deleting(User $user)
    {
        //
    }
    
    public function updating(User $user)
    {
      if($user->isDirty('balance')){
        // balance has changed
        $new_balance = $user->balance; 
        $old_balance = $user->getOriginal('balance');
        // var_dump('old_balance='.$old_balance.' new_balance='.$new_balance);
        if($new_balance <= 2 && $new_balance != $old_balance && intval($user->count_refunds)){
          // $user->unsetEventDispatcher();
          // var_dump('!!!1 balance=' . $user->balance . 'count_refunds=' . $user->count_refunds);
          $user->balance = $old_balance + $user->count_refunds;
          $user->count_refunds = 0;
          // var_dump('!!!2 balance=' . $user->balance . 'count_refunds=' . $user->count_refunds);
          $user->saveQuietly();
        }
        if($new_balance < 0){
          // $user->unsetEventDispatcher();
          // var_dump('!!!3 balance=' . $user->balance . 'count_refunds=' . $user->count_refunds);
          $user->balance = $old_balance;
          // var_dump('!!!4 balance=' . $user->balance . 'count_refunds=' . $user->count_refunds);
          $user->saveQuietly();
        } 
      }
    }
}
?>