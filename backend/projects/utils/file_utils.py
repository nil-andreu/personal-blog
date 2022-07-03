# Validation of the file extension
def validate_file_extension(value):
    import os
    from django.core.exceptions import ValidationError
    ext = os.path.splitext(value.name)[1]  # [0] returns path+filename
    valid_extensions = ['.pdf', '.doc', '.docx', '.jpg', '.png', '.xlsx', '.xls']
    if not ext.lower() in valid_extensions:
        raise ValidationError('Unsupported file extension.')

def upload_file(instance, filename):
    import os
    return os.path.join('documents', instance.title, filename)

def upload_image(instance, filename):
    import os
    return os.path.join('images', instance.title, filename)
