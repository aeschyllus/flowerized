<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'last_name' => 'Lapada',
            'first_name' => 'Mark Anthony',
            'email' => 'mark@mail.com',
            'password' => Hash::make('mark'),
            'is_admin' => false,
        ]);

        User::create([
            'last_name' => 'User',
            'first_name' => 'Admin',
            'email' => 'admin@mail.com',
            'password' => Hash::make('admin'),
            'is_admin' => true,
        ]);
    }
}
