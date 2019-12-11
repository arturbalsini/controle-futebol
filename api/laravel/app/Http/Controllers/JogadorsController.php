<?php

namespace App\Http\Controllers;

use DB;
use App\Jogador;
use Illuminate\Http\Request;

class JogadorsController extends Controller
{
    public function index(){

        return DB::table('jogadors')
        ->select('jogadors.*', 'posicaos.descricao', 'posicaos.sigla', 'times.nome AS nome_time')
        ->join('posicaos','posicaos.id','=','jogadors.id_posicao')
        ->leftjoin('times','times.id','=','jogadors.id_time')
        ->get();
    }

    public function store(Request $request){
        return Jogador::create($request->all());
    }

    public function update(Request $request, Jogador $jogador){
        $jogador->update($request->all());
        return DB::table('jogadors')
        ->select('jogadors.*', 'posicaos.descricao', 'posicaos.sigla')
        ->join('posicaos','posicaos.id','=','jogadors.id_posicao')
        ->where('jogadors.id', '=', $jogador->id)
        ->get();
    }

    public function show(Jogador $jogador){
        return DB::table('jogadors')
        ->select('jogadors.*', 'posicaos.descricao', 'posicaos.sigla')
        ->join('posicaos','posicaos.id','=','jogadors.id_posicao')
        ->where('jogadors.id', '=', $jogador->id)
        ->get();
    }

    public function destroy(Jogador $jogador){
        $jogador->delete();
        return Jogador::all();
    }
}
