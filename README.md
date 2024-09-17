# File Upload Plugin

## Description

This plugin allows you to integrate a file upload feature with drag-and-drop support into your project. It also includes file preview functionality and file type and size validation.

## Features

- Drag-and-drop file upload support
- Image preview before upload
- Validation of accepted file types
- File size validation

## Installation
```
npm install file-upload-plugin-b

import 'file-upload-plugin-b/file-upload-plugin.js';
```
### Step 1: Add the plugin to your project

Copy the `file-upload-plugin.js` and `style.css` files to your project and include them in your HTML document:

```html
<link rel="stylesheet" href="style.css">
<script src="file-upload-plugin.js" defer></script>


```


### Step 2: Add HTML Code
```html
<div id="dropArea" class="drop-area">
    Drag files here or click to select
</div>
<div id="previewArea" class="preview-area"></div>
```


### Step 3: Initialize the Plugin

```javascript
 document.addEventListener('DOMContentLoaded', () => {
    new FileUpload('dropArea', 'previewArea', {
        maxFileSize: 5 * 1024 * 1024,  // Maximum file size - 5MB
        acceptedTypes: ['image/jpeg', 'image/png'],  // Accepted formats - JPEG and PNG
        onFileSelected: (file) => {
            console.log('File selected:', file.name);
        }
    });
});

```


### Options
- maxFileSize: Maximum file size in bytes (default 2MB).
- acceptedTypes: An array of accepted MIME file types.
- onFileSelected: A custom function that is triggered after a file is selected.



### How it Works?

1. **Drag-and-Drop**: The plugin supports file drag-and-drop into a dedicated area.
2. **Попередній перегляд**: After selecting or dragging files, images are automatically displayed in the preview area.
3. **Валідація файлів**: Files are validated before upload for acceptable types and size limits.

This is the entire content of the `README.md` file in one continuous section without interruptions.
