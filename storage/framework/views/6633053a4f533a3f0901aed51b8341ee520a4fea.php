
<aside class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
        <!-- Sidebar user panel -->

        <div class="user-panel">
            <div class="pull-left image">
                
			<img src="" class="img-circle">
				
              <!--  <img src="/back/img/<?php echo e(auth()->user()->present()->role_id); ?>.png" class="img-circle">-->
            </div>
            <div class="pull-left info">
                <p>Balance: <span class="activeBalance">

                    <?php if( auth()->user()->hasRole(['cashier', 'manager']) ): ?>
                            <?php
                                $shop = \VanguardLTE\Shop::find( auth()->user()->present()->shop_id );
                                echo $shop?number_format($shop->balance,2,".",""):0;
                            ?>
                            <?php if( auth()->user()->present()->shop ): ?>
                                <?php echo e(auth()->user()->present()->shop->currency); ?>

                            <?php endif; ?>
                        <?php else: ?>
                            <?php echo e(number_format(auth()->user()->present()->balance,2,".","")); ?>

                            <?php if( auth()->user()->present()->shop ): ?>
                                <?php echo e(auth()->user()->present()->shop->currency); ?>

                            <?php endif; ?>
                        <?php endif; ?>
                </span>
                </p>

                <a href="javascript:;" data-toggle="modal" data-target="#openChangeModal">
                    <i class="fa fa-circle text-success"></i>
                    <?php if(auth()->user()->shop): ?> <?php echo e(auth()->user()->shop->name); ?> <?php else: ?> <?php echo app('translator')->get('app.no_shop'); ?> <?php endif; ?>
                </a>

            </div>
        </div>
        <!-- search form -->

       <!--  <?php if( auth()->user()->hasRole('admin') ): ?>
            <form action="<?php echo e(route('backend.search')); ?>" method="get" class="sidebar-form">
                <div class="input-group">
                    <input type="text" name="q" class="form-control" placeholder="<?php echo app('translator')->get('app.search'); ?>">
                    <span class="input-group-btn">
                <button type="submit" name="search" id="search-btn" class="btn btn-flat">
                  <i class="fa fa-search"></i>
                </button>
              </span>
                </div>
            </form>
        <?php endif; ?>
               -->
    <!-- /.search form --> 
        <!-- sidebar menu: : style can be found in sidebar.less -->
        <ul class="sidebar-menu" data-widget="tree">
             
            

            <?php if (\Auth::user()->hasPermission('dashboard')) : ?>
            <li class="<?php echo e(Request::is('backend') ? 'active' : ''); ?>">
                <a href="<?php echo e(route('backend.dashboard')); ?>">
                    <i class="fa fa-home"></i>
                    <span><?php echo app('translator')->get('app.dashboard'); ?></span>
                </a>
            </li>
            <?php endif; ?>
            <?php if( auth()->user()->hasRole('admin')): ?>
                <li class="<?php echo e(Request::is('backend/banks*') ? 'active' : ''); ?>">
                    <a href="<?php echo e(route('backend.banks')); ?>">
                        <i class="fa fa-refresh"></i>
                        <span><?php echo app('translator')->get('app.banks'); ?></span>
                    </a>
                </li>
            <?php endif; ?>
           
            <?php if (\Auth::user()->hasPermission('shops.manage')) : ?>
            <li class="<?php echo e(Request::is('backend/shops*') ? 'active' : ''); ?>">
                <a href="<?php echo e(route('backend.shop.list')); ?>">
                    <i class="fa fa-bank"></i>
                    <span><?php echo app('translator')->get('app.shops'); ?></span>
                </a>
            </li>
            <?php endif; ?>
             <?php if (\Auth::user()->hasPermission('users.manage')) : ?>
            <li class="<?php echo e(Request::is('backend/user*') ? 'active' : ''); ?>">
                <a href="<?php echo e(route('backend.user.list')); ?>">	
                    <i class="fa fa-user"></i>
                    <span><?php echo app('translator')->get('app.users'); ?></span>
                </a>
            </li>
            <?php endif; ?>
            
           
           <!--   <?php if (\Auth::user()->hasPermission('tournaments.manage')) : ?>
            <?php if( !(auth()->check() && auth()->user()->shop_id == 0 ) ): ?>
                <li class="<?php echo e(Request::is('backend/tournaments*') ? 'active' : ''); ?>">
                    <a href="<?php echo e(route('backend.tournament.list')); ?>">
                        <i class="fa fa-trophy"></i>
                        <span><?php echo app('translator')->get('app.tournaments'); ?></span>
                    </a>
                </li>
            <?php endif; ?>
            <?php endif; ?>  -->
            
            <?php if(
                Auth::user()->hasPermission('stats.live') ||
                auth()->user()->hasPermission('stats.pay') ||
                auth()->user()->hasPermission('stats.game') ||
                auth()->user()->hasPermission('stats.shift')
            ): ?>

                <li class="treeview  <?php echo e(Request::is('backend/live*') ||  Request::is('backend/transactions*') || Request::is('backend/game_stat*') || Request::is('backend/shift_stat') || Request::is('backend/ticket_stat') ? 'active' : ''); ?>">
                    <a href="#">
                        <i class="fa fa-area-chart"></i>
                        <span>Stats</span>
                        <span class="pull-right-container">
                        <i class="fa fa-angle-left pull-right"></i>
                    </span>
                    </a>
                    <ul class=" treeview-menu" id="stats-dropdown">
                         
                  
                     <?php if( auth()->user()->shop_id > 0 ): ?>
                    <?php if (\Auth::user()->hasPermission('stats.live')) : ?>
                    <li class="<?php echo e(Request::is('backend/game_stat') ? 'active' : ''); ?>">
                        <a  href="<?php echo e(route('backend.game_stat')); ?>">
                            <i class="fa fa-circle-o"></i>
                            <?php echo app('translator')->get('app.live_stats'); ?>
                        </a>
                    </li>
                    <?php endif; ?>
                    <?php endif; ?>
                   
                         
                        <?php if (\Auth::user()->hasPermission('stats.pay')) : ?>
                        <li class="<?php echo e(Request::is('backend/transactions*') ? 'active' : ''); ?>">
                            <a  href="<?php echo e(route('backend.transactions')); ?>">
                                <i class="fa fa-circle-o"></i>
                                <?php echo app('translator')->get('app.statistics'); ?>
                            </a>
                        </li>
                        <?php endif; ?>

                        <?php if (\Auth::user()->hasPermission('stats.game')) : ?>
                        <li class="<?php echo e(Request::is('backend/live') ? 'active' : ''); ?>">
                            <a  href="<?php echo e(route('backend.live_stat')); ?>">
                                <i class="fa fa-circle-o"></i>
                                <?php echo app('translator')->get('app.game_stats'); ?>
                            </a>
                        </li>
                        <?php endif; ?>

                        <li class="<?php echo e(Request::is('backend/ticket_stat') ? 'active' : ''); ?>">
                            <a href="<?php echo e(route('backend.ticket_stat')); ?>">
                                <i class="fa fa-circle-o"></i>
                                Ticket Stats
                            </a>
                        </li>
                        
                        <?php if (\Auth::user()->hasPermission('stats.shift')) : ?>
                        <li class="<?php echo e(Request::is('backend/shift_stat') ? 'active' : ''); ?>">
                            <a href="<?php echo e(route('backend.shift_stat')); ?>">
                                <i class="fa fa-undo-alt"></i>
                                <?php echo app('translator')->get('app.shift_stats'); ?>
                            </a>
                        </li>
                        <?php endif; ?>

                    </ul>
                </li>

            <?php endif; ?>
            <?php if (\Auth::user()->hasPermission('games.manage')) : ?>
            <?php if( !(auth()->check() && auth()->user()->shop_id == 0 && auth()->user()->role_id < 6 ) ): ?>
                <li class="<?php echo e((Request::is('backend/game') || Request::is('backend/game/*')) ? 'active' : ''); ?>">
                    <a href="<?php echo e(route('backend.game.list')); ?>">
                        <i class="fa fa-gamepad"></i>
                        <span><?php echo app('translator')->get('app.games'); ?></span>
                    </a>
                </li>
            <?php endif; ?>
            <?php endif; ?>
              
            <?php if( auth()->user()->hasRole('admin') ): ?>
                <li class="<?php echo e(Request::is('backend/category*') ? 'active' : ''); ?>">
                    <a href="<?php echo e(route('backend.category.list')); ?>">
                        <i class="fa fa-bars"></i>
                        <span><?php echo app('translator')->get('app.categories'); ?></span>
                    </a>
                </li>
            <?php endif; ?>

            
				<?php if (\Auth::user()->hasPermission('refunds.manage')) : ?>
                <?php if( !(auth()->check() && auth()->user()->shop_id == 0 ) ): ?>
                    <li class="nav-item">
                        <a href="<?php echo e(route('backend.refunds.list')); ?>"
                           class="nav-link <?php echo e(Request::is('backend/refunds*') ? 'active' : ''); ?>">
                            <i class="nav-icon fas fa-undo-alt"></i>
                            <p>
                                <?php echo app('translator')->get('app.refunds'); ?>
                            </p>
                        </a>
                    </li>
                <?php endif; ?>
                <?php endif; ?>		  


            <?php if (\Auth::user()->hasPermission('jpgame.manage')) : ?>
            <?php if( !(auth()->check() && auth()->user()->shop_id == 0 && auth()->user()->role_id < 6) ): ?>
                <li class="<?php echo e(Request::is('backend/jpgame*') ? 'active' : ''); ?>">
                    <a href="<?php echo e(route('backend.jpgame.list')); ?>">
                        <i class="fa  fa-heartbeat"></i>
                        <span><?php echo app('translator')->get('app.jpg'); ?></span>
                    </a>
                </li>
            <?php endif; ?>
            <?php endif; ?>

               

            <?php if (\Auth::user()->hasPermission('pincodes.manage')) : ?>
            <?php if( !(auth()->check() && auth()->user()->shop_id == 0 ) ): ?>
                <li class="<?php echo e(Request::is('backend/pincodes*') ? 'active' : ''); ?>">
                    <a href="<?php echo e(route('backend.pincode.list')); ?>">
                        <i class="fa fa-qrcode"></i>
                        <span><?php echo app('translator')->get('app.pincodes'); ?></span>
                    </a>
                </li>
            <?php endif; ?>
            <?php endif; ?>

            


         <!--   <?php if(
                auth()->user()->hasPermission('activity.system') ||
                auth()->user()->hasPermission('activity.user')
            ): ?>
                <li class="treeview <?php echo e(Request::is('backend/activity*') ? 'active' : ''); ?>">
                    <a href="#">
                        <i class="fa fa-bar-chart"></i>
                        <span><?php echo app('translator')->get('app.activity_log'); ?></span>
                        <span class="pull-right-container">
                        <i class="fa fa-angle-left pull-right"></i>
                    </span>
                    </a>
                    <ul class=" treeview-menu" id="stats-dropdown">
                        <li class="<?php echo e(Request::is('backend/activity') ? 'active' : ''); ?>">
                            <a href="<?php echo e(route('backend.activity.index')); ?>">
                                <i class="fa fa-circle-o"></i>
                                <span><?php echo app('translator')->get('app.all'); ?></span>
                            </a>
                        </li>
                        <?php if (\Auth::user()->hasPermission('activity.system')) : ?>
                        <li class="<?php echo e(Request::is('backend/activity/system') ? 'active' : ''); ?>">
                            <a href="<?php echo e(route('backend.activity.system', 'system')); ?>">
                                <i class="fa fa-circle-o"></i>
                                <span><?php echo app('translator')->get('app.system_data'); ?></span>
                            </a>
                        </li>
                        <?php endif; ?>
                        <?php if (\Auth::user()->hasPermission('activity.user')) : ?>
                        <li class="<?php echo e(Request::is('backend/activity/user') ? 'active' : ''); ?>">
                            <a href="<?php echo e(route('backend.activity.user', 'user')); ?>">
                                <i class="fa fa-circle-o"></i>
                                <span><?php echo app('translator')->get('app.user_data'); ?></span>
                            </a>
                        </li>
                        <?php endif; ?>
                    </ul>
                </li>
            <?php endif; ?>  -->

            <?php if( auth()->user()->hasRole('admin') ): ?>
                <li  class="<?php echo e(Request::is('backend/permission*') ? 'active' : ''); ?>">
                    <a href="<?php echo e(route('backend.permission.index')); ?>">
                        <i class="fa fa-bell-slash"></i>
                        <span><?php echo app('translator')->get('app.permissions'); ?></span>
                    </a>
                </li>
            <?php endif; ?>

            <!--

            <?php if(
                auth()->user()->hasRole('admin')
            ): ?>

                <li class="treeview <?php echo e(Request::is('backend/info*') || Request::is('backend/articles*') ||
                    Request::is('backend/rules*') || Request::is('backend/faq*') ? 'active' : ''); ?>">
                    <a href="#">
                        <i class="fa fa-comments-o"></i>
                        <span><?php echo app('translator')->get('app.pages'); ?></span>
                        <span class="pull-right-container">
                        <i class="fa fa-angle-left pull-right"></i>
                    </span>
                    </a>
                    <ul class=" treeview-menu" id="stats-dropdown">

                        <li class="<?php echo e(Request::is('backend/info*') ? 'active' : ''); ?>">
                            <a href="<?php echo e(route('backend.info.list')); ?>">
                                <i class="fa fa-circle-o"></i>
                                <span><?php echo app('translator')->get('app.info'); ?></span>
                            </a>
                        </li>
                        <li class="<?php echo e(Request::is('backend/articles*') ? 'active' : ''); ?>">
                            <a href="<?php echo e(route('backend.article.list')); ?>">
                                <i class="fa fa-circle-o"></i>
                                <span><?php echo app('translator')->get('app.articles'); ?></span>
                            </a>
                        </li>
                        <li class="<?php echo e(Request::is('backend/rules*') ? 'active' : ''); ?>">
                            <a href="<?php echo e(route('backend.rule.list')); ?>">
                                <i class="fa fa-circle-o"></i>
                                <span><?php echo app('translator')->get('app.rules'); ?></span>
                            </a>
                        </li>
                        <li class="<?php echo e(Request::is('backend/faq*') ? 'active' : ''); ?>">
                            <a href="<?php echo e(route('backend.faq.list')); ?>">
                                <i class="fa fa-circle-o"></i>
                                <span><?php echo app('translator')->get('app.faqs'); ?></span>
                            </a>
                        </li>
                    </ul>
                </li>

            <?php endif; ?>
