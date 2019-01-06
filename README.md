# Bubblifier
###### A desktop-oriented open-source bubble chart & histogram generator
###### Multimedia personal project for CSIE, BUES, 2018
#
The app is written in Vanilla JavaScript, using canvas, so no kind of deploying is necessary.
You only have to clone this repo, format your data using the following example and load it.
If you just want to see how the it works, [check it here](https://axbg.github.io/multimedia-time-series/)

# JSON structure
As you probably have guessed by now, the data is structured in the following manner using JSON.
```
{
   "title":"The title of the Bubble Chart",
   "firstParam":"Name of the first param (y)",
   "secondParam":"Name of the second param (x)",
   "thirdParam":"Name of the third param (bubble dimension)",
   "years":[
      {
         "year":2017,
         "countries":[
            {
               "name":"Your entity name",
               "color":"Bubble and bar color",
               "firstParam":first parameter value,
               "secondParam":second parameter value,
               "thirdParam":third parameter value
            }
         ]
      },
      {
         "year":2018,
         "countries":[
            {
               "name":"Romania",
               "color":"#FF7F0E",
               "firstParam":1.3,
               "secondParam":12.1,
               "thirdParam":4800
            }
         ]
      }
   ]
}
```
Logically, is not necessary for your entites to be countries, but the entities are called "countries" as a convention.

# Shortcuts
To make this mini-application a little fancier, I added some keyboard shortcuts for a faster navigation.
```
ESC - Returns to the main page by reloading
P - Pause/Resume the animation
R - Restart the animation
TAB - Alternate between Bubble Chart and Histogram panels
```
#
As I said in the beginning, this mini-application was created as a project for Uni so it's not meant to be sophisticated or complex.
Hope one day I'll improve the UI. 😁
