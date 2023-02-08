@extends('backend.layouts.app')

@section('page-title', "Tickets")
@section('page-heading', "Tickets")

@section('content')

	<section class="content-header">
		@include('backend.partials.messages')
	</section>

	<section class="content">

		<form action="" method="GET">
			<div class="box box-danger collapsed-box shift_stat_show">
				<div class="box-header with-border">
					<h3 class="box-title">@lang('app.filter')</h3>
					<div class="box-tools pull-right">
						<button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-plus"></i></button>
					</div>
				</div>
				<div class="box-body">
					<div class="row">
						<div class="col-md-6">
							<div class="form-group">
								<label>@lang('app.user')</label>
								<input type="text" class="form-control" name="user" value="{{ Request::get('user') }}">
							</div>
						</div>
						<div class="col-md-3">
							<div class="form-group">
								<label>Ticket Amount</label>
								<input type="text" class="form-control" name="amount" value="{{ Request::get('amount') }}">
							</div>
						</div>
						<div class="col-md-3">
							<div class="form-group">
								<label>Ticket Number</label>
								<input type="text" class="form-control" name="number" value="{{ Request::get('number') }}">
							</div>
						</div>
						<div class="col-md-3">

							<div class="form-group">
								<label> @lang('app.date_start')</label>
								<div class="input-group">
									<button type="button" class="btn btn-default pull-right" id="daterange-btn">
									<span><i class="fa fa-calendar"></i> {{ Request::get('dates_view') ?: __('app.date_start_picker') }}</span>
										<i class="fa fa-caret-down"></i>
									</button>
								</div>
								<input type="hidden" id="dates_view" name="dates_view" value="{{ Request::get('dates_view') }}">
								<input type="hidden" id="dates" name="dates" value="{{ Request::get('dates') }}">
							</div>
						</div>
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
				<h3 class="box-title">Tickets</h3>
			</div>
			<div class="box-body">
				<div class="table-responsive">
					<table class="table table-bordered table-striped">
						<thead>
						<tr>
							<th>Ticket Number</th>
							<th>@lang('app.user')</th>
							<th>Amount</th>
							<th>@lang('app.date')</th>
						</tr>
						</thead>
						<tbody>
						@if (count($tickets))
							@foreach ($tickets as $ticket)
								@include('backend.stat.partials.ticket_stat')
							@endforeach
						@else
							<tr><td colspan="4">@lang('app.no_data')</td></tr>
						@endif
						</tbody>
						<thead>
							<tr>
								<th>Ticket Number</th>
								<th>@lang('app.user')</th>
								<th>Amount</th>
								<th>@lang('app.date')</th>
							</tr>
						</thead>
					</table>
				</div>


				@php
					$urlParams = '?';
					foreach(request()->all() AS $key=>$value){
						if($key != 'page'){
							$urlParams .= '&' . $key . '=' . $value;
						}
					}
				@endphp

				{!! \VanguardLTE\Lib\Pagination::paging($count, $perPage, $page, route('backend.ticket_stat').$urlParams, '&page', 9) !!}

			</div>
		</div>
	</section>

@stop

@section('scripts')
	<script>
		$(function() {
			$('#stat-table').dataTable();

			$('.btn-box-tool').click(function(event){
				if( $('.shift_stat_show').hasClass('collapsed-box') ){
					$.cookie('shift_stat_show', '1');
				} else {
					$.removeCookie('shift_stat_show');
				}
			});

			if( $.cookie('shift_stat_show') ){
				$('.shift_stat_show').removeClass('collapsed-box');
				$('.shift_stat_show .btn-box-tool i').removeClass('fa-plus').addClass('fa-minus');
			}
		});
	</script>
@stop
