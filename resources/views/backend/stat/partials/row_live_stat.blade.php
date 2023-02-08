<tr>
    <td>{!! $stat['Game'] !!}</td>
    <td>{!! $stat['User'] !!}</td>
    <td>{!! $stat['Balance'] !!}</td>
    <td>{!! $stat['Bet'] !!}</td>
    <td>{!! $stat['Win'] !!}</td>
    <td>{!! $stat['Slots'] !!}</td>
    <td>{!! $stat['Bonus'] !!}</td>
    <td>{!! $stat['Total_bank'] !!}</td>
    <td>{!! date(config('app.date_time_format'), $stat['Date']) !!}</td>
</tr>