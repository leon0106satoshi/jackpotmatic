@extends('backend.layouts.app')

@section('page-title', trans('app.general_settings'))
@section('page-heading', trans('app.general_settings'))

@section('content')

    <section class="content-header">
        @include('backend.partials.messages')
    </section>

    <section class="content">

        <div class="box box-default">
            {!! Form::open(['route' => ['backend.settings.list.update', 'banks'], 'id' => 'general-settings-form']) !!}
            <div class="box-header with-border">
                <h3 class="box-title">@lang('app.general_settings')</h3>
            </div>

            <div class="box-body">
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label>Slots</label>
                            <input type="number" step="0.0000001" class="form-control" name="default_slots" value="{{ settings('default_slots', 0) }}">
                        </div>
                       
                        <div class="form-group">
                            <label>Bonus</label>
                            <input type="number" step="0.0000001" class="form-control" name="default_bonus" value="{{ settings('default_bonus', 0) }}">
                        </div>
                    </div>
                </div>
            </div>

            <div class="box-footer">
                <button type="submit" class="btn btn-primary">
                    @lang('app.edit_settings')
                </button>



            </div>
            {{ Form::close() }}
        </div>
    </section>

@stop
