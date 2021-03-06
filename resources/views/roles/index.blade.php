@extends('master')

@section('title', trans('app.roles_and_permissions'))
@section('main_title', trans('app.roles_and_permissions'))

@section('content')

<table class="table table-bordered table-condensed table-hover">
	<thead>
		<tr>
			<th>#</th>
			<th>{!! trans('app.role_name') !!}</th>
			<th>{!! trans('app.slug') !!}</th>
			<th>{!! trans('app.count') !!}</th>
			<th>{!! trans('app.created_at') !!}</th>
		</tr>
	</thead>
	<tbody>
		@foreach ($roles as $role)
		<tr>
			<td>{{$role->id}}</td>
			<td><a href="/roles/{{$role->id}}">{!! $role->name !!}</a></td>
			<td><a href="/roles/{{$role->id}}">{!! $role->slug !!}</a></td>
			<td>{!! $role->count !!}</td>
			<td>{!! $role->created_at !!}</td>
		</tr>
		@endforeach
	</tbody>
</table>
@endsection