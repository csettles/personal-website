import os
from PIL import Image, ImageOps

THUMBNAIL_MAX_DIMENSIONS = (300,300)
GALLERY_PATH = '../public/images'

try: 
    os.mkdir(f'{GALLERY_PATH}/thumbnails') 
except OSError as error: 
    print(error)     

for img in os.listdir(GALLERY_PATH):
    if not img.endswith('.jpg'):
        continue
    filename = os.path.splitext(img)[0]
    with Image.open(f'{GALLERY_PATH}/{img}') as f:
        f = ImageOps.exif_transpose(f)
        f.thumbnail(THUMBNAIL_MAX_DIMENSIONS, resample=Image.Resampling.LANCZOS)
        f.save(f'{GALLERY_PATH}/thumbnails/{filename}-tmb.jpg', 'JPEG', subsampling=0, quality=95)
    
    # print out HTML needed for gallery
    print(f'<a href="gallery/{img}">')
    print(f'  <img class="img-responsive" alt="{filename}" src="gallery/thumbnails/{filename}-tmb.jpg" />')
    print('</a>')

