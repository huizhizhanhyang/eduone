@extends('master')

@section('content')

<header>
	<h1>Create New Branch</h1>
</header>

{!! Form::open(['url' => 'branches', 'class' => 'form-horizontal']) !!}
	@include('branches/_partials/form');
{!! Form::close() !!}
@endsection