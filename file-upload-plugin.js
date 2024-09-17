class FileUpload {
    constructor(dropAreaId, previewAreaId, options = {}) {
      this.dropArea = document.getElementById(dropAreaId);
      this.previewArea = document.getElementById(previewAreaId);
      this.options = Object.assign({
        maxFileSize: 2 * 1024 * 1024,  // Максимальний розмір файлу (2MB)
        acceptedTypes: ['image/jpeg', 'image/png', 'image/gif'],  // Допустимі типи файлів
        onFileSelected: null,  // Кастомна функція, що викликається після вибору файлу
      }, options);
  
      this.init();
    }
  
    init() {
      this.dropArea.addEventListener('dragover', this.handleDragOver.bind(this), false);
      this.dropArea.addEventListener('drop', this.handleDrop.bind(this), false);
      this.dropArea.addEventListener('click', () => this.fileInput.click());
  
      this.fileInput = document.createElement('input');
      this.fileInput.type = 'file';
      this.fileInput.style.display = 'none';
      this.fileInput.addEventListener('change', this.handleFileSelect.bind(this));
      this.dropArea.appendChild(this.fileInput);
    }
  
    handleDragOver(event) {
      event.preventDefault();
      this.dropArea.classList.add('dragging');
    }
  
    handleDrop(event) {
      event.preventDefault();
      this.dropArea.classList.remove('dragging');
      const files = event.dataTransfer.files;
      this.processFiles(files);
    }
  
    handleFileSelect(event) {
      const files = event.target.files;
      this.processFiles(files);
    }
  
    processFiles(files) {
      Array.from(files).forEach(file => {
        if (!this.validateFile(file)) {
          alert(`Файл ${file.name} не відповідає вимогам.`);
          return;
        }
  
        this.displayPreview(file);
  
        if (this.options.onFileSelected) {
          this.options.onFileSelected(file);
        }
      });
    }
  
    validateFile(file) {
      if (!this.options.acceptedTypes.includes(file.type)) {
        alert('Недопустимий тип файлу');
        return false;
      }
  
      if (file.size > this.options.maxFileSize) {
        alert('Файл занадто великий');
        return false;
      }
  
      return true;
    }
  
    displayPreview(file) {
      const reader = new FileReader();
      reader.onload = () => {
        const img = document.createElement('img');
        img.src = reader.result;
        img.classList.add('preview-image');
        this.previewArea.appendChild(img);
      };
      reader.readAsDataURL(file);
    }
  }
  