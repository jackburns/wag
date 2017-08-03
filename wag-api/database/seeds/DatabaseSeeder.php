<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->call("DogsTableSeeder");
    }
}

class DogsTableSeeder extends Seeder
{
    public function run()
    {
        DB::table('dogs')->insert([
            ['name' => "American Cocker Spaniel"],
            ['name' => "American Eskimo"],
            ['name' => "Anatolian Shepherd"],
            ['name' => "Australian Cattle Dog Mix"],
            ['name' => "Australian Kelpie"],
            ['name' => "Basset Hound"],
            ['name' => "Basset Hound Mix"],
            ['name' => "Bernese"],
            ['name' => "Bernese Mountain Dog"],
            ['name' => "Blue Nose Pit"],
            ['name' => "Blue Nose Pitbull"],
            ['name' => "Boston"],
            ['name' => "Boston Terrier"],
            ['name' => "Briard"],
            ['name' => "Brittany"],
            ['name' => "Bully Pit"],
            ['name' => "Cairn"],
            ['name' => "Cattle Dog"],
            ['name' => "Cattle Dog Mix"],
            ['name' => "Chihuahua"],
            ['name' => "Chihuahua Dachshund"],
            ['name' => "Chiweenie"],
            ['name' => "Choc Lab"],
            ['name' => "Cocker Spaniel"],
            ['name' => "Cocker Spaniel Mix"],
            ['name' => "Coton De Tulear"],
            ['name' => "Dachshund"],
            ['name' => "Doberman Pinscher"],
            ['name' => "Dutch Shepherd"],
            ['name' => "English Bull Terrier"],
            ['name' => "English Springer Spaniel"],
            ['name' => "Frenchie"],
            ['name' => "Frenchton"],
            ['name' => "German Shepherd Mix"],
            ['name' => "German Sherpard"],
            ['name' => "Golden Retriever"],
            ['name' => "Golden Retriever Mix"],
            ['name' => "Greyhound Mix"],
            ['name' => "Hound Mix"],
            ['name' => "Husky"],
            ['name' => "Jack Russell"],
            ['name' => "Jack Russell Chihuahua"],
            ['name' => "Kelpie"],
            ['name' => "King Charles"],
            ['name' => "Lab Pit"],
            ['name' => "Labrador Retriever"],
            ['name' => "Lab Pit Mix"],
            ['name' => "Labrador Retriever Mix"],
            ['name' => "Long Haired Chihuahua"],
            ['name' => "Long Haired Dachshund"],
            ['name' => "Maltese Shih Tzu"],
            ['name' => "Maltese Terrier"],
            ['name' => "Min Pin Mix"],
            ['name' => "Mini Poodle"],
            ['name' => "Mini Poodle Mix"],
            ['name' => "Mix Breed"],
            ['name' => "Morkie"],
            ['name' => "Morkiepoo"],
            ['name' => "Old English Sheepdog"],
            ['name' => "Olde English Bulldogge"],
            ['name' => "Pincher"],
            ['name' => "Pit"],
            ['name' => "Pitbull Terrier Mix"],
            ['name' => "Pitsky"],
            ['name' => "Poochon"],
            ['name' => "Poodle"],
            ['name' => "Puppy"],
            ['name' => "Rhodesian Ridgeback Mix"],
            ['name' => "Queensland Heeler"],
            ['name' => "Ridgeback"],
            ['name' => "Schipperke"],
            ['name' => "Schnauzer"],
            ['name' => "Sheltie"],
            ['name' => "Sheltie Mix"],
            ['name' => "Shih Tzu Mix"],
            ['name' => "Shihtzu Maltese"],
            ['name' => "Silver Lab"],
            ['name' => "St Bernard"],
            ['name' => "Staffordshire"],
            ['name' => "Toy Australian Shepherd"],
            ['name' => "Toy Fox Terrier"],
            ['name' => "Weiner Dog"],
            ['name' => "Welsh Corgi"],
            ['name' => "Whippet Mix"],
            ['name' => "White German Shepherd"],
            ['name' => "Yorkie"],
            ['name' => "Yorkie Mix"]
        ]);
    }
}