from time import sleep
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.edge.options import Options

import pandas as pd
import urllib.request
from PIL import Image
from glob import glob
import os


def main():
    # Get urls of the items in x Shein order. Convert the data in a dictionery sku:name from the dataframe
    data =  pd.read_csv('image_links.csv', sep=';')
    data = data.to_dict('list')
    images = list(zip(data['sku'], data['name'], data['link']))

    edge_options = Options()
    edge_options.add_argument('--log-level=3')
    driver = webdriver.Edge(options=edge_options)
    driver.implicitly_wait(15)
    driver.maximize_window()

    coupon = True
    for sku, name, url in images:
        # Go to url and close coupon dialog
        go_to_url(driver, url)
        if coupon:        
            close_coupon_dialog(driver)
            coupon = False

        sleep(2)
        download_images(driver, name)

    driver.close()
    convert_webp_to_png()


def go_to_url(driver, url):
    while True:
        try:
            driver.get(url)
            break
        except:
            continue

def close_coupon_dialog(driver):          
    input()
    coupon = driver.find_elements(By.XPATH,' /html/body/div[1]/div[2]/div/div[1]/div/div/div[2]/div[2]/span')          
    coupon[0].click()

 

def download_images(driver, image_name):
    sleep(3)
    # Zoom image                         
    driver.find_element(By.XPATH, f' /html/body/div[1]/div[1]/div/div[1]/div/div[2]/div[1]/div/div[1]/div/div[2]/div[1]').click()        

    possible_div_numbers = [14, 16, 15, 17]
    for div_number in possible_div_numbers:                                           
        miniatures = driver.find_elements(By.XPATH, f'/html/body/div[{div_number}]/div/div/div[2]/div/div[1]/ul/li')
        if len(miniatures) > 0:
            break
    

    if len(miniatures) == 0:
        input('*****************Revisar que paso*****************')

    print(image_name + "\t div_number:" + str(div_number))

    # Hover over miniatures to load all images
    counter = 0
    for miniature in miniatures:
        hover = ActionChains(driver).move_to_element(miniature)
        hover.perform()                                  
        full_image_url = driver.find_element(By.XPATH, f'/html/body/div[{div_number}]/div/div/div[2]/div/div[2]/div[1]/img').get_attribute("src")
        full_name = 'images\\' + image_name +' (' + str(counter) + ').webp'

        urllib.request.urlretrieve(full_image_url, full_name)
        counter += 1

        sleep(1)                                   


def convert_webp_to_png():
    webp_images = glob("images/*.webp")
    for img in webp_images:
        converted_img_name = img.split(sep="\\")[1].split(sep=".webp")[0] + ".png"  # Extrae solamente en el nombre del archivo
        Image.open(img).convert("RGB").save("images\\" + converted_img_name,"png")
        os.remove(img)


if __name__ == '__main__':
    main()



