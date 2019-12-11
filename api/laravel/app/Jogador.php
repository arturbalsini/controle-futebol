<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Jogador extends Model
{
    protected $fillable = ['nome', 'ataque', 'defesa', 'fisico', 'drible', 'chute', 'passe', 'id_posicao', 'id_time'];
}
