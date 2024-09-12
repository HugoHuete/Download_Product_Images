from PIL import Image
from glob import glob
import os

webp_images = glob("images/*.webp")
for img in webp_images:
    converted_img_name = img.split(sep="\\")[1].split(sep=".webp")[0] + ".png"  # Extrae solamente en el nombre del archivo
    Image.open(img).convert("RGB").save("images\\" + converted_img_name,"png")
    os.remove(img)