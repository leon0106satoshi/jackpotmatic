<?php $__env->startSection('page-title', trans('app.dashboard')); ?>
<?php $__env->startSection('page-heading', trans('app.dashboard')); ?>

<?php $__env->startSection('content'); ?>

    <section class="content-header">
        <?php echo $__env->make('backend.partials.messages', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    </section>
<style>
        .bg-primary {
    color: #f4f3f9;
    background-color: #7266ba;
}
.bg-danger {
    color: #ffffff;
    background-color: #f05050;
}
.bg-info {
    color: #dcf2f8;
    background-color: #23b7e5;
}
.text-info {
    color: #f4f4f4;
}
.text-muted {
    color: #f5f5f5;
}
.bg-warning {
    color: #f4f3f9;
    background-color: #c3a911;
}
.table-responsive {
    height: 145px;
    overflow-x: auto;
}
    </style>
    <section class="content">

       <div class="row">
    <div class="col-md-5">
                        <div class="row row-sm text-center">
                            <div class="col-xs-6">
                                <div class="panel padder-v item bg-warning">
                                    <div class="h1 text-info font-thin h1"><?php echo e(number_format($stats['total'])); ?></div>
                                    <span title="" data-original-title="Total active this month" class="text-muted text-xs"><?php echo app('translator')->get('app.total_users'); ?>
                                    </span>
                                </div>
                            </div>
                            <div class="col-xs-6">
                                <div class="panel padder-v item bg-primary">
                                    <div class="h1 text-info font-thin h1"><?php echo e(number_format($stats['new'])); ?></div>
                                    <span title="" data-original-title="Total active this month" class="text-muted text-xs"><?php echo app('translator')->get('app.new_users_this_month'); ?>
                                    </span>
                                </div>
                            </div>
                            <div class="col-xs-6">
                                <div class="panel padder-v item bg-info">
                                    <div class="h1 text-white font-thin h1"><?php echo e(number_format($stats['games'])); ?></div>
                                    <span title="" data-original-title="Total active this month" class="text-muted text-xs"><?php echo app('translator')->get('app.games'); ?>
                                    </span>
                                </div>
                            </div>
                            <div class="col-xs-6">
                                <div class="panel padder-v item bg-danger">
                                    <div class="h1 text-info font-thin h1"><?php echo e(number_format($stats['banned'])); ?></div>
                                    <span title="" data-original-title="Total active this month" class="text-muted text-xs"><?php echo app('translator')->get('app.banned_users'); ?>
                                    </span>
                                </div>
                                
                            </div>
                            
                        </div>
                        
                    </div>
                    <?php if (\Auth::user()->hasPermission('stats.game')) : ?>
            <div class="col-md-7 xs-12">
                <div class="box box-warning">
                    <div class="box-header with-border">
                        <h3 class="box-title"><?php echo app('translator')->get('app.latest_game_stats'); ?></h3>
                    </div>

                    <div class="box-body">
                        <div class="table-responsive">

                            <table class="table table-striped">

                                <thead>
                                <tr>
                                    <th><?php echo app('translator')->get('app.game'); ?></th>
                                    <th><?php echo app('translator')->get('app.user'); ?></th>
                                    <th><?php echo app('translator')->get('app.balance'); ?></th>
                                    <th><?php echo app('translator')->get('app.bet'); ?></th>
                                    <th><?php echo app('translator')->get('app.win'); ?></th>
                                    <th><?php echo app('translator')->get('app.date'); ?></th>
                                </tr>
                                </thead>

                                <tbody>

                                <?php if(count($gamestat)): ?>
                                    <?php $__currentLoopData = $gamestat; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $stat): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                        <tr>
                                            <td>
                                                <a href="<?php echo e(route('backend.game_stat', ['game' => $stat->game])); ?>">
                                                    <?php echo e($stat->game); ?>

                                                </a>
                                            </td>
                                            <td>
                                                <a href="<?php echo e(route('backend.game_stat', ['user' => $stat->user ? $stat->user->username : ''])); ?>">
                                                    <?php echo e($stat->user ? $stat->user->username : ''); ?>

                                                </a>
                                            </td>
                                            <td><?php echo e($stat->balance); ?></td>
                                            <td><?php echo e($stat->bet); ?></td>
                                            <td><?php echo e($stat->win); ?></td>
                                            <td><?php echo e(date(config('app.time_format'), strtotime($stat->date_time))); ?></td>
                                        </tr>
                                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                <?php else: ?>
                                    <tr><td colspan="6"><?php echo app('translator')->get('app.no_data'); ?></td></tr>
                                <?php endif; ?>

                                </tbody>

                            </table>

                        </div>
                    </div>

                </div>
            </div>
            <?php endif; ?>
            <?php if (\Auth::user()->hasPermission('shops.manage')) : ?>
            <div class="col-xs-12">
                <div class="box box-success">

                    <div class="box-header with-border">
                        <h3 class="box-title"><?php echo app('translator')->get('app.latest_shops'); ?></h3>
                    </div>

                    <div class="box-body">
                        <div class="table-responsive">
                            <table class="table table-striped">
                                <thead>
                                <tr>
                                    <th><?php echo app('translator')->get('app.name'); ?></th>
                                    <th><?php echo app('translator')->get('app.credit'); ?></th>
                                    <th><?php echo app('translator')->get('app.percent'); ?></th>
                                    <th><?php echo app('translator')->get('app.frontend'); ?></th>
                                    <th><?php echo app('translator')->get('app.currency'); ?></th>
                                    <th><?php echo app('translator')->get('app.status'); ?></th>
                                </tr>
                                </thead>

                                <tbody>

                                <?php if(count($shops)): ?>
                                    <?php $__currentLoopData = $shops; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $shop): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                        <tr>
                                            <td>
                                                <a href="<?php echo e(route('backend.shop.edit', $shop->id)); ?>">
                                                    <?php echo e($shop->name); ?>

                                                </a>
                                            </td>

                                            <td><?php echo e($shop->balance); ?></td>
                                            <td><?php echo e($shop->get_percent_label($shop->percent)); ?></td>
                                            <td><?php echo e($shop->frontend); ?></td>

                                            <td><?php echo e($shop->currency); ?></td>
                                            <td>
                                                <?php if($shop->is_blocked): ?>
                                                    <small><i class="fa fa-circle text-red"></i></small>
                                                <?php else: ?>
                                                    <small><i class="fa fa-circle text-green"></i></small>
                                                <?php endif; ?>
                                            </td>
                                        </tr>
                                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                <?php else: ?>
                                    <tr><td colspan="6"><?php echo app('translator')->get('app.no_data'); ?></td></tr>
                                <?php endif; ?>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <?php endif; ?>
        </div>

        <div class="row">
            <?php if (\Auth::user()->hasPermission('stats.shift')) : ?>
            <div class="col-xs-12">
                <div class="box box-success">

                    <div class="box-header with-border">
                        <h3 class="box-title">Latest <?php echo app('translator')->get('app.shift_stats'); ?></h3>
                    </div>

                    <div class="box-body">
                        <div class="table-responsive">
                            <table class="table table-striped">
                                <thead>
                                <tr>
                                    <?php if(!auth()->user()->hasRole('cashier')): ?>
                                        <th><?php echo app('translator')->get('app.shift'); ?></th>
                                    <?php endif; ?>
                                    <th><?php echo app('translator')->get('app.user'); ?></th>
                                    <th><?php echo app('translator')->get('app.start'); ?></th>
                                    <th><?php echo app('translator')->get('app.end'); ?></th>
                                    <?php if(!auth()->user()->hasRole('cashier')): ?>
                                        <th><?php echo app('translator')->get('app.credit'); ?></th>
                                        <th><?php echo app('translator')->get('app.in'); ?></th>
                                        <th><?php echo app('translator')->get('app.out'); ?></th>
                                    <?php endif; ?>
                                    <th><?php echo app('translator')->get('app.total'); ?></th>
                                    <th><?php echo app('translator')->get('app.money'); ?></th>
                                    <th><?php echo app('translator')->get('app.in'); ?></th>
                                    <th><?php echo app('translator')->get('app.out'); ?></th>
                                    <th><?php echo app('translator')->get('app.total'); ?></th>
                                    <th><?php echo app('translator')->get('app.transfers'); ?></th>
                                    <th><?php echo app('translator')->get('app.payout'); ?></th>
                                </tr>
                                </thead>

                                <tbody>

                                <?php if(count($open_shift)): ?>
                                    <?php $__currentLoopData = $open_shift; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $num=>$stat): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                        <tr>
                                            <?php if(!auth()->user()->hasRole('cashier')): ?>
                                                <td><?php echo e($stat->id); ?></td>
                                            <?php endif; ?>
                                            <td><?php echo e($stat->user->username); ?></td>
                                            <td><?php echo e(date(config('app.date_time_format'), strtotime($stat->start_date))); ?></td>
                                            <td><?php echo e($stat->end_date ? date(config('app.date_time_format'), strtotime($stat->end_date)) : ''); ?></td>
                                            <?php if(!auth()->user()->hasRole('cashier')): ?>
                                                <td><?php echo e($stat->balance); ?></td>
                                                <td><?php echo e($stat->balance_in); ?></td>
                                                <td><?php echo e($stat->balance_out); ?></td>
                                            <?php endif; ?>
                                            <td><?php echo e(number_format ($stat->balance + $stat->balance_in - $stat->balance_out, 4, ".", "")); ?></td>
                                            <?php
                                                $money = $stat->users;
                                                if($stat->end_date == NULL){
                                                    $money = $stat->get_money();
                                                }
                                            ?>

                                            <td><?php echo e($money); ?></td>
                                            <td><?php echo e($stat->money_in); ?></td>
                                            <td><?php echo e($stat->money_out); ?></td>

                                            <?php
                                                $total = $stat->money_in - $stat->money_out;
                                            ?>

                                            <td><?php echo e(number_format ($total, 4, ".", "")); ?></td>
                                            <td><?php echo e($stat->transfers); ?></td>

                                            <?php
                                                $payout = $stat->money_in > 0 ? ($stat->money_out / $stat->money_in) * 100 : 0;
                                            ?>
                                            <td><?php echo e(number_format ($payout, 4, ".", "")); ?></td>

                                        </tr>
                                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                <?php else: ?>
                                    <tr><td colspan="17"><?php echo app('translator')->get('app.no_data'); ?></td></tr>
                                <?php endif; ?>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <?php endif; ?>
        </div>
          <div class="row">
            <?php if (\Auth::user()->hasPermission('stats.pay')) : ?>
            <div class="col-xs-12">
                <div class="box box-success">

                    <div class="box-header with-border">
                        <h3 class="box-title"><?php echo app('translator')->get('app.latest_pay_stats'); ?></h3>
                    </div>

                    <div class="box-body">
                        <div class="table-responsive">
                            <table class="table table-striped">
                                <thead>
                                <tr>
                                    <th><?php echo app('translator')->get('app.cashier'); ?></th>
                                    <th><?php echo app('translator')->get('app.money_in'); ?></th>
                                    <th><?php echo app('translator')->get('app.money_out'); ?></th>
                                    <th><?php echo app('translator')->get('app.date'); ?></th>
                                </tr>
                                </thead>

                                <tbody>

                                <?php if(count($statistics)): ?>
                                    <?php $__currentLoopData = $statistics; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $stat): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                        <tr>
                                            <td>
                                            <?php if( $stat->payeer && $stat->payeer->hasRole(['cashier'])): ?>
                                                <a href="<?php echo e(route('backend.user.edit', $stat->payeer->id)); ?>">
                                                    <?php echo e($stat->payeer->username); ?>

                                                </a>
                                            <?php endif; ?>

                                            </td>
                                            <td>
                                                <?php if($stat->add->money_in != NULL): ?>
                                                    <span class="text-green"><?php echo e($stat->add->money_in); ?></span>
                                                <?php endif; ?>
                                            </td>
                                            <td>
                                                <?php if($stat->add->money_out != NULL): ?>
                                                    <span class="text-red"><?php echo e($stat->add->money_out); ?></span>
                                                <?php endif; ?>
                                            </td>
                                            <td><?php echo e($stat->created_at->format(config('app.time_format'))); ?></td>
                                        </tr>
                                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                <?php else: ?>
                                    <tr><td colspan="4"><?php echo app('translator')->get('app.no_data'); ?></td></tr>
                                <?php endif; ?>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <?php endif; ?>

            
        </div>

    </section>
    <!-- /.content -->

<?php $__env->stopSection(); ?>

<?php $__env->startSection('scripts'); ?>
    <?php echo HTML::script('/back/dist/js/pages/dashboard.js'); ?>

<?php $__env->stopSection(); ?>

<?php echo $__env->make('backend.layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH W:\domains\vladimir.com\resources\views/backend/dashboard/admin.blade.php ENDPATH**/ ?>