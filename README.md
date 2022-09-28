# Drag and Drop

**Requires css and javascript to be loaded**

    <script src="./js/dragAndDrop.js"></script>
    <link rel="stylesheet" href="./css/dragAndDrop.css">

## Plugin initialization & Function of callback

>You can find an example accessible from the "index.html" page

```javascript
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

