<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        DB::table('users')->insert([
            [
                'name' => 'Elie',
                'email' => 'elie@gmail.com',
                'avatar' => 'user/default.png',
                'email_verified_at' => date('Y-m-d H:i:s'),
                'password' => Hash::make('elie')
            ],
            [
                'name' => 'valloys',
                'email' => 'valloys@gmail.com',
                'avatar' => 'user/default.png',
                'email_verified_at' => date('Y-m-d H:i:s'),
                'password' => Hash::make('valloys')
               
            ]
        ]);

       
    }
}