-->
            
            <?php if (\Auth::user()->hasPermission('tickets.manage')) : ?>
            <li class="<?php echo e(Request::is('backend/support*') ? 'active' : ''); ?>">
                <a href="<?php echo e(route('backend.support.index')); ?>">
                    <i class="fa fa-support"></i>
                    <span>Support</span>
                    <?php if( auth()->user()->hasRole('admin') ): ?>
                        <?php if($count = \VanguardLTE\Ticket::where('status', 'awaiting')->count() ): ?>
                            <span class="pull-right-container">
                            <span class="label label-primary pull-right"><?php echo e($count); ?></span>
                        </span>
                        <?php endif; ?>
                    <?php else: ?>
                        <?php if($count = \VanguardLTE\Ticket::where(['status' => 'answered', 'user_id' => auth()->user()->id])->count() ): ?>
                            <span class="pull-right-container">
                            <span class="label label-primary pull-right"><?php echo e($count); ?></span>
                        </span>
                        <?php endif; ?>
                    <?php endif; ?>
                </a>
            </li>
            <?php endif; ?>

           

          <!--   <?php if( auth()->user()->hasRole('admin')): ?>
                <li class="<?php echo e(Request::is('backend/securities*') ? 'active' : ''); ?>">
                    <a href="<?php echo e(route('backend.securities')); ?>">
                        <i class="fa  fa-user-secret"></i>
                        <span><?php echo app('translator')->get('app.security'); ?></span>
                    </a>
                </li>
            <?php endif; ?>   -->

            <?php if(
                auth()->user()->hasRole('admin') ||
                auth()->user()->hasPermission('settings.payment')
            ): ?>
                <li class="treeview <?php echo e(Request::is('backend/settings/general') || Request::is('backend/settings/securities') ||
    Request::is('backend/settings/sms') || Request::is('backend/settings/payment') ||
    Request::is('backend/settings/banks') || Request::is('backend/settings/categories') ||
    Request::is('backend/settings/games') || Request::is('backend/settings/auth') ||
    Request::is('backend/settings/bonuses')
  ? 'active' : ''); ?>">
                    <a href="#">
                        <i class="fa fa-cog fa-spin fa-fw" style='font-size:16px;color:red'></i>
                        <span><?php echo app('translator')->get('app.settings'); ?></span>
                        <span class="pull-right-container">
                        <i class="fa fa-angle-left pull-right"></i>
                    </span>
                    </a>
                    <ul class=" treeview-menu" id="stats-dropdown">

                        <?php if( auth()->user()->hasRole('admin') ): ?>
                            <li class="<?php echo e(Request::is('backend/settings/general') ? 'active' : ''); ?>">
                                <a  href="<?php echo e(route('backend.settings.list', 'general')); ?>">
                                    <i class="fa fa-circle-o"></i>
                                    <?php echo app('translator')->get('app.general'); ?>
                                </a>
                            </li>
                         <!--   <li class="<?php echo e(Request::is('backend/settings/securities') ? 'active' : ''); ?>">
                                <a  href="<?php echo e(route('backend.settings.list', 'securities')); ?>">
                                    <i class="fa fa-circle-o"></i>
                                    <?php echo app('translator')->get('app.securities'); ?>
                                </a>
                            </li>
                             <li class="<?php echo e(Request::is('backend/settings/sms') ? 'active' : ''); ?>">
                                <a  href="<?php echo e(route('backend.settings.list', 'sms')); ?>">
                                    <i class="fa fa-circle-o"></i>
                                    <?php echo app('translator')->get('app.sms'); ?>
                                </a>
                            </li>  
                        <?php endif; ?>

                        <?php if (\Auth::user()->hasPermission('settings.payment')) : ?>
                        <li class="<?php echo e(Request::is('backend/settings/payment') ? 'active' : ''); ?>">
                            <a  href="<?php echo e(route('backend.settings.list', 'payment')); ?>">
                                <i class="fa fa-circle-o"></i>
                                <?php echo app('translator')->get('app.payment'); ?>
                            </a>
                        </li>
                        <?php endif; ?>  -->


                        <?php if( auth()->user()->hasRole('admin') ): ?>
                            <li class="<?php echo e(Request::is('backend/settings/banks') ? 'active' : ''); ?>">
                                <a  href="<?php echo e(route('backend.settings.list', 'banks')); ?>">
                                    <i class="fa fa-circle-o"></i>
                                    <?php echo app('translator')->get('app.banks'); ?>
                                </a>
                            </li>
                            <li class="<?php echo e(Request::is('backend/settings/categories') ? 'active' : ''); ?>">
                                <a  href="<?php echo e(route('backend.settings.list', 'categories')); ?>">
                                    <i class="fa fa-circle-o"></i>
                                    <?php echo app('translator')->get('app.categories'); ?>
                                </a>
                            </li>
                        <!--   <li class="<?php echo e(Request::is('backend/settings/games') ? 'active' : ''); ?>">
                                <a  href="<?php echo e(route('backend.settings.list', 'games')); ?>">
                                    <i class="fa fa-circle-o"></i>
                                    <?php echo app('translator')->get('app.games'); ?>
                                </a>
                            </li>  -->
                            <li class="<?php echo e(Request::is('backend/settings/auth') ? 'active' : ''); ?>">
                                <a  href="<?php echo e(route('backend.settings.list', 'auth')); ?>">
                                    <i class="fa fa-circle-o"></i>
                                    <?php echo app('translator')->get('app.auth'); ?>
                                </a>
                            </li>
                        <?php endif; ?>


                    </ul>
                </li>
            <?php endif; ?>



        </ul>
		
		

           		</br>
								
				<?php if( auth()->user()->hasRole('agent') ): ?>
                <li  class="<?php echo e(Request::is('backend/user/create*') ? 'active' : ''); ?>">
                    <a href="/backend/user/create">
                        <i class="fa fa-plus" style="font-size:18px;color:#fb7f83"></i>
                        <span>&nbsp;&nbsp;&nbsp;&nbsp; New Operator</span>
                    </a>
                </li>
            <?php endif; ?>
			
			<?php if( auth()->user()->hasRole('distributor') ): ?>
                <li  class="<?php echo e(Request::is('backend/user/create*') ? 'active' : ''); ?>">
                    <a href="/backend/user/create">
                        <i class="fa fa-plus" style="font-size:18px;color:#fb7f83"></i>
                        <span>&nbsp;&nbsp;&nbsp;&nbsp; New Cashier</span>
                    </a>
                </li>
           </br>
            <?php endif; ?>
			
			<?php if( auth()->user()->hasRole('distributor') ): ?>
                <li  class="<?php echo e(Request::is('backend/shops/create*') ? 'active' : ''); ?>">
                    <a href="/backend/shops/create">
                        <i class="fa fa-plus" style="font-size:18px;color:#fb7f83"></i>
                        <span>&nbsp;&nbsp;&nbsp;&nbsp; New Shop</span>
                    </a>
                </li>
			</br>
            <?php endif; ?>
            
			<?php if( auth()->user()->hasRole('manager') ): ?>
                <li  class="<?php echo e(Request::is('backend/user/create*') ? 'active' : ''); ?>">
                    <a href="/backend/user/create">
                        <i class="fa fa-plus" style="font-size:18px;color:#fb7f83"></i>
                        <span>&nbsp;&nbsp;&nbsp;&nbsp; New Cashier</span>
                    </a>
                </li>
              </br>
            <?php endif; ?>
			
			<?php if( auth()->user()->hasRole('cashier') ): ?>
                <li  class="<?php echo e(Request::is('backend/user/create*') ? 'active' : ''); ?>">
                    <a href="/backend/user/create">
                        <i class="fa fa-plus" style="font-size:18px;color:#fb7f83"></i>
                        <span>&nbsp;&nbsp;&nbsp;&nbsp; New Player</span>
                    </a>
                </li>
              </br>
            <?php endif; ?>
			
</br>
        <?php if( auth()->user()->shop ): ?>
            <?php if( auth()->user()->shop->is_blocked ): ?>
                <?php if (\Auth::user()->hasPermission('shops.unblock')) : ?>
                <br>
                <a href="<?php echo e(route('backend.settings.shop_unblock')); ?>" class="btn btn-success"
                   style="color: #fff; margin: 0 auto; display: table;"
                   data-method="PUT"
                   data-confirm-title="<?php echo app('translator')->get('app.please_confirm'); ?>"
                   data-confirm-text="<?php echo app('translator')->get('app.are_you_sure_unblock_shop'); ?>"
                   data-confirm-delete="<?php echo app('translator')->get('app.unblock'); ?>"
                > UnBlock Shop</a>
                <?php endif; ?>
            <?php else: ?>
                <?php if (\Auth::user()->hasPermission('shops.block')) : ?>
                <br>
                <a href="<?php echo e(route('backend.settings.shop_block')); ?>" class="btn btn-danger"
                   style="color: #fff; margin: 0 auto; display: table;"
                   data-method="PUT"
                   data-confirm-title="<?php echo app('translator')->get('app.please_confirm'); ?>"
                   data-confirm-text="<?php echo app('translator')->get('app.are_you_sure_block_shop'); ?>"
                   data-confirm-delete="<?php echo app('translator')->get('app.block'); ?>"
                > Block Shop</a>
                <?php endif; ?>
            <?php endif; ?>
        <?php endif; ?>
 
        <ul>
            <li>
                <br>
                <a href="javascript:;">
                    <span id="date-part"></span>
                    <span id="time-part"></span>
                </a>
            </li>
        </ul>
		</br>
		<?php if( auth()->user()->hasRole('cashier') ): ?>
