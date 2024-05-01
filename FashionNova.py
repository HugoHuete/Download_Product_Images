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

from Helpers.Helpers import convert_webp_to_png, go_to_url


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

    for sku, name, url in images:
        print(url)
        sleep(3)
        go_to_url(driver, url)        
        download_images(driver, name)
    
    driver.close()
    convert_webp_to_png()


def download_images(driver, image_name):
    sleep(2)
    try:
        driver.find_element(By.XPATH, f"/html/body/div[1]/div[1]/div[1]/form/button").click()        
    except:
        pass
                   
    miniatures = driver.find_elements(By.XPATH, f'//*[@id="product-slideshow__thumbnails"]/div')
    # Hover over miniatures to load all images
    counter = 0
    for miniature in miniatures:              
        miniature.click()
        driver.find_element(By.XPATH, f'//*[@id="MainContent"]/div[1]/div[1]/div/div/div[3]/div[{counter + 1}]').click() # Click to full image
        close_button = driver.find_element(By.XPATH, f"/html/body/div[14]/div[2]/div[2]/div/button[1]")

        image_xpath = f"/html/body/div[14]/div[2]/div[1]/div[2]/div/img"

        full_image_url = driver.find_element(By.XPATH, image_xpath).get_attribute("src")
        full_name = 'images\\' + image_name + ' (' + str(counter) + ').webp'
        urllib.request.urlretrieve(full_image_url, full_name)
        counter += 1

        ActionChains(driver).move_to_element(close_button).perform() # Close butto n
        close_button.click()





if __name__ == '__main__':
    main()



