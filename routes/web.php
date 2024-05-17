<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RomanNumerals;

Route::get('/', function () {
    return view('welcome');
});

Route::post('/toRoman', [
    RomanNumerals::class, 
    'number_to_numerals'
]);

Route::post('/fromRoman', [
    RomanNumerals::class, 
    'numerals_to_number'
]);
