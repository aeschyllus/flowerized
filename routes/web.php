<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/events', function () {
    return Inertia::render('Events');
});

Route::get('/customize', function () {
    return Inertia::render('Customize');
});

Route::get('/about-us', function () {
    return Inertia::render('AboutUs');
});

Route::get('/contact-us', function () {
    return Inertia::render('ContactUs');
});
