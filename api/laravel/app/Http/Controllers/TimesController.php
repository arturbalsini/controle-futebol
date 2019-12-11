<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Time;

class TimesController extends Controller
{
    public function index(){
        return Time::all();
    }

    public function store(Request $request){
        return Time::create($request->all());
    }

    public function update(Request $request, Time $time){
        $time->update($request->all());
        return $time;
    }

    public function show(Time $time){
        return $time;
    }

    public function destroy(Time $time){
        $time->delete();
        return Time::all();
    }
}
