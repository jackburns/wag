<?php namespace App;
  
use Illuminate\Database\Eloquent\Model;
  
class Dog extends Model
{
     public $timestamps = false;
     protected $fillable = ['name'];
     
}
?>