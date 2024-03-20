# Drag and Drop

**Requires css and javascript to be loaded**

    <script src="./js/dragAndDrop.js"></script>
    <link rel="stylesheet" href="./css/dragAndDrop.css">

## Plugin initialization & Function of callback

>You can find an example accessible from the "index.html" page

```javascript

//Callback Function Parameters:

// phpPathTarget: Path to the PHP file for server-side processing.
// filesPathTarget: Path to the directory where uploaded files will be stored.
// acceptFiles: Array specifying accepted file types.
// onSuccess: Callback function triggered upon successful upload.

    $gco("#draganddrop").draganddrop({
        phpPathTarget       : "./",
        filesPathTarget     : "../target/",
        acceptFiles         : [],
        onSuccess : function (response){
            console.log(response);
        }
    })
```

**List of accepted file types**

| Options | Type | Restrict file types |
| :---         |     :---:      |     :---:      |
| acceptFiles         : []  | String |  By default any type of file |


```html
<!-- Example :-->
<div id="draganddrop" class=" my-5"></div>
``` 


```javascript
/*Example :*/
$gco("#draganddrop").draganddrop({ 
        acceptFiles:['txt','csv']
    })
``` 