<a href="#" class="btn btn-success" style="color: #fff; margin: 0 auto; display: table;" data-toggle="modal" data-target="#openShiftModal"> <?php echo app('translator')->get('app.start_shift'); ?></a>
 <?php endif; ?>
    </section>
</aside>
<style>
    .modal-dialog{
        
        margin-top:300px;
        width:340px;
    }
    @media (max-width: 767px){
        .modal-dialog{
        margin-left:35px;
        margin-top:300px;
        width:340px;
    }
        
    }
    
</style>
<div class="modal fade" id="openChangeModal"  role="dialog" aria-hidden="true" >
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <form action="<?php echo e(route('backend.profile.setshop')); ?>" method="POST">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title"><?php echo app('translator')->get('app.shops'); ?></h4>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <?php echo Form::select('shop_id',
                            (auth()->user()->hasRole(['admin','agent']) ? [0 => __('app.no_shop')] : [])
                            +
                            auth()->user()->shops_array(), auth()->user()->shop_id, ['class' => 'form-control select2', 'style' => 'width: 100%;']); ?>

                        <input type="hidden" name="_token" value="<?php echo e(csrf_token()); ?>">
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal"><?php echo app('translator')->get('app.close'); ?></button>
                    <button type="submit" class="btn btn-primary"><?php echo app('translator')->get('app.change'); ?></button>
                </div>
            </form>
			
        </div>
    </div>
</div>
<?php /**PATH W:\domains\vladimir.com\resources\views/backend/partials/sidebar.blade.php ENDPATH**/ ?>