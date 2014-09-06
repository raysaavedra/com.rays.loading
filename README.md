#com.rays.loading
A simple loading widget that uses titanium's Activity Indicator.

##How to use the widget
* Download com.rays.loading
* Unzip the folder to your project(app/widgets/com.rays.loading)
* Add com.rays.loading as a dependency to your projects app/config.json
    ```javascript
    "dependencies": {
    	  "com.rays.loading": "1.0"
    }
    ```

* Create a global instance to access the loading widget anywhere in your project:
    ```javascript
      Alloy.Globals.loading = Alloy.createWidget("com.rays.loading")
    ```

* Initialize the loading widget(provide your main window as parameter):
    ```javascript
      Alloy.Globals.loading.init($.index); //wherein $.index is your main window
      
      or
      
      var win = Ti.UI.createWindow({
                backgroundColor : '#fff',
            });
      win.open();
      
      Alloy.Globals.loading.init(win); //wherein win is your main window
    ```

* You can now start the loading widget
  ```javascript
      Alloy.Globals.loading.start();
  ```
  
* and stop it anywhere you want
  ```javascript
      Alloy.Globals.loading.stop();
  ```
  
* Provide custom messages on your loading screen
  ```javascript
      Alloy.Globals.loading.start("Your Message");
  ```

##Screenshot
iOS Sample

![iOS Loading Sample](https://raw.githubusercontent.com/raysaavedra/com.rays.loading/master/docs/ios.png)

Android Sample

![Android Loading Sample](https://raw.githubusercontent.com/raysaavedra/com.rays.loading/master/docs/android.png)


##License
Copyright 2014 Ray Saavedra

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
