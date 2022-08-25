<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use Illuminate\Support\Facades\Route;

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

Route::get('/login', [LoginController::class, 'create']);
Route::post('/login', [LoginController::class, 'store'])->name('login');
Route::post('/logout', [LoginController::class, 'destroy'])->middleware('auth');
Route::get('/register', [RegisterController::class, 'create']);

Route::inertia('/', 'Home');
Route::inertia('/events', 'Events');
Route::inertia('/customize', 'Customize');
Route::inertia('/about-us', 'AboutUs');
Route::inertia('/contact-us', 'ContactUs');
