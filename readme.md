<a alt="feedback" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSe0pD5cZW3_vdXUX3zt0HjyNxU0rABNb45XLXty3rAozL6Ryg/viewform?usp=pp_url&entry.1329444951=Functions,+callbacks,+methods+(instructions)">
  Send feedback
</a>

# Functions, callbacks, methods, calculated props

## Functions

 - `let user = {}; user();` output?
 - is an object with internal `[[code]]` property - just a text (`log(PI)` but not `log(3.14)`)
    ```javascript
    let PI = 3.14;
    
    function f() {
      console.log(PI);
    }
    ```
 - You can add `()` to any expression (variable, literal, ...)
 - `[]` or `.` also can be added to any expr
 - Will it work `(f)()`?
 - `(1 && f)()` output? 
 - `(function(){ console.log(123) })()` output? 
 - A function accepts arguments (params) and returns a value `f(a, b) { console.log(a, b) }`
   - extra arguments `f(1, 2, 3, 4)`. Output?
   - Lack of arguments `f()`. Output?


## Callbacks

 - `test(print)` output?
    ```javascript
    function print(x) {
      console.log(x);
    }
    
    function test(f) {
      f();
    }
    ``` 
 - if I add `return 123;` to `test` output?
 - how to change `test` so `print` puts 123 in the console?
 - Callback - is a function given as a parameter to another function
 - output?
    ```javascript
    test(function(y) {
      console.log(y);
    });
    ```
    
### Callbacks inner
 - if I add `return 123;` to `test` output?
 - how to change `test` so `print` puts 123 in the console?
 - Callback - is a function given as a parameter to another function
 - output?
    ```javascript
    test(function(y) {
      console.log(y);
    });
    ```
    
#### Inner content
Errem complectitur eos et. Tale suas ea pro, mea elit dicunt repudiandae in. Modo minimum verterem sea no, ut cum elitr partiendo neglegentur, vel ei dolorem nostrum. Ut quem tollit consul vix, at mei elit diceret postulant. His error tation oblique ex. Eam an prima sententiae argumentum.
* sententiae argumentum.
* sententiae argumentum.
   * sententiae argumentum.
     * sententiae argumentum.
     
#### Inner content
Errem complectitur eos et. Tale suas ea pro, mea elit dicunt repudiandae in. Modo minimum verterem sea no, ut cum elitr partiendo neglegentur, vel ei dolorem nostrum. Ut quem tollit consul vix, at mei elit diceret postulant. His error tation oblique ex. Eam an prima sententiae argumentum.
* sententiae argumentum.
* sententiae argumentum.
   * sententiae argumentum.
     * sententiae argumentum.
     
##### Super nested
Errem complectitur eos et. Tale suas ea pro, mea elit dicunt repudiandae in. Modo minimum verterem sea no, ut cum elitr partiendo neglegentur, vel ei dolorem nostrum. Ut quem tollit consul vix, at mei elit diceret postulant. His error tation oblique ex. Eam an prima sententiae argumentum.
* sententiae argumentum.
* sententiae argumentum.
   * sententiae argumentum.
     * sententiae argumentum.
     
##### Super nested
Errem complectitur eos et. Tale suas ea pro, mea elit dicunt repudiandae in. Modo minimum verterem sea no, ut cum elitr partiendo neglegentur, vel ei dolorem nostrum. Ut quem tollit consul vix, at mei elit diceret postulant. His error tation oblique ex. Eam an prima sententiae argumentum.
* sententiae argumentum.
* sententiae argumentum.
   * sententiae argumentum.
     * sententiae argumentum.
     
     
#### Inner content
Errem complectitur eos et. Tale suas ea pro, mea elit dicunt repudiandae in. Modo minimum verterem sea no, ut cum elitr partiendo neglegentur, vel ei dolorem nostrum. Ut quem tollit consul vix, at mei elit diceret postulant. His error tation oblique ex. Eam an prima sententiae argumentum.
* sententiae argumentum.
* sententiae argumentum.
   * sententiae argumentum.
     * sententiae argumentum.
     

       
    
### Callbacks inner
 - if I add `return 123;` to `test` output?
 - how to change `test` so `print` puts 123 in the console?
 - Callback - is a function given as a parameter to another function
 - output?
    ```javascript
    test(function(y) {
      console.log(y);
    });
    ```
