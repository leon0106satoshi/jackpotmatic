@extends('backend.layouts.app')

@section('page-title', trans('app.users'))
@section('page-heading', trans('app.users'))

@section('content')

	<section class="content-header">
		@include('backend.partials.messages')
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

    </style>


<section class="content">

		@if(auth()->user()->hasRole('cashier') &&
			$openshift = \VanguardLTE\OpenShift::where(['shop_id' => auth()->user()->shop_id, 'end_date' => NULL])->first())

			@php $summ = \VanguardLTE\User::where(['shop_id' => auth()->user()->shop_id, 'role_id' => 1])->sum('balance'); @endphp

			<div class="row">
			    <div class="col-xs-12">
                        <div class="row row-sm text-center">
				<div class="col-xs-6 col-lg-3">
                                <div class="panel padder-v item bg-warning">
                                    	@php
								$money = $openshift->users;
                                if($openshift->end_date == NULL){
                                    $money = $summ;
                                }
							@endphp
                                    <div class="h1 text-info font-thin h1">{{ number_format($money, 2, ".", "") }}</div>
                                    <span title="" data-original-title="Total active this month" class="text-muted text-xs"><p>User @lang('app.balance')</p>
                                   <div class="icon">
				                	<i class="fa fa-refresh"></i>
				               	</div>
                                    </span>
                                </div>
                            </div>
				<!-- ./col -->
				<div class="col-xs-6 col-lg-3">
                                <div class="panel padder-v item bg-primary">
                                    <div class="h1 text-info font-thin h1">{{ number_format($openshift->money_in, 2, ".", "") }}</div>
                                    <span title="" data-original-title="Total active this month" class="text-muted text-xs"><p>@lang('app.in')</p>
                                   <div class="icon">
						<i class="fa fa-level-up"></i>
					</div>
                                    </span>
                                </div>
                            </div>
				<div class="col-xs-6 col-lg-3">
                                <div class="panel padder-v item bg-danger">
                                    <div class="h1 text-white font-thin h1">{{ number_format ($openshift->money_out, 2, ".", "") }}</div>
                                    <span title="" data-original-title="Total active this month" class="text-muted text-xs"><p>Out</p>
                                        <div class="icon">
					 <i class="fa fa-level-down"></i>
					</div>
                                    </span>
                                    
                                </div>
                            </div>
				<!-- ./col -->
			<div class="col-xs-6 col-lg-3">
                                <div class="panel padder-v item bg-info">
                                    	@php
								$total = $openshift->money_in - $openshift->money_out;
						       	@endphp
                                    <div class="h1 text-info font-thin h1">{{ number_format ($total, 2, ".", "") }}</div>
                                    <span title="" data-original-title="Total active this month" class="text-muted text-xs"><p>@lang('app.total') Money</p>
                                    <div class="icon">
                                        <i class="fa fa-line-chart"></i>
						           
				               	</div>
                                    </span>
                                </div>
                                
                            </div>
				<!-- ./col -->
			</div>

		@endif

			<form action="" method="GET" id="users-form" >
			<div class="box box-danger collapsed-box users_show">

					<div class="box-header with-border">
						<h3 class="box-title">@lang('app.filter')</h3>
						<div class="box-tools pull-right">
							<button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-plus"></i></button>
						</div>
					</div>
					<div class="box-body">
						<div class="row">
							<div class="col-md-4">
								<label>@lang('app.search')</label>
								<input type="text" class="form-control" name="search" value="{{ Request::get('search') }}" placeholder="@lang('app.search_for_users')">
							</div>
							@if (!Auth::user()->hasRole('cashier'))
								<div class="col-md-4">
									<label>@lang('app.status')</label>
									{!! Form::select('status', $statuses, Request::get('status'), ['id' => 'status', 'class' => 'form-control']) !!}
								</div>
								<div class="col-md-4">
									<label>@lang('app.role')</label>
									{!! Form::select('role', $roles, Request::get('role'), ['id' => 'role', 'class' => 'form-control']) !!}
								</div>
							@endif
						</div>
					</div>
					<div class="box-footer">
						<button type="submit" class="btn btn-primary">
							@lang('app.filter')
						</button>
					</div>

			</div>
			</form>


			<div class="box box-primary">
				<div class="box-header with-border">
					<h3 class="box-title">@lang('app.users')</h3>
					<div class="pull-right box-tools">
					@if(auth()->user()->hasRole('agent'))
						<a href="{{ route('backend.user.create') }}" class="btn btn-block btn-primary hidden btn-sm">@lang('app.add')</a>
					@elseif(auth()->user()->hasRole('distributor'))
					    <a href="{{ route('backend.user.create') }}" class="btn btn-block btn-primary hidden btn-sm">@lang('app.add')</a>
					@elseif(auth()->user()->hasRole('manager'))
					    <a href="{{ route('backend.user.create') }}" class="btn btn-block btn-primary hidden btn-sm">@lang('app.add')</a>
					@elseif(auth()->user()->hasRole('cashier'))
					    <a href="{{ route('backend.user.create') }}" class="btn btn-block btn-primary hidden btn-sm">@lang('app.add')</a>
						@else		
			            
					    <a href="{{ route('backend.user.create') }}" class="btn btn-block btn-primary btn-sm">@lang('app.add')</a>
		                
						@endif
						
					</div>
				</div>
				<div class="box-body">
					<div class="table-responsive">
						<table class="table table-bordered table-striped">
							<thead>
							<tr>
								<th>@lang('app.username')</th>
								@if(auth()->user()->hasRole('admin'))
								<th>Log In</th>
							    @endif

								<th>ticket</th>
								<th>@lang('app.balance')</th>

							
								<th>@lang('app.refund')</th>

                                @if(auth()->user()->hasRole('distributor'))
								
							    @elseif(auth()->user()->hasRole('manager'))
								
							    @else
								<th>@lang('app.pay_in')</th>
								<th>@lang('app.pay_out')</th>
                                @endif
	                             
							</tr>
							</thead>
							<tbody>
							@if (count($users))
								@foreach ($users as $user)
									@include('backend.user.partials.row')
								@endforeach
							@else
								<tr><td colspan="15">@lang('app.no_data')</td></tr>
							@endif
							</tbody>
							<thead>
							<tr>
								<th>@lang('app.username')</th>
								@if(auth()->user()->hasRole('admin'))
								<th>Log In</th>
							    @endif

								<th>ticket</th>
								<th>@lang('app.balance')</th>

							
								<th>@lang('app.refund')</th>
                                @if(auth()->user()->hasRole('distributor'))
								
							    @elseif(auth()->user()->hasRole('manager'))
								
							    @else
								<th>@lang('app.pay_in')</th>
								<th>@lang('app.pay_out')</th>
                                @endif



							</tr>
							</thead>
						</table>
					</div>
					{{ $users->appends(Request::except('page'))->links() }}
				</div>
			</div>
	</section>

		@include('backend.user.partials.modals')

