
<div class="row">

    @if(!$edit || ($edit && auth()->user()->hasPermission('shops.title')))
    <div class="col-md-6">
        <div class="form-group">
            <label>@lang('app.title')</label>
            <input type="text" class="form-control" id="title" name="name" placeholder="@lang('app.title')" required value="{{ $edit ? $shop->name : old('name') }}">
        </div>
    </div>
    @endif

    @if(!$edit || ($edit && auth()->user()->hasPermission('shops.percent')))
    <div class="col-md-6">
        <div class="form-group">
            <label>@lang('app.percent')</label>
            @php
                $percents = array_combine(\VanguardLTE\Shop::$values['percent'], \VanguardLTE\Shop::$values['percent_labels']);
            @endphp
            {!! Form::select('percent', \VanguardLTE\Shop::$values['percent_labels'], $edit ? $shop->percent : old('percent')?:'90', ['class' => 'form-control']) !!}
        </div>
    </div>
    @endif

    @if(!$edit || ($edit && auth()->user()->hasPermission('shops.frontend')))
    <div class="col-md-6">
        <div class="form-group">
            <label> @lang('app.frontend')</label>
            {!! Form::select('frontend', $directories, $edit ? $shop->frontend : old('frontend')?:'Default', ['class' => 'form-control']) !!}
        </div>
    </div>
    @endif



    @if(!$edit || ($edit && auth()->user()->hasPermission('shops.order')))
    <div class="col-md-6">
        <div class="form-group">
            <label> @lang('app.order')</label>
            @php
                $orders = array_combine(\VanguardLTE\Shop::$values['orderby'], \VanguardLTE\Shop::$values['orderby']);
            @endphp
            {!! Form::select('orderby', $orders, $edit ? $shop->orderby : old('orderby'), ['class' => 'form-control']) !!}
        </div>
    </div>
    @endif

    @if(!$edit || ($edit && auth()->user()->hasPermission('shops.currency')))
    <div class="col-md-6">
        <div class="form-group">
            <label> @lang('app.currency')</label>
            @php
                $currencies = array_combine(\VanguardLTE\Shop::$values['currency'], \VanguardLTE\Shop::$values['currency']);
            @endphp
            {!! Form::select('currency', $currencies, $edit ? $shop->currency : old('currency')?:'USD', ['class' => 'form-control']) !!}
        </div>
    </div>
    @endif

    <div class="col-md-6">
        <div class="form-group">
            <label for="device"> @lang('app.categories')</label>
            <select class="form-control select2" name=""  multiple="multiple" style="width: 100%;" required>
                <option value="0" >Jackpotmatic</option>
               
            </select>
        </div>
    </div>

    @if(!$edit || ($edit && auth()->user()->hasPermission('shops.max_win')))
    <div class="col-md-6">
        <div class="form-group">
            <label>@lang('app.max_win')</label>
            @php
                $max_win = array_combine(\VanguardLTE\Shop::$values['max_win'], \VanguardLTE\Shop::$values['max_win']);
            @endphp
            {!! Form::select('max_win', $max_win, $edit ? $shop->max_win : old('max_win')?:'100', ['class' => 'form-control']) !!}
        </div>
    </div>
    @endif

    @if(!$edit || ($edit && auth()->user()->hasRole('admin')))
    <div class="col-md-6">
        <div class="form-group">
            <label>@lang('app.shop_limit')</label>
            @php
                $shop_limits = array_combine(\VanguardLTE\Shop::$values['shop_limit'], \VanguardLTE\Shop::$values['shop_limit']);
            @endphp
            {!! Form::select('shop_limit', $shop_limits, $edit ? $shop->shop_limit : old('shop_limit')?:'200', ['class' => 'form-control']) !!}
        </div>
    </div>
    @endif

    @if(!$edit || ($edit && auth()->user()->hasPermission('shops.access')))
    <div class="col-md-6">
        <div class="form-group">
            <label> @lang('app.access')</label>
            {!! Form::select('access', [__('app.no'), __('app.yes')], $edit ? $shop->access : old('access')?:'', ['class' => 'form-control']) !!}
        </div>
    </div>
    @endif

    @if(!$edit || ($edit && auth()->user()->hasPermission('shops.country')))
    <div class="col-md-6">
        <div class="form-group">
            <label> @lang('app.country')</label>
            @php $countries = [
'Afghanistan',
'Albania',
'Algeria',
'American Samoa',
'Andorra',
'Angola',
'Anguilla',
'Antarctica',
'Antigua and Barbuda',
'Argentina',
'Armenia',
'Aruba',
'Australia',
'Austria',
'Azerbaijan',
'Bahamas',
'Bahrain',
'Bangladesh',
'Barbados',
'Belarus',
'Belgium',
'Belize',
'Benin',
'Bermuda',
'Bhutan',
'Bolivia',
'Bonaire, Sint Eustatius, and Saba',
'Bosnia and Herzegovina',
'Botswana',
'Bouvet Island',
'Brazil',
'British Indian Ocean Territory',
'British Virgin Islands',
'Brunei',
'Bulgaria',
'Burkina Faso',
'Burundi',
'Cabo Verde',
'Cambodia',
'Cameroon',
'Canada',
'Cayman Islands',
'Central African Republic',
'Chad',
'Chile',
'China',
'Christmas Island',
'Cocos [Keeling] Islands',
'Colombia',
'Comoros',
'Congo Republic',
'Cook Islands',
'Costa Rica',
'Croatia',
'Cuba',
'Curaçao',
'Cyprus',
'Czechia',
'DR Congo',
'Denmark',
'Djibouti',
'Dominica',
'Dominican Republic',
'East Timor',
'Ecuador',
'Egypt',
'El Salvador',
'Equatorial Guinea',
'Eritrea',
'Estonia',
'Eswatini',
'Ethiopia',
'Falkland Islands',
'Faroe Islands',
'Federated States of Micronesia',
'Fiji',
'Finland',
'France',
'French Guiana',
'French Polynesia',
'French Southern Territories',
'Gabon',
'Gambia',
'Georgia',
'Germany',
'Ghana',
'Gibraltar',
'Greece',
'Greenland',
'Grenada',
'Guadeloupe',
'Guam',
'Guatemala',
'Guernsey',
'Guinea',
'Guinea-Bissau',
'Guyana',
'Haiti',
'Hashemite Kingdom of Jordan',
'Heard Island and McDonald Islands',
'Honduras',
'Hong Kong',
'Hungary',
'Iceland',
'India',
'Indonesia',
'Iran',
'Iraq',
'Ireland',
'Isle of Man',
'Israel',
'Italy',
'Ivory Coast',
'Jamaica',
'Japan',
'Jersey',
'Kazakhstan',
'Kenya',
'Kiribati',
'Kosovo',
'Kuwait',
'Kyrgyzstan',
'Laos',
'Latvia',
'Lebanon',
'Lesotho',
'Liberia',
'Libya',
'Liechtenstein',
'Luxembourg',
'Macao',
'Madagascar',
'Malawi',
'Malaysia',
'Maldives',
'Mali',
'Malta',
'Marshall Islands',
'Martinique',
'Mauritania',
'Mauritius',
'Mayotte',
'Mexico',
'Monaco',
'Mongolia',
'Montenegro',
'Montserrat',
'Morocco',
'Mozambique',
'Myanmar',
'Namibia',
'Nauru',
'Nepal',
'Netherlands',
'New Caledonia',
'New Zealand',
'Nicaragua',
'Niger',
'Nigeria',
'Niue',
'Norfolk Island',
'North Korea',
'North Macedonia',
'Northern Mariana Islands',
'Norway',
'Oman',
'Pakistan',
'Palau',
'Palestine',
'Panama',
'Papua New Guinea',
'Paraguay',
'Peru',
'Philippines',
'Pitcairn Islands',
'Poland',
'Portugal',
'Puerto Rico',
'Qatar',
'Republic of Lithuania',
'Republic of Moldova',
'Romania',
'Russia',
'Rwanda',
'Réunion',
'Saint Barthélemy',
'Saint Helena',
'Saint Lucia',
'Saint Martin',
'Saint Pierre and Miquelon',
'Saint Vincent and the Grenadines',
'Samoa',
'San Marino',
'Saudi Arabia',
'Senegal',
'Serbia',
'Seychelles',
'Sierra Leone',
'Singapore',
'Sint Maarten',
'Slovakia',
'Slovenia',
'Solomon Islands',
'Somalia',
'South Africa',
'South Georgia and the South Sandwich Islands',
'South Korea',
'South Sudan',
'Spain',
'Sri Lanka',
'St Kitts and Nevis',
'Sudan',
'Suriname',
'Svalbard and Jan Mayen',
'Sweden',
'Switzerland',
'Syria',
'São Tomé and Príncipe',
'Taiwan',
'Tajikistan',
'Tanzania',
'Thailand',
'Togo',
'Tokelau',
'Tonga',
'Trinidad and Tobago',
'Tunisia',
'Turkey',
'Turkmenistan',
'Turks and Caicos Islands',
'Tuvalu',
'U.S. Minor Outlying Islands',
'U.S. Virgin Islands',
'Uganda',
'Ukraine',
'United Arab Emirates',
'United Kingdom',
'United States',
'Uruguay',
'Uzbekistan',
'Vanuatu',
'Vatican City',
'Venezuela',
'Vietnam',
'Wallis and Futuna',
'Western Sahara',
'Yemen',
'Zambia',
'Zimbabwe',
'Åland'
			]; @endphp
            {!! Form::select('country[]', array_combine($countries,$countries), $edit ? $shop->countries->pluck('country') : old('country'), ['class' => 'form-control select2', 'style' => 'width: 100%', 'multiple' => true]) !!}
        </div>
    </div>
    @endif



    @if(!$edit || ($edit && auth()->user()->hasPermission('shops.os')))
    <div class="col-md-6">
        <div class="form-group">
            <label> @lang('app.os')</label>
            @php $os = [
'Windows',
'iPad',
'iPhone',
'Mac OS X',
'Android',
'Linux',
			]; @endphp
            {!! Form::select('os[]', array_combine($os,$os), $edit ? $shop->oss->pluck('os') : old('os'), ['class' => 'form-control select2', 'style' => 'width: 100%', 'multiple' => true]) !!}
        </div>
    </div>
    @endif


    @if(!$edit || ($edit && auth()->user()->hasPermission('shops.device')))
    <div class="col-md-6">
        <div class="form-group">
            <label> @lang('app.device')</label>
            @php $devices = ['Computer','Mobile', 'Tablet']; @endphp
            {!! Form::select('device[]', array_combine($devices,$devices), $edit ? $shop->devices->pluck('device') : old('device'), ['class' => 'form-control select2', 'style' => 'width: 100%', 'multiple' => true]) !!}
        </div>
    </div>
    @endif

        
        
        
        


    @if($edit && count($blocks))
    <div class="col-md-6">
        <div class="form-group">
            <label for="device">
                @lang('app.status'):
                @if($shop->is_blocked)
                    @lang('app.block')
                @else
                    @lang('app.unblock')
                @endif
            </label>
            {!! Form::select('is_blocked', ['' => '---'] + $blocks, $edit ? $shop->is_blocked : old('is_blocked'), ['class' => 'form-control']) !!}
        </div>
    </div>
    @endif


    @if(isset($balance))
        <div class="col-md-6">
            <div class="form-group">
                <label>{{ trans('app.balance') }}</label>
                <input type="text" class="form-control" name="balance" value="{{ old('balance')?:0 }}">
            </div>
        </div>
    @endif  
</div>


