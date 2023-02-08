
@extends('backend.layouts.app')

@section('page-title', trans('app.games'))
@section('page-heading', trans('app.games'))

@section('content')

    <section class="content-header">
        @include('backend.partials.messages')
    </section>

    <section class="content">

        <div class="box box-primary">
            <div class="box-header with-border">
                <h3 class="box-title">@lang('app.game_update')</h3>
            </div>
            <div class="box-body">
                <div class="row">

                    <form action="{{ route('backend.game.categories') }}" method="POST" class="pb-2 mb-3 border-bottom-light" id="massForm">

                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="change_category">@lang('app.add_or_change')</label>
                                <select name="action" class="form-control" id="massAction">
                                    <option value="change_values">---</option>
                                    <option value="add_category">@lang('app.add_in_categories')</option>
                                    <option value="change_category">@lang('app.change_categories')</option>
                                    <option value="delete_games">@lang('app.delete_games')</option>
                                    <option value="stay_games">@lang('app.stay_games')</option>
                                </select>
                            </div>
                        </div>

                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="device">@lang('app.categories')</label>
                                <select name="category[]" id="category" class="form-control select2" multiple="multiple" style="width: 100%;" >
                                    @foreach ($categories as $key=>$category)
                                        <option value="{{ $category->id }}" >{{ $category->title }}</option>
                                        @foreach ($category->inner as $inner)
                                            <option value="{{ $inner->id }}">{{ $inner->title }}</option>
                                        @endforeach
                                    @endforeach
                                </select>
                            </div>
                        </div>

                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="games">@lang('app.games_list')</label>
                                <textarea id="games" name="games" class="form-control" rows="5"></textarea>
                            </div>
                        </div>

                </div>

                <div class="row">


                    
                   

                   

               


                <div class="row">
                    <div class="col-md-12">
                        <input type="hidden" value="<?= csrf_token() ?>" name="_token">
                        <input type="hidden" value="{{ implode(',', $ids) }}" name="ids">
                        <input type="hidden" value="0" name="all_shops" id="all_shops">
                        <button type="submit" class="btn btn-primary">
                            @lang('app.update')
                        </button>

                        @if(auth()->user()->hasRole('admin') && auth()->user()->shop_id == 0)
                            <button type="button" class="btn btn-primary" id="updateAllShops">
                                Update All Shops
                            </button>
                        @endif

                        <button type="button" class="btn btn-danger" id="massDelete">
                            @lang('app.delete')
                        </button>


                        <button type="button" class="btn btn-danger" id="massStay">
                            @lang('app.stay_games')
                        </button>



                    </div>
                </div>
                </form>
            </div>
        </div>

    </section>



@stop

@section('scripts')
    <script>
        $('#massDelete').click(function(){
            $('#massAction option[value="delete_games"]').prop('selected', true);

            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                    confirmButton: 'btn btn-primary',
                    cancelButton: 'btn btn-secondary'
                },
                buttonsStyling: false
            })

            swalWithBootstrapButtons.fire({
                title: "@lang('app.please_confirm')",
                html: "@lang('app.are_you_sure_delete_game')",
                showCloseButton: true,
                showCancelButton: true,
                focusConfirm: false,
                focusCancel: false,
                reverseButtons: true,
                position: 'top-start',
                confirmButtonText: "@lang('app.yes_delete_him')",
            }).then(function (t) {
                $('form#massForm').submit();
            });

        });


        $('#massStay').click(function(){
            $('#massAction option[value="stay_games"]').prop('selected', true);

            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                    confirmButton: 'btn btn-primary',
                    cancelButton: 'btn btn-secondary'
                },
                buttonsStyling: false
            })

            swalWithBootstrapButtons.fire({
                title: "@lang('app.please_confirm')",
                html: "@lang('app.are_you_sure_delete_game')",
                showCloseButton: true,
                showCancelButton: true,
                focusConfirm: false,
                focusCancel: false,
                reverseButtons: true,
                position: 'top-start',
                confirmButtonText: "@lang('app.yes_i_do')",
            }).then(function (t) {
                $('form#massForm').submit();
            });

        });

        $('#updateAllShops').click(function(){
            $('#all_shops').val('1');
            $('form#massForm').submit();
        });
    </script>
@stop