@stop

@section('scripts')
	<script>

		$(function() {

			$('.btn-box-tool').click(function(event){
				if( $('.users_show').hasClass('collapsed-box') ){
					$.cookie('users_show', '1');
				} else {
					$.removeCookie('users_show');
				}
			});

			if( $.cookie('users_show') ){
				$('.users_show').removeClass('collapsed-box');
				$('.users_show .btn-box-tool i').removeClass('fa-plus').addClass('fa-minus');
			}

			$("#view").change(function () {
				$("#shops-form").submit();
			});

			$("#filter").detach().appendTo("div.toolbar");


			$("#status").change(function () {
				$("#users-form").submit();
			});
			$("#role").change(function () {
				$("#users-form").submit();
			});
			$('.addPayment').click(function(event){
				if( $(event.target).is('.newPayment') ){
					var id = $(event.target).attr('data-id');
				}else{
					var id = $(event.target).parents('.newPayment').attr('data-id');
				}
				$('#AddId').val(id);

			});

			$('.outPayment').click(function(event){
				if( $(event.target).is('.newPayment') ){
					var id = $(event.target).attr('data-id');
				}else{
					var id = $(event.target).parents('.newPayment').attr('data-id');
				}
				$('#OutId').val(id);
				$('#outAll').val('');
			});

			$('#doOutAll').click(function () {
				$('#outAll').val('1');
				$('form#outForm').submit();
			});




			setInterval(function() {
				$.getJSON(' {{ route('backend.user.balance.get') }} ', function(data) {
					for (var key in data) {
						$('.balance_' + key).html(data[key].balance);
						$('.bonus_' + key).html(data[key].bonus);
						$('.wager_' + key).html(data[key].wager);
					};
				});
			}, 3000);


		});

	</script>
@stop
