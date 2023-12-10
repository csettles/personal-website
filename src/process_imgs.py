import os
# from PIL import Image, ImageOps

# width by height
THUMBNAIL_MAX_DIMENSIONS = (300,3000)
GALLERY_PATH = '../public/gallery'

try: 
    os.mkdir(f'{GALLERY_PATH}/thumbnails') 
except OSError as error: 
    print(error)     

for img in os.listdir(GALLERY_PATH):
    if not img.endswith('.jpg'):
        continue
    filename = os.path.splitext(img)[0]
    # with Image.open(f'{GALLERY_PATH}/{img}') as f:
    #     width, height = f.size
        # f = ImageOps.exif_transpose(f)
        # f.thumbnail(THUMBNAIL_MAX_DIMENSIONS, resample=Image.Resampling.LANCZOS)
        # f.save(f'{GALLERY_PATH}/thumbnails/{filename}-tmb.jpg', 'JPEG', subsampling=0, quality=95)
    
    # print out HTML needed for gallery
    print(f'{{src: "gallery/{img}", alt: "{filename}"}},')

