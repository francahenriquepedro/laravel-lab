<?php

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
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

/**
 * Admin routes
 */
Route::group([
    'as' => 'admin.',
    'prefix' => 'admin',
    'namespace' => 'admin',
    'middleware' => ['auth', 'admin']
],function(){
    Route::get('/', function () { return view('admin.home'); })->name('home');

    Route::resource('tag', 'TagController');
    Route::resource('category', 'CategoryController');
});