#### Inner content
Errem complectitur eos et. Tale suas ea pro, mea elit dicunt repudiandae in. Modo minimum verterem sea no, ut cum elitr partiendo neglegentur, vel ei dolorem nostrum. Ut quem tollit consul vix, at mei elit diceret postulant. His error tation oblique ex. Eam an prima sententiae argumentum.
* sententiae argumentum.
* sententiae argumentum.
   * sententiae argumentum.
     * sententiae argumentum.
     
#### Inner content
Errem complectitur eos et. Tale suas ea pro, mea elit dicunt repudiandae in. Modo minimum verterem sea no, ut cum elitr partiendo neglegentur, vel ei dolorem nostrum. Ut quem tollit consul vix, at mei elit diceret postulant. His error tation oblique ex. Eam an prima sententiae argumentum.
* sententiae argumentum.
* sententiae argumentum.
   * sententiae argumentum.
     * sententiae argumentum.
     
##### Super nested
Errem complectitur eos et. Tale suas ea pro, mea elit dicunt repudiandae in. Modo minimum verterem sea no, ut cum elitr partiendo neglegentur, vel ei dolorem nostrum. Ut quem tollit consul vix, at mei elit diceret postulant. His error tation oblique ex. Eam an prima sententiae argumentum.
* sententiae argumentum.
* sententiae argumentum.
* sententiae argumentum.
  * sententiae argumentum.
  
###### Nested inside nested
Errem complectitur eos et. Tale suas ea pro, mea elit dicunt repudiandae in. Modo minimum verterem sea no, ut cum elitr partiendo neglegentur, vel ei dolorem nostrum. Ut quem tollit consul vix, at mei elit diceret postulant. His error tation oblique ex. Eam an prima sententiae argumentum.
* sententiae argumentum.
* sententiae argumentum.
* sententiae argumentum.
  * sententiae argumentum.
  
###### Nested inside nested
Errem complectitur eos et. Tale suas ea pro, mea elit dicunt repudiandae in. Modo minimum verterem sea no, ut cum elitr partiendo neglegentur, vel ei dolorem nostrum. Ut quem tollit consul vix, at mei elit diceret postulant. His error tation oblique ex. Eam an prima sententiae argumentum.
* sententiae argumentum.
* sententiae argumentum.
* sententiae argumentum.
  * sententiae argumentum.
  
  
##### Super nested
Errem complectitur eos et. Tale suas ea pro, mea elit dicunt repudiandae in. Modo minimum verterem sea no, ut cum elitr partiendo neglegentur, vel ei dolorem nostrum. Ut quem tollit consul vix, at mei elit diceret postulant. His error tation oblique ex. Eam an prima sententiae argumentum.
* sententiae argumentum.
* sententiae argumentum.
* sententiae argumentum.
  * sententiae argumentum.
  
        

## Methods

 - Method is a prop containing a link to a function at the moment
 - `method() { ... }` instead of `method: function() {}`
 - output?
    ```javascript
    let user = {
      firstName: 'Misha',
      lastName: 'Hrynko',
     
      fullName: 'Misha Hrynko', // (1)
    };
    
    user.firstName = 'Petya';
    
    console.log(
      user.fullName // (2)
    );
    ``` 
 - What to change in (1) and (2) to see actual values
 - if I change `fullName: user.firsName + user.lastName` output?
   - `user` variable is not available in right side of `=`
 - `fullName: function() { return user.firstName + ' ' + user.lastName; }`
 - what's the correct name for the method?
 - You can use `this` in the method
    ```javascript
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
    
    console.log(
      user.getFullName()
    );
    ```


## Calculated properties

 - `get fullName() { }`
 - Output?
    ```javascript
    user.fullName = 'Misha Grinko';
    
    console.log(user.fullName);
    ```
 - how to fix prev example?
 - `set lastName(value) {}` - show how to control the changes
    ```javascript
    let user = {
      // ...
      
      set fullName(value) {
        if (typeof value !== 'string') {
          return;
        }
    
        let parts = value.split(' ');
    
        if (parts.length !== 2) {
          return;
        }
    
        if (parts[0].length >= 2) {
          this.firstName = parts[0];
        }
      },
    };
    
    user.fullName = 'John Smith';
    console.log(user.fullName);
    ```
 - Just to ensure! Output?
    ```javascript
    let user = {
      firstName: 'Misha',
      lastName: 'Hrynko',
    
      get fullName() {
        return user.firstName + ' ' + user.lastName;
      },
    
      set fullName(value) {
        this.lastName = value; // we change only lastName 
      },
    };
    
    user.fullName = 'Petya Ivanov';
    
    console.log(
      user.fullName // (???)
    )
    ```

<<script type="text/javascript" src="assets/js/main.js"></script>