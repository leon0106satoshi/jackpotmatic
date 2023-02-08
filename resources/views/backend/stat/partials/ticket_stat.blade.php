<tr>
    <td>{{$ticket->id}}</td>
    <td>{{$ticket->player_name}}</td>
    <td><span class="text-green">{{ number_format(floatval($ticket->ticket_amount), 2, '.', '') }}</span></td>
    <td>{{ $ticket->created_at }}</td>
</tr